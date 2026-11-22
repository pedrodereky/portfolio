// Confere que todo arquivo local citado pelo site existe em public/.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const pub = new URL("../public/", import.meta.url).pathname;
const missing = new Set();
const check = (p, from) => {
  const clean = p.split(/[?#]/)[0];
  if (!clean || clean.endsWith("/")) return;
  if (!existsSync(join(pub, clean))) missing.add(`${clean}  (citado em ${from})`);
};

const html = readFileSync(join(pub, "index.html"), "utf8");
for (const [, p] of html.matchAll(/(?:src|href)="\/([^"]+)"/g)) check(p, "index.html");

for (const f of readdirSync(join(pub, "assets")).filter((f) => f.endsWith(".js") || f.endsWith(".css"))) {
  const s = readFileSync(join(pub, "assets", f), "utf8");
  for (const [, p] of s.matchAll(/from\s*"\.\/([^"]+\.js)"/g)) check(`assets/${p}`, f);
  for (const [, p] of s.matchAll(/[`"'(]\/((?:assets|audio|img)\/[^`"')\s]+\.(?:webp|png|jpg|mp3|wav|woff2|js|css))/g)) check(p, f);
}

if (missing.size) {
  console.error(`Arquivos ausentes em public/:\n${[...missing].join("\n")}`);
  process.exit(1);
}
console.log("ok: todos os arquivos citados existem");
