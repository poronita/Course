# 02 — Compression & File-Size Control (research)

Status: **complete** · Verified on 2026-10-07 · Labels/tiers: see `00-methodology.md`

**Functions covered:** compress by quality / percent / **target KB** / max pixels; "visually lossless" smart compression; lossless PNG & JPEG optimisation; lossy PNG (palette) compression; compress-to-size band; format-benchmark ("which format is smallest?"); responsive-image set (`srcset`); blur placeholders; batch compress with per-file report; "total budget" for many files; Android background/auto compress.

Codec packages (jSquash etc.) are documented in **`01-format-conversion.md` §2.1** — this file only adds what is *specific to compression*.

---

## 0. TL;DR (decisions)

| Job | Use | Tier | Weight (gz) |
|---|---|---|---|
| Lossy JPEG (best size/quality) | `@jsquash/jpeg` (mozjpeg) — progressive, trellis, chroma control | A | ~141 KB (from §01) |
| Lossy/lossless WebP + **exact `target_size`** | `@jsquash/webp` | A | ~190 KB |
| Lossy AVIF / JXL (smallest files) | `@jsquash/avif`, `@jsquash/jxl` | A | 1.1 MB / 0.5 MB enc |
| Lossless PNG optimise | `@jsquash/oxipng` (levels 0-6) | A | ~74 KB |
| **Lossy PNG** (colour reduction) | `image-q` (MIT) **or** `upng-js` `cnum` (MIT) — *no permissive pngquant-class tool exists* (see gap G2) | A | 19 KB / 9 KB(+pako) |
| **Perceptual quality score** for "visually lossless" auto mode | `@squoosh-kit/visdif` (Butteraugli) **or** SSIMULACRA2 build | A | ~36 KB / ~37 KB |
| Cheap quality metric (fast mode) | `ssim.js` / own PSNR | A | ~5 KB |
| Visual diff heat-map | `pixelmatch` | A (ISC) | ~7 KB |
| High-quality downscale before encode | `@jsquash/resize` (Lanczos3 / Magic Kernel) or `pica` | A | 17 KB / 23 KB |
| Blur placeholders | `thumbhash` (MIT) / `blurhash` (MIT) | A | 3 KB / 2 KB |
| Worker plumbing | `comlink` (Apache-2.0) + `wasm-feature-detect` (Apache-2.0) | A | 3 KB + 1 KB |
| Lossless JPEG optimise / lossless rotate | **No verified npm package** → custom-compile `jpegtran` (mozjpeg/libjpeg-turbo, BSD/IJG/zlib) **or** use the metadata-strip fallback (gap G1) | — | build-your-own ≈ 100–150 KB wasm `[unverified]` |

**Extras added by this section on top of §01:** ≈ **130–200 KB gz** (metrics, quantiser, utilities). The heavy lifting is already in the §01 codecs.

**Gaps found (be aware):**
- **G1 — No verified browser package for lossless JPEG optimisation (jpegtran-style Huffman re-optimisation, lossless rotate/crop).** Searches of the npm registry returned only Node binary wrappers (`jpegtran-bin`, `imagemin-jpegtran`) and a beta WASI component (`@crossbind/port-jpegturbo-bin-wasi`, not browser-oriented). *Workaround (cheap):* lossless **metadata stripping** by JPEG-segment surgery (drop `APPn`/`COM`; ~30 lines of JS) gives the "free" part of the saving; for lossless rotate, write EXIF orientation (flag) or re-encode. *Proper fix:* compile mozjpeg's `jpegtran` to WASM (licence verified: IJG + BSD-3 + zlib).
- **G2 — Lossy-PNG quality.** The best quantiser (libimagequant ≥ 4 / pngquant) is **GPL-3.0-or-later** → rejected (see §9). Permissive options exist (below) but give visibly lower quality at the same size on photos; fine for graphics/screenshots.

---

## 1. Compression "jobs" users actually have (and the engine for each)

| # | User intent | Typical input | Engine & strategy |
|---|---|---|---|
| 1 | "Make it smaller, I don't care how" | phone photo 3–12 MB | JPEG→mozjpeg q≈75 progressive, optionally resize to ≤ 2048 px; strip metadata |
| 2 | **"Must be under N KB"** (forms, portals, email) | any | **Target-size search** (§3) |
| 3 | "Max X px" (social, web) | any | resize (Lanczos3/Magic Kernel) → encode |
| 4 | "Looks identical but smaller" | photos | **perceptual-guided search** (§4) |
| 5 | Screenshots / graphics | PNG | oxipng (lossless) → optional palette reduction → or WebP lossless |
| 6 | "Modernise for my website" | JPG/PNG | WebP/AVIF + fallback, `srcset`, placeholders |
| 7 | Free up phone storage | whole gallery | Android-only batch + background (§6.C) |

---

## 2. Browser-native baseline (0 KB) and why it is not enough

- `canvas.toBlob(cb, 'image/jpeg', q)` gives a **single quality knob**, no progressive/trellis/chroma control; output is not as small as mozjpeg at the same visual quality. `[unverified magnitude — benchmark in-app]`
- WebP encoding via canvas: **not in Safari**; AVIF encoding via canvas: **Chrome 94+/Firefox 113+ only**; unsupported types **silently return PNG** [verified-search; see §01 §1].
- Therefore: *use native for quick previews; use WASM encoders for every exported file* so results are identical on all devices and the size search is deterministic.

---

## 3. Compress-to-target-size algorithm (reference design for the AI developer)

**Goal:** given `targetBytes` (and optional tolerance, default **−10 % … 0 %** "never exceed"), produce the **highest-quality** file ≤ target.

```
inputs: source (decoded ImageData, orientation applied), format F, targetBytes, minSidePx (default 480),
        keepMetadata=false, mode = 'never-exceed' | 'closest'

0. Precompute: srcPixels = w*h. If metadata is kept, subtract its size from the target.
1. FAST PATH: if original file already ≤ target and mode='never-exceed' → keep original ("already small").
2. Initial guess (skip search iterations): bitsPerPixelTarget = targetBytes*8 / srcPixels.
   - If bpp is "impossible" for F (JPEG < ~0.10 bpp, WebP < ~0.05 bpp  [unverified thresholds — calibrate]),
     downscale FIRST to a pixel count that gives ~0.25 bpp, then search quality.
3. Quality search (JPEG / WebP-lossy / AVIF / JXL):
   a. lo=1, hi=95 (JPEG/WebP 1-100 scale; AVIF/JXL per package). Encode at q0 from guess.
   b. Model size(q) ≈ exp(a + b*q) → fit on 2 samples (secant on log(size)) → next q. Typically 3–5 encodes.
   c. Stop when size ∈ [target*0.97, target] (or lo/hi converge). Keep BEST = highest q with size ≤ target.
   d. Each encode runs in the worker pool; reuse the SAME decoded ImageData (never re-decode, never re-compress a compressed JPEG).
4. If q reaches floor (JPEG ≈ 20–30 [calibrate]) and size still > target:
   downscale in steps (×0.9), re-run step 3 at q≈60 start. Hard floor: minSidePx. If floor hit → return best effort + warning "can't reach N KB without making it unreadable".
5. WebP shortcut: libwebp exposes `target_size` (+ `pass` 1–10) → one call may suffice; still verify output ≤ target (libwebp treats it as approximate [unverified]).
6. PNG (lossless format): quality does not exist → ladder:
   oxipng level 2→4 → if still > target: palette reduction 256→128→64→32→16 colours (image-q / UPNG cnum, dithering on/off) → then downscale ×0.9 loop.
   Offer: "Convert to JPEG/WebP to reach this size?" when PNG target is unreachable without large loss.
7. Return {bytes, quality|colours, widthxheight, iterations, ssim|distance?, savedPercent}.
```

**Notes**
- **Non-monotonic wiggles:** JPEG size isn't perfectly monotonic in quality; the "BEST = highest q ≤ target" rule handles it.
- **Cancel / time-box:** WASM cannot be interrupted → run each search in a worker and **terminate+respawn** on cancel; cap total search time (e.g. 8 s on phones) and return best-so-far.
- **AVIF/JXL are slow**: search with a **faster speed/effort**, then do a final pass at the chosen quality but **re-measure** (size changes with speed/effort). Document this in UI ("High-efficiency formats take longer").
- **Typical targets** to offer as chips: 20 / 50 / 100 / 200 / 500 KB, 1 / 2 / 5 MB + custom (KB/MB).
- **Group budget:** for N files and a **total** budget (e.g. "all under 10 MB"), allocate per-file budgets ∝ `pixels × complexity` (complexity = first-pass bytes/pixel), run the per-file search, then re-balance leftover bytes to files that were under budget. (Common request for email/portals.)

---

## 4. "Visually lossless" auto mode (perceptual-guided search)

**Idea:** pick the **lowest quality whose perceptual score stays above a threshold**, instead of a fixed number.

| Metric | Package | Licence | Size | Notes |
|---|---|---|---|---|
| **SSIMULACRA2** | `calc-s2-rust@1.0.3` (WASM; 2022) | wrapper BSD-2-Clause (+ MIT/Apache files); upstream Rust `ssimulacra2` **BSD-2-Clause** [verified-upstream rust-av/ssimulacra2 Cargo.toml]; original Cloudinary metric BSD-3 [verified-upstream] | wasm 83 KB → **35 KB** + glue 2 KB | **Awkward key-based buffer API, no docs, stale** → treat as low-maturity; better: compile `rust-av/ssimulacra2` (rayon is an *optional* feature) yourself. **Score scale is documented upstream:** 50 = medium ("fair"), **70 = high ("good")**, **80 = very high**, 85 = excellent, **90 = visually lossless**, 100 = lossless [verified-upstream cloudinary/ssimulacra2 README] |
| **Butteraugli** | `@squoosh-kit/visdif@0.2.10` (2026-09) | `MIT AND Apache-2.0`; Butteraugli is **Apache-2.0** [verified-upstream google/butteraugli LICENSE] | wasm 57 KB → **23 KB** + glue 50 KB → 13 KB | Documented API: `compare(a, b)` → distance; browser worker entry shipped. README examples gate on distance ≤ **1.0** (good) / > **2.0** (too low) — treat as starting points, **calibrate** |
| SSIM | `ssim.js@3.5.0` (MIT, 2020) / `@blazediff/ssim@1.7.1` (MIT, 2025) | MIT | ~5 KB gz | Fast, weaker correlation with human perception; use for *fast mode* |
| Pixel diff | `pixelmatch@8.0.0` (ISC, 2026-10-06) | ISC | 7 KB | For **visual diff heat-map**, not for search |

**Practical recipe**
1. Downscale both images to ≤ **1 MP** for scoring (metrics are expensive; sampling is accurate enough) `[unverified — validate on device]`.
2. Binary-search quality (6 steps) for **score ≥ 80** ("Balanced"), **≥ 85** ("High"), **≥ 90** ("Visually lossless") using SSIMULACRA2 thresholds above.
3. Show the user three presets, not metric names: **Smaller / Balanced / Best quality**.

---

## 5. Open-source base tools (verified)

> All rows: `[verified-registry]` = npm registry + tarball inspection on 2026-10-07. Codec packages: see §01.

### 5.1 Lossy PNG / palette tools

| Library | Ver · last pub | Licence | Gz size | What it gives | Verdict |
|---|---|---|---|---|---|
| `image-q` | 4.0.0 · 2022-01 | MIT ("TypeScript, MIT licensed") | 19 KB (cjs/esm 101 KB raw) | Palette quantisers **NeuQuant, RGBQuant, WuQuant**; distance: Euclidean/Manhattan/CIEDE2000; dithering: **Floyd-Steinberg, Stucki, Atkinson, Jarvis, Burkes, Sierra, TwoSierra…**; alpha support | ✅ A — recommended for "reduce to N colours" with dithering; stale but self-contained |
| `upng-js` | 2.1.0 · 2017-12 | MIT (Photopea) | 9 KB (+ pako 14 KB) | `UPNG.encode(imgs,w,h,cnum)` → **`cnum` = colours (0 = lossless)**; k-means quantisation (TinyPNG-like) per README; also APNG | ✅ A — tiny; quality is OK for graphics |
| `@jsquash/oxipng` | 2.3.0 | Apache-2.0 (oxipng MIT) | 74 KB | lossless re-pack; optional alpha optimisation | ✅ A |
| `wasm-vips` (optional) | 0.0.19 | MIT wrapper; contains **libimagequant 2.4.1 under BSD-2** [verified-registry notices] | 2.0 MB+ | pngquant-class quantiser in a permissive version | optional, heavy, needs COOP/COEP |

### 5.2 Metrics / diff

(see §4 table) — `@squoosh-kit/visdif`, `calc-s2-rust` (or self-build), `ssim.js`, `@blazediff/ssim`, `pixelmatch`.

### 5.3 Resizing as a compression lever

| Library | Licence | Gz | Methods |
|---|---|---|---|
| `@jsquash/resize` (§01) | Apache-2.0 | 17 KB (hqx 19 KB optional) | triangle, catrom, mitchell, **lanczos3**, hqx, **magic kernel (+Sharp2013/2021)**, linear-RGB + premultiply toggles |
| `pica@10.0.3` (2026-08) | MIT | 23 KB | Lanczos/Hamming/box with Web Workers & WASM; classic choice for large downscales |
| `image-blob-reduce@5.0.1` (2026-07) | MIT | ~23 KB (+pica) | pica-based "reduce Blob to max side" helper — optional convenience |

### 5.4 Placeholders & helpers

| Library | Ver · last pub | Licence | Gz | Use |
|---|---|---|---|---|
| `thumbhash` | 0.1.1 · 2023 | MIT | 3 KB | ~25-byte placeholder with alpha + aspect ratio |
| `blurhash` | 2.0.5 · 2023 | MIT | 2 KB | classic ~20–30-char placeholder |
| `fast-blurhash` | 1.2.0 · 2026-06 | ISC | 2 KB | smaller/faster decoder |
| `comlink` | 4.4.2 · 2024-11 | Apache-2.0 | 3 KB | RPC for workers → clean `await codecWorker.encode()` |
| `wasm-feature-detect` | 1.9.0 · 2026-08 | Apache-2.0 | 1 KB | pick SIMD/threads builds |
| `fflate` | 0.8.3 | MIT | 22 KB | ZIP for batch output (§01) |

### 5.5 Alternative codec wrapper family (watch-list)

`@squoosh-kit/{mozjpeg,webp,avif,jxl,oxipng,resize,visdif,runtime}@0.2.10` — **MIT AND Apache-2.0**, built-in **worker bridge**, browser + Node + Bun entries; first published 2025-10/2026-03 (young; single maintainer `bnowak008`). WASM sizes ≈ identical to jSquash (e.g. mozjpeg enc 57 KB gz, webp enc 110 KB gz, avif enc ~0.97 MB gz). **Verdict:** keep **jSquash as primary** (longer history, widely used), re-evaluate squoosh-kit later; `visdif` is the only squoosh-kit package recommended now.

---

## 6. Creative features (user-visible value)

### A. Speed & trust
1. **"Already optimised" smart-skip:** if estimated saving < 5 % (e.g. already low bpp), skip and say so → avoids re-compression damage. (F-Droid image-compressor apps use similar "skip well-compressed" filters [verified-search].)
2. **Instant size preview:** encode a 256-px centre sample → show predicted result and savings *before* running the full job.
3. **Live "Smaller ←→ Better" slider** with a split-view loupe at 100 % zoom, plus **diff heat-map toggle** (`pixelmatch`).
4. **Never re-compress the compressed:** always run from the original; keep originals in memory/OPFS so users can change the target and re-run instantly.
5. **Time-boxed results:** show best-so-far at 3 s with "refine" button (important on phones).

### B. Target-driven tools (high-demand, low competition)
6. **Compress to exact size** with KB/MB chips; "closest" vs "never exceed" toggle.
7. **Total budget mode:** "Make these 15 photos fit in 10 MB" (email/WhatsApp-business/portal limits).
8. **Limit memory of site limits:** save named limits ("University portal: 200 KB, JPG, 413×531") as **Recipes** (shared with `01`/`03`).
9. **PDF ≤ N KB** from photos (binary-search JPEG quality inside the PDF writer; see §01 §4-D).
10. **Mixed-goal:** "≤ 100 KB **and** exactly 600×800 px" (resize → search quality) — chains with `03-resize-crop-geometry.md`.

### C. Content-aware modes
11. **Screenshot/text mode:** detect text-heavy images (few colours + hard edges) → prefer PNG-palette / WebP-lossless / JPEG 4:4:4 at high quality, avoid heavy downscale; show a **"text still readable?" 200 % zoom check**.
12. **Document-scan mode:** grayscale / 1-bit threshold + JPEG/PNG, deskew (crop tool), optional PDF — typical for forms.
13. **Photo mode:** mozjpeg progressive, 4:2:0, optimise-coding on.
14. **Transparency mode:** keep alpha → WebP/PNG/AVIF only; warn before flattening to JPEG.

### D. Web-developer pack (also attracts SEO traffic)
15. **Format shoot-out:** JPEG vs WebP vs AVIF vs JXL at matched perceptual score; table of bytes saved, **pick the smallest broadly-supported** one.
16. **`<picture>`/`srcset` generator:** sizes 320/640/960/1280/1920 × formats → ZIP + ready-to-paste HTML; **thumbhash/blurhash placeholder** and width/height attributes.
17. **Core Web Vitals hint** (image bytes saved ≈ faster LCP) — keep claims generic.

### E. Android-only (strong reason to install the app)
18. **Gallery cleaner & bulk shrink in place:** scan MediaStore for large photos (≥ N MB), compress in batches, **keep originals in an in-app "Recently compressed" bin for 30 days** (undo).
19. **Share-sheet "Compress & share":** receive an image from any app → compress to preset (WhatsApp/Email) → return/share — no UI detour.
20. **Auto-compress new screenshots/photos** in the background via **WorkManager** (Apache-2.0, AndroidX) through a Capacitor background plugin `[unverified plugin choice; see 10-cross-cutting-infra.md]`; show a notification summary ("Saved 84 MB today").
21. **Storage dashboard:** MB saved lifetime (stored locally), top space hogs.
22. **Battery/thermal-aware mode:** limit worker count when battery saver is on `[unverified API: Battery Status API availability in WebView]`.

### F. Gamification that doesn't need a server
23. "You saved **1.2 GB** this month" badge, per-tool streaks, shareable (user-initiated) saved-size card rendered on canvas.

---

## 7. Implementation notes (gotchas)

1. **One decode → many encodes.** Keep `ImageData` (and a downscaled copy for metrics) in the worker; transfer results as `ArrayBuffer`.
2. **Orientation & colour:** apply EXIF orientation once; convert to sRGB if the source has a wide-gamut profile before JPEG encode (otherwise colours shift); then optionally strip ICC.
3. **JPEG + alpha:** composite on a background colour first.
4. **Chroma:** mozjpeg `chroma_subsample` default 2 (=4:2:0) with `auto_subsample: true`; for text/line-art use 4:4:4 (`chroma_subsample: 0`) `[verify mapping in meta]`. Defaults from `meta.js`: quality 75, progressive **true**, optimize_coding true, trellis off, quant_table 3.
5. **WebP knobs** relevant to size: `quality`, `target_size`, `method` (0 fast – 6 slow/small; default 4), `sns_strength` 50, `filter_strength` 60, `alpha_quality` 100, `lossless`, `near_lossless` (100 = off, lower = more lossy-lossless), `use_sharp_yuv` (better colour edges), `exact` (keep RGB under transparent areas).
6. **AVIF knobs:** `quality` (default 50), `speed` (default 6), `subsample`, `bitDepth` 8/10/12, `lossless`, `tune`, `denoiseLevel`, `chromaDeltaQ`, `sharpness`. Slow on phones → default to speed 7–8 for batch, 5–6 for single.
7. **JXL knobs:** `effort` (default 7), `quality` (75), `lossless`, `progressive`, `lossyModular`, `lossyPalette`, `photonNoiseIso`, `epf`, `decodingSpeedTier`. Package labels JXL "beta".
8. **oxipng:** `level` default 2 (0–6), `interlace` false, `optimiseAlpha` false. Parallel build needs cross-origin isolation.
9. **Threaded WASM** (avif/jxl `mt`, oxipng `parallel`) works only when `crossOriginIsolated === true`; otherwise load single-thread builds (feature-detect).
10. **Progress UI:** emit `{stage:'decode|search|final', iteration, bytes, q}` messages; cancellable via worker termination.
11. **Determinism:** log the exact options used so users can reproduce ("Recipe JSON").
12. **Accessibility:** announce results via `aria-live`; large touch targets for chips.

---

## 8. Weight table (gzip)

| Component | Files | Gz total | Policy |
|---|---|---|---|
| Core codecs for compression | jpeg 141 + webp 190 + png 85 + oxipng 74 + resize 17 | **≈ 507 KB** | pre-bundle in APK, lazy on web |
| AVIF / JXL (optional enc) | 1.12 MB / 0.53 MB | 1.65 MB | on demand |
| Perceptual metric (Butteraugli) | visdif 23 + 13 | ≈ 36 KB | on demand ("Smart" mode) |
| SSIMULACRA2 build (alt.) | ~35 + 2 | ≈ 37 KB | on demand |
| Fast metrics + diff | ssim.js 5 + pixelmatch 7 | ≈ 12 KB | core |
| Lossy PNG | image-q 19 and/or upng 9+14 | ≈ 19–42 KB | on demand |
| Placeholders | thumbhash 3 + blurhash 2 | 5 KB | on demand |
| Plumbing | comlink 3 + wasm-feature-detect 1 | 4 KB | core |
| **Added by §02 (excl. §01 codecs)** | | **≈ 80–110 KB** (≈ 150 KB incl. pica) | |

---

## 9. Rejected / not useful (names only)

- **Licence-rejected (effective GPL/AGPL):** `libimagequant-wasm`, `@fe-daily/libimagequant-wasm` (MIT-labelled wrappers around `imagequant` crate v4 which is **GPL-3.0-or-later** [verified-upstream ImageOptim/libimagequant]), `pngquant`, `pngquant-bin`, `imagemin-pngquant` (pngquant is GPL — `[unverified; same author/licence family as libimagequant]`), `dssim` (**AGPL-3.0** [verified-upstream kornelski/dssim LICENSE]), `gifsicle*` (see §05).
- **No licence / unclear:** `ssimulacra2-js` (no licence field; depends on `sharp` and `three`).
- **Unmaintained / superseded:** `butteraugli` (npm 0.0.2, 2017), `image-ssim` (2015), `@neslinesli93/mozjpeg-wasm` (2022; superseded by jSquash), `mozjpeg`/`jpegtran-bin`/`imagemin-*` (Node binaries, not browser).
- **Not needed (canvas-only wrappers):** `browser-image-compression` (MIT, 2023), `compressorjs` (MIT), `@miconvert/browser-image-compression`, `@nitida/asset-compressor-web` (pulls `heic2any`), `@thaparoyal/image-compression`, `@awesome-compressor/*`.
- **Gap, not rejection:** lossless **jpegtran** WASM (G1).
