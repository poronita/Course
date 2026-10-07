// Builds icons/svg/*.svg and icons/vector-drawable/ic_*.xml from the engine ICONS table plus the extra icons.
import fs from 'node:fs';
import path from 'node:path';
import { ASSETS, here, write } from './lib/pw.mjs';
import { iconSvg, iconToVectorDrawable } from './svg-to-vd.mjs';
const engine = fs.readFileSync(path.join(here, '..', '..', '..', 'design', 'src', 'engine.js'), 'utf8');
const m = engine.match(/const ICONS = (\{[\s\S]*?\n  \});/);
const ENGINE = new Function('return ' + m[1])();

/* New icons, drawn on the same 24 grid, 2 px stroke, round caps and joins. */
const EXTRA = {
  download: '<path d="M12 3v10M8 9.5l4 4 4-4M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/>',
  copy: '<rect x="8" y="8" width="13" height="13" rx="2.5"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>',
  bell: '<path d="M6 10a6 6 0 0 1 12 0c0 4.5 1.5 5.8 2 7H4c.5-1.2 2-2.500 2-7z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
  flame: '<path d="M12.5 2.5C12.5 2.5 18.5 7.5 18.5 14.5a6.5 6.5 0 0 1-13 0C5.5 11.5 7 9.5 8.5 8c.2 2 1 3 2 3.5C10.200 8 11 5 12.5 2.5z"/><path d="M12 19a2.500 2.500 0 0 1-2.500-2.500c0-1.300 1-2.200 2.500-3.500 1.500 1.300 2.500 2.200 2.500 3.500A2.500 2.500 0 0 1 12 19z"/>',
  trophy: '<path d="M8 4h8v6a4 4 0 0 1-8 0z"/><path d="M8 6H4.5c0 3 1.500 4.500 3.500 5M16 6h3.500c0 3-1.500 4.500-3.500 5M12 14v3.500M8.500 20.500h7M10 17.500h4"/>',
  chest: '<path d="M3 11V9a4.500 4.500 0 0 1 4.500-4.500h9A4.500 4.500 0 0 1 21 9v2"/><rect x="3" y="11" width="18" height="9" rx="2"/><path d="M12 11v2.500M10.700 13.500h2.600"/>',
  medal: '<circle cx="12" cy="15" r="5.500"/><path d="M8.500 10.800L6.500 3H10l2 5M15.500 10.800L17.500 3H14"/><path d="M12 12.600l.9 1.800 2 .3-1.400 1.400.3 2-1.800-.9-1.800.9.3-2-1.400-1.400 2-.3z"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1.500"/><rect x="14" y="3" width="7" height="7" rx="1.500"/><rect x="3" y="14" width="7" height="7" rx="1.500"/><path d="M6.500 6.500h.01M17.500 6.500h.01M6.500 17.500h.01M14 14h.01M17.5 14h3.5M14 17.5h3.5v3.5M21 17.5v.01M21 21h.01"/>',
  'volume-on': '<path d="M4 9.500h3.500L12 5.500v13l-4.500-4H4z"/><path d="M15.500 9a4 4 0 0 1 0 6M18.200 6.500a8 8 0 0 1 0 11"/>',
  'volume-off': '<path d="M4 9.500h3.500L12 5.500v13l-4.500-4H4z"/><path d="M16 9.500l5 5M21 9.500l-5 5"/>',
  vibrate: '<rect x="8" y="3.500" width="8" height="17" rx="2"/><path d="M4.500 8v8M19.500 8v8M1.800 10.500v3M22.200 10.500v3"/>',
  sliders: '<path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7M12 8v12M12 8c-1.500-3-3-4-4.500-3.500S7 8 12 8zM12 8c1.500-3 3-4 4.500-3.500S17 8 12 8z"/>',
  camera: '<path d="M4 8h3l1.500-2.500h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.500"/>',
  undo: '<path d="M9 4L4 9l5 5M4 9h9.500a6.500 6.500 0 0 1 0 13H9"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M13.100 7.300h.01M10.600 11h2.400l-1.100 5.500M10.200 16.600h3"/>',
};
for (const k in EXTRA) EXTRA[k] = EXTRA[k].replace(/(\d)\.(\d*?)0+(?!\d)/g, (m, a, f) => f ? `${a}.${f}` : a);
const ALL = { ...ENGINE, ...EXTRA };
const dup = Object.keys(EXTRA).filter(k => k in ENGINE); if (dup.length) console.log('WARNING duplicate names', dup);
const svgDir = path.join(ASSETS, 'icons', 'svg'), vdDir = path.join(ASSETS, 'icons', 'vector-drawable');
fs.rmSync(svgDir, { recursive: true, force: true }); fs.rmSync(vdDir, { recursive: true, force: true });
const list = [];
for (const [name, body] of Object.entries(ALL)) {
  const clean = body;
  write(path.join(svgDir, `${name}.svg`), iconSvg(clean));
  write(path.join(vdDir, `ic_${name.replace(/-/g, '_')}.xml`), iconToVectorDrawable(clean, { comment: `${name}: 24dp stroke icon, 2dp round. Tint with android:tint or ImageView app:tint.` }));
  list.push({ name, source: name in ENGINE ? 'engine' : 'extra', svg: `svg/${name}.svg`, vectorDrawable: `vector-drawable/ic_${name.replace(/-/g, '_')}.xml`, filled: /fill="currentColor"/.test(body) });
}
write(path.join(ASSETS, 'icons', 'icons.json'), JSON.stringify(list, null, 1));
console.log(Object.keys(ENGINE).length, 'engine icons +', Object.keys(EXTRA).length, 'extra =', list.length);
