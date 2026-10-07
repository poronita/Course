// Contact sheet: node contact.mjs out.png --cols 5 --cell 240 --bg '#071A21' [--label] file1.svg file2.svg ...
import path from 'node:path';
import { chromium, write } from './lib/pw.mjs';
const a = process.argv.slice(2);
const opt = (k, d) => { const i = a.indexOf(k); if (i < 0) return d; const v = a[i + 1]; a.splice(i, 2); return v; };
const cols = +opt('--cols', 5), cell = +opt('--cell', 240), bg = opt('--bg', '#071A21'), fg = opt('--fg', '#cfe');
const out = a.shift(); const files = a;
const rows = Math.ceil(files.length / cols);
const html = `<!doctype html><body style="margin:0;background:${bg};font:11px sans-serif;color:${fg}"><div style="display:grid;grid-template-columns:repeat(${cols},${cell}px)">` +
  files.map(f => `<div style="width:${cell}px;height:${cell + 18}px;text-align:center"><img src="file://${f}" style="width:${cell - 8}px;height:${cell - 8}px;object-fit:contain;margin:4px"><div>${path.basename(f).replace(/\.svg$|\.png$/, '')}</div></div>`).join('') + '</div></body>';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: cols * cell, height: rows * (cell + 18) } });
const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
const tmp = path.join(path.dirname(out), '_contact_' + path.basename(out) + '.html'); (await import('node:fs')).writeFileSync(tmp, html); await p.goto('file://' + tmp); await p.waitForTimeout(400);
write(out, await p.screenshot());
console.log(out, errs.length ? errs : 'ok'); await b.close();
