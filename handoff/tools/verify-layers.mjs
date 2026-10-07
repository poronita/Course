// Renders the stacked layers and the full idle SVG for each theme, writes PNGs to the given dir (for pixel diff).
import fs from 'node:fs';
import path from 'node:path';
import { chromium, ASSETS, write } from './lib/pw.mjs';
const out = process.argv[2];
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 800, height: 800 } });
const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push(String(e)));
for (const th of ['dark', 'light']) {
  const idx = JSON.parse(fs.readFileSync(path.join(ASSETS, 'character/layers', th, 'index.json'), 'utf8'));
  const bg = th === 'dark' ? '#071A21' : '#F8F1E0';
  const stack = idx.layers.map(L => `<img src="file://${ASSETS}/character/layers/${th}/${L.file}" style="position:absolute;left:0;top:0;width:800px;height:800px">`).join('');
  const tmp = path.join(out, `_stack-${th}.html`);
  fs.writeFileSync(tmp, `<body style="margin:0;background:${bg}"><div style="position:relative;width:800px;height:800px">${stack}</div>`);
  await p.goto('file://' + tmp); await p.waitForTimeout(500); write(path.join(out, `stack-${th}.png`), await p.screenshot());
  fs.writeFileSync(tmp, `<body style="margin:0;background:${bg}"><img src="file://${ASSETS}/character/svg/${th}/pip-idle.svg" style="width:800px;height:800px">`);
  await p.goto('file://' + tmp); await p.waitForTimeout(500); write(path.join(out, `full-${th}.png`), await p.screenshot());
}
console.log(errs.length ? errs : 'rendered');
await b.close();
