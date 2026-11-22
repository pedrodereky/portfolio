// Cloudflare Pages Function: POST /api/contato
// Recebe o formulário "Fale comigo" (kind: brief) e o "Achou um bug?" (kind: bug)
// e envia cada mensagem por e-mail via Resend (https://resend.com).
//
// Variáveis de ambiente (Cloudflare Pages → Settings → Variables and Secrets):
//   RESEND_API_KEY  (secret)  chave da API do Resend
//   CONTACT_TO                e-mail que recebe as mensagens
//   CONTACT_FROM   (opcional) remetente; sem domínio próprio use "Portfólio <onboarding@resend.dev>"

const LIMITS = { name: 100, contact: 200, message: 5000, field: 300, body: 4_000_000 };
const ORIGINS = [
  /^https:\/\/([a-z0-9-]+\.)?joaopedroguimaraes\.pages\.dev$/,
  /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/,
];
const EMAIL = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[a-z]{2,}$/i;
const IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

const text = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function rows(fields) {
  const filled = fields.filter(([, v]) => v);
  const html = filled
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top;white-space:nowrap">${escapeHtml(k)}</td>` +
        `<td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("");
  return {
    html: `<table style="font:15px/1.45 system-ui,sans-serif;border-collapse:collapse">${html}</table>`,
    text: filled.map(([k, v]) => `${k}: ${v}`).join("\n"),
  };
}

export function buildEmail(data) {
  const contact = text(data.contact, LIMITS.contact);
  const language = text(data.language, 8);
  if (data.kind === "brief") {
    const name = text(data.name, LIMITS.name);
    const message = text(data.message, LIMITS.message);
    if (name.length < 2 || !contact || message.length < 10) return null;
    const types = Array.isArray(data.types) ? data.types.map((t) => text(t, 60)).filter(Boolean).join(", ") : "";
    const body = rows([
      ["Nome", name],
      ["Contato", contact],
      ["Assunto", types],
      ["Início", text(data.budget, LIMITS.field)],
      ["Mensagem", message],
      ["Idioma", language],
      ["Página", text(data.page, LIMITS.field)],
    ]);
    return { subject: `Portfólio: mensagem de ${name}`, contact, ...body, attachments: [] };
  }
  if (data.kind === "bug") {
    const message = text(data.message, LIMITS.message);
    if (message.length < 3) return null;
    const body = rows([
      ["Problema", message],
      ["Contato", contact],
      ["Idioma", language],
      ["Página", text(data.url, LIMITS.field)],
      ["Navegador", text(data.userAgent, LIMITS.field)],
      ["Janela", text(data.viewport, 40)],
      ["Tela", text(data.screen, 40)],
    ]);
    const shot = data.screenshot;
    const attachments =
      shot && typeof shot.data === "string" && IMAGE_TYPES.has(shot.type) && /^[A-Za-z0-9+/=]+$/.test(shot.data)
        ? [{ filename: text(shot.name, 80).replace(/[^\w.-]/g, "_") || "captura.jpg", content: shot.data }]
        : [];
    return { subject: "Portfólio: relato de bug", contact, ...body, attachments };
  }
  return null;
}

export async function onRequestGet() {
  // as curtidas não têm contador no servidor
  return json({ ok: true, likes: null });
}

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("Origin") || "";
  if (!ORIGINS.some((r) => r.test(origin))) return json({ ok: false, error: "origin" }, 403);

  const raw = await request.text();
  if (raw.length > LIMITS.body) return json({ ok: false, error: "too-large" }, 413);
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "invalid" }, 400);
  }
  if (!data || typeof data !== "object") return json({ ok: false, error: "invalid" }, 400);

  if (data.kind === "like") return json({ ok: true, likes: null });
  if (data.company) return json({ ok: true }); // campo-armadilha preenchido: robô

  const email = buildEmail(data);
  if (!email) return json({ ok: false, error: "invalid" }, 400);
  if (!env.RESEND_API_KEY || !env.CONTACT_TO) return json({ ok: false, error: "not-configured" }, 503);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.CONTACT_FROM || "Portfólio <onboarding@resend.dev>",
      to: [env.CONTACT_TO],
      subject: email.subject,
      html: email.html,
      text: email.text,
      ...(EMAIL.test(email.contact) ? { reply_to: email.contact } : {}),
      ...(email.attachments.length ? { attachments: email.attachments } : {}),
    }),
  });
  if (!res.ok) {
    // devolve só o código do Resend (ex.: 401, 403 validation_error) para diagnóstico; nada da chave ou da mensagem
    const detail = await res.json().catch(() => ({}));
    console.error("Resend recusou o envio", res.status, detail.name, detail.message);
    return json({ ok: false, error: "send", status: res.status, reason: typeof detail.name === "string" ? detail.name : undefined }, 502);
  }
  return json({ ok: true });
}
