// Writes character/layers/preview.html (self-contained apart from the layer SVGs next to it).
import fs from 'node:fs';
import path from 'node:path';
import { ASSETS, write } from './lib/pw.mjs';
const idx = {};
for (const t of ['dark', 'light']) idx[t] = JSON.parse(fs.readFileSync(path.join(ASSETS, 'character/layers', t, 'index.json'), 'utf8'));
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Pip layers preview</title>
<style>
:root{--bg:#F8F1E0;--ink:#18272D;--card:#FFFCF4;--line:rgba(70,55,25,.18);--ac:#0E7C99}
body.dark{--bg:#071A21;--ink:#E8F6F8;--card:#0E2A34;--line:rgba(140,200,215,.2);--ac:#2BB3D1}
*{box-sizing:border-box}body{margin:0;font:14px/1.4 system-ui,sans-serif;background:var(--bg);color:var(--ink)}
header{padding:14px 16px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;border-bottom:1px solid var(--line)}
h1{font-size:16px;margin:0 12px 0 0}button{font:inherit;padding:6px 12px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink);cursor:pointer}
button.on{background:var(--ac);color:#fff;border-color:var(--ac)}
main{display:flex;flex-wrap:wrap;gap:16px;padding:16px}
.stage{flex:1 1 420px;max-width:640px;aspect-ratio:1;background:repeating-conic-gradient(rgba(128,128,128,.12) 0 25%,transparent 0 50%) 0 0/24px 24px;border:1px solid var(--line);border-radius:12px;position:relative}
.stage svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.cmp{width:100%;height:100%;position:absolute;inset:0;display:none}
.panel{flex:1 1 320px;max-width:520px;max-height:80vh;overflow:auto;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:8px 12px}
.row{display:grid;grid-template-columns:auto 1fr 52px;gap:8px;align-items:center;padding:3px 0;font-size:12.5px}
.row label{display:flex;gap:6px;align-items:center;white-space:nowrap}.row input[type=range]{width:100%}.row span{opacity:.6;text-align:right;font-variant-numeric:tabular-nums}
small{opacity:.7}
</style></head><body>
<header><h1>Pip layers</h1>
<button data-th="dark" class="on">Turkish blue</button><button data-th="light">Creamy white</button>
<button id="cmp">Show full idle SVG instead</button><button id="reset">Reset sliders</button>
<small>Tick = visible. Slider = rotate the layer around its pivot (hands follow their arm). Stack of ${idx.dark.layers.length} / ${idx.light.layers.length} layers, canvas 400 x 400.</small></header>
<main><div class="stage"><svg id="st" viewBox="0 0 400 400"></svg><img class="cmp" id="full" alt="full idle"></div><div class="panel" id="panel"></div></main>
<script>
const IDX = ${JSON.stringify(idx)};
let theme = 'dark'; const st = document.getElementById('st'), panel = document.getElementById('panel');
const S = {}; // per-layer state {on, a}
function tf(L, layers) { const par = L.parentLayer ? layers.find(x => x.id === L.parentLayer) : null; return (par ? tf(par, layers) + ' ' : '') + 'rotate(' + (S[L.id]?.a || 0) + ' ' + L.pivot[0] + ' ' + L.pivot[1] + ')'; }
function tfParent(L, layers) { const par = layers.find(x => x.id === L.parentLayer); return 'rotate(' + (S[par.id]?.a || 0) + ' ' + par.pivot[0] + ' ' + par.pivot[1] + ')'; }
function transformFor(L, layers) { return L.parentLayer ? tfParent(L, layers) + ' rotate(' + (S[L.id]?.a || 0) + ' ' + L.pivot[0] + ' ' + L.pivot[1] + ')' : 'rotate(' + (S[L.id]?.a || 0) + ' ' + L.pivot[0] + ' ' + L.pivot[1] + ')'; }
function build() {
  const layers = IDX[theme].layers; st.innerHTML = ''; panel.innerHTML = '';
  document.body.className = theme;
  layers.forEach(L => {
    S[L.id] = S[L.id] || { on: true, a: 0 };
    const im = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    im.setAttribute('href', theme + '/' + L.file); im.setAttribute('width', 400); im.setAttribute('height', 400); im.id = 'im-' + L.id;
    st.appendChild(im);
    const row = document.createElement('div'); row.className = 'row';
    row.innerHTML = '<label><input type="checkbox" ' + (S[L.id].on ? 'checked' : '') + '>' + L.id + '</label><input type="range" min="-90" max="90" step="1" value="' + S[L.id].a + '" title="' + L.label + '"><span>' + S[L.id].a + '</span>';
    const [cb, rg] = row.querySelectorAll('input'), sp = row.querySelector('span');
    cb.onchange = () => { S[L.id].on = cb.checked; apply(); };
    rg.oninput = () => { S[L.id].a = +rg.value; sp.textContent = rg.value; apply(); };
    panel.appendChild(row);
  });
  apply();
  document.getElementById('full').src = theme + '/../../svg/' + theme + '/pip-idle.svg';
}
function apply() {
  const layers = IDX[theme].layers;
  layers.forEach(L => { const im = document.getElementById('im-' + L.id); im.setAttribute('transform', transformFor(L, layers)); im.style.display = S[L.id].on ? '' : 'none'; });
}
document.querySelectorAll('[data-th]').forEach(b => b.onclick = () => { theme = b.dataset.th; document.querySelectorAll('[data-th]').forEach(x => x.classList.toggle('on', x === b)); build(); });
document.getElementById('reset').onclick = () => { for (const k in S) S[k] = { on: true, a: 0 }; build(); };
const cmpB = document.getElementById('cmp'); cmpB.onclick = () => { const on = document.getElementById('full').style.display !== 'block'; document.getElementById('full').style.display = on ? 'block' : 'none'; st.style.display = on ? 'none' : ''; cmpB.classList.toggle('on', on); };
build();
</script></body></html>`;
write(path.join(ASSETS, 'character/layers/preview.html'), html);
console.log('preview.html written');
