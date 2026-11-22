// Testa functions/api/contato.js sem rede: o fetch para o Resend é simulado.
import assert from "node:assert/strict";
import { onRequestPost, onRequestGet } from "../functions/api/contato.js";

const env = { RESEND_API_KEY: "re_teste", CONTACT_TO: "destino@example.com" };
const sent = [];
globalThis.fetch = async (url, init) => {
  sent.push({ url, body: JSON.parse(init.body), auth: init.headers.Authorization });
  return new Response("{}", { status: 200 });
};

const post = (body, { origin = "https://joaopedroguimaraes.pages.dev", e = env } = {}) =>
  onRequestPost({
    request: new Request("https://joaopedroguimaraes.pages.dev/api/contato", {
      method: "POST",
      headers: { Origin: origin, "Content-Type": "text/plain;charset=utf-8" },
      body: typeof body === "string" ? body : JSON.stringify(body),
    }),
    env: e,
  });
const read = async (r) => ({ status: r.status, body: await r.json() });

const brief = {
  kind: "brief",
  name: "Maria Recrutadora",
  contact: "maria@empresa.com",
  types: ["Vaga (CLT ou PJ)"],
  budget: "Imediato",
  message: "Olá! Temos uma vaga júnior de React.",
  language: "pt",
  source: "footer",
  page: "/",
  captcha: "",
};

// 1. mensagem válida vai para o Resend, com reply_to e escape de HTML
{
  const r = await read(await post({ ...brief, message: "Vaga <b>júnior</b> de React, 100% remoto." }));
  assert.deepEqual(r, { status: 200, body: { ok: true } });
  const m = sent.at(-1);
  assert.equal(m.url, "https://api.resend.com/emails");
  assert.equal(m.auth, "Bearer re_teste");
  assert.deepEqual(m.body.to, ["destino@example.com"]);
  assert.equal(m.body.reply_to, "maria@empresa.com");
  assert.match(m.body.subject, /Maria Recrutadora/);
  assert.match(m.body.html, /&lt;b&gt;júnior&lt;\/b&gt;/);
  assert.doesNotMatch(m.body.html, /<b>júnior/);
}

// 2. contato por telefone: sem reply_to
{
  await post({ ...brief, contact: "(61) 99999-9999" });
  assert.equal(sent.at(-1).body.reply_to, undefined);
}

// 3. origem de outro site é recusada
{
  const n = sent.length;
  const r = await read(await post(brief, { origin: "https://site-malicioso.com" }));
  assert.equal(r.status, 403);
  assert.equal(sent.length, n);
}

// 4. campo-armadilha preenchido: responde ok e não envia
{
  const n = sent.length;
  const r = await read(await post({ ...brief, company: "Spam Ltda" }));
  assert.deepEqual(r.body, { ok: true });
  assert.equal(sent.length, n);
}

// 5. dados inválidos e JSON quebrado
assert.equal((await post({ ...brief, message: "oi" })).status, 400);
assert.equal((await post("{quebrado")).status, 400);
assert.equal((await post({ kind: "outro" })).status, 400);

// 6. sem chave configurada: 503 not-configured (o site mostra a mensagem de e-mail direto)
{
  const r = await read(await post(brief, { e: {} }));
  assert.deepEqual(r, { status: 503, body: { ok: false, error: "not-configured" } });
}

// 7. bug com captura de tela vira anexo; tipo de arquivo estranho é ignorado
{
  await post({ kind: "bug", message: "O botão não abre", contact: "", language: "pt", url: "https://x/", screenshot: { name: "tela.jpg", type: "image/jpeg", data: "aGVsbG8=" } });
  assert.deepEqual(sent.at(-1).body.attachments, [{ filename: "tela.jpg", content: "aGVsbG8=" }]);
  await post({ kind: "bug", message: "O botão não abre", screenshot: { name: "x.exe", type: "application/x-msdownload", data: "aGVsbG8=" } });
  assert.equal(sent.at(-1).body.attachments, undefined);
}

// 8. curtidas: sem contador, sem envio
{
  const n = sent.length;
  assert.deepEqual((await read(await post({ kind: "like", id: "abc", language: "pt" }))).body, { ok: true, likes: null });
  assert.deepEqual((await read(await onRequestGet())).body, { ok: true, likes: null });
  assert.equal(sent.length, n);
}

// 9. erro do Resend vira 502
{
  globalThis.fetch = async () => new Response("{}", { status: 422 });
  assert.equal((await post(brief)).status, 502);
}

console.log("ok: função de contato");
