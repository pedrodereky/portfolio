// Confere os dados de public/projects.js e os totais fixos do index.html.
// Uso: node scripts/check-projects.mjs
import { readFileSync } from "node:fs";
import vm from "node:vm";

const window = {};
vm.runInNewContext(readFileSync("public/projects.js", "utf8"), { window });
const { PROJECTS, AREAS } = window;
const erros = [];
const erro = (p, msg) => erros.push(`${p?.id ?? "?"}: ${msg}`);

const ids = new Set();
for (const p of PROJECTS) {
  if (!p.id || ids.has(p.id)) erro(p, "id ausente ou repetido");
  ids.add(p.id);
  for (const campo of ["nome", "resumo", "descricao"]) {
    if (typeof p[campo] !== "string" || !p[campo].trim()) erro(p, `${campo} vazio`);
  }
  if (!(p.area in AREAS)) erro(p, `área desconhecida "${p.area}"`);
  if (!Array.isArray(p.stack) || !p.stack.length) erro(p, "stack vazia");
  for (const campo of ["telas", "funcoes"]) {
    if (!Number.isInteger(p[campo]) || p[campo] < 0) erro(p, `${campo} precisa ser inteiro >= 0`);
  }
  if (typeof p.destaque !== "boolean") erro(p, "destaque precisa ser true ou false");
  for (const campo of ["repo", "demo"]) {
    if (p[campo] && !/^https:\/\/\S+$/.test(p[campo])) erro(p, `${campo} precisa ser uma URL https`);
  }
}

// O index.html traz os totais escritos à mão (para quem abre sem JavaScript e
// para a prévia de compartilhamento). Eles precisam bater com a lista.
const html = readFileSync("public/index.html", "utf8");
const totais = {
  projetos: PROJECTS.length,
  telas: PROJECTS.reduce((s, p) => s + p.telas, 0),
  funcoes: PROJECTS.reduce((s, p) => s + p.funcoes, 0),
};
for (const [chave, valor] of Object.entries(totais)) {
  for (const m of html.matchAll(new RegExp(`data-total="${chave}">([\\d.]+)<`, "g"))) {
    if (Number(m[1].replace(/\./g, "")) !== valor) erros.push(`index.html: data-total="${chave}" diz ${m[1]}, a lista tem ${valor}`);
  }
}
for (const m of html.matchAll(/(\d+) projetos de software/g)) {
  if (Number(m[1]) !== totais.projetos) erros.push(`index.html: descrição diz ${m[1]} projetos, a lista tem ${totais.projetos}`);
}

if (erros.length) {
  console.error(erros.join("\n"));
  process.exit(1);
}
console.log(`ok: ${PROJECTS.length} projetos, ${totais.telas} telas, ${totais.funcoes} funções.`);
