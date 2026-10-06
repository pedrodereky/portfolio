// Gerador de azulejos modulares (inspirado nos painéis de Athos Bulcão).
// Cada projeto recebe um padrão próprio, derivado do seu id: mesmos módulos,
// rotações diferentes — como uma parede montada à mão.

export const PALETTE = {
  cal: "#F4F3EE",
  cobalto: "#1D3FBF",
  nanquim: "#000000",
  rejunte: "#BDB8AE",
};

function hash(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function rng(seed) {
  let a = typeof seed === "string" ? hash(seed) : seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const MOTIFS = ["quarto", "meia", "triangulo", "faixa", "ponto", "arco", "duplo"];

// desenha um módulo em coordenadas unitárias (0..1), antes da rotação
function motif(kind, fg) {
  switch (kind) {
    case "quarto": // quarto de círculo no canto
      return `<path d="M0 0 L1 0 A1 1 0 0 1 0 1 Z" fill="${fg}"/>`;
    case "meia": // meia lua apoiada numa borda
      return `<path d="M0 1 A0.5 0.5 0 0 1 1 1 Z" fill="${fg}"/>`;
    case "triangulo":
      return `<path d="M0 0 L1 1 L0 1 Z" fill="${fg}"/>`;
    case "faixa":
      return `<rect x="0" y="0" width="1" height="0.38" fill="${fg}"/>`;
    case "ponto":
      return `<circle cx="0.5" cy="0.5" r="0.22" fill="${fg}"/>`;
    case "arco": // arco grosso
      return `<path d="M0 0.32 A0.68 0.68 0 0 1 0.68 1 L1 1 A1 1 0 0 0 0 0 Z" fill="${fg}"/>`;
    case "duplo": // dois quartos opostos
      return `<path d="M0 0 L0.5 0 A0.5 0.5 0 0 1 0 0.5 Z M1 1 L0.5 1 A0.5 0.5 0 0 1 1 0.5 Z" fill="${fg}"/>`;
    default:
      return "";
  }
}

/**
 * Gera um painel de azulejos como string SVG.
 * @param {string} id     semente (id do projeto)
 * @param {number} n      módulos por lado
 * @param {object} opts   { grout: espessura do rejunte (0..0.2) }
 */
export function tileSVG(id, n = 4, opts = {}) {
  const r = rng(id);
  const grout = opts.grout ?? 0.05;
  // "relevo": versão monocromática, como os blocos de concreto em relevo do Teatro Nacional
  const { cal, cobalto, nanquim, rejunte } = opts.relevo
    ? { cal: "#cfcbc2", cobalto: "#b9b4aa", nanquim: "#a7a298", rejunte: "#c4c0b7" }
    : PALETTE;

  // cada projeto escolhe 2 módulos e uma combinação de cores dominante
  const a = MOTIFS[Math.floor(r() * MOTIFS.length)];
  let b = MOTIFS[Math.floor(r() * MOTIFS.length)];
  if (b === a) b = MOTIFS[(MOTIFS.indexOf(a) + 3) % MOTIFS.length];
  const schemes = [
    [cal, cobalto],
    [cobalto, cal],
    [cal, nanquim],
    [nanquim, cal],
  ];
  const base = Math.floor(r() * 2); // 0: claro dominante, 1: cobalto dominante
  // regra de simetria do painel: espelhada, rotacional ou livre
  const rule = ["espelho", "giro", "livre"][Math.floor(r() * 3)];

  const cells = [];
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      let rot, kind, scheme;
      const pick = r();
      kind = pick < 0.62 ? a : b;
      if (rule === "espelho") {
        const mx = x < n / 2 ? 0 : 1;
        const my = y < n / 2 ? 0 : 1;
        rot = [[0, 90], [270, 180]][my][mx];
        kind = (x + y) % 2 === 0 ? a : b;
      } else if (rule === "giro") {
        rot = ((x + y * 3) % 4) * 90;
      } else {
        rot = Math.floor(r() * 4) * 90;
      }
      const s = r();
      if (s < 0.72) scheme = schemes[base];
      else if (s < 0.9) scheme = schemes[1 - base];
      else scheme = schemes[2 + Math.floor(r() * 2)];
      cells.push({ x, y, rot, kind, bg: scheme[0], fg: scheme[1] });
    }
  }

  const g = grout;
  const inner = 1 - g;
  const parts = cells
    .map(
      (c) =>
        `<g transform="translate(${c.x + g / 2} ${c.y + g / 2}) scale(${inner}) rotate(${c.rot} 0.5 0.5)">` +
        `<rect width="1" height="1" fill="${c.bg}"/>${motif(c.kind, c.fg)}</g>`
    )
    .join("");

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${n}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">` +
    `<rect width="${n}" height="${n}" fill="${rejunte}"/>${parts}</svg>`
  );
}

/** Desenha o padrão num canvas (para texturas 3D). Retorna Promise<HTMLCanvasElement>. */
export function tileCanvas(id, n = 2, px = 256) {
  const svg = tileSVG(id, n, { grout: 0.06 });
  const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = c.height = px;
      c.getContext("2d").drawImage(img, 0, 0, px, px);
      resolve(c);
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
}
