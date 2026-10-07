# 11 — Reconciliation with the Product Owner's Parallel Research

Source reviewed: **`Open_Source_Library_Research_Plan.docx`** ("Architectural Research and Component Evaluation for a Client-Side Image Processing Utility") — received 2026-10-07 after the main report was pushed.
Method: every factual claim that affects a decision was **re-checked against primary sources** (npm tarballs/READMEs, upstream licence files) or against web search; nothing was merged on trust. Where the two studies disagree, the resolution and evidence are below. Result: **1 new licence profile, 8 new presets, 1 corrected claim in each direction, and several adopted ideas.**

---

## 1. Where both studies agree (confidence ↑)

| Topic | Both conclude |
|---|---|
| Core codecs | **jSquash** (mozjpeg, libwebp, libavif, libjxl, oxipng) is the base; lazy-load, run in workers |
| TIFF | **UTIF.js** (MIT) |
| Vectorise | **VTracer** (MIT) instead of Potrace (GPL) |
| ZIP | **fflate** |
| PDF render | **pdf.js** (Apache-2.0), worker-isolated |
| Barcodes | **zxing-wasm** (+ a small QR generator) |
| GIF | **gifenc** (MIT) + own palette/dither code |
| Resize / crop UI | **pica**-class Lanczos resize; **cropper.js** |
| Metadata | **exifr** |
| Dup detection | perceptual hash (blockhash-class) |
| Diff | **pixelmatch** |
| Provenance | **c2pa-js** (MIT/Apache) |
| Rejected | **gifski** (AGPL), **gifsicle** (GPL), **pngquant/libimagequant** (GPL/commercial), **Potrace** (GPL), **ffmpeg.wasm default core** (GPL) → use **WebCodecs** |
| Video pipeline | WebCodecs `VideoDecoder` → canvas → gifenc / animated WebP (mp4box.js for demux in their version) |
| Target-size feature | binary search on quality, then dimension fallback |
| Architecture | lazy-loaded WASM packs, workers, SharedArrayBuffer needs COOP/COEP otherwise single-thread fallback |

---

## 2. Disagreements and how they were resolved

| # | Topic | Parallel doc | This report (before) | Verified evidence | **Resolution** |
|---|---|---|---|---|---|
| D1 | **LGPL libs** (`libheif-js`, `wasm-vips`) | **Reject** — static bundling by Vite/Webpack "effectively triggers" copyleft | Tier B (allowed if shipped as separate replaceable `.wasm`) | libheif-js LGPL-3.0 verified; wasm-vips = MIT wrapper + LGPL libvips/glib/libheif verified. Whether a separately loaded `.wasm` satisfies LGPL "relink" in an APK/web bundle is a **legal grey area** | **Two build profiles** (see §3): **Strict-permissive** (their rule — default for MVP) and **Extended** (Tier-B packs behind a build flag, after a legal read). `wasm-vips` stays Phase-3/optional in Extended only |
| D2 | **MPL-2.0 / CDDL** | Not mentioned (their allow-list is MIT/Apache/ISC/zlib only) | `mediabunny`, `exifreader`, `resvg` (MPL), LibRaw (CDDL) allowed as Tier B | Verified licences | In **Strict**, none of these are used: video = **mp4box (BSD-3) + mp4-muxer/webm-muxer (MIT)**; metadata = exifr; RAW = **UTIF preview extraction only** |
| D3 | **RAW → JPEG/PNG with UTIF** | "UTIF… extract RAW sensor data (DNG, CR2, NEF) and convert them into JPEG/PNG" | RAW needs LibRaw | **UTIF README (verified):** *"For RAW files, UTIF.js only decodes raw sensor data (and JPG previews, if there are any). It does not convert the raw data into a displayable image (RGBA). Such conversion is complex and out of scope."* | **Their claim is only partly right.** Strict profile ships **RAW preview extraction** (embedded JPEG via UTIF). **Full RAW develop** needs LibRaw (CDDL/LGPL) → Extended only. UI must say "preview" vs "full develop" |
| D4 | **Lossless JPEG → JPEG XL (~20 % smaller, pixel-identical) via `@jsquash/jxl`** | Stated as a capability | Flagged `[unverified]` | **jSquash JXL README (verified):** documents only encode of raw pixel data (+ `lossless` flag for *pixel* lossless) and warns "Only one stable browser supports displaying JPEG XL… intended for experimentation and testing". No JPEG-transcoding API | **Treat as NOT available** in jSquash. The ~20 % figure is a libjxl property that would need a custom libjxl build exposing JPEG transcoding. Position JXL as experimental/archival (their framing is right) |
| D5 | **Animated WebP via `@jsquash/webp`** | Pipeline step 5 | Use `wasm-webp` or own muxer | **jSquash WebP README (verified):** no animation/frame API | **Corrected:** use `wasm-webp` (MIT; libwebp BSD) `encodeAnimation`, or own RIFF `ANIM/ANMF` muxer around jSquash static frames |
| D6 | **pdf.js "builds PDFs"** (expense-report PDF) | Claims pdf.js can create PDFs | pdf.js is a renderer; create with own writer/pdf-lib | pdf.js is a parsing/rendering library | **Corrected:** create PDFs with the **own minimal PDF writer** (JPEG as DCT) or `@cantoo/pdf-lib`; pdf.js only renders |
| D7 | **Metadata "Sanitize" method** | Re-encode through canvas (drops all) | Lossless JPEG/PNG/WebP segment stripping + orientation rule; re-encode for HEIC | Re-encoding is lossy for JPEG and changes size/quality; segment stripping is lossless | **Offer both:** default **lossless strip** (JPEG/PNG/WebP); **"re-encode & strip"** for HEIC/AVIF/other and as the "paranoid" option |
| D8 | **Size figures** | See table §4 | Measured gzip per file | Measured from npm tarballs on 2026-10-07 | **Use measured figures** (`08`, `data/measurements.json`); theirs are rounded and mix raw/unpacked/gzip bases |
| D9 | **UPSC photo max KB** | 20–**300** KB, 350×350 | 20–200 KB | Search: one source 20–300 KB with 350×350 px; another 20–200 KB | Preset updated to **350×350, 20–300**, flagged *conflicting*; **default to the stricter ≤ 200 KB** unless the user picks the looser limit |
| D10 | **SSC signature** | 140×60 px, 10–20 KB | 236×79 px (10–20 KB), alt 140×60 | Sources disagree | Both stored (variants); follow current notification |
| D11 | **Target-size loop** | Plain binary search 0–100, 5 % dimension steps | + log-size interpolation, never-exceed, WebP `target_size`, PNG ladder, group budget | Both valid | Keep mine as the reference; **adopt their 5 % step** as the default dimension fallback (adaptive 5–10 %) |
| D12 | **c2pa "validates against trust lists"** | implied full validation | `c2pa-ts` lacks chain-of-trust; Adobe `c2pa-web` is 3.3 MB gz | c2pa-ts README (verified): *validation mostly implemented except chain of trust*; "not fully functional yet" | UI wording: **"Credentials found / signature checks"** — never "verified authentic" unless Adobe's engine and trust list are used `[trust-list handling of c2pa-web unverified]` |

---

## 3. The two build profiles (new)

| | **Strict-permissive** (their stance) | **Extended** (this report's default before) |
|---|---|---|
| Allowed licences | MIT, Apache-2.0, ISC, BSD, zlib, Unlicense, OFL — **no LGPL / MPL / CDDL anywhere** | Strict **+** Tier-B packs (LGPL as separate `.wasm`, MPL, CDDL) after legal review |
| HEIC | Safari native + **Android OS decoder**; *no software decoder on Chrome/Firefox web* | + `libheif-js` (503 KB gz) |
| RAW | **preview extraction** (UTIF) | + full develop (LibRaw wasm, CDDL) |
| Video | **mp4box + mp4-muxer/webm-muxer** (85 KB gz) + WebCodecs | **mediabunny** (173 KB gz min) + extensions |
| SVG raster | `<img>`/canvas | + resvg (MPL) |
| Metadata | exifr + own strippers | + exifreader (MPL), ExifTool pack |
| Android size (Standard / Full) | **4.43 MB / 5.89 MB** | 5.01 MB / 6.79 MB |
| Legal risk | lowest | needs counsel for LGPL packaging |

Implementation: one code base; Tier-B packs are dynamic-import modules compiled in only when `PROFILE=extended`. CI deny-list enforces the profile (`10 §7`). **Recommendation:** ship the MVP on **Strict**, collect real HEIC/RAW demand data, then decide on Extended with a legal opinion. Note that the *deprecated* muxers (`mp4-muxer`, `webm-muxer`, MIT) are functional but unmaintained — budget a small wrapper you can replace with mediabunny later.

---

## 4. Size claims: parallel doc vs measured

| Library | Parallel doc | Measured (2026-10-07) | Comment |
|---|---|---|---|
| `@jsquash/avif` | ~2.1 MB wasm | enc 3.4 MB raw → **1.10 MB gz**; dec 1.14 MB raw → 333 KB gz | theirs ≈ encoder-ish raw; mine are per-variant file sizes |
| `@jsquash/webp` | ~893 KB (unpacked) | package unpacked 893 KB ✔; **shipped** enc 275 KB + dec 135 KB raw → **160 KB gz** | package size ≠ shipped size |
| `@jsquash/jpeg` | ~500 KB–1 MB | unpacked 518 KB; enc+dec wasm 409 KB raw → **120 KB gz** | overestimate |
| `zxing-wasm` | 1.46 MiB full / 1.04 MiB reader | v3.1.5: full 1.5 MB raw (720 KB gz); **reader 944 KB raw → 408 KB gz** | their reader subpath advice ✔ (adopted) |
| `UTIF.js` | ~60 KB (282 KB with pako) | 57 KB raw → **19 KB gz** (+ pako 14 KB gz) | ✔ |
| `fflate` | ~8 KB gz | `esm/browser.js` 90 KB raw → **22 KB gz** (v0.8.3) | their 8 KB likely a minimal build `[verify]` |
| `pica` | ~40 KB | 80 KB raw → **23 KB gz** | ✔ |
| `pdf.js` | ~3.5 MB core+worker | `pdf.min.mjs` 448 KB + `pdf.worker.min.mjs` 1.24 MB raw → **496 KB gz** | ✔ (raw) |
| VTracer | ~1.5 MB wasm | `vtracer-wasm` 134 KB raw → **58 KB gz** | different build/wrapper; theirs may be another package `[verify which]` |
| `c2pa-js` | ~1.5 MB | `@contentauth/c2pa-web` wasm **8.8 MB raw / 3.3 MB gz**; pure-TS `c2pa-ts` far smaller | theirs likely older toolkit build |

---

## 5. Ideas adopted from the parallel research

| Idea | Where incorporated |
|---|---|
| **"Exam kit" bundles**: one flow produces passport photo + postcard photo + signature + thumbprint (+ IBPS declaration) as correctly sized/KB-limited files in **one ZIP** | `03` creative list (new item A-6), preset groups in `data/presets.json`, README catalogue G08 |
| **Caption strip** (name + date printed below the face on a white strip) for NEET-style photos, drawn on canvas before the size search | preset `neet-name-date-strip`; `03` creative item |
| **Expense/receipt compressor**: HEIC→JPEG → scanner-style contrast → palette reduction → ≤ 150 KB image or PDF | `02` creative (document-scan mode) + README catalogue P08 |
| **Shell + Worker model**: shell JS < 200 KB; **prefetch heavy WASM in the background right after the first file is dropped** | `10 §1` (budget + prefetch rule) |
| **pdf.js memory discipline**: virtualised page list, **byte-budgeted LRU (≈ 256 MB)**, render in worker → `ImageBitmap`, explicitly purge canvases | `01 §5` notes 13–14 |
| **AVIF > 8-bit encode needs `Uint16Array`** (verified in jSquash README) | `01 §5` note 15 |
| **Reader-only zxing subpath** to save ~400 KB | already in `07`; confirmed |
| **JXL framed as archival/storage feature**, not web delivery | `01` notes |
| **Social cover overlays** showing where the profile photo overlaps on desktop vs mobile | `03` §5-A (already) — reinforced |
| **Privacy-Shield copy**: concrete warnings ("GPS location detected: …, Device: …, Timestamp: …") + one-click sanitise | `04` §5-B (UX copy) |
| **Strict licence profile** (their LGPL stance) | §3 above, `08`, `10 §7`, README |

## 6. Ideas in the parallel doc that I could **not** verify

- "UTIF.js can process **multi-gigabyte** archival TIFFs" — plausible only with streaming; untested; browser memory limits apply.
- "VTracer uses **O(n) hierarchical** algorithms" — upstream claim not re-checked.
- Exact **NEET signature / UPSC pixel values**: the Word file's inline dimension images were cropped (they show "400 ×", "275 ×", "140 ×", "200 ×" without the second number). Values were completed from search (UPSC 350×350, IBPS 200×230 / 140×60 / 240×240 / 800×400, NEET 200×230) — **please confirm against your source tables**, and share the second numbers if you have them.
- Reference [6] in the Word file ("Image swiss knife app idea brainstorming.docx") was not provided — **send it if you want its ideas merged**.
- Their exam-resizer sources (resizebox.com, resizerelay.com, resizeforforms.online, photoresizer.in, ilovexams.in, exammint.in, ikprinthub.in) are **aggregator sites**, unreachable from the sandbox; treat their numbers as *third-party* (done in `presets.json`).

## 7. What changed in the repository because of this document

| File | Change |
|---|---|
| `11-parallel-research-reconciliation.md` | **new** (this file) |
| `data/presets.json` | 43 → **51 presets**; UPSC photo corrected (350×350, 20–300 KB, conflict noted); NEET passport/postcard/signature/thumb + caption-strip rule; IBPS photo/signature/thumb/declaration; SSC signature variants |
| `data/packs.json`, `tools/build-register.mjs`, `08`, `data/packs.computed.json` | **strict-profile** packs and scenarios (4.43 MB / 5.89 MB), profiles table |
| `01`, `03`, `05`, `10`, `README.md`, `00` | corrections/adoptions listed above |
| `data/verdicts-*.json`, `data/libraries.json`, `09` | `mp4box`, `mp4-muxer`, `webm-muxer` promoted to *optional (strict profile)*; `utif` notes RAW-preview scope |
