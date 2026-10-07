// Converts the stroke icon markup used by the app (24x24, <path>, <circle>, <rect rx>, <line>) into an
// Android VectorDrawable. Usable as a module (iconToVectorDrawable) or from the command line:
//   node svg-to-vd.mjs in.svg out.xml
import fs from 'node:fs';

const NUM = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/y;
const fmt = n => { const v = +(+n).toFixed(3); return Object.is(v, -0) ? '0' : String(v); };

/* Tokenise and re-serialise path data so every Android PathParser accepts it (arc flags get their own space). */
export function normalisePath(d) {
  const ARGS = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
  let i = 0, out = [];
  const ws = () => { while (i < d.length && /[\s,]/.test(d[i])) i++; };
  const num = () => { ws(); NUM.lastIndex = i; const m = NUM.exec(d); if (!m) throw new Error('bad number at ' + i + ' in ' + d); i = NUM.lastIndex; return +m[0]; };
  const flag = () => { ws(); const c = d[i]; if (c !== '0' && c !== '1') throw new Error('bad arc flag at ' + i + ' in ' + d); i++; return +c; };
  ws();
  while (i < d.length) {
    const cmd = d[i++]; const up = cmd.toUpperCase();
    if (!(up in ARGS)) throw new Error('bad command ' + cmd);
    out.push(cmd);
    if (up === 'Z') { ws(); continue; }
    let first = true;
    for (;;) {
      ws();
      if (i >= d.length || /[A-Za-z]/.test(d[i])) { if (first) throw new Error('missing args for ' + cmd); break; }
      const vals = [];
      if (up === 'A') { vals.push(num(), num(), num(), flag(), flag(), num(), num()); } else for (let k = 0; k < ARGS[up]; k++) vals.push(num());
      out.push(vals.map(fmt).join(' '));
      first = false;
    }
  }
  return out.reduce((acc, tok, k) => acc + (k && !/^[A-Za-z]$/.test(tok) && !/^[A-Za-z]$/.test(out[k - 1]) ? ' ' : '') + tok, '');
}

const attrs = s => { const o = {}; for (const m of s.matchAll(/([\w:-]+)\s*=\s*"([^"]*)"/g)) o[m[1]] = m[2]; return o; };
const circle = (cx, cy, r) => `M${fmt(cx - r)} ${fmt(cy)}a${fmt(r)} ${fmt(r)} 0 1 0 ${fmt(2 * r)} 0a${fmt(r)} ${fmt(r)} 0 1 0 ${fmt(-2 * r)} 0z`;
const ellipse = (cx, cy, rx, ry) => `M${fmt(cx - rx)} ${fmt(cy)}a${fmt(rx)} ${fmt(ry)} 0 1 0 ${fmt(2 * rx)} 0a${fmt(rx)} ${fmt(ry)} 0 1 0 ${fmt(-2 * rx)} 0z`;
function rect(x, y, w, h, rx = 0, ry = rx) {
  if (!rx && !ry) return `M${fmt(x)} ${fmt(y)}h${fmt(w)}v${fmt(h)}h${fmt(-w)}z`;
  rx = Math.min(rx, w / 2); ry = Math.min(ry, h / 2);
  return `M${fmt(x + rx)} ${fmt(y)}H${fmt(x + w - rx)}a${fmt(rx)} ${fmt(ry)} 0 0 1 ${fmt(rx)} ${fmt(ry)}V${fmt(y + h - ry)}a${fmt(rx)} ${fmt(ry)} 0 0 1 ${fmt(-rx)} ${fmt(ry)}H${fmt(x + rx)}a${fmt(rx)} ${fmt(ry)} 0 0 1 ${fmt(-rx)} ${fmt(-ry)}V${fmt(y + ry)}a${fmt(rx)} ${fmt(ry)} 0 0 1 ${fmt(rx)} ${fmt(-ry)}z`;
}

/* body: the inner markup of the icon <svg>. Returns [{d, fill}] */
export function shapesOf(body) {
  const shapes = [];
  for (const m of body.matchAll(/<(path|circle|rect|line|ellipse|polyline|polygon)\b([^>]*?)\/?>/g)) {
    const [, tag, rest] = m, a = attrs(rest), n = k => +(a[k] ?? 0);
    let d;
    if (tag === 'path') d = normalisePath(a.d);
    else if (tag === 'circle') d = circle(n('cx'), n('cy'), n('r'));
    else if (tag === 'ellipse') d = ellipse(n('cx'), n('cy'), n('rx'), n('ry'));
    else if (tag === 'rect') d = rect(n('x'), n('y'), n('width'), n('height'), a.rx != null ? n('rx') : (a.ry != null ? n('ry') : 0), a.ry != null ? n('ry') : (a.rx != null ? n('rx') : 0));
    else if (tag === 'line') d = `M${fmt(n('x1'))} ${fmt(n('y1'))}L${fmt(n('x2'))} ${fmt(n('y2'))}`;
    else { const pts = a.points.trim().split(/[\s,]+/).map(Number); d = 'M' + pts.map(fmt).reduce((s, v, i) => s + (i ? (i % 2 ? ' ' : 'L') : '') + v, '') + (tag === 'polygon' ? 'z' : ''); }
    shapes.push({ d, fill: a.fill === 'currentColor' });
  }
  return shapes;
}

export function iconToVectorDrawable(body, { size = 24, stroke = 2, comment = '' } = {}) {
  const shapes = shapesOf(body);
  const strokeOnly = shapes.filter(s => !s.fill).map(s => s.d).join('');
  const common = `android:strokeColor="#FF000000"\n        android:strokeWidth="${stroke}"\n        android:strokeLineCap="round"\n        android:strokeLineJoin="round"`;
  let paths = '';
  if (strokeOnly) paths += `    <path\n        android:pathData="${strokeOnly}"\n        android:fillColor="#00000000"\n        ${common}/>\n`;
  for (const s of shapes.filter(s => s.fill)) paths += `    <path\n        android:pathData="${s.d}"\n        android:fillColor="#FF000000"\n        ${common}/>\n`;
  return `<?xml version="1.0" encoding="utf-8"?>\n${comment ? `<!-- ${comment} -->\n` : ''}<vector xmlns:android="http://schemas.android.com/apk/res/android"\n    android:width="${size}dp"\n    android:height="${size}dp"\n    android:viewportWidth="24"\n    android:viewportHeight="24">\n${paths}</vector>\n`;
}

export const iconSvg = (body, size = 24) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n  ${body.replace(/(<\/?(?:path|circle|rect|line)[^>]*>)(?=<)/g, '$1\n  ')}\n</svg>\n`;

if (process.argv[1] && process.argv[1].endsWith('svg-to-vd.mjs') && process.argv[2]) {
  const src = fs.readFileSync(process.argv[2], 'utf8');
  const body = src.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>[\s\S]*$/, '');
  fs.writeFileSync(process.argv[3], iconToVectorDrawable(body));
}
