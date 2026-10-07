// Builds badges/svg/*: medals (from the mockup medal() and TIERS), trophy, chest, flame, coin, crown, ribbon, blade, rank badges.
import fs from 'node:fs';
import path from 'node:path';
import { ASSETS, here, write } from './lib/pw.mjs';
import { DARK, LIGHT } from '../../design/mockup/tint.mjs';

const engine = fs.readFileSync(path.join(here, '..', '..', '..', 'design', 'src', 'engine.js'), 'utf8');
const ICONS = new Function('return ' + engine.match(/const ICONS = (\{[\s\S]*?\n  \});/)[1])();
const OUT = path.join(ASSETS, 'badges', 'svg');
fs.rmSync(OUT, { recursive: true, force: true });
const NS = 'xmlns="http://www.w3.org/2000/svg"';
const TIERS = { bronze: ['#F6C9A0', '#C98A52', '#7A4516', '#4A2A0C'], silver: ['#FAFCFE', '#C3CED9', '#6B7888', '#2F3B49'], gold: ['#FFF3B0', '#FFC94A', '#B97A08', '#5A3A00'] };
const files = [];
const put = (name, svg) => { write(path.join(OUT, name), svg); files.push(name); };
const f = n => +n.toFixed(3);

/* ---- tier medal (same shield as medal() in pip-prime.js, viewBox 64 x 72) ---- */
const lum = h => { const n = parseInt(h.slice(1), 16); return .2126 * (n >> 16) + .7152 * ((n >> 8) & 255) + .0722 * (n & 255); };
const grey = (h, k = 0.6) => { const v = Math.round(lum(h) * k).toString(16).padStart(2, '0'); return '#' + v + v + v; };
function medal({ id, tier, icon, locked, title }) {
  let c = TIERS[tier];
  if (locked) c = c.map(h => grey(h));
  const g = 'mg-' + id;
  const body = locked ? ICONS.lock : icon ? ICONS[icon] : '';
  const ic = body ? `\n  <g transform="translate(32 29.6) scale(1.1556) translate(-12 -12)" fill="none" stroke="${c[3]}" stroke-width="${locked ? 2.2 : 2.2}" stroke-linecap="round" stroke-linejoin="round">${body}</g>` : '';
  return `<svg ${NS} viewBox="0 0 64 72" width="256" height="288" role="img">
  <title>${title}</title>
  <defs>
    <linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset=".5" stop-color="${c[1]}"/><stop offset="1" stop-color="${c[2]}"/></linearGradient>
    <linearGradient id="${g}-f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c[1]}"/><stop offset="1" stop-color="${c[2]}"/></linearGradient>
  </defs>
  <g${locked ? ' opacity=".55"' : ''}>
  <path d="M32 2 60 12v24c0 18-12 29-28 34C16 65 4 54 4 36V12z" fill="url(#${g})"/>
  <path d="M32 8 54 16v20c0 14-9 23-22 28C19 59 10 50 10 36V16z" fill="url(#${g}-f)" stroke="#fff" stroke-opacity=".55" stroke-width="1.2"/>
  <path d="M32 8 54 16v8C44 22 20 22 10 24v-8z" fill="#fff" fill-opacity=".22"/>${ic}
  </g>
</svg>
`;
}
const BADGES = [['feather-weight', 'Feather Weight', 'shrink', 'bronze'], ['perfect-square', 'Perfect Square', 'crop', 'bronze'], ['privacy-guard', 'Privacy Guard', 'shield', 'silver'], ['loop-master', 'Loop Master', 'film', 'bronze'], ['streak-12', 'Streak 12', 'star', 'gold'], ['early-bird', 'Early Bird', 'sparkle', 'silver'], ['format-hopper', 'Format Hopper', 'convert', 'bronze'], ['super-fan', 'Super Fan', 'heart', 'gold']];
for (const [slug, name, icon, tier] of BADGES) put(`badge-${slug}.svg`, medal({ id: slug, tier, icon, title: `${name} badge (${tier})` }));
for (const t of Object.keys(TIERS)) put(`medal-${t}-blank.svg`, medal({ id: t + '-blank', tier: t, title: `${t} medal, blank` }));
for (const t of Object.keys(TIERS)) put(`medal-locked-${t}.svg`, medal({ id: 'locked-' + t, tier: t, locked: true, title: `Locked medal (${t} tier, greyed)` }));

/* ---- level medal (the gold LV medal Pip holds up, ribbons tinted to the theme) ---- */
const lvGlyphs = () => {
  const fsL = 11, fs8 = 28, f2 = (fs, k) => +(k * fs).toFixed(2);
  const tw = f2(fsL, 1.28) + 1.5, x0 = -tw / 2, x1 = x0 + f2(fsL, .5) + 1.5, y = -6;
  const LV = `M${f(x0 + f2(fsL, .08))} ${f(y - f2(fsL, .72))}V${f(y - f2(fsL, .07))}H${f(x0 + f2(fsL, .52))}M${f(x1 + f2(fsL, .03))} ${f(y - f2(fsL, .7))}L${f(x1 + f2(fsL, .35))} ${f(y - f2(fsL, .07))}L${f(x1 + f2(fsL, .68))} ${f(y - f2(fsL, .7))}`;
  const el = (cx, cy, rx, ry) => `M${f(cx - rx)} ${f(cy)}a${rx} ${ry} 0 1 0 ${f(2 * rx)} 0a${rx} ${ry} 0 1 0 ${f(-2 * rx)} 0z`;
  const y8 = 19, N8 = el(0, f(y8 - f2(fs8, .5)), f2(fs8, .15), f2(fs8, .13)) + el(0, f(y8 - f2(fs8, .2)), f2(fs8, .19), f2(fs8, .17));
  return { LV, N8, wLV: f2(fsL, .17), w8: f2(fs8, .14) };
};
function levelMedal(map, num = '8', asText = false) {
  const m = k => '#' + (map ? map[k] : k);
  const G = lvGlyphs(), id = map === LIGHT ? 'lvl-light' : 'lvl-dark';
  const numEl = asText
    ? `<text id="level-number" x="0" y="19" text-anchor="middle" font-family="'Bricolage Grotesque','Hanken Grotesk',system-ui,sans-serif" font-weight="900" font-size="28" fill="#7A3F03">${num}</text>`
    : `<path id="level-number" d="${G.N8}" fill="none" stroke="#7A3F03" stroke-width="${G.w8}" stroke-linejoin="round"/>`;
  const lv = asText
    ? `<text x="0" y="-6" text-anchor="middle" font-family="'Hanken Grotesk',system-ui,sans-serif" font-weight="900" font-size="11" letter-spacing="1.5" fill="#8A4B05">LV</text>`
    : `<path d="${G.LV}" fill="none" stroke="#8A4B05" stroke-width="${G.wLV}" stroke-linejoin="round"/>`;
  return `<svg ${NS} viewBox="-36 -36 72 92" width="288" height="368" role="img">
  <title>Level medal</title>
  <defs>
    <radialGradient id="${id}-gold" cx=".38" cy=".32" r=".8"><stop offset="0" stop-color="#FFF3B8"/><stop offset=".45" stop-color="#FFC94A"/><stop offset="1" stop-color="#C7810E"/></radialGradient>
    <linearGradient id="${id}-rim" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE9A0"/><stop offset="1" stop-color="#B06E07"/></linearGradient>
  </defs>
  <path d="M-6 0L-22 44L-12 40L-6 52L4 6Z" fill="${m('C81F22')}" stroke="${m('7A1216')}" stroke-width="2" stroke-linejoin="round"/>
  <path d="M6 0L22 44L12 40L6 52L-4 6Z" fill="${m('E5322B')}" stroke="${m('7A1216')}" stroke-width="2" stroke-linejoin="round"/>
  <circle r="33" fill="url(#${id}-rim)" stroke="#8A5406" stroke-width="2.5"/>
  <circle r="26" fill="url(#${id}-gold)" stroke="#B67809" stroke-width="1.6"/>
  ${lv}
  ${numEl}
</svg>
`;
}
put('level-medal.svg', levelMedal(DARK));
put('level-medal-light.svg', levelMedal(LIGHT));
put('level-medal-text.svg', levelMedal(DARK, '8', true));

/* ---- ribbon (the two tails of the level medal on their own) ---- */
const ribbon = (map, id) => `<svg ${NS} viewBox="-26 -4 52 62" width="208" height="248" role="img">
  <title>Ribbon</title>
  <path d="M-6 0L-22 44L-12 40L-6 52L4 6Z" fill="#${map.C81F22}" stroke="#${map['7A1216']}" stroke-width="2" stroke-linejoin="round"/>
  <path d="M6 0L22 44L12 40L6 52L-4 6Z" fill="#${map.E5322B}" stroke="#${map['7A1216']}" stroke-width="2" stroke-linejoin="round"/>
</svg>
`;
put('ribbon.svg', ribbon(DARK)); put('ribbon-light.svg', ribbon(LIGHT));

/* ---- trophy (cupSVG), gold blade skin (bladeSVG), flame ---- */
put('trophy.svg', `<svg ${NS} viewBox="0 0 48 48" width="240" height="240" role="img">
  <title>Weekly trophy</title>
  <defs><linearGradient id="trophy-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF3B0"/><stop offset=".5" stop-color="#FFC94A"/><stop offset="1" stop-color="#B97A08"/></linearGradient></defs>
  <path d="M14 6h20v10c0 8-5 13-10 13S14 24 14 16z" fill="url(#trophy-g)"/>
  <path d="M14 9H7c0 7 3 11 8 12M34 9h7c0 7-3 11-8 12" fill="none" stroke="#E0A21B" stroke-width="3" stroke-linecap="round"/>
  <rect x="21" y="28" width="6" height="8" fill="#E0A21B"/>
  <rect x="15" y="36" width="18" height="6" rx="2" fill="url(#trophy-g)"/>
  <path d="M19 10c0 6 1 9 4 11" stroke="#fff" stroke-opacity=".6" stroke-width="2.4" fill="none" stroke-linecap="round"/>
</svg>
`);
put('skin-gold-blade.svg', `<svg ${NS} viewBox="0 0 48 48" width="240" height="240" role="img">
  <title>Gold blade skin</title>
  <defs><linearGradient id="goldblade-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#B97A08"/><stop offset=".4" stop-color="#FFF3B0"/><stop offset="1" stop-color="#FFC94A"/></linearGradient></defs>
  <path d="M30 4C22 10 20 22 22 34l8 0C30 24 32 12 30 4z" fill="url(#goldblade-g)"/>
  <rect x="19" y="34" width="14" height="9" rx="3" fill="#7A8696"/>
  <path d="M26 8c-2 6-2 12-1 20" stroke="#fff" stroke-opacity=".7" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>
`);
put('flame.svg', `<svg ${NS} viewBox="0 0 24 24" width="240" height="240" role="img">
  <title>Streak flame</title>
  <defs><linearGradient id="flame-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD45A"/><stop offset="1" stop-color="#FF6A2B"/></linearGradient></defs>
  <path fill="url(#flame-g)" d="M12.3 1.5c.9 3.7-2.9 5-2.9 9.2 0 1 .4 1.9 1 2.5-.2-1.4.6-2.6 1.6-3.4 0 2 2.9 2.7 2.9 5.3 0 1.9-1.5 3.4-3.4 3.4a4.4 4.4 0 0 1-4.4-4.4c0-1 .3-1.8.7-2.5C4.8 12.4 3 14.2 3 16.8 3 20.8 6.8 23 11 23s8-2.3 8-7.4c0-5.2-5-7-6.7-14.1z"/>
</svg>
`);

/* ---- chest (chestHTML): closed and open, Turkish blue (dark) and creamy (light) themes ---- */
const CHEST = { dark: ['#2BB3D1', '#6FD6EA'], light: ['#0E7C99', '#14A0C2'] };
for (const [th, c] of Object.entries(CHEST)) for (const open of [false, true]) {
  const sfx = th === 'dark' ? '' : '-light', id = `chest-${open ? 'open' : 'closed'}${sfx}`;
  put(`${id}.svg`, `<svg ${NS} viewBox="${open ? '-24 -32 102 102' : '0 0 78 70'}" width="${open ? 306 : 234}" height="${open ? 306 : 210}" role="img">
  <title>Daily chest, ${open ? 'open' : 'closed'}</title>
  <defs><linearGradient id="${id}-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c[1]}"/><stop offset="1" stop-color="${c[0]}"/></linearGradient>${open ? `<radialGradient id="${id}-glow"><stop offset="0" stop-color="#FFF3B8" stop-opacity=".95"/><stop offset=".55" stop-color="#FFE08A" stop-opacity=".7"/><stop offset="1" stop-color="#FFE08A" stop-opacity="0"/></radialGradient>` : ''}</defs>
  <rect x="8" y="34" width="62" height="30" rx="6" fill="url(#${id}-g)"/>
  <rect x="8" y="44" width="62" height="5" fill="#000" fill-opacity=".2"/>
  <rect x="34" y="40" width="10" height="14" rx="3" fill="#FFC94A"/>
  <g${open ? ' transform="rotate(-70 8 36)"' : ''}>
    <path d="M8 36V28Q8 14 39 14T70 28v8z" fill="url(#${id}-g)"/>
    <path d="M8 28Q8 14 39 14T70 28" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="2"/>
  </g>${open ? `\n  <circle cx="39" cy="30" r="24" fill="url(#${id}-glow)"/>` : ''}
</svg>
`);
}

/* ---- XP coin ---- */
put('coin-xp.svg', `<svg ${NS} viewBox="0 0 64 64" width="256" height="256" role="img">
  <title>XP coin</title>
  <defs>
    <linearGradient id="coin-rim" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE9A0"/><stop offset="1" stop-color="#B06E07"/></linearGradient>
    <radialGradient id="coin-face" cx=".38" cy=".32" r=".8"><stop offset="0" stop-color="#FFF3B8"/><stop offset=".45" stop-color="#FFC94A"/><stop offset="1" stop-color="#C7810E"/></radialGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="url(#coin-rim)" stroke="#8A5406" stroke-width="2.5"/>
  <circle cx="32" cy="32" r="23.5" fill="url(#coin-face)" stroke="#B67809" stroke-width="1.6"/>
  <path d="M20 24.5l11 15M31 24.5l-11 15M35.5 40V24.5h5a4.5 4.5 0 0 1 0 9h-5" fill="none" stroke="#7A3F03" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 22A19 19 0 0 1 26 13" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2.6" stroke-linecap="round"/>
</svg>
`);

/* ---- crown ---- */
put('crown.svg', `<svg ${NS} viewBox="0 0 64 56" width="256" height="224" role="img">
  <title>Crown</title>
  <defs>
    <linearGradient id="crown-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF3B0"/><stop offset=".5" stop-color="#FFC94A"/><stop offset="1" stop-color="#B97A08"/></linearGradient>
    <linearGradient id="crown-band" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFC94A"/><stop offset="1" stop-color="#B97A08"/></linearGradient>
    <radialGradient id="crown-gem" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".5" stop-color="#7FD7FF"/><stop offset="1" stop-color="#1B8CA8"/></radialGradient>
  </defs>
  <path d="M8 42L4 14l16 14L32 8l12 20 16-14-4 28z" fill="url(#crown-g)" stroke="#8A5406" stroke-width="2.4" stroke-linejoin="round"/>
  <rect x="8" y="42" width="48" height="9" rx="3" fill="url(#crown-band)" stroke="#8A5406" stroke-width="2.4" stroke-linejoin="round"/>
  <circle cx="4" cy="14" r="3.6" fill="url(#crown-gem)" stroke="#8A5406" stroke-width="1.6"/>
  <circle cx="32" cy="8" r="4.2" fill="url(#crown-gem)" stroke="#8A5406" stroke-width="1.6"/>
  <circle cx="60" cy="14" r="3.6" fill="url(#crown-gem)" stroke="#8A5406" stroke-width="1.6"/>
  <circle cx="32" cy="46.500" r="2.2" fill="#fff" fill-opacity=".85"/>
  <path d="M13 38L10.500 21M24 30l3-9" stroke="#fff" stroke-opacity=".6" stroke-width="2.2" fill="none" stroke-linecap="round"/>
</svg>
`);

/* ---- rank badges (pill from the level-up screen: gold gradient, star, rank name) ---- */
const star = (stroke) => `<g transform="translate(13 8.500) scale(.625)" fill="none" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${ICONS.star}</g>`;
function rank(name, tier) {
  const pal = tier === 'gold' ? { a: '#FFE08A', b: '#FFC94A', ink: '#2a1d00', glow: '#FFBE32' } : { a: '#FAFCFE', b: '#C3CED9', ink: '#2F3B49', glow: '#9AA8B8' };
  const slug = name.toLowerCase();
  for (const withText of [true, false]) put(`rank-badge-${slug}${withText ? '' : '-shape'}.svg`, `<svg ${NS} viewBox="0 0 124 32" width="372" height="96" role="img">
  <title>${name} rank badge</title>
  <defs><linearGradient id="rank-${slug}${withText ? '' : '-s'}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${pal.a}"/><stop offset="1" stop-color="${pal.b}"/></linearGradient></defs>
  <rect x="1" y="1" width="122" height="30" rx="15" fill="url(#rank-${slug}${withText ? '' : '-s'})" stroke="${pal.glow}" stroke-opacity=".6"/>
  ${star(pal.ink)}${withText ? `\n  <text id="rank-name" x="36" y="21" font-family="'Hanken Grotesk',system-ui,sans-serif" font-weight="800" font-size="13" fill="${pal.ink}">${name}</text>` : ''}
</svg>
`);
}
rank('Craftsman', 'silver'); rank('Artisan', 'gold');

fs.writeFileSync(path.join(ASSETS, 'badges', 'badges.json'), JSON.stringify({ tiers: TIERS, badges: BADGES.map(([slug, name, icon, tier]) => ({ file: `svg/badge-${slug}.svg`, name, icon, tier })), files }, null, 1));
console.log(files.length, 'badge files');
