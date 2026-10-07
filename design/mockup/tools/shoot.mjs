import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
const require = createRequire(execSync('npm root -g').toString().trim() + '/');
const { chromium } = require('playwright');
const a = process.argv.slice(2), opt = (k, d) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : d; };
const page_ = opt('--page'), out = opt('--outdir'), modes = opt('--modes', 'app').split(','), themes = opt('--themes', 'dark').split(','), times = opt('--times', '1,5').split(',').map(Number);
fs.mkdirSync(out, { recursive: true });
const b = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_BROWSERS_PATH ? undefined : undefined });
const errs = [];
for (const mode of modes) for (const th of themes) {
  const p = await b.newPage({ viewport: mode === 'app' ? { width: 520, height: 960 } : { width: 1440, height: 940 }, deviceScaleFactor: 1 });
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push(String(e)));
  await p.goto('file://' + page_ + `#mode=${mode}&theme=${th}`); await p.waitForTimeout(600);
  await p.evaluate(() => window.__lab.pause());
  for (const t of times) {
    await p.evaluate(x => window.__lab.seek(x), t); await p.waitForTimeout(60);
    const el = await p.$('#device');
    await el.screenshot({ path: `${out}/${mode}-${th}-${String(t).replace('.', '_')}.png` });
  }
  await p.close();
}
await b.close();
console.log(errs.length ? 'CONSOLE ERRORS:\n' + [...new Set(errs)].join('\n') : 'no console errors');
