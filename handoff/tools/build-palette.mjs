// Builds palette/colors.json, colors.xml (values + values-night), tokens.css and typography.md from the mockup source.
import fs from 'node:fs';
import path from 'node:path';
import { ASSETS, here, write } from './lib/pw.mjs';
import { DARK, LIGHT } from '../../design/mockup/tint.mjs';
const src = fs.readFileSync(path.join(here, '..', '..', '..', 'design', 'mockup', 'src', 'pip-prime.js'), 'utf8');

const parseVars = block => { const o = {}; for (const m of block.matchAll(/--([\w]+):\s*([^;}]+?)\s*(?=;|\}|$)/g)) o[m[1]] = m[2].trim(); return o; };
const darkBlock = src.match(/\.st-pp\{([^}]*?)(?=\n\s*font-family)/s)[1];
const lightBlock = src.match(/\.st-pp\[data-th=light\]\{([^}]*)\}/)[1];
const dark = parseVars(darkBlock), light = parseVars(lightBlock);
const ORDER = ['bg', 's1', 's2', 'ink', 'mut', 'line', 'ac', 'ac2', 'acInk', 'gold', 'gold2', 'good', 'warn', 'card', 'glow'];
const missing = ORDER.filter(k => !(k in dark) || !(k in light)); if (missing.length) throw new Error('missing tokens ' + missing);
const NOTE = {
  bg: 'Screen background', s1: 'Surface 1: cards, pills, side bar', s2: 'Surface 2: raised or selected surface', ink: 'Primary text', mut: 'Muted (secondary) text and icons',
  line: 'Hairlines and borders (translucent)', ac: 'Accent: buttons, links, active states', ac2: 'Accent light: gradient top, highlights, links on dark', acInk: 'Text or icon colour on top of the accent',
  gold: 'Gold: XP ring, streak, level and reward highlights', gold2: 'Gold light: gradient top for gold chips', good: 'Success', warn: 'Warning', card: 'Card, bubble and toast background', glow: 'Soft accent glow behind screens and buttons (translucent)',
};
const TIERS = { bronze: ['#F6C9A0', '#C98A52', '#7A4516', '#4A2A0C'], silver: ['#FAFCFE', '#C3CED9', '#6B7888', '#2F3B49'], gold: ['#FFF3B0', '#FFC94A', '#B97A08', '#5A3A00'] };
const TIER_ROLES = ['light', 'mid', 'dark', 'icon'];

/* Pip ramps: source (red original) hex -> role. Values come from the tint maps. */
const PIP = [
  ['body', 'base', 'E5322B', 'Main body colour, belt-less gradient middle, ribbon'],
  ['body', 'lid_a', 'EC4034', 'Eyelids (top lid, lower lid)'],
  ['body', 'lid_b', 'EE4537', 'Top lid gradient start'],
  ['body', 'lid_c', 'E8392E', 'Lower lid gradient end'],
  ['highlight', 'top', 'FF6B5C', 'Body gradient top-left'],
  ['highlight', 'arm', 'FF5E50', 'Arm gradient start'],
  ['highlight', 'cheek', 'FF8E7A', 'Cheek blush'],
  ['highlight', 'glint', 'FFB1A6', 'Small glints on scissor grips and lid edge'],
  ['shade', 'body_end', 'A9151A', 'Body gradient bottom-right'],
  ['shade', 'arm_end', 'B8191C', 'Arm gradient end'],
  ['shade', 'ribbon_dark', 'C81F22', 'Medal ribbon (back tail)'],
  ['shade', 'lid_edge', 'D0312A', 'Top lid gradient end'],
  ['shade', 'lid_low', 'C42A24', 'Lower lid gradient start'],
  ['shade', 'misc', 'B3181B', 'Reserved shade, same family as arm_end'],
  ['rim', 'a', 'FFD2C4', 'Rim light gradient stop'],
  ['rim', 'b', 'FFE6DC', 'Rim light edge'],
  ['rim', 'c', 'FFF1EA', 'Motion swoosh'],
  ['shadow', 'outline', '7A1216', 'Body outline, arm outline, medal ribbon outline'],
  ['shadow', 'deep', '5E0A0E', 'Belt shadow, eye socket shadow'],
  ['shadow', 'deeper', '4A0508', 'Inner shade at body edge, dome shadow'],
  ['shadow', 'mouth', '3B0A10', 'Mouth inside'],
  ['shadow', 'lash_soft', '3A0A10', 'Upper eye shade (12 percent)'],
  ['shadow', 'lash', '2A0A10', 'Eye outline and lashes'],
  ['shadow', 'mouth_line', '2A070C', 'Mouth outline'],
  ['shadow', 'stage', '3A1618', 'Stage background in the casting room (not used in the app)'],
];
const hex = h => '#' + h.toUpperCase();
const pipRamp = (map) => Object.fromEntries(PIP.map(([role, name, red]) => [`${role}_${name}`, { hex: hex(map[red]), source_red: hex(red), role, note: PIP.find(p => p[2] === red)[3] }]));
const PIP_CONST = {
  ink: ['#1E2036', 'Dark ink: brows, clapper board, scissor grip edge'], steel_outline: ['#4E5668', 'Steel outline'], steel_hi: ['#FBFCFE', 'Steel highlight'], steel_mid: ['#C9CFD8', 'Steel mid'],
  steel_lo: ['#9AA2B0', 'Steel shadow'], steel_engrave: ['#6F7889', 'Belt engraving'], mitt_a: ['#FFFFFF', 'Glove top'], mitt_b: ['#E3D9CF', 'Glove bottom'], mitt_outline: ['#8E6F66', 'Glove outline'],
  foot_a: ['#3A3E58', 'Foot top'], foot_b: ['#14162A', 'Foot bottom'], sclera_a: ['#FFFFFF', 'Eye white centre'], sclera_b: ['#D9D3DC', 'Eye white edge'],
  iris_a: ['#7FD7FF', 'Iris centre'], iris_b: ['#2F7BD0', 'Iris'], iris_c: ['#1B2E73', 'Iris edge'], iris_d: ['#121A45', 'Iris rim'], pupil: ['#070A1E', 'Pupil'],
  gold_a: ['#FFF3B8', 'Medal gold highlight'], gold_b: ['#FFC94A', 'Medal gold'], gold_c: ['#C7810E', 'Medal gold shade'], gold_rim_a: ['#FFE9A0', 'Medal rim light'], gold_rim_b: ['#B06E07', 'Medal rim dark'],
  flame_top: ['#FFD45A', 'Streak flame top'], flame_bottom: ['#FF6A2B', 'Streak flame bottom'], light_outline: ['#7B6443', 'Thin warm outline drawn around Pip on the creamy theme'],
};

/* ---- colors.json ---- */
const themeObj = v => Object.fromEntries(ORDER.map(k => [k, { value: v[k], note: NOTE[k] }]));
const json = {
  _about: 'Image Swiss Knife colour tokens. Source: .st-pp CSS in design/mockup/src/pip-prime.js, tint maps in design/mockup/tint.mjs. Dark = Turkish blue theme, light = creamy white theme.',
  android_prefix: 'isk_',
  themes: { dark: themeObj(dark), light: themeObj(light) },
  pip: { dark: pipRamp(DARK), light: pipRamp(LIGHT), constants: Object.fromEntries(Object.entries(PIP_CONST).map(([k, [h, n]]) => [k, { hex: h, note: n }])) },
  tiers: Object.fromEntries(Object.entries(TIERS).map(([t, a]) => [t, Object.fromEntries(a.map((h, i) => [TIER_ROLES[i], h]))])),
  tier_note: 'light and mid make the badge gradient, dark is the lower gradient stop, icon is the stroke colour of the icon on the badge.',
  tint_maps: { dark: DARK, light: LIGHT },
};
write(path.join(ASSETS, 'palette', 'colors.json'), JSON.stringify(json, null, 1) + '\n');

/* ---- colors.xml ---- */
const rgba = v => { const m = v.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/); if (!m) return (/^#[0-9a-f]{3}$/i.test(v) ? '#' + [...v.slice(1)].map(c => c + c).join('') : v).toUpperCase(); const a = Math.round(+m[4] * 255).toString(16).padStart(2, '0'); return ('#' + a + [m[1], m[2], m[3]].map(n => (+n).toString(16).padStart(2, '0')).join('')).toUpperCase(); };
const snake = k => k.replace(/([A-Z])/g, '_$1').toLowerCase();
const xml = (title, v, pip, extra) => `<?xml version="1.0" encoding="utf-8"?>\n<!-- ${title} -->\n<resources>\n    <!-- UI tokens -->\n` +
  ORDER.map(k => `    <color name="isk_${snake(k)}">${rgba(v[k])}</color><!-- ${NOTE[k]} -->`).join('\n') +
  `\n\n    <!-- Pip colour ramp (follows the theme) -->\n` + Object.entries(pip).map(([k, o]) => `    <color name="isk_pip_${k}">${o.hex}</color>`).join('\n') + (extra || '') + `\n</resources>\n`;
const constXml = `\n\n    <!-- Pip constants (same in both themes) -->\n` + Object.entries(PIP_CONST).map(([k, [h]]) => `    <color name="isk_pip_${k}">${h}</color>`).join('\n') +
  `\n\n    <!-- Badge tiers (same in both themes) -->\n` + Object.entries(TIERS).flatMap(([t, a]) => a.map((h, i) => `    <color name="isk_tier_${t}_${TIER_ROLES[i]}">${h}</color>`)).join('\n');
write(path.join(ASSETS, 'palette', 'colors.xml'), xml('res/values/colors.xml: LIGHT (creamy white) theme, the day theme. Set AppCompatDelegate night mode to YES to make dark the app default', light, pipRamp(LIGHT), constXml));
write(path.join(ASSETS, 'palette', 'colors-night.xml'), xml('res/values-night/colors.xml: DARK (Turkish blue) theme. Only the colours that change with the theme; the constants (Pip steel, gold, tiers) live in values/colors.xml.', dark, pipRamp(DARK), ''));

/* ---- tokens.css ---- */
const cssVars = (v, pip) => ORDER.map(k => `  --isk-${snake(k).replace(/_/g, '-')}: ${v[k]};`).join('\n') + '\n' + Object.entries(pip).map(([k, o]) => `  --isk-pip-${k.replace(/_/g, '-')}: ${o.hex};`).join('\n');
const css = `/* Image Swiss Knife colour tokens (generated from the mockup). Dark = Turkish blue, light = creamy white.
   Usage: <html data-theme="dark"> or data-theme="light". With no attribute it follows the system setting (dark by default). */
:root, :root[data-theme="dark"] {
${cssVars(dark, pipRamp(DARK))}
  --isk-shadow: 0 10px 30px rgba(0,0,0,.35);
  --isk-pip-outline-css: none;
${Object.entries(PIP_CONST).map(([k, [h]]) => `  --isk-pip-${k.replace(/_/g, '-')}: ${h};`).join('\n')}
${Object.entries(TIERS).flatMap(([t, a]) => a.map((h, i) => `  --isk-tier-${t}-${TIER_ROLES[i]}: ${h};`)).join('\n')}
}
:root[data-theme="light"] {
${cssVars(light, pipRamp(LIGHT))}
  --isk-shadow: 0 10px 26px rgba(90,70,30,.18);
  /* thin warm outline around Pip on cream (apply as: filter: var(--isk-pip-outline-css)) */
  --isk-pip-outline-css: drop-shadow(1.5px 0 0 #7b6443) drop-shadow(-1.5px 0 0 #7b6443) drop-shadow(0 1.5px 0 #7b6443) drop-shadow(0 -1.5px 0 #7b6443);
}
@media (prefers-color-scheme: light) {
  :root:not([data-theme]) {
${cssVars(light, pipRamp(LIGHT)).replace(/^/gm, '  ')}
    --isk-shadow: 0 10px 26px rgba(90,70,30,.18);
    --isk-pip-outline-css: drop-shadow(1.5px 0 0 #7b6443) drop-shadow(-1.5px 0 0 #7b6443) drop-shadow(0 1.5px 0 #7b6443) drop-shadow(0 -1.5px 0 #7b6443);
  }
}
`;
write(path.join(ASSETS, 'palette', 'tokens.css'), css);
console.log('palette written', Object.keys(dark).join(','));
