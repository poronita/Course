#!/usr/bin/env node
// Assemble design/src/* into one self-contained HTML file.
//   node design/build.mjs                       -> design/ui-style-lab.html (full document)
//   node design/build.mjs --fragment --out X    -> page body for the Artifact publisher (no doctype/html/head/body)
//   node design/build.mjs --only swiss --out X  -> preview with a single style
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const only = opt('--only');
const fragment = args.includes('--fragment');
const out = opt('--out') || join(here, 'ui-style-lab.html');

const shell = readFileSync(join(here, 'src/shell.html'), 'utf8');
const engine = readFileSync(join(here, 'src/engine.js'), 'utf8');
const files = readdirSync(join(here, 'src/styles')).filter(f => f.endsWith('.js')).sort();
let styleJS = '';
for (const f of files) {
  const src = readFileSync(join(here, 'src/styles', f), 'utf8');
  if (only && !new RegExp(`id:\\s*['"]${only}['"]`).test(src)) continue;
  styleJS += `\n/* ---- ${f} ---- */\n${src}\n`;
}
// Style CSS lives inside each style file (def.css) and is injected at runtime,
// so the shell placeholder only carries a marker.
const inject = `\n;ISK.styles.forEach(d => { if (d.css) { const s = document.createElement('style'); s.dataset.style = d.id; s.textContent = d.css; document.head.appendChild(s); } });\n`;

let page = shell
  .replace('/*@@STYLE_CSS@@*/', '/* injected per style at runtime */')
  .replace('/*@@ENGINE@@*/', () => engine)
  .replace('/*@@STYLES@@*/', () => styleJS + inject);

if (!fragment) {
  page = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n${page.replace(/<header class="x-top">/, "</head>\n<body>\n<header class=\"x-top\">")}\n</body>\n</html>\n`;
}
writeFileSync(out, page);
console.log(`wrote ${out} (${(page.length / 1024).toFixed(1)} KB, ${files.length} style files${only ? `, only=${only}` : ''})`);
