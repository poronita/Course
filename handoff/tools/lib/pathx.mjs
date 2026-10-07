/* Tiny path toolkit: parse SVG path data, apply an affine transform (translate, scale, rotate), serialise. */
const NUM = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/y;
const ARGS = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
export const fmt = n => { const v = +(+n).toFixed(3); return Object.is(v, -0) ? '0' : String(v); };
export function parse(d) {
  let i = 0; const out = [];
  const ws = () => { while (i < d.length && /[\s,]/.test(d[i])) i++; };
  const num = () => { ws(); NUM.lastIndex = i; const m = NUM.exec(d); if (!m) throw new Error('bad path ' + d); i = NUM.lastIndex; return +m[0]; };
  const flag = () => { ws(); const c = d[i++]; return +c; };
  ws();
  while (i < d.length) {
    let cmd = d[i++]; const up = cmd.toUpperCase();
    if (up === 'Z') { out.push({ cmd, a: [] }); ws(); continue; }
    let first = true;
    for (;;) {
      ws(); if (i >= d.length || /[A-Za-z]/.test(d[i])) break;
      const a = up === 'A' ? [num(), num(), num(), flag(), flag(), num(), num()] : Array.from({ length: ARGS[up] }, num);
      let c = cmd; if (!first) c = up === 'M' ? (cmd === 'M' ? 'L' : 'l') : cmd; // implicit repeats
      out.push({ cmd: c, a }); first = false;
    }
  }
  return out;
}
/* m = [a b c d e f] like SVG matrix(a b c d e f). Handles absolute and relative commands; arcs need a similarity transform. */
export function transform(d, m) {
  const [a, b, c, dd, e, f] = m, rot = Math.atan2(b, a) * 180 / Math.PI, sc = Math.hypot(a, b);
  const P = (x, y) => [a * x + c * y + e, b * x + dd * y + f], V = (x, y) => [a * x + c * y, b * x + dd * y];
  let cx = 0, cy = 0, sx = 0, sy = 0; const res = [];
  for (const { cmd, a: p } of parse(d)) {
    const rel = cmd === cmd.toLowerCase(), up = cmd.toUpperCase(); let o;
    const abs = (x, y) => rel ? [cx + x, cy + y] : [x, y];
    if (up === 'M' || up === 'L' || up === 'T') { const [x, y] = abs(p[0], p[1]); o = rel ? V(p[0], p[1]) : P(p[0], p[1]); res.push(cmd + o.map(fmt).join(' ')); cx = x; cy = y; if (up === 'M') { sx = x; sy = y; } }
    else if (up === 'H' || up === 'V') {
      const nx = up === 'H' ? (rel ? cx + p[0] : p[0]) : cx, ny = up === 'V' ? (rel ? cy + p[0] : p[0]) : cy;
      const [X, Y] = P(nx, ny); res.push('L' + fmt(X) + ' ' + fmt(Y)); cx = nx; cy = ny; // always absolute L: robust under rotation
    } else if (up === 'C' || up === 'S' || up === 'Q') {
      const q = []; for (let k = 0; k < p.length; k += 2) q.push(...(rel ? V(p[k], p[k + 1]) : P(p[k], p[k + 1])));
      res.push(cmd + q.map(fmt).join(' ')); const [x, y] = abs(p[p.length - 2], p[p.length - 1]); cx = x; cy = y;
    } else if (up === 'A') {
      const [x, y] = abs(p[5], p[6]); const t = rel ? V(p[5], p[6]) : P(p[5], p[6]);
      res.push(cmd + [p[0] * sc, p[1] * sc, p[2] + rot, p[3], p[4], t[0], t[1]].map(fmt).join(' ')); cx = x; cy = y;
    } else if (up === 'Z') { res.push('Z'); cx = sx; cy = sy; }
  }
  return res.join('');
}
export const mul = (m, n) => [m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1], m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3], m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]];
export const T = (x, y) => [1, 0, 0, 1, x, y];
export const S = (k) => [k, 0, 0, k, 0, 0];
export const Rdeg = (deg) => { const r = deg * Math.PI / 180, c = Math.cos(r), s = Math.sin(r); return [c, s, -s, c, 0, 0]; };
export const pt = (m, x, y) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
export const ell = (cx, cy, rx, ry) => `M${fmt(cx - rx)} ${fmt(cy)}A${fmt(rx)} ${fmt(ry)} 0 1 0 ${fmt(cx + rx)} ${fmt(cy)}A${fmt(rx)} ${fmt(ry)} 0 1 0 ${fmt(cx - rx)} ${fmt(cy)}Z`;
export const rrect = (x, y, w, h, r) => `M${fmt(x + r)} ${fmt(y)}H${fmt(x + w - r)}A${r} ${r} 0 0 1 ${fmt(x + w)} ${fmt(y + r)}V${fmt(y + h - r)}A${r} ${r} 0 0 1 ${fmt(x + w - r)} ${fmt(y + h)}H${fmt(x + r)}A${r} ${r} 0 0 1 ${fmt(x)} ${fmt(y + h - r)}V${fmt(y + r)}A${r} ${r} 0 0 1 ${fmt(x + r)} ${fmt(y)}Z`;
