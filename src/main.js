import { tileSVG } from "./tiles.js";
import { Sound } from "./sound.js";

const SITE = window.SITE || {};
const AREAS = window.AREAS || {};
const PROJECTS = window.PROJECTS || [];
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const $ = (s, el = document) => el.querySelector(s);
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const NUM = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze"];

const email = (SITE.contato && SITE.contato.email) || "";
const demoHref = (p) =>
  email ? `mailto:${email}?subject=${encodeURIComponent("Demonstração: " + p.nome)}` : "#contato";

/* ───────── totais ───────── */
function fillTotals() {
  const totals = {
    projetos: PROJECTS.length,
    telas: PROJECTS.reduce((s, p) => s + (p.telas || 0), 0),
    funcoes: PROJECTS.reduce((s, p) => s + (p.funcoes || 0), 0),
  };
  const destaques = PROJECTS.filter((p) => p.destaque).length;
  document.querySelectorAll("[data-total]").forEach((el) => {
    const k = el.dataset.total;
    if (k === "destaques") {
      const word = NUM[destaques] || String(destaques);
      el.textContent = word.charAt(0).toUpperCase() + word.slice(1);
    } else if (k in totals) {
      el.textContent = totals[k].toLocaleString("pt-BR");
    }
  });
}

/* ───────── destaques ───────── */
function factsHTML(p) {
  const items = [
    ["Área", AREAS[p.area] || p.area],
    ["Telas", p.telas],
    ["Funções de back-end", p.funcoes],
  ];
  if (p.status) items.push(["Situação", p.status]);
  return `<dl class="facts">${items
    .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
    .join("")}</dl>`;
}
const stackHTML = (p) => `<ul class="stack" aria-label="Tecnologias">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`;

function actionsHTML(p) {
  const out = [];
  if (p.demo) out.push(`<a class="cta" href="${esc(p.demo)}" target="_blank" rel="noopener">Abrir a demonstração</a>`);
  else out.push(`<a class="cta" href="${demoHref(p)}">Pedir uma demonstração</a>`);
  if (p.repo) out.push(`<a class="cta secundario" href="${esc(p.repo)}" target="_blank" rel="noopener">Ver o código</a>`);
  return out.join("");
}

function renderSpreads() {
  const host = $("#spreads");
  host.innerHTML = PROJECTS.filter((p) => p.destaque)
    .map(
      (p) => `
      <article class="spread" id="p-${esc(p.id)}" aria-labelledby="t-${esc(p.id)}">
        <div class="spread-art">${tileSVG(p.id, 4)}</div>
        <div class="spread-body">
          <h3 class="spread-title" id="t-${esc(p.id)}">${esc(p.nome)}</h3>
          <p class="spread-resumo">${esc(p.resumo)}</p>
          <p class="spread-desc">${esc(p.descricao)}</p>
          ${factsHTML(p)}
          ${stackHTML(p)}
          <div class="spread-actions">${actionsHTML(p)}</div>
        </div>
      </article>`
    )
    .join("");
}

/* ───────── índice ───────── */
function renderIndex() {
  const list = $("#index-list");
  list.innerHTML = PROJECTS.map(
    (p) => `
    <li class="row" id="i-${esc(p.id)}" data-area="${esc(p.area)}">
      <button class="row-btn" type="button" aria-expanded="false" aria-controls="d-${esc(p.id)}">
        <span class="row-tile" aria-hidden="true">${tileSVG(p.id, 2, { grout: 0.08 })}</span>
        <span class="row-name">${esc(p.nome)}${p.status ? `<em>${esc(p.status.toLowerCase())}</em>` : ""}</span>
        <span class="row-area">${esc(AREAS[p.area] || p.area)}</span>
        <span class="row-n" aria-label="${p.telas} telas">${p.telas}</span>
        <span class="row-n" aria-label="${p.funcoes} funções de back-end">${p.funcoes}</span>
        <span class="row-n total" aria-hidden="true">${p.telas} telas<br>${p.funcoes} funções</span>
        <span class="row-toggle" aria-hidden="true"></span>
      </button>
      <div class="row-detail" id="d-${esc(p.id)}" hidden>
        <p class="resumo">${esc(p.resumo)}</p>
        <p class="desc">${esc(p.descricao)}</p>
        ${stackHTML(p)}
        <div class="row-actions">${p.destaque ? `<a class="cta secundario" href="#p-${esc(p.id)}">Ver em destaque</a>` : ""}${actionsHTML(p)}</div>
      </div>
    </li>`
  ).join("");

  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".row-btn");
    if (!btn) return;
    toggleRow(btn.parentElement);
  });

  // filtros
  const counts = PROJECTS.reduce((m, p) => ((m[p.area] = (m[p.area] || 0) + 1), m), {});
  const filters = $("#filters");
  const keys = ["todos", ...Object.keys(AREAS).filter((k) => counts[k])];
  filters.innerHTML = keys
    .map(
      (k) =>
        `<button type="button" data-area="${k}" aria-pressed="${k === "todos"}">${esc(
          k === "todos" ? "Todos" : AREAS[k]
        )}<span>${k === "todos" ? PROJECTS.length : counts[k]}</span></button>`
    )
    .join("");
  filters.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    const area = b.dataset.area;
    filters.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    list.querySelectorAll(".row").forEach((row) => {
      row.hidden = area !== "todos" && row.dataset.area !== area;
    });
  });
}

function toggleRow(row, force) {
  const btn = $(".row-btn", row);
  const detail = $(".row-detail", row);
  const open = force ?? btn.getAttribute("aria-expanded") !== "true";
  btn.setAttribute("aria-expanded", String(open));
  detail.hidden = !open;
  row.classList.toggle("ativo", open);
}

function goToProject(i) {
  const p = PROJECTS[i];
  if (!p) return;
  if (p.destaque) {
    $(`#p-${CSS.escape(p.id)}`).scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    return;
  }
  const row = $(`#i-${CSS.escape(p.id)}`);
  // garante que a linha esteja visível no filtro atual
  if (row.hidden) $('#filters button[data-area="todos"]').click();
  toggleRow(row, true);
  row.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
  $(".row-btn", row).focus({ preventScroll: true });
}

/* ───────── vídeo ───────── */
function renderVideo(sound) {
  const frame = $("#video-frame");
  const v = SITE.video || {};
  const tiles = $(".video-tiles", frame);
  if (tiles) tiles.innerHTML = tileSVG("apresentacao-video", 12, { grout: 0.05, relevo: true });
  if (!v.tipo) return;

  const ph = $("#video-placeholder");
  if (v.tipo === "arquivo" && v.src) {
    ph.remove();
    const el = document.createElement("video");
    el.controls = true;
    el.playsInline = true;
    el.preload = "metadata";
    if (v.capa) el.poster = v.capa;
    el.src = v.src;
    el.addEventListener("play", () => sound.duck(true));
    el.addEventListener("pause", () => sound.duck(false));
    el.addEventListener("ended", () => sound.duck(false));
    frame.appendChild(el);
    return;
  }

  if ((v.tipo === "youtube" || v.tipo === "vimeo") && v.id) {
    ph.remove();
    const btn = document.createElement("button");
    btn.className = "video-start";
    btn.type = "button";
    const capa = v.capa || (v.tipo === "youtube" ? `https://i.ytimg.com/vi/${encodeURIComponent(v.id)}/maxresdefault.jpg` : "");
    if (capa) btn.style.backgroundImage = `url("${capa}")`;
    btn.innerHTML = `<span><svg viewBox="0 0 40 40" width="22" height="22" aria-hidden="true"><path d="M11 7 L33 20 L11 33 Z" fill="currentColor"/></svg>Assistir à apresentação${
      v.duracao ? ` (${esc(v.duracao)})` : ""
    }</span>`;
    btn.addEventListener("click", () => {
      sound.stop();
      const src =
        v.tipo === "youtube"
          ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}?autoplay=1&rel=0&modestbranding=1`
          : `https://player.vimeo.com/video/${encodeURIComponent(v.id)}?autoplay=1&dnt=1`;
      const iframe = document.createElement("iframe");
      iframe.src = src;
      iframe.title = "Vídeo de apresentação de João Pedro Guimarães";
      iframe.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
      iframe.allowFullscreen = true;
      btn.replaceWith(iframe);
    });
    frame.appendChild(btn);
  }
}

/* ───────── som ───────── */
function setupSound() {
  const sound = new Sound(SITE.musica || {});
  const btn = $("#som");
  const label = $(".som-label", btn);
  const bars = btn.querySelectorAll(".som-eq i");
  const m = SITE.musica || {};
  const faixa = m.src
    ? [m.titulo, m.artista].filter(Boolean).join(", ") || "Trilha do portfólio"
    : "Trilha ambiente gerada no navegador";
  btn.title = faixa;

  sound.onChange((on) => {
    btn.setAttribute("aria-pressed", String(on));
    label.textContent = on ? "Desligar som" : "Ligar som";
    if (on) meter();
  });
  btn.addEventListener("click", () => {
    sound.toggle().catch(() => {
      label.textContent = "Som indisponível";
    });
  });

  function meter() {
    if (!sound.playing) {
      bars.forEach((b) => b.style.setProperty("--l", 0));
      return;
    }
    bars.forEach((b, i) => b.style.setProperty("--l", Math.min(1, sound.band(i, 4) * 1.3).toFixed(2)));
    requestAnimationFrame(meter);
  }
  return sound;
}

/* ───────── cena 3D ───────── */
async function setupCity(sound) {
  const host = $("#city");
  let createCity = () => null;
  try {
    ({ createCity } = await import("./city.js"));
  } catch (e) {
    /* sem a cena 3D, cai na grade de azulejos */
  }
  const label = $("#city-label");
  const hero = $(".hero");
  const city = createCity(host, PROJECTS, {
    sound,
    reduced,
    onHover(i, x, y) {
      if (i < 0) {
        label.classList.remove("on");
        return;
      }
      const p = PROJECTS[i];
      label.innerHTML = `<strong>${esc(p.nome)}</strong><span>${esc(AREAS[p.area] || "")}, ${p.telas} telas e ${p.funcoes} funções</span>`;
      if (x != null) {
        const r = hero.getBoundingClientRect();
        const lw = label.offsetWidth || 220;
        let lx = x - r.left + 16;
        if (lx + lw > r.width - 8) lx = x - r.left - lw - 16;
        const ly = Math.max(8, y - r.top - 64);
        label.style.setProperty("--x", `${Math.round(lx)}px`);
        label.style.setProperty("--y", `${Math.round(ly)}px`);
      }
      label.classList.add("on");
    },
    onSelect: goToProject,
  });

  if (!city) {
    // sem WebGL: mostra a grade de azulejos
    host.classList.add("sem-3d");
    host.innerHTML = PROJECTS.map(
      (p, i) => `<a href="#" data-i="${i}" aria-label="${esc(p.nome)}">${tileSVG(p.id, 2)}</a>`
    ).join("");
    host.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      e.preventDefault();
      goToProject(+a.dataset.i);
    });
    const cap = $("#city-caption");
    if (cap) cap.textContent = "Cada azulejo é um projeto. Clique para ver os detalhes.";
  }
  // som ligado acorda a animação mesmo com movimento reduzido
  sound.onChange(() => city && city.wake());
}

/* ───────── contato ───────── */
function renderContact() {
  const c = SITE.contato || {};
  const mail = $("#contato-mail");
  if (c.email) {
    mail.href = `mailto:${c.email}`;
    mail.textContent = c.email;
  }
  const links = [];
  if (c.whatsapp) links.push([`https://wa.me/${c.whatsapp.replace(/\D/g, "")}`, "WhatsApp"]);
  if (c.linkedin) links.push([c.linkedin, "LinkedIn"]);
  if (c.github) links.push([c.github, "GitHub"]);
  $("#contato-links").innerHTML = links
    .map(([href, t]) => `<li><a href="${esc(href)}" target="_blank" rel="noopener">${esc(t)}</a></li>`)
    .join("");
}

/* ───────── nome do hero: ocupa a largura exata da página ───────── */
function fitName() {
  const h1 = $("#nome");
  if (!h1) return;
  const spans = [...h1.querySelectorAll("span")];
  const cs = getComputedStyle(h1);
  const avail = h1.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
  const stacked = getComputedStyle(spans[0]).display === "block";
  h1.style.fontSize = "100px";
  const textWidth = (node) => {
    const range = document.createRange();
    range.selectNodeContents(node);
    return range.getBoundingClientRect().width;
  };
  const width = stacked ? Math.max(...spans.map(textWidth)) : textWidth(h1);
  if (width > 0) h1.style.fontSize = `${Math.floor((100 * avail) / width * 10) / 10}px`;
}

/* ───────── início ───────── */
fitName();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitName);
let fitT;
window.addEventListener("resize", () => {
  clearTimeout(fitT);
  fitT = setTimeout(fitName, 60);
});
fillTotals();
renderSpreads();
renderIndex();
renderContact();
const sound = setupSound();
renderVideo(sound);
setupCity(sound);
