#!/usr/bin/env node
// Screenshot one character in every mood, plus a poke frame, the recognition strip and the line-up.
//   node tools/shoot.mjs --page X.html --char pip --outdir DIR [--times 0.3,1.2]
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
const require = createRequire(import.meta.url);
const { chromium } = require(require('node:child_process').execSync('npm root -g').toString().trim() + '/playwright');
const args = process.argv.slice(2), opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const page = resolve(opt('--page')), id = opt('--char'), outdir = resolve(opt('--outdir', './shots'));
const times = opt('--times', '0.25,1.3').split(',').map(Number);
mkdirSync(outdir, { recursive: true });
const b = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined });
const p = await b.newPage({ viewport: { width: 1400, height: 1000 } });
const errs = []; p.on('pageerror', e => errs.push(String(e))); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
await p.goto('file://' + page + '#' + id); await p.waitForTimeout(1500);
await p.evaluate(() => document.fonts && document.fonts.ready);
const moods = ['idle', 'happy', 'wink', 'surprised', 'thinking', 'working', 'celebrate', 'sleepy', 'levelup', 'signature'];
const files = [];
for (const m of moods) for (const st of times) {
  await p.evaluate(([m, st]) => __cast.freeze(100 + st, m, st), [m, st]);
  const f = join(outdir, `${id}-${m}-${st}.png`); await p.locator('#stage').screenshot({ path: f }); files.push([f, `${m} @${st}s`]);
}
for (const [lk, tag] of [[{ x: -0.9, y: -0.6 }, 'look up-left'], [{ x: 0.9, y: 0.7 }, 'look down-right']]) {
  await p.evaluate(lk => __cast.freeze(100, 'idle', 3, lk), lk);
  const f = join(outdir, `${id}-${tag.replace(/ /g, '_')}.png`); await p.locator('#stage').screenshot({ path: f }); files.push([f, tag]);
}
for (const ago of [0.08, 0.35]) {
  await p.evaluate(ago => __cast.freeze(100, 'idle', 3, { x: 0, y: 0 }, ago), ago);
  const f = join(outdir, `${id}-poke-${ago}.png`); await p.locator('#stage').screenshot({ path: f }); files.push([f, `poke +${ago}s`]);
}
await p.evaluate(() => __cast.freeze(100, 'idle', 3));
await p.locator('.k-panel').first().screenshot({ path: join(outdir, `${id}-recog.png`) });
await p.locator('.k-panel').nth(1).screenshot({ path: join(outdir, `${id}-line.png`) });
const sheet = join(outdir, `sheet-${id}.html`);
writeFileSync(sheet, `<style>body{margin:0;padding:6px;background:#777;font:bold 13px sans-serif;display:grid;grid-template-columns:repeat(6,300px);gap:8px}figure{margin:0}img{width:300px;display:block}figcaption{color:#fff}</style>` + files.map(([f, c]) => `<figure><img src="${f}"><figcaption>${c}</figcaption></figure>`).join(''));
const s = await b.newPage({ viewport: { width: 1870, height: 600 } }); await s.goto('file://' + sheet); await s.waitForTimeout(400);
await s.screenshot({ path: join(outdir, `sheet-${id}.png`), fullPage: true });
console.log('SHEET ' + join(outdir, `sheet-${id}.png`));
console.log('RECOG ' + join(outdir, `${id}-recog.png`));
if (errs.length) console.log('CONSOLE ERRORS:\n' + errs.join('\n'));
await b.close();
