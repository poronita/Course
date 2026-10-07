#!/usr/bin/env node
// Screenshot a built page at given times and modes.
//   node design/tools/shoot.mjs --page /path/page.html --style calm --modes app,web --times 1,5,10 --outdir /tmp/x
// Captures only the device (stage) area. Prints console errors.
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require(require('node:child_process').execSync('npm root -g').toString().trim() + '/playwright')); }
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const page = resolve(opt('--page'));
const style = opt('--style');
const modes = opt('--modes', 'app,web').split(',');
const times = opt('--times', '1,6,12,20,27,33,38').split(',').map(Number);
const outdir = resolve(opt('--outdir', './shots'));
mkdirSync(outdir, { recursive: true });

const proxy = process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined;
const browser = await chromium.launch({ proxy });
const ctx = await browser.newContext({ viewport: { width: 1500, height: 1000 }, deviceScaleFactor: 1 });
const p = await ctx.newPage();
const errors = [];
p.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
p.on('pageerror', e => errors.push(String(e)));
await p.goto('file://' + page + (style ? `#${style}-app` : ''));
await p.waitForTimeout(1200);
await p.evaluate(() => document.fonts && document.fonts.ready);
for (const m of modes) {
  await p.evaluate(m => { window.__lab.pause(); window.__lab.mode(m); }, m);
  await p.waitForTimeout(300);
  for (const t of times) {
    await p.evaluate(t => window.__lab.seek(t), t);
    await p.waitForTimeout(160);
    await p.evaluate(t => window.__lab.seek(t), t); // second pass: pointer resolves against settled layout
    const file = join(outdir, `${style || 'all'}-${m}-${String(t).padStart(4, '0')}.png`);
    await p.locator('#device').screenshot({ path: file });
    console.log(file);
  }
}
// Contact sheet per mode: all frames in one image, labelled with their time.
for (const m of modes) {
  const cols = m === 'app' ? 8 : 4, w = m === 'app' ? 230 : 470;
  const cells = times.map(t => `<figure><img src="${join(outdir, `${style || 'all'}-${m}-${String(t).padStart(4, '0')}.png`)}"><figcaption>${t}s</figcaption></figure>`).join('');
  const sheet = await ctx.newPage();
  await sheet.setViewportSize({ width: cols * (w + 10) + 10, height: 600 });
  const sheetHtml = join(outdir, `sheet-${style || 'all'}-${m}.html`);
  writeFileSync(sheetHtml, `<style>body{margin:0;padding:5px;background:#888;font:bold 14px sans-serif;display:grid;grid-template-columns:repeat(${cols},${w}px);gap:10px}figure{margin:0}img{width:${w}px;display:block}figcaption{color:#fff;padding:2px 0}</style>${cells}`);
  await sheet.goto('file://' + sheetHtml);
  await sheet.waitForTimeout(300);
  const file = join(outdir, `sheet-${style || 'all'}-${m}.png`);
  await sheet.screenshot({ path: file, fullPage: true });
  console.log('SHEET ' + file);
  await sheet.close();
}
if (errors.length) console.log('CONSOLE ERRORS:\n' + errors.join('\n'));
await browser.close();
