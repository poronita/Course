# 00 — Research Methodology, Licence Policy and Size Definitions

> Read this first. Every other file in `report/` uses the terms defined here.
> Research date: **2026-10-06 → 2026-10-07**. Package versions and dates are the *latest on the npm registry on that date*.

## 1. Project constraints (from the product owner)

| # | Constraint | Consequence for research |
|---|---|---|
| 1 | One product: **website + Android app** | Prefer one TypeScript code base; the Android app wraps the web build (Capacitor is the assumed shell, see `10-cross-cutting-infra.md`) |
| 2 | **Website = 100 % client-side**, no servers owned by the product | Every function must run in the browser (JS / WASM / Web APIs). No server fallbacks |
| 3 | **App is free, monetised by ads** | Every dependency must allow **commercial use at zero cost** |
| 4 | Open-source / free-to-use-commercially only | Licence verification is a hard gate, not a nice-to-have |
| 5 | **No AI features** | ML models, ONNX, Transformers.js, TFLite etc. are out of scope and not researched |
| 6 | Scope of this research: functions 1, 2, 3, 4, 5, 7 from the function list (6 = AI was dropped) | Files `01`…`05`, `07` |
| 7 | Output will be used as **input for another AI that builds the app** | Facts are explicit, versioned, and machine-readable data lives in `data/` |

## 2. Research plan (what was done, in order)

For **each** function group the same loop was run, one group at a time:

1. **Enumerate functions** users want (from the earlier function list) and the *job-to-be-done* behind each.
2. **Enumerate candidate libraries**: well-known ones, plus alternatives found by search, plus libraries I expected to *reject* (so the rejection is evidence-based).
3. **Pull primary-source metadata** from the npm registry (`registry.npmjs.org`): declared licence, latest version, publish date, dependency list, deprecation flag, repository URL.
4. **Download the actual package tarball** and measure what really ships: every `.wasm`/`.js` file, raw / gzip(-9) / brotli sizes. (Never executed — only unpacked and measured.)
5. **Read the licence files inside the tarball** (`LICENSE*`, `NOTICE`, `THIRD-PARTY-NOTICES`, codec licences). A wrapper being "MIT" proves nothing if it bundles an LGPL/GPL C library. For WASM packages, upstream C/C++/Rust library licences were checked against the upstream repository's licence file (via `raw.githubusercontent.com`).
6. **Classify** into tiers (section 3) and record the reason.
7. **Check platform facts** that decide whether a library is needed at all (browser-native support, Android WebView limits, canvas limits). These come from web search results and are marked with their source; anything I could not confirm is marked **`[unverified]`**.
8. **Write creative product ideas** for the group (what users actually want to *do*, not which tech does it).
9. **Write implementation notes** (gotchas) for the AI developer.

> **Evidence labels used in these files**
> - **[verified-registry]** — read from npm registry metadata or the package tarball on 2026-10-07.
> - **[verified-upstream]** — read from the upstream project's own licence file on GitHub raw.
> - **[verified-search]** — stated in web search results (source linked); not independently re-checked.
> - **[unverified]** — from my background knowledge; **must be re-checked before relying on it**.

## 3. Licence policy (the gate)

| Tier | Meaning | Licences | Allowed in the product? | Obligations |
|---|---|---|---|---|
| **A** | Permissive | MIT, BSD-2/3-Clause, Apache-2.0, ISC, 0BSD, Unlicense, CC0, zlib, libpng, IJG, MIT-0 | ✅ Yes | Keep copyright notices and licence texts → ship an in-app **"Open-source licences"** page (generate it with a tool from the dependency tree). Apache-2.0 also requires carrying its `NOTICE` file |
| **B** | Weak copyleft (commercial use is allowed, conditions apply) | LGPL-2.1/3.0, MPL-2.0, CDDL-1.0 (and EPL) | ✅ Yes, **flagged** | **LGPL**: ship the library as a **separate, replaceable file** (a `.wasm` loaded at runtime is fine; do *not* fuse it into a minified bundle), include licence text + notices, and be able to give users the library source. **MPL-2.0**: only changes *to the MPL files themselves* must be published. **CDDL**: same file-level idea. *Get a legal read before launch for LGPL (esp. Android APK)* |
| **X** | Rejected | GPL-2/3, AGPL-3, SSPL, CC-BY-NC / "non-commercial", "source-available", "commercial licence required", **no licence stated** (all rights reserved) | ❌ No | Listed **by name only** in the rejected section of each file and consolidated in `09-rejected-sources.md` |

Additional rules applied:

- **Dual licences** (e.g. `MIT OR GPL-3.0`, `LGPL-2.1 OR CDDL-1.0`): the *permissive/weaker* option is chosen and recorded (e.g. JSZip → MIT; LibRaw → CDDL-1.0).
- **Bundled code counts.** If a wrapper is MIT but ships LGPL/GPL native code, the *effective* tier is that of the bundled code.
- **Unmaintained ≠ rejected**, but it is flagged ("stale") because security/format fixes stop. Tiny, stable, pure-JS libraries (e.g. a 2017 PNG codec) can still be acceptable.
- **Data licences** are checked too (map data, city lists, presets): CC-BY / CC0 / ODbL-with-attribution are acceptable and flagged.
- **Fonts** used for generated images must be OFL / Apache / similar (never system fonts that are not redistributable).

### Build profiles (added after the parallel research review — see `11`)
- **Strict-permissive:** Tier A only (no LGPL/MPL/CDDL). Default for the MVP.
- **Extended:** Tier A + Tier B packs after legal review (LGPL kept as separate replaceable files).
Both stances are legitimate readings of "commercially allowed": LGPL/MPL *do* permit commercial use, but the packaging obligations in a bundled JS/APK app are debated, so the conservative profile avoids them entirely.

### Patent flag (separate from copyright licence)

A permissive code licence does **not** grant patent rights for video/image *codecs*. Codecs with active patent pools (HEVC/H.265 → HEIC, H.264, AAC) are flagged **`PATENT-FLAG`** wherever they appear. HEVC patents are administered through pools (e.g. Access Advance, which states it licenses "hardware and consumer software") [verified-search: https://accessadvance.com/?p=151]. This research cannot say how that applies to a free app that ships a software HEVC *decoder*; see `01-format-conversion.md` §HEIC for the mitigation (use the OS decoder on Android) and treat it as a **legal question to resolve before launch**.
*(None of this is legal advice.)*

## 4. Size definitions

| Term | Meaning | Why |
|---|---|---|
| **raw** | Bytes of the file on disk | What the APK/zip unpacks to |
| **gzip / brotli** | Size after gzip -9 / brotli (default quality) of the individual file | **Network (web) cost** — CDNs serve gzip/brotli. In an APK, files are deflate-compressed, so APK cost ≈ **gzip** size |
| **Lazy chunk** | Code the user downloads *only when they open that tool* | The whole architecture assumes WASM codecs are **lazy-loaded** and cached by a Service Worker |
| **Core shell** | Always loaded UI + routing code | Not measured here (no app yet); budget it separately |
| **Weight to app** | Sum of gzip sizes of the files that would be shipped for that capability | Used in the per-section "weight" tables and in `08-licence-register-and-size-budget.md` |

Notes:
- **Units:** generated tables (`08`, `data/packs.computed.json`) use **KB = 1024 bytes**. Hand-written numbers in `01`–`07` were rounded from the same measurements and may differ by up to ~2.5 % (decimal vs binary KB) — the generated tables are authoritative.
- WASM files are sized **per variant**. Many codecs ship several builds (plain / SIMD / multi-thread). **Ship one** (single-thread, SIMD if all targets support it) unless the host sends COOP/COEP headers — see `10-cross-cutting-infra.md`.
- Size of *glue JS* is included where it is > 20 KB raw.
- On Android the app can **pre-bundle** the WASM in the APK (so tools work offline and instantly). That increases APK size by the gzip total; the web version never pays that.

## 5. Reproducing the numbers

```bash
# in report/tools (Node >= 18, network access to registry.npmjs.org)
node inspect-pkgs.mjs out.json ./work @jsquash/jpeg @jsquash/webp ...
node headtext.mjs 400 https://raw.githubusercontent.com/<owner>/<repo>/<branch>/LICENSE
```

`inspect-pkgs.mjs` prints a one-line summary per package and writes a full JSON record (licence field, licence-file heads, file totals by extension, 40 biggest code files with raw/gzip/brotli). It downloads the tarball, unpacks it with `tar`, and **never runs package code**.

## 6. Known limits of this research

- Several web sources (Play Store, iLoveIMG, FreeConvert, online-convert, resizeimage.io, MDN, caniuse, OSM policy pages, GeoNames) were **blocked by the sandbox network proxy**; facts that normally come from them rely on web-search summaries or are marked `[unverified]`.
- Sizes are measured on package tarballs, **not** on a real production bundle (tree-shaking, code splitting and the app shell will change totals). Treat as ±15 %.
- No library was *run* — capability statements come from README/type definitions/known behaviour, not from executing benchmarks. Performance numbers are therefore **not** claimed except where cited.
- Device testing (low-end Android WebView memory, Safari quirks) is still required.

## 7. Cross-cutting product notes for the AI developer

1. **"Works offline, nothing uploaded"** is the product's main promise. Ads (AdMob/AdSense) are third-party SDKs that *do* collect identifiers, so the Play **Data Safety** form and privacy policy must declare ad-related data collection — do **not** claim "no data collected". Keep the promise precise: *"Your images are never uploaded."* (Ad SDKs are not open-source dependencies and are outside this research.)
2. Provide an **Open-source licences screen** from day one (Tier A attribution + Tier B notices).
3. Each tool must degrade gracefully: feature-detect (`wasm-feature-detect`, `OffscreenCanvas`, `ImageDecoder`, `VideoEncoder`) and show a clear message instead of failing.
