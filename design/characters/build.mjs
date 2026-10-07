#!/usr/bin/env node
// Build design/characters/src/* into one self-contained page.
//   node build.mjs                      -> ../character-lab.html (full document)
//   node build.mjs --fragment --out X   -> page body for the Artifact publisher
//   node build.mjs --only pip --out X   -> preview with a single character
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2), opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const only = opt('--only'), fragment = args.includes('--fragment'), out = opt('--out') || join(here, '..', 'character-lab.html');
const shell = readFileSync(join(here, 'src/shell.html'), 'utf8');
const cast = readFileSync(join(here, 'src/cast.js'), 'utf8');
let js = '', css = '';
for (const f of readdirSync(join(here, 'src/chars')).filter(f => /^\d.*\.js$/.test(f)).sort()) {
  const src = readFileSync(join(here, 'src/chars', f), 'utf8');
  if (only && !new RegExp(`id:\\s*['"]${only}['"]`).test(src)) continue;
  js += `\n/* ---- ${f} ---- */\n${src}\n`;
}
let page = shell.replace('/*@@CHAR_CSS@@*/', () => css).replace('/*@@CAST@@*/', () => cast).replace('/*@@CHARS@@*/', () => js);
if (!fragment) page = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n${page.replace('<div class="k-wrap">', '</head>\n<body>\n<div class="k-wrap">')}\n</body>\n</html>\n`;
writeFileSync(out, page);
console.log(`wrote ${out} (${(page.length / 1024).toFixed(1)} KB)`);
