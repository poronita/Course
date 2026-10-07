// Builds the app-icon pack: adaptive foreground/background/monochrome, Play Store 512, maskable 1024, favicon.
import fs from 'node:fs';
import path from 'node:path';
import { chromium, rigPage, render, ASSETS, here, write } from './lib/pw.mjs';

const OUT = path.join(ASSETS, 'app-icon');
const b = await chromium.launch();
const page = await rigPage(b, { width: 500, height: 500 });
await page.addScriptTag({ path: path.join(here, 'svgclean.js') });
await page.addScriptTag({ path: path.join(here, 'pose.js') });
await page.addStyleTag({ content: '#host{width:400px;height:400px;position:absolute;left:0;top:0}#host svg{width:100%;height:100%}' });

/* Pip artwork for the icon: happy face, resting between hops (hop height 0), shadow removed. */
const MT = Math.PI / 5.5;
const art = {};
for (const th of ['dark', 'light']) {
  art[th] = await page.evaluate(([th, mt]) => {
    const { m } = mountPose(th, 'happy', 4.0, mt);
    m.svg.children[1].children[0].style.display = 'none'; m.svg.children[1].children[2].children[13].style.display = 'none'; // no shadow, no arms (they would show as stubs at the window edge)
    const d = PIPX.clean(m.svg, { prefix: `pip-${th}-appicon` });
    if (th === 'light') PIPX.addOutline(d, `pip-light-appicon-ol`, false);
    return PIPX.serialize(d, false, 0).replace(/^<svg[^>]*>\n/, '').replace(/<\/svg>\n$/, '');
  }, [th, MT]);
}

/* Geometry. Pip rig coordinates (400 box) -> icon coordinates. The window disc has radius R in rig units around (CX, CY). */
const CX = 203, CY = 150, R = 124;
const THEME = {
  dark: { bg: ['#137391', '#0C5A72', '#083D50'], disc: ['#0F6A84', '#0A4A60'], ring: '#9FE6F4', mono: '#000000' },
  light: { bg: ['#FBF5E6', '#F3E8CF', '#E8D9B5'], disc: ['#FFFCF4', '#F0E6CE'], ring: '#7B6443', mono: '#000000' },
};
/* iconSvg: size px square, canvas 108 units. r = radius of the window disc in canvas units. */
function composite({ th, size = 108, r = 33, bg = true, fg = true, vb = 108, id }) {
  const t = THEME[th], s = r / R, tx = 54 - CX * s, ty = 54 - CY * s;
  const pid = `${id}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vb} ${vb}" width="${size}" height="${size}" role="img">
  <title>Image Swiss Knife app icon (${th === 'dark' ? 'Turkish blue' : 'creamy white'})</title>
  <defs>
    <linearGradient id="${pid}-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.bg[0]}"/><stop offset=".55" stop-color="${t.bg[1]}"/><stop offset="1" stop-color="${t.bg[2]}"/></linearGradient>
    <radialGradient id="${pid}-disc" cx=".4" cy=".3" r=".85"><stop offset="0" stop-color="${t.disc[0]}"/><stop offset="1" stop-color="${t.disc[1]}"/></radialGradient>
    <clipPath id="${pid}-clip"><circle cx="54" cy="54" r="${r}"/></clipPath>
  </defs>
${bg ? `  <rect width="108" height="108" fill="url(#${pid}-bg)"/>\n` : ''}${fg ? `  <circle cx="54" cy="54" r="${r}" fill="url(#${pid}-disc)"/>
  <g clip-path="url(#${pid}-clip)">
    <svg x="${tx.toFixed(3)}" y="${ty.toFixed(3)}" width="${(400 * s).toFixed(3)}" height="${(400 * s).toFixed(3)}" viewBox="0 0 400 400" overflow="visible">
${art[th].replace(/^/gm, '      ')}    </svg>
  </g>
  <circle cx="54" cy="54" r="${r - 0.4}" fill="none" stroke="${t.ring}" stroke-opacity="${th === 'dark' ? '.35' : '.45'}" stroke-width=".8"/>\n` : ''}</svg>
`;
}
const files = {};
for (const th of ['dark', 'light']) {
  const sfx = th === 'dark' ? '' : '-light';
  files[`ic_launcher_foreground${sfx}.svg`] = composite({ th, bg: false, id: `isk-fg-${th}` });
  files[`ic_launcher_background${sfx}.svg`] = composite({ th, fg: false, id: `isk-bgl-${th}` });
  files[`ic_launcher_full${sfx}.svg`] = composite({ th, id: `isk-full-${th}` });          // background + foreground, for previews
  files[`ic_launcher_maskable${sfx}.svg`] = composite({ th, r: 41, id: `isk-mask-${th}` });   // bigger window: still inside the 80 percent maskable circle
}
for (const [n, s] of Object.entries(files)) write(path.join(OUT, n), s);

const rp = await b.newPage();
const png = async (svgName, size, outName, o = {}) => write(path.join(OUT, outName), await render(rp, files[svgName].replace(/ width="108" height="108"/, ''), size, o));
for (const th of ['dark', 'light']) {
  const sfx = th === 'dark' ? '' : '-light';
  await png(`ic_launcher_foreground${sfx}.svg`, 432, `ic_launcher_foreground${sfx}-432.png`, { transparent: true });
  await png(`ic_launcher_full${sfx}.svg`, 512, `playstore-icon-512${sfx}.png`, { transparent: false });
  await png(`ic_launcher_maskable${sfx}.svg`, 1024, `maskable-icon-1024${sfx}.png`, { transparent: false });
  await png(`ic_launcher_full${sfx}.svg`, 192, `preview-launcher-192${sfx}.png`, { transparent: false });
}
console.log(page.errs.length ? page.errs : 'ok');
await b.close();
