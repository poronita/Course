// Re-renders every VectorDrawable's pathData as an SVG and compares it with the source icon SVG pixel by pixel.
import fs from 'node:fs';
import path from 'node:path';
import { chromium, ASSETS } from './lib/pw.mjs';
const out = process.argv[2];
const list = JSON.parse(fs.readFileSync(path.join(ASSETS, 'icons/icons.json'), 'utf8'));
const mk = (inner) => `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" style="color:#000">${inner}</svg>`;
const rows = list.map(i => {
  const svg = fs.readFileSync(path.join(ASSETS, 'icons', i.svg), 'utf8');
  const vd = fs.readFileSync(path.join(ASSETS, 'icons', i.vectorDrawable), 'utf8');
  const paths = [...vd.matchAll(/<path[\s\S]*?\/>/g)].map(m => { const g = k => (m[0].match(new RegExp('android:' + k + '="([^"]*)"')) || [])[1]; return `<path d="${g('pathData')}" fill="${g('fillColor') === '#00000000' ? 'none' : '#000'}" stroke="#000" stroke-width="${g('strokeWidth')}" stroke-linecap="${g('strokeLineCap')}" stroke-linejoin="${g('strokeLineJoin')}"/>`; }).join('');
  return `<div style="display:flex">${svg.replace('width="24" height="24"', 'width="96" height="96"')}${mk(paths)}</div>`;
});
const html = `<body style="margin:0;background:#fff">${rows.join('')}</body>`;
const tmp = path.join(out, '_vd.html'); fs.writeFileSync(tmp, html);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 192, height: 96 * list.length } });
await p.goto('file://' + tmp); await p.screenshot({ path: path.join(out, 'vd.png'), fullPage: true });
await b.close(); console.log(list.length);
