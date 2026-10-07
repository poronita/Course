# 01 — Format Conversion (research)

Status: **complete** · Verified on 2026-10-07 · Tiers/labels defined in `00-methodology.md`

**Functions covered:** any↔JPG/PNG/WebP/AVIF/JXL/BMP/ICO/TIFF/GIF(static), HEIC→JPG/PNG, RAW→JPG, PSD→PNG/JPG, SVG→raster, raster→SVG (vectorise), image↔PDF, Base64/data-URI, colour-mode & ICC conversion, lossless JPEG→JXL recompression, format auto-detection.
(Animated formats — GIF/WebP/APNG/AVIF-anim/video — are in `05-gif-webp-webm-video.md`.)

---

## 0. TL;DR (decisions)

| Job | Use | Tier | Weight (gzip, lazy) |
|---|---|---|---|
| Decode/encode **JPEG** (better than canvas) | `@jsquash/jpeg` (mozjpeg) | A | ~141 KB |
| Decode/encode **PNG** + lossless optimise | `@jsquash/png`, `@jsquash/oxipng` | A | ~85 KB + ~74 KB |
| Decode/encode **WebP** (Safari can't encode natively) | `@jsquash/webp` | A | ~190 KB |
| Decode/encode **AVIF** | `@jsquash/avif` | A | enc ~1.1 MB, dec ~0.34 MB |
| Decode/encode **JPEG XL** (experimental; *no* JPEG-transcode API) | `@jsquash/jxl` | A | enc ~0.51–0.57 MB, dec ~0.31 MB |
| **HEIC/HEIF → JPG/PNG** (decode only) | `libheif-js` (separate `.wasm`) — on Android prefer the OS decoder. **Strict profile: Safari-native + Android OS decoder only (no software decoder)** | **B (LGPL-3.0)** + PATENT-FLAG | ~515 KB (Extended only) |
| **RAW → JPG** (CR2/NEF/ARW/DNG…) | Strict: **UTIF preview extraction** (embedded JPEG; UTIF README: it *does not* develop raw sensor data). Extended: `@colorhythm/libraw-wasm` full develop (LibRaw **CDDL** option) | A (preview) / **B** (develop) | ~19 KB / ~340 KB |
| **TIFF** multi-page read/write | `utif` (+`pako`) | A | ~33 KB |
| **PSD → PNG/JPG** (flattened view) | `ag-psd` | A | ~166 KB |
| **SVG → raster** | browser `<img>`+canvas (0 KB); optional `@resvg/resvg-wasm` for fidelity | A / **B (MPL-2.0)** | 0 / ~940 KB |
| **Raster → SVG** (vectorise) | `vtracer-wasm` (best), `imagetracerjs` (tiny) | A | ~61 KB / ~12 KB |
| **PDF → images** | `pdfjs-dist` | A | ~500 KB (+opt. ~155 KB) |
| **Images → PDF** | hand-written minimal writer (JPEG as DCT) **or** `@cantoo/pdf-lib` | A | ~3 KB / ~246 KB |
| **ICO / BMP** | tiny hand-written encoders; `icojs`/`bmp-ts` to read | A | ~3 KB each |
| **Format sniffing** (true type by magic bytes) | `file-type` | A | ~12 KB |
| **Long-tail 100+ formats** (optional pack) | `@imagemagick/magick-wasm` | A (ImageMagick licence) | **~5.4 MB** — optional |

**Rejected here (name only):** potrace, heic2any, @saschazar/wasm-heif, heic-to, @abasb75/openjpeg, libraw-wasm(ISC pkg), jimp, jspdf, pdfkit (see §8).

**Size summary:** web users download only the codec for the tool they open (≈0.05–1.5 MB). If the Android APK **pre-bundles everything above except ImageMagick/resvg**, expect **≈ 4.3–4.8 MB** added (gzip-equivalent). Recommended: pre-bundle JPEG/PNG/WebP/oxipng/TIFF/PDF/HEIC; download AVIF/JXL/RAW/PSD on first use ("feature packs") and cache.

---

## 1. Browser/OS built-ins (cost: 0 KB) — check these *first*

| Capability | Fact | Source |
|---|---|---|
| `canvas.toBlob('image/webp')` | Chrome 50+, Firefox 96+; **Safari does not encode WebP** | [verified-search] caniuse result |
| `canvas.toBlob('image/avif')` | Chrome 94+, Firefox 113+ only | [verified-search] |
| Unsupported `toBlob` type | **Silently returns PNG** — you must check `blob.type` | [verified-search] dev.to/dailytechid article |
| HEIC display/decode | **Only Safari** decodes HEIC natively; Chrome/Firefox/Edge do not (any platform) | [verified-search] windowsreport / testmuai |
| Android OS HEIF | Platform HEIF decoding exists since Android 9 (API 28) | [verified-search] |
| WebCodecs | Reported Baseline across Chrome/Edge/Firefox/Safari during 2026 (sources conflict on the exact Safari version) → **feature-detect** | [verified-search] |
| iOS Safari canvas limit | max **16,777,216 px** per canvas (≈ 4096×4096); Android has memory-based limits, Chrome-Android estimates ≈ ¼ of desktop | [verified-search] pqina.nl |

**Implication:** a native-only converter silently breaks on Safari (WebP) and everywhere for AVIF/HEIC/JXL. That is why the WASM codecs below are required, not optional.

---

## 2. Open-source base tools (verified)

> Weights are **gzip -9** of files measured inside the npm tarball (`[verified-registry]`). "enc/dec" = ship only what the tool needs.

### 2.1 jSquash codec family — **Tier A** (Apache-2.0 wrappers; Squoosh-derived)

Common facts: Apache-2.0 wrapper licence in every package [verified-registry]; designed for **Browser + Web Worker**, no dynamic code execution (CSP-safe), `wasm-feature-detect` auto-picks SIMD/threads builds [verified-registry: deps]. Known issue: Vite's dep-optimizer breaks WASM loading → add each `@jsquash/*` to `optimizeDeps.exclude`; nested-worker bug in Vite production builds (use the non-worker builds) [verified-upstream: jSquash README "Known Issues"].

| Package | Version / last publish | Wrapper licence | Upstream codec licence | Capabilities (from package `meta.js`) | Shipped files (raw → gzip) |
|---|---|---|---|---|---|
| `@jsquash/jpeg` | 1.6.0 · 2025-05-12 | Apache-2.0 | mozjpeg: IJG + BSD-3 + zlib [verified-upstream mozilla/mozjpeg LICENSE.md; and `codec/LICENSE.codec.md` in tarball] | decode (opt. `preserveOrientation`); encode: `quality`, `progressive`, `baseline`, `arithmetic`, `optimize_coding`, `trellis_*`, `quant_table`, `chroma_subsample`, `separate_chroma_quality`, `smoothing`, colour-space | enc wasm 246 KB → **58 KB**; dec wasm 163 KB → **62 KB**; glue 38+35 KB → ~21 KB |
| `@jsquash/png` | 3.1.1 · 2025-05-20 | Apache-2.0 | Built on the Rust `png` crate (README). Tarball's `codec/LICENSE.codec.md` is a **Google BSD-3** notice [verified-registry]; the Rust `png` crate itself is **MIT OR Apache-2.0** [verified-upstream: image-rs/image-png `Cargo.toml`] | decode + encode PNG (8/16-bit via ImageData) | 177 KB → **83 KB** |
| `@jsquash/oxipng` | 2.3.0 · 2024-06-18 | Apache-2.0 | oxipng **MIT** [verified-upstream shssoichiro/oxipng LICENSE] | **lossless PNG optimiser**: `level` (0–6), `interlace`, `optimiseAlpha`; threaded variant `pkg-parallel` | single-thread 160 KB → **74 KB**; parallel 231 KB → 99 KB (needs COOP/COEP) |
| `@jsquash/webp` | 1.5.0 · 2025-05-12 | Apache-2.0 | libwebp **BSD-3** [verified-upstream webmproject/libwebp COPYING] | encode: `quality`, **`target_size`**, `target_PSNR`, `lossless`, `near_lossless`, `exact`, `method`(0–6), `alpha_quality`, `use_sharp_yuv`, `image_hint`, `emulate_jpeg_size`, `thread_level`, `low_memory`, ...; decode | enc 275 KB → **112 KB** (SIMD 337 KB → 125 KB); dec 135 KB → **48 KB** |
| `@jsquash/avif` | 2.1.1 · 2025-05-20 | Apache-2.0 | libavif **BSD-2** [verified-upstream AOMediaCodec/libavif LICENSE]; AV1 encoder (aom) BSD-2 + **AOM Patent License 1.0** [verified-registry: wasm-vips notices list the same terms for aom] | encode: `quality`, `qualityAlpha`, `speed`(0–10), `subsample`, `bitDepth` 8/10/12, `lossless`, `tune`, `denoiseLevel`, `sharpness`, tiles; decode (opt. `bitDepth` 8/10/12/16 → `Uint16Array`) | enc 3.40 MB → **1.10 MB** (MT variant 3.45 MB → 1.11 MB, needs COOP/COEP); dec 1.14 MB → **333 KB** |
| `@jsquash/jxl` | 1.3.0 · 2025-07-12 | Apache-2.0 | libjxl **BSD-3** + Google **PATENTS** grant (royalty-free) [verified-upstream libjxl/libjxl LICENSE + PATENTS] | encode: `effort`(1–9), `quality`, `lossless`, `progressive`, `epf`, `lossyPalette`, `lossyModular`, `photonNoiseIso`, `decodingSpeedTier`; decode. **Package labels itself "JPEG XL (beta)"** | enc 1.33 MB → **505 KB** (SIMD+MT 1.97 MB → 565 KB); dec 829 KB → **310 KB** |
| `@jsquash/resize` | 2.1.1 · 2026-01-05 | Apache-2.0 | `resize` crate (MIT), hqx (Apache-2.0), magic-kernel (MIT) [verified-registry codec LICENSE files] | resize ImageData: `triangle, catrom, mitchell, lanczos3, hqx, magicKernel(+Sharp2013/2021)`, `fitMethod` stretch/contain, `premultiply`, `linearRGB` | 34 KB → **17 KB** (hqx 132 KB → 19 KB optional) |
| `@jsquash/qoi` | 1.1.0 · 2025-05-12 | Apache-2.0 | QOI MIT | QOI encode/decode (niche) | ~15 KB wasm |

**Maintenance signal:** jSquash packages were last published May 2025 – Jan 2026 (stable codecs, low churn). Risk is low because the codecs are the upstream mozjpeg/libwebp/libavif/libjxl builds from Squoosh.

**Capability ↔ feature mapping the AI developer needs**
- *Convert to target format with quality slider*: every encoder above.
- *Compress to exact KB (WebP)*: `target_size` is natively supported by libwebp (see `02-compression-and-size.md`).
- *Lossless JPEG → JPEG XL*: **NOT available through jSquash.** The jSquash JXL README documents only encoding of raw pixel data (and a `lossless` flag for pixel-lossless output) and states that stable browser support for displaying JXL is still limited ("intended for experimentation and testing") [verified-registry; confirmed by the parallel research review in `11`]. The "≈ 20 % smaller, pixel-identical JPEG recompression" is a **libjxl** capability that would need a **custom libjxl build** exposing JPEG transcoding. Position JXL as an **experimental / archival** output, not a web-delivery format.

### 2.2 HEIC / HEIF decode — `libheif-js` — **Tier B (LGPL-3.0) + PATENT-FLAG**

| Item | Value |
|---|---|
| Package | `libheif-js@1.23.5` (published 2026-10-04) — Emscripten build of libheif (same version as in wasm-vips) [verified-registry] |
| Licence | **LGPL-3.0** (package + libheif) [verified-registry + verified-upstream strukturag/libheif COPYING: library LGPL, sample apps MIT] |
| What's inside | `libheif.wasm` contains **libde265** (HEVC decoder, LGPL) — string scan found no x265/aom/dav1d → **decode HEIC only; no HEIC encoding; no AVIF decode** [verified by binary string scan] |
| Layout (LGPL-friendly) | `libheif-wasm/libheif.wasm` **1.46 MB → 486 KB gz** + `libheif.js` glue 91 KB → 29 KB. Also offers `libheif-bundle.js` (wasm inlined as base64, 2.0 MB) and a pure-JS asm.js build (3.2 MB) — **do not use the bundle/asm.js variants**; use the separate `.wasm` so the LGPL library stays replaceable |
| API | `new libheif.HeifDecoder().decode(buffer)` → image list → `display()` into canvas ImageData (multi-image HEIC supported) |
| Weight | **≈ 515 KB gz** |
| Why not alternatives | `heic-to` is also LGPL-3.0 but a 3 MB-raw single-file bundle (not replaceable); `heic2any` labels itself MIT but is a minified 1.3 MB bundle containing libheif (effective LGPL, stale since 2023); `@saschazar/wasm-heif` (MIT wrapper around libheif/libde265, last published 2021). See §8 |

**Patent note [PATENT-FLAG]:** HEIC = HEVC. Code licence (LGPL) ≠ patent licence; HEVC pools exist (Access Advance) [verified-search]. **Mitigation to propose:** on **Android**, call the OS decoder (`ImageDecoder`/`BitmapFactory`, API 28+) through a tiny Capacitor plugin, keeping libheif-js only as a web/old-OS fallback; on **Safari**, decode HEIC natively. This also saves ~0.5 MB in the APK. *Legal review recommended before shipping libde265 in the web build.*

### 2.3 RAW decode — `@colorhythm/libraw-wasm` — **Tier B (CDDL-1.0 option of LibRaw)**

| Item | Value |
|---|---|
| Package | `@colorhythm/libraw-wasm@1.1.1` (published 2026-08-03), wrapper MIT [verified-registry] |
| Engine licence | LibRaw: "one of two licences **as you choose**: LGPL-2.1 **or CDDL-1.0**" [verified-upstream LibRaw COPYRIGHT]; both licence files ship in the tarball. **Choose CDDL-1.0** (file-level copyleft — fine for an app). Confirm the build excludes LibRaw's GPL "demosaic packs" (not in default LibRaw; `[unverified]` for this build) |
| Capabilities | Exposes sensor buffer, geometry, CFA info, camera metadata, black/saturation levels, embedded thumbnails, and LibRaw-processed RGB output [verified-search + README] |
| Files | `libraw.wasm` 833 KB → **319 KB gz**; `libraw.mjs` 74 KB → 19 KB |
| Weight | **≈ 340 KB gz** |
| **Tier-A alternative (from parallel research, verified)** | `utif` (MIT) can parse TIFF-based RAW containers (DNG, CR2, NEF, ARW…) and **extract embedded JPEG previews and raw sensor data**, but its README states it *"does not convert the raw data into a displayable image"*. → The **Strict profile** ships "RAW **preview**"; "full RAW develop" stays Extended-only. Show the user which one they got |
| Practical limits | RAW files are 20–80 MB; decoding in a browser needs ≈ 2–4× file size in RAM → on low-end Android show a "large file" warning; **fast path = extract the embedded JPEG thumbnail/preview** (instant, tiny memory) and offer "full-quality develop" as slow mode |
| Alternative | `libraw-wasm@1.6.0` (ISC wrapper, 1.38 MB wasm, repo `ybouane/LibRaw-Wasm`) — no licence files shipped in tarball (underlying LibRaw terms unstated) → not chosen |

### 2.4 TIFF, PSD, BMP, ICO, TGA (small pure-JS) — **Tier A**

| Library | Ver · last pub | Licence | Does | Weight (gz) | Notes |
|---|---|---|---|---|---|
| `utif` | 3.1.0 · 2019 | MIT (Photopea) | decode/encode TIFF incl. multi-page, many compressions; depends on `pako` | 19 KB (+pako min ~14 KB) | Stale but stable and tiny; same author as UPNG |
| `tiff` | 7.1.3 · 2025-12 | MIT | TIFF decoder (read-only) | ~7 KB | Active; fallback reader |
| `ag-psd` | 31.0.2 · 2026-07 | MIT | read PSD (flattened composite and layers), write PSD | `bundle.js` 810 KB → **166 KB** | Use composite only for "PSD → PNG/JPG" |
| `icojs` | 1.0.1 · 2026-08 | MIT | parse ICO/CUR → PNG/bitmap; also encodes | ~3 KB (+deps) | deps: `bmp-ts`, `decode-ico`, `jpeg-js`, `pngjs`, `file-type` |
| `bmp-ts` | 1.0.9 · 2024-03 | MIT | BMP decode + **encode** | ~5 KB | Preferred over `bmp-js` (2018) |
| `png-to-ico` | 3.0.2 · 2026-07 | MIT | PNG→ICO | 9 KB raw | Node-oriented (verify browser use); **writing ICO by hand is trivial** (header + PNG entries) → recommended |
| `tga-js` | 1.1.1 · 2020 | MIT | TGA decode | ~2 KB | Niche; include only if a "game assets" pack is wanted |
| `pako` | 3.0.2 · 2026-09 | MIT AND Zlib | zlib/deflate in JS | ~14 KB min | Needed by utif/upng |
| `fflate` | 0.8.3 · 2026-05 | MIT | zip/gzip, streaming, sync+async | ~22 KB | **Preferred ZIP lib** (faster than JSZip) |
| `jszip` | 3.10.2 | `MIT OR GPL-3.0-or-later` → **use as MIT** | zip | 28 KB min | Fine, but fflate is smaller/faster |

### 2.5 SVG in/out

| Direction | Library | Licence / tier | Weight | Notes |
|---|---|---|---|---|
| SVG → PNG/JPG/WebP | Browser: `<img src=blob:svg>` → canvas | n/a | 0 | Cannot load external fonts/images referenced by the SVG (security); text uses system fonts → may differ |
| SVG → raster (high fidelity, own fonts) | `@resvg/resvg-wasm@2.6.2` (2024-03) | **MPL-2.0 → Tier B** [verified-registry] | `index_bg.wasm` 2.42 MB → **935 KB** | Deterministic across devices; load only if user reports font problems or wants exact rendering |
| SVG → raster (canvas-side) | `canvg@4.0.3` | MIT | ~36 KB | Alternative if `<img>` path is blocked |
| Raster → SVG | `vtracer-wasm@0.1.0` (2025-07, repo `jsscheller/vtracer-wasm`) | **MIT** — *licence is only in the `LICENSE` file; `package.json` has no `license` field* [verified-registry]; upstream **visioncortex/vtracer MIT** [verified-upstream] | `vtracer.wasm` 134 KB → **58 KB**; glue 3 KB | API (from `vtracer.d.ts`): `to_svg(rgbaPixels: Uint8Array, width, height, config) → string` (SVG text). `config` keys follow upstream vtracer settings (colour mode, speckle filter, colour precision, curve mode, corner/length thresholds…) — exact key names **`[unverified]`**, read upstream docs when integrating. Single-maintainer v0.1.0 → consider compiling upstream vtracer yourself |
| Raster → SVG (tiny) | `imagetracerjs@1.2.6` (2020) | **Unlicense** [verified-registry] | 46 KB → **12 KB** | Lower quality, posterise-style; good "lite" option |

### 2.6 PDF in/out

| Job | Library | Licence | Weight (gz) | Notes |
|---|---|---|---|---|
| **PDF → images** | `pdfjs-dist@6.4.299` (2026-10-03) | **Apache-2.0** (+ third-party: Adobe cmaps, Foxit/Liberation fonts, JBIG2/openjpeg notices shipped in tarball) [verified-registry] | main `pdf.min.mjs` 448 KB → **129 KB**; worker `pdf.worker.min.mjs` 1.24 MB → **367 KB**; optional wasm: `openjpeg.wasm` 80 KB, `jbig2.wasm` 40 KB, `qcms_bg.wasm` 35 KB; `quickjs-eval.wasm` 213 KB (scripting — **skip**) | Render each page to canvas at chosen DPI; ≈ **500 KB** + optional ~155 KB. Ship `cmaps`/fonts only if CJK/embedded fonts needed (1.1 MB bcmap raw) |
| **Images → PDF** (lightest) | Custom minimal PDF writer | own code | ~3 KB | A JPEG can be embedded **as-is** (`/DCTDecode`) with zero re-encode → instant, no quality loss, tiny; PNG needs Flate (`fflate`) + optional soft-mask for alpha |
| Images → PDF (library) | `@cantoo/pdf-lib@2.11.1` (2026-09; maintained fork of `pdf-lib`) | **MIT** (+ MIT standard-fonts, upng) | `pdf-lib.min.js` 602 KB → **246 KB** | Use if you also need merge/split/rotate/reorder pages, metadata, forms. Original `pdf-lib@1.17.1` (MIT) last published **2021** → prefer the fork |
| Text-to-image helpers | `unpdf@1.8.1` (MIT) | MIT | wraps pdf.js (~485 KB gz) | Not needed |

### 2.7 Format sniffing & probing — **Tier A**

| Library | Licence | Weight (gz) | Does |
|---|---|---|---|
| `file-type@22.1.1` (2026-09) | MIT | `index.js` 12 KB (+detectors ~5 KB) | Detect **true** file type from magic bytes (fixes ".jpg that is really HEIC/WebP/PNG") |
| `probe-image-size@7.4.0` (2026-08) | MIT | ~68 KB unpacked (light) | Read width/height/EXIF orientation from the first bytes without decoding |
| `image-size@2.0.4` (2026-09) | MIT | ~93 KB unpacked | Dimensions only; alternative |

### 2.8 Optional heavy engines

| Engine | Licence / tier | Weight | When to use |
|---|---|---|---|
| `@imagemagick/magick-wasm@0.0.44` (2026-09-30) | wrapper **Apache-2.0**; engine under the **ImageMagick License** (Apache-2.0-style; requires attribution + licence copy; "compatible with GPLv3") [verified-registry NOTICE] → **Tier A** | `magick.wasm` x64 **15.5 MB → 5.4 MB gz** (an x86 variant of the same size is also shipped — ship **one**); glue 400 KB → 97 KB | **Long-tail formats pack** (TGA/PCX/DDS/EXR/…/100+ formats). Heavy: lazy-load only on demand, Android could bundle it as an optional asset pack. *Which delegates (e.g. libheif) are compiled in is not stated in the package → test per format before advertising it* |
| `wasm-vips@0.0.19` (2026-09-29) | wrapper **MIT**; libvips **LGPL-3.0 (via "any later version" of 2.1)**, libheif LGPL, glib LGPL, libexif LGPL; others MIT/BSD/zlib; libimagequant **2.4.1 under BSD-2** (the old permissive release); aom has AOM patent licence [verified-registry THIRD-PARTY-NOTICES] → **Tier B** | `vips.wasm` 5.03 MB → **1.98 MB gz**; `vips-heif.wasm` 3.7 MB → 1.23 MB; `vips-jxl.wasm` 2.2 MB → 780 KB; `vips-resvg.wasm` extra | Streaming, low-memory pipeline for **huge images** (>100 MP) and many ops (Lanczos, ICC, TIFF/PDF/SVG in one lib). **Requires SharedArrayBuffer ⇒ COOP/COEP headers** (`Cross-Origin-Embedder-Policy: require-corp`, `Cross-Origin-Opener-Policy: same-origin`) [verified-registry README]; engine needs WASM SIMD + exception handling (Chrome 95+, Firefox 100+, Safari 16.4+). README says "still under early development" → **Phase-3 option, not MVP** |

---

## 3. Capability matrix (what to implement, with which engine)

| Format | Read | Write | Engine (priority order) |
|---|---|---|---|
| JPEG | ✅ | ✅ | native canvas → `@jsquash/jpeg` for control/better compression |
| PNG | ✅ | ✅ (+ optimise) | native → `@jsquash/png` + `@jsquash/oxipng` |
| WebP | ✅ | ✅ | native read; **write via `@jsquash/webp`** (Safari) |
| AVIF | ✅ | ✅ | native read where available; `@jsquash/avif` for write/fallback read |
| JPEG XL | ✅ | ✅ | `@jsquash/jxl` (Safari reads natively `[unverified]`) |
| GIF (static frame) | ✅ | ✅ | native read; writer in §05 (`gifenc`) |
| BMP | ✅ | ✅ | native read; `bmp-ts` or hand-written writer |
| ICO / CUR | ✅ | ✅ | `icojs` read; hand-written writer (PNG-in-ICO, sizes 16–256) |
| TIFF (multi-page) | ✅ | ✅ | `utif` |
| HEIC / HEIF | ✅ | ❌ (patent + GPL encoders; Android OS encoder optional `[unverified]`) | Safari native → Android OS decoder → `libheif-js` |
| RAW (CR2/CR3?/NEF/ARW/DNG/RAF/ORF…) | ✅ | ❌ | `@colorhythm/libraw-wasm` (CR3 support depends on LibRaw version `[unverified]`) |
| PSD | ✅ (composite) | ✅ optional | `ag-psd` |
| SVG | ✅ → raster | ✅ via vectorise | `<img>`/resvg; vtracer |
| PDF | ✅ → images | ✅ from images | pdf.js; minimal writer / pdf-lib fork |
| QOI, TGA, DDS, EXR | niche | niche | jSquash-qoi / tga-js / ImageMagick pack |
| JPEG 2000 | ⚠️ | ⚠️ | No permissively-licensed, verified JS/WASM wrapper found (`@abasb75/openjpeg` has **no licence** → rejected). Option: ImageMagick pack, or compile OpenJPEG (BSD-2 `[unverified]`) yourself. Low priority |

---

## 4. Creative features (what users actually want)

Ordered by value ÷ effort. Each is **pure client-side** with the tools above.

### A. "Just make it work" intents (users don't know formats)
1. **"Fix my file" button** — sniff the *real* type (`file-type`), fix wrong extensions (`.jpg` that is HEIC/WebP/AVIF), apply EXIF orientation, convert to the universally accepted JPG/PNG. Solves the #1 support question: *"upload failed / 'unsupported file'."*
2. **Convert for…** destination picker instead of a format picker: *WhatsApp · Email · Government form/portal · Print shop · Website (WebP) · Instagram · Resume/ID · Archive (lossless)*. Each destination = a **recipe** (format + max side + quality/KB + metadata policy). Recipes are data (JSON), user-editable, shareable.
3. **Auto-detect screenshots** (PNG with phone-screen dimensions) → suggest "PNG → WebP lossless / oxipng" and show the saving before converting.
4. **Transparent PNG → JPG** with a **background-colour picker** (white default, eyedropper) and live preview, with a warning that JPG has no transparency; reverse: **"JPG → PNG: make white transparent"** is *editing* → leave to the editor module.
5. **iPhone/HEIC receiver**: big "Drop HEIC here" tile, batch convert dozens at once, keep EXIF date, optionally keep/strip GPS.

### B. Batch & speed (users care about speed)
6. **Many-to-many export pack**: one source → *several* outputs in one pass (e.g. JPG 1080 px + WebP 480 px + 150 px thumbnail), downloaded as one ZIP (`fflate`, streaming).
7. **Progressive results**: show the first finished file immediately (don't wait for the batch); per-file progress + ETA; worker pool sized by `navigator.hardwareConcurrency` (cap 2 on low-RAM phones).
8. **Folder in → folder out** (Chromium File System Access API on web; Storage Access Framework on Android) preserving sub-folder structure; ZIP fallback elsewhere.
9. **Naming templates**: `{name}_{w}x{h}`, `{date}`, `{counter:03}`, format suffix; remember last template.
10. **Estimate before you convert**: encode a 256 px crop sample to predict output size ("≈ 4.2 MB → ≈ 620 KB") — cheap and builds trust.
11. **Remember per-tool settings + named "Recipes"** (e.g. "Aadhaar upload: JPG, ≤ 50 KB"). One tap next time.
12. **Paste/drag/share-in**: Ctrl+V from clipboard, drag from another tab, Android **Share-target** ("Share → Convert"), camera capture.

### C. Quality & colour correctness (hidden pain points)
13. **Display-P3 → sRGB** conversion toggle (avoids "dull colours" after sharing from iPhones) and **CMYK → RGB** for print-origin JPEGs. (`magick-wasm`/browser colour-space conversion; verify per engine.)
14. **"Keep / strip metadata" switch** on every convert (date, camera, GPS); default **strip GPS**.
15. **Lossless guarantee badge**: show "lossless / lossy" and, for lossless pairs (PNG↔WebP-lossless↔BMP↔TIFF), offer a **pixel-hash verify** ("identical pixels ✔").
16. **Mixed-format batch normaliser**: "Make every file the same format & size" for album uploads.

### D. PDF & documents (huge demand, low effort)
17. **Photos → PDF** with page size (A4/Letter/fit-to-image), margins, orientation, drag-to-reorder, **"PDF ≤ N KB"** (binary-search JPEG quality; see `02-compression-and-size.md`).
18. **PDF → images** (all pages / selected pages, DPI 72–300, JPG/PNG/WebP, ZIP).
19. **ID card / certificate to one A4 page** (front & back side by side, scale to real-world card size 85.6 × 54 mm — ISO/IEC 7810 ID-1 `[unverified]`).
20. **Merge scans from the camera** into one PDF (Android camera capture loop).

### E. "Designer/dev" shortcuts
21. **Format comparison view**: encode the same image as JPG/WebP/AVIF/JXL at matched quality and show size + a slider to compare (pick the smallest acceptable).
22. **Open-anything viewer**: HEIC/AVIF/JXL/TIFF/PSD/RAW preview with zoom, histogram & metadata, then "Convert" CTA — turns a niche converter into a daily-use utility.
23. **Sprite/icon pack export**: PNG → ICO (16-256) + favicon set → see `07-dev-designer-utilities.md`.

### F. Trust & privacy as a feature
24. **"0 bytes uploaded" live indicator** + **offline mode badge**; works after one load via Service Worker (users can test with airplane mode). Say it in the UI where files are dropped.

---

## 5. Implementation notes for the AI developer (gotchas)

1. **Architecture**: decode → `ImageData` (RGBA8) → process → encode. All jSquash codecs speak `ImageData`. Decode with the **native** `createImageBitmap(blob, {imageOrientation:'from-image'})` where possible; use WASM decoders for AVIF/JXL/HEIC/RAW/TIFF when native fails.
2. **Run codecs in Web Workers** (one worker per codec family, pool for batch). Transfer `ArrayBuffer`s, don't copy.
3. **Feature-detect, don't UA-sniff**: `wasm-feature-detect` (SIMD, threads), `typeof OffscreenCanvas`, `'ImageDecoder' in self`, `'VideoEncoder' in self`.
4. **Pick single-thread WASM builds** unless the host sends COOP/COEP. Multithreaded avif/jxl/oxipng/wasm-vips need `SharedArrayBuffer` (cross-origin isolation). On GitHub Pages you cannot set headers (needs a service-worker shim or a host such as Cloudflare Pages/Netlify with `_headers`); inside the Android WebView it requires intercepting requests in a custom plugin — **do not depend on it for MVP.**
5. **`canvas.toBlob` silent PNG fallback** → always compare `blob.type`; prefer WASM encoders for Safari and for AVIF.
6. **Canvas size limits**: iOS Safari 16.7 MP; Android WebView memory-bound. Guard: if `w*h > ~16 MP` → tile/stream (wasm-vips) or downscale-then-process; show a friendly "image too large for this device" message instead of crashing. Test a 48 MP phone photo (≈ 190 MB RGBA).
7. **Memory**: free `ImageBitmap.close()`, null big `ImageData`, process batches **sequentially per worker**; don't hold all decoded images.
8. **EXIF orientation**: apply once (browser does with `from-image`; `@jsquash/jpeg` decode has `preserveOrientation`); then write orientation = 1 or strip.
9. **Alpha**: JPEG/BMP/ICO-without-alpha need a background fill; premultiplied-alpha pitfalls when resizing (`@jsquash/resize` has `premultiply` default `true`).
10. **Vite**: add every `@jsquash/*` to `optimizeDeps.exclude`; keep `.wasm` as static assets with long cache headers; use `new URL('./x.wasm', import.meta.url)` patterns [verified-upstream known issues].
11. **LGPL compliance checklist (libheif-js, LibRaw-if-LGPL, wasm-vips)**: separate `.wasm` file (not inlined), in-app licence screen with full texts, link to exact source tarball/version, keep glue unminified-replaceable instructions in the repo README.
12. **Licences page**: generate from `licenses.json` produced by a tool such as `license-checker-rseidelsohn` `[unverified: tool name]` during CI; fail CI on GPL/AGPL/unknown.
13. **pdf.js memory discipline** *(adopted from the parallel research)*: never render all pages at once. Use a **virtualised page list**, render in the pdf.js **worker** to `OffscreenCanvas` → `ImageBitmap`, keep a **byte-budgeted LRU cache (≈ 256 MB ceiling, lower on phones)**, and **explicitly purge** canvases/bitmaps (`canvas.width=canvas.height=0`, `bitmap.close()`) when pages scroll away; pdf.js leaks canvases if contexts are not released and mobile Safari tabs crash first.
14. **Building PDFs is not pdf.js's job**: pdf.js renders; create/merge PDFs with the own minimal writer (JPEG as DCT) or `@cantoo/pdf-lib`.
15. **AVIF > 8-bit input**: to encode 10/12-bit AVIF the `data` of the `ImageData`-like object **must be a `Uint16Array`** with values in the bit-depth's range [verified-registry: jSquash AVIF README]; decode with `bitDepth: 10|12|16` returns a `Uint16Array` too.

---

## 6. Weight table for this section

| Pack | Files shipped (gzip) | Total | Load policy |
|---|---|---|---|
| **Core image codecs** | jpeg enc+dec (120) + glue (21) + png (83) + webp enc+dec (160) + glue (19) + oxipng (74) | **≈ 480 KB** | pre-bundle in APK; lazy on web |
| AVIF pack | enc 1,099 + dec 333 + glue 21 | ≈ 1.45 MB (dec only ≈ 345 KB) | on demand |
| JXL pack | enc 505 + dec 310 + glue 23 | ≈ 840 KB | on demand |
| HEIC pack | wasm 486 + glue 29 | ≈ 515 KB | on demand; Android: use OS decoder instead |
| RAW pack | 319 + 19 | ≈ 340 KB | on demand |
| TIFF + pako | 19 + 14 | ≈ 33 KB | on demand |
| PSD | 166 | ≈ 166 KB | on demand |
| Vectorise | vtracer 61 (or imagetracer 12) | ≈ 61 KB | on demand |
| PDF read | pdf.js 129 + worker 367 (+ opt. wasm 155) | ≈ 500–650 KB | on demand |
| PDF write | custom 3 / pdf-lib fork 246 | 3–246 KB | on demand |
| Utilities | file-type 17 + fflate 22 + probe 8 | ≈ 47 KB | core |
| *Optional* resvg | 939 | ≈ 0.94 MB | on demand |
| *Optional* ImageMagick | 5,421 + 97 | ≈ 5.5 MB | opt-in "format pack" |
| *Optional* wasm-vips | 1,976 + (heif 1,231) + (jxl 780) | 2.0–4.0 MB | Phase 3 |
| **All recommended (no optional)** | | **≈ 4.3–4.8 MB** | |

---

## 7. Open questions to resolve during build

1. Lossless **JPEG → JXL** transcode availability in `@jsquash/jxl` (see §2.1) — test or custom build.
2. HEVC patent exposure of shipping libde265 on web/Android — legal opinion; implement the **OS-decoder path on Android** first.
3. Does `magick-wasm` in this build include HEIC/AVIF delegates? Test each format.
4. Browser-native AVIF/JXL decode matrix (use feature detection rather than assumptions).
5. Real-device memory limits for RAW and >24 MP images on 3–4 GB Android phones.

## 8. Rejected / not useful (names only)

- **Licence-rejected:** `potrace` (GPL-2.0), `@abasb75/openjpeg` (no licence declared or shipped).
- **Effective-copyleft / unsuitable packaging:** `heic2any` (MIT label but bundles libheif/LGPL in an un-swappable minified file; stale 2023), `heic-to` (LGPL-3.0, 3 MB single-file bundle), `@saschazar/wasm-heif` (stale 2021), `libraw-wasm` (ISC wrapper without upstream licence files).
- **Heavier than needed / better alternatives exist:** `jimp` (pure-JS, slow for big images), `jspdf` (31 MB unpacked, 265 KB gz — only worth it for HTML-to-PDF), `pdfkit` (Node-first; 68 KB browser build but offers nothing over a custom writer here), `pngjs`/`jpeg-js` (pure-JS codecs; superseded by WASM codecs), `upng-js` (kept for APNG in §05, not for PNG), `bmp-js` (2018, replaced by `bmp-ts`), `gif-encoder-2`/`omggif` (see §05).
- **Not a library choice:** `sharp` (Node-only native), `ffmpeg.wasm` (see §05 for the licence situation).
