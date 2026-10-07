// Usage (from report/): node tools/build-register.mjs
// Reads data/measurements.json, data/packs.json, data/verdicts-*.json, data/presets.json
// Writes data/packs.computed.json, data/libraries.json, 08-licence-register-and-size-budget.md, 09-rejected-sources.md
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const meas = read('data/measurements.json').packages;
const packsDef = read('data/packs.json');
const verdictFiles = fs.readdirSync(path.join(root, 'data')).filter((f) => /^verdicts-.*\.json$/.test(f)).sort();
const verdicts = verdictFiles.flatMap((f) => read('data/' + f));

const kb = (n) => (n >= 1024 * 1024 ? (n / 1024 / 1024).toFixed(2) + ' MB' : n >= 100 * 1024 ? Math.round(n / 1024) + ' KB' : (n / 1024).toFixed(1) + ' KB');

// ---------- packs ----------
const packsOut = {};
const missing = [];
for (const [id, def] of Object.entries(packsDef.packs)) {
  let gz = 0, raw = 0;
  const files = [];
  for (const [pkg, file] of def.files) {
    const f = meas[pkg]?.files.find((x) => x.file === file);
    if (!f) { missing.push(`${id}: ${pkg} :: ${file}`); continue; }
    gz += f.gzip; raw += f.raw;
    files.push({ pkg, version: meas[pkg].version, file, raw: f.raw, gzip: f.gzip });
  }
  if (id === 'presets-json') {
    const b = fs.readFileSync(path.join(root, 'data/presets.json'));
    const min = Buffer.from(JSON.stringify(JSON.parse(b.toString('utf8'))));
    def.manualGz = zlib.gzipSync(min, { level: 9 }).length;
    raw += min.length;
  }
  if (def.manualGz) { gz += def.manualGz; if (id !== 'presets-json') raw += def.manualGz; }
  packsOut[id] = { label: def.label, sections: def.sections, tierB: !!def.tierB, optional: !!def.optional, gzip: gz, raw, files };
}
const scenarios = {};
const expand = (ids, seen = new Set()) => {
  for (const id of ids) {
    if (packsOut[id]) seen.add(id);
    else if (packsDef.scenarios[id]) expand(packsDef.scenarios[id].packs, seen);
    else missing.push('unknown pack/scenario ' + id);
  }
  return seen;
};
for (const [id, sc] of Object.entries(packsDef.scenarios)) {
  const ids = [...expand(sc.packs)];
  scenarios[id] = { label: sc.label, packs: ids, gzip: ids.reduce((a, p) => a + packsOut[p].gzip, 0), hasTierB: ids.some((p) => packsOut[p].tierB) };
}
fs.writeFileSync(path.join(root, 'data/packs.computed.json'), JSON.stringify({ computedFrom: 'data/measurements.json + data/packs.json', missingFiles: missing, packs: packsOut, scenarios }, null, 1));

// ---------- libraries ----------
const rank = { recommended: 5, optional: 4, watch: 3, 'see-05': 2, 'not-needed': 1, rejected: 0 };
const libs = {};
for (const v of verdicts) {
  const L = (libs[v.id] ??= { id: v.id, sections: [], roles: [], tier: v.tier, status: v.status, flags: [], notes: [] });
  if (!L.sections.includes(v.section)) L.sections.push(v.section);
  if (v.role && !L.roles.includes(v.role)) L.roles.push(v.role);
  if (v.license !== undefined) L.declaredLicense = L.declaredLicense ?? v.license;
  if (v.upstream) L.upstream = v.upstream;
  for (const k of ['flags']) for (const x of v[k] ?? []) if (!L.flags.includes(x)) L.flags.push(x);
  for (const k of ['stale', 'risk', 'reason', 'note']) if (v[k]) L.notes.push(`${k}: ${v[k]}`);
  if (v.lazy) L.lazy = true;
  if ((rank[v.status] ?? 0) > (rank[L.status] ?? 0)) { L.status = v.status; L.tier = v.tier; }
}
for (const L of Object.values(libs)) {
  const m = meas[L.id];
  if (m) {
    L.version = m.version; L.registryLicense = m.license; L.publishedLatest = m.publishedLatest; L.firstPublished = m.firstPublished;
    L.tarballBytes = m.tarballBytes; L.unpackedBytes = m.unpackedBytes; L.deprecated = m.deprecated; L.repository = m.repository;
    L.topFiles = m.files.slice(0, 4).map((f) => ({ file: f.file, raw: f.raw, gzip: f.gzip }));
  }
}
const libList = Object.values(libs).sort((a, b) => a.id.localeCompare(b.id));
fs.writeFileSync(path.join(root, 'data/libraries.json'), JSON.stringify({ _meta: { builtFrom: 'data/verdicts-*.json + data/measurements.json', tiers: { A: 'permissive', B: 'weak copyleft (LGPL/MPL/CDDL) — allowed with obligations', X: 'rejected' }, statuses: Object.keys(rank) }, libraries: libList }, null, 1));

// ---------- 08 register ----------
const sectionName = { '01': 'Format conversion', '02': 'Compression', '03': 'Resize/crop', '04': 'Metadata/privacy', '05': 'GIF/video', '07': 'Dev/designer utils' };
const fmtDate = (d) => (d ? d.slice(0, 10) : '—');
const rowsFor = (arr) => arr.map((L) => `| \`${L.id}\` | ${L.tier} | ${L.status} | ${L.sections.map((s) => sectionName[s] ?? s).join(', ')} | ${L.roles.slice(0, 2).join('; ')} | ${(L.registryLicense && typeof L.registryLicense === 'string' ? L.registryLicense : L.declaredLicense) ?? '—'} | ${L.version ?? '—'} | ${fmtDate(L.publishedLatest)} | ${[...L.flags, ...L.notes.filter((n) => !n.startsWith('reason')).slice(0, 2)].join('; ')} |`).join('\n');
const rec = libList.filter((L) => L.status === 'recommended');
const opt = libList.filter((L) => ['optional', 'watch'].includes(L.status));
const tierBList = libList.filter((L) => L.tier === 'B' && ['recommended', 'optional', 'watch'].includes(L.status));

const packRows = Object.entries(packsOut).map(([id, p]) => `| \`${id}\` | ${p.label} | ${p.sections.join(',')} | ${p.tierB ? 'B' : 'A'}${p.optional ? ' (opt)' : ''} | ${kb(p.raw)} | **${kb(p.gzip)}** |`).join('\n');
const scRows = Object.entries(scenarios).map(([id, s]) => `| \`${id}\` | ${s.label} | ${s.packs.length} | ${s.hasTierB ? 'yes' : 'no'} | **${kb(s.gzip)}** |`).join('\n');

const md08 = `# 08 — Licence Register & Size Budget (generated)

> **Generated by \`tools/build-register.mjs\`** from \`data/measurements.json\` (npm tarballs, measured 2026-10-07), \`data/packs.json\` and \`data/verdicts-*.json\`. Do not edit by hand — edit the data files and re-run.
> Terms: tiers A/B/X, gzip/raw — see \`00-methodology.md\`. **${libList.length} libraries** reviewed: ${rec.length} recommended, ${opt.length} optional/watch, ${libList.filter((L) => L.status === 'rejected').length} rejected, ${libList.filter((L) => L.status === 'not-needed').length} not needed.

## 1. Size budget by pack (lazy-load units)

Per-pack numbers are the **sum of gzip(-9) sizes of the exact files listed in \`data/packs.json\`** (one build variant each: single-thread, non-SIMD unless noted). "raw" = uncompressed. Packs marked **B** contain weak-copyleft code (LGPL/MPL/CDDL) — keep as separate replaceable files.

| Pack id | What | Sections | Tier | Raw | **Gzip (≈ network / APK cost)** |
|---|---|---|---|---|---|
${packRows}

${missing.length ? `> ⚠️ Files not found in measurements (excluded from sums): ${missing.join('; ')}\n` : ''}
## 2a. Licence profiles

| Profile | Allowed licences | What you lose |
|---|---|---|
| **Strict-permissive** (the conservative stance in the product owner's parallel research) | MIT, Apache-2.0, ISC, BSD, zlib, Unlicense, OFL — **no LGPL, MPL or CDDL code at all** | software **HEIC decode** (libheif/libde265 LGPL) on non-Safari web (Android can still use the OS decoder; Safari decodes natively); **full RAW develop** (LibRaw CDDL/LGPL — RAW *preview* extraction via UTIF stays); mediabunny convenience (replaced by mp4box + deprecated-but-MIT muxers); high-fidelity resvg; exifreader; wasm-vips; libav.js polyfill; MP3/AAC encoder extensions |
| **Extended** (this report's default) | strict list **plus** Tier-B packs (LGPL as separate replaceable wasm, MPL/CDDL file-level copyleft) after a legal read | nothing; adds the features above |

Build both from one code base: Tier-B packs are optional modules behind a build flag (\`PROFILE=strict|extended\`). Scenarios named \`*-strict\` below contain no Tier-B pack.

## 2. Scenarios (what to ship where)

| Scenario | Meaning | # packs | Contains Tier-B? | **Total gzip** |
|---|---|---|---|---|
${scRows}

How to use: **Web** — download packs on demand (service-worker cache), so a user pays only for the tools they open. **Android** — choose a pre-bundle scenario (Lite/Standard/Full) for instant offline use; remaining packs download on first use. Totals exclude your own app code, UI framework, Capacitor runtime and ad SDKs (measure those when scaffolding).

## 3. Recommended libraries (${rec.length})

| Package | Tier | Status | Sections | Role | Licence (registry) | Version | Last publish | Flags / notes |
|---|---|---|---|---|---|---|---|---|
${rowsFor(rec)}

## 4. Optional / watch-list libraries (${opt.length})

| Package | Tier | Status | Sections | Role | Licence (registry) | Version | Last publish | Flags / notes |
|---|---|---|---|---|---|---|---|---|
${rowsFor(opt)}

## 5. Tier-B obligations checklist (${tierBList.length} libraries)

${tierBList.map((L) => `- \`${L.id}\` — ${L.declaredLicense ?? L.registryLicense}${L.flags.length ? ' — ' + L.flags.join(', ') : ''}`).join('\n')}

For each: (1) ship the library as a **separate, replaceable file** (LGPL), (2) include licence text + notices in the in-app Licences screen, (3) link to the exact source/version, (4) do not modify MPL-covered files without publishing those changes, (5) choose the permissive option of dual licences (LibRaw → **CDDL-1.0**; JSZip → MIT).

## 6. Attribution list (non-code)

| Asset | Licence | Required notice |
|---|---|---|
| GeoNames city data (cities15000/5000) | CC BY 4.0 | "Place names: GeoNames, CC BY 4.0" |
| Natural Earth shapes (\`world-atlas\`) | Public domain | none (courtesy credit optional) |
| Noto Sans / Inter fonts (\`@fontsource/*\`) | OFL-1.1 | font licence text; no resale of fonts alone |
| Twemoji graphics | CC BY 4.0 | credit Twitter/X/Twemoji authors |
| \`color-name-list\` (if shipped) | MIT, attribution | credit list + sources |
| libwebp (via \`wasm-webp\`, jSquash) | BSD-3 | copyright notice |
| mozjpeg/libjpeg-turbo | IJG + BSD-3 + zlib | notice (IJG requires credit "based in part on the work of the Independent JPEG Group") |
| oxipng | MIT | notice |
| libavif / aom | BSD-2 + AOM Patent License 1.0 | notice |
| libjxl | BSD-3 + Google patent grant | notice |
`;
fs.writeFileSync(path.join(root, '08-licence-register-and-size-budget.md'), md08);

// ---------- 09 rejected ----------
const rejected = libList.filter((L) => L.status === 'rejected');
const notNeeded = libList.filter((L) => L.status === 'not-needed');
const bySection = (arr) => Object.keys(sectionName).map((s) => ({ s, items: arr.filter((L) => L.sections.includes(s)) })).filter((g) => g.items.length);
const extra = [
  ['FFmpegKit (Android)', 'retired project; binaries removed in 2025 [verified-search]'],
  ['gifski / gifski-lite', 'AGPL-3.0; commercial licence only from author [verified-search]'],
  ['pngquant / libimagequant ≥ 4', 'GPL-3.0-or-later (libimagequant verified upstream) — note wasm-vips bundles libimagequant 2.4.1 under BSD-2'],
  ['dssim', 'AGPL-3.0 [verified-upstream]'],
  ['Potrace', 'GPL-2.0 [verified-registry]'],
  ['`tile.openstreetmap.org` as default map tiles of a distributed app', 'forbidden for heavy use without permission [verified-search]'],
  ['APCA (apca-w3)', 'restrictive "W3 License for Compliant Code Only" [verified-registry]'],
  ['`@ffmpeg/core*` (ffmpeg.wasm cores)', 'GPL-2.0-or-later [verified-registry]'],
  ['ExifTool (as a default dependency)', 'Perl Artistic OR GPL + embeds a Perl interpreter — kept only as an optional, legal-review pack'],
  ['Google ML Kit / proprietary SDKs for barcode/OCR', 'on-device but not open source — outside the product rule']
];
const md09 = `# 09 — Rejected & Not-Needed Sources (names only)

> Generated by \`tools/build-register.mjs\`. **Do not add these to the project.** Reasons are one-liners; full evidence is in the section files (\`01\`–\`07\`).
> "Rejected" = fails the licence/provenance/policy gate. "Not needed" = acceptable licence but superseded, stale, too heavy or redundant.

## A. Rejected (${rejected.length} npm packages + non-npm items)

${bySection(rejected).map((g) => `### ${sectionName[g.s]}\n${g.items.map((L) => `- \`${L.id}\` — ${L.notes.find((n) => n.startsWith('reason'))?.replace('reason: ', '') ?? L.declaredLicense ?? ''} (${L.declaredLicense ?? L.registryLicense ?? 'no licence'})`).join('\n')}`).join('\n\n')}

### Non-npm / platform items
${extra.map(([n, r]) => `- ${n} — ${r}`).join('\n')}

## B. Researched but not needed (${notNeeded.length})

${bySection(notNeeded).map((g) => `**${sectionName[g.s]}:** ${g.items.map((L) => `\`${L.id}\``).join(', ')}`).join('\n\n')}

## C. Lessons (why a naive licence scan is not enough)

| Package | Declared | Reality |
|---|---|---|
| \`libimagequant-wasm\` | MIT | wraps \`imagequant\` v4 = **GPL-3.0-or-later** |
| \`gifsicle-wasm-browser\` | MIT | bundles **gifsicle (GPL-2.0)** |
| \`heic2any\` / \`@saschazar/wasm-heif\` | MIT | embed **libheif/libde265 (LGPL)** in un-swappable files |
| \`@ffmpeg/ffmpeg\` | MIT | its required core \`@ffmpeg/core\` is **GPL-2.0-or-later** |
| \`@imgly/background-removal\` (AI, out of scope) | AGPL | noted from earlier research |
| \`vtracer-wasm\` | *(no licence field)* | LICENSE file in tarball is MIT; upstream MIT |
| \`wasm-vips\` | MIT | libvips + glib + libheif are **LGPL** |
`;
fs.writeFileSync(path.join(root, '09-rejected-sources.md'), md09);

console.log('packs:', Object.keys(packsOut).length, 'scenarios:', Object.keys(scenarios).length, 'libraries:', libList.length);
console.log('missing:', missing);
for (const [id, s] of Object.entries(scenarios)) console.log(id.padEnd(20), kb(s.gzip), 'tierB:', s.hasTierB);
