import { chromium, rigPage } from './lib/pw.mjs';
const b = await chromium.launch();
const p = await rigPage(b);
const out = await p.evaluate(() => {
  const host = document.getElementById('host');
  const m = CAST.mount(CAST.chars.find(c => c.id === 'pip-dark'), host);
  m.update({ t: 3, mood: 'idle', mt: 3, prev: 'idle', blend: 1, look: { x: 0, y: 0 }, poke: 99, pokes: 0, hover: false, small: false });
  const lines = [];
  const walk = (e, d) => { if (d > 4) return; lines.push('  '.repeat(d) + e.tagName + ' ' + (e.getAttribute('transform') || '').slice(0, 40) + (e.style.display ? ' [hidden]' : '') + ' #' + e.children.length); [...e.children].forEach(c => { if (c.tagName !== 'defs') walk(c, d + 1); }); };
  walk(m.svg, 0);
  return lines.join('\n');
});
console.log(out); console.log(p.errs);
await b.close();
