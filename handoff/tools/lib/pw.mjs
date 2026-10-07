import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const require = createRequire(execSync('npm root -g').toString().trim() + '/');
export const { chromium } = require('playwright');
export const here = path.dirname(fileURLToPath(import.meta.url));
export const ASSETS = path.join(here, '..', '..', 'assets');
export const RIG = path.join(ASSETS, 'character', 'rig');
export const rig = f => fs.readFileSync(path.join(RIG, f), 'utf8');
export const mkdir = p => fs.mkdirSync(p, { recursive: true });
export const write = (p, s) => { mkdir(path.dirname(p)); fs.writeFileSync(p, s); };

/* A page with the rig loaded (cast.js + both tinted builds + original). */
export async function rigPage(browser, viewport = { width: 600, height: 600 }) {
  const page = await browser.newPage({ viewport });
  const errs = [];
  page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  page.on('pageerror', e => errs.push(String(e)));
  await page.setContent('<!doctype html><html><body style="margin:0"><div id="host"></div></body></html>');
  await page.addScriptTag({ content: rig('cast.js').replace('return { blink,', 'return { blink: (window.__fb ?? blink),') + '\nwindow.CAST = CAST;' });
  for (const f of ['01-pip.js', 'pip-dark.js', 'pip-light.js']) await page.addScriptTag({ content: rig(f) });
  page.errs = errs;
  return page;
}
export async function render(page, svgText, size, { transparent = true, bg = null } = {}) {
  await page.setViewportSize({ width: size, height: size });
  const html = `<!doctype html><html><body style="margin:0;background:${bg || 'transparent'}"><div style="width:${size}px;height:${size}px">${svgText.replace('<svg ', `<svg width="${size}" height="${size}" `)}</div></body></html>`;
  await page.setContent(html);
  return page.screenshot({ omitBackground: transparent, clip: { x: 0, y: 0, width: size, height: size } });
}
