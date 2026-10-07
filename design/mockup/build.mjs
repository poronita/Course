import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { tint, DARK, LIGHT } from './tint.mjs';
const here = path.dirname(fileURLToPath(import.meta.url));
const rd = p => fs.readFileSync(path.join(here, p), 'utf8');
const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const out = opt('--out') || path.join(here, '..', 'pip-prime-mockup.html');
const fragment = args.includes('--fragment');

const pip = rd('../characters/src/chars/01-pip.js');
const chars = tint(pip, DARK, 'pip-dark', 'Pip Prime · Turkish blue') + '\n' + tint(pip, LIGHT, 'pip-light', 'Pip Prime · Creamy white');
const shell = rd('src/shell.html');
const html = shell
  .replace('/*@@ENGINE@@*/', () => rd('src/engine.js'))
  .replace('/*@@CAST@@*/', () => rd('../characters/src/cast.js') + '\n' + chars)
  .replace('/*@@STYLE@@*/', () => rd('src/pip-prime.js'));
const full = fragment ? html : '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n</head>\n<body>\n' + html + '\n</body>\n</html>\n';
fs.writeFileSync(out, full);
console.log('wrote', out, (full.length / 1024).toFixed(0) + ' KB');
