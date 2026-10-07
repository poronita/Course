// Usage: node inspect-pkgs.mjs <outFile.json> <workDir> pkg1 pkg2 ...
// Pulls registry metadata + tarball for each npm package, measures file sizes (raw/gzip/brotli),
// captures licence field + licence-file heads. Never executes package code.
import { writeFileSync, mkdirSync, readdirSync, statSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync, brotliCompressSync } from 'node:zlib';
import { execFileSync } from 'node:child_process';

const [outFile, workDir, ...pkgs] = process.argv.slice(2);
mkdirSync(workDir, { recursive: true });

const enc = (p) => p.replace('/', '%2F');
async function getJson(url) {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: { accept: 'application/json' } });
      if (r.ok) return await r.json();
      if (r.status === 404) return null;
    } catch (e) { /* retry */ }
  }
  return null;
}
function walk(dir, base = dir, acc = []) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, base, acc); else acc.push({ rel: p.slice(base.length + 1), size: s.size, abs: p });
  }
  return acc;
}

async function inspect(name) {
  const doc = await getJson(`https://registry.npmjs.org/${enc(name)}`);
  if (!doc) return { name, error: 'not found in registry' };
  const latest = doc['dist-tags']?.latest;
  const v = doc.versions?.[latest] ?? {};
  const out = {
    name, version: latest,
    license: v.license ?? v.licenses ?? doc.license ?? null,
    deprecated: v.deprecated ?? null,
    description: v.description ?? doc.description ?? null,
    repository: (typeof v.repository === 'string' ? v.repository : v.repository?.url) ?? null,
    homepage: v.homepage ?? null,
    publishedLatest: doc.time?.[latest] ?? null,
    firstPublished: doc.time?.created ?? null,
    modified: doc.time?.modified ?? null,
    versionsCount: Object.keys(doc.versions ?? {}).length,
    dependencies: Object.keys(v.dependencies ?? {}),
    peerDependencies: Object.keys(v.peerDependencies ?? {}),
    unpackedSizeRegistry: v.dist?.unpackedSize ?? null,
    tarballBytes: null, files: [], totals: {}, biggest: [], licenseFiles: [],
  };
  try {
    const dir = join(workDir, name.replace(/[@/]/g, '_'));
    rmSync(dir, { recursive: true, force: true });
    mkdirSync(dir, { recursive: true });
    const tgz = join(dir, 'pkg.tgz');
    const r = await fetch(v.dist.tarball);
    const buf = Buffer.from(await r.arrayBuffer());
    writeFileSync(tgz, buf);
    out.tarballBytes = buf.length;
    const ex = join(dir, 'x');
    mkdirSync(ex);
    execFileSync('tar', ['-xzf', tgz, '-C', ex, '--no-same-owner'], { stdio: 'ignore' });
    const files = walk(ex);
    const totals = {};
    const sized = [];
    for (const f of files) {
      const ext = (f.rel.match(/\.([a-z0-9]+)$/i)?.[1] ?? 'none').toLowerCase();
      totals[ext] = (totals[ext] ?? 0) + f.size;
      if (['wasm', 'js', 'mjs', 'cjs', 'data', 'bin', 'onnx', 'json', 'css'].includes(ext) && f.size > 2048) {
        const b = readFileSync(f.abs);
        sized.push({ file: f.rel, raw: f.size, gzip: gzipSync(b, { level: 9 }).length, brotli: brotliCompressSync(b).length });
      }
      if (/(^|\/)(licen[sc]e|copying|notice|unlicense)[^/]*$/i.test(f.rel)) {
        out.licenseFiles.push({ file: f.rel, head: readFileSync(f.abs, 'utf8').slice(0, 260).replace(/\s+/g, ' ').trim() });
      }
    }
    sized.sort((a, b) => b.raw - a.raw);
    out.files = files.length;
    out.totals = totals;
    out.biggest = sized.slice(0, 40);
    out.licenseFiles = out.licenseFiles.slice(0, 6);
    rmSync(join(dir, 'x'), { recursive: true, force: true });
  } catch (e) { out.tarballError = String(e).slice(0, 200); }
  return out;
}

const results = [];
const queue = [...pkgs];
await Promise.all(Array.from({ length: 5 }, async () => {
  while (queue.length) { const p = queue.shift(); results.push(await inspect(p)); }
}));
results.sort((a, b) => a.name.localeCompare(b.name));
writeFileSync(outFile, JSON.stringify(results, null, 1));
for (const r of results) {
  if (r.error) { console.log(`${r.name}: ${r.error}`); continue; }
  const kb = (n) => (n == null ? '?' : (n / 1024).toFixed(0) + 'K');
  const big = r.biggest.slice(0, 3).map((b) => `${b.file}(${kb(b.raw)}/gz${kb(b.gzip)}/br${kb(b.brotli)})`).join(' ');
  console.log(`${r.name}@${r.version} | lic=${JSON.stringify(r.license)} | pub=${r.publishedLatest?.slice(0, 10)} | tgz=${kb(r.tarballBytes)} unpacked=${kb(r.unpackedSizeRegistry)} | ${r.deprecated ? 'DEPRECATED ' : ''}${big}`);
}
