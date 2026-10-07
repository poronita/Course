# 03 — Resize, Crop & Geometry (research)

Status: **complete** · Verified on 2026-10-07 · Labels/tiers: see `00-methodology.md`
**Companion data:** `data/presets.json` (51 presets with confidence/sources + paper/print size tables)

**Functions covered:** resize (px / % / longest side / print size + DPI) · **exact W×H crop** (fit / fill / pad modes) · aspect-ratio & social presets · ID/passport/exam-portal presets · DPI changer · rotate / flip / straighten · perspective fix · pad / expand canvas · grid / carousel splitter · stitch · print-sheet maker · smart (non-AI) crop · content-aware resize (seam carving).

---

## 0. TL;DR (decisions)

| Job | Use | Tier | Weight (gz) |
|---|---|---|---|
| **Crop UI** (framework-agnostic) | `cropperjs@2.2.0` (web components; MIT) — has `$toCanvas`, `$rotate`, `$scale`, `$center`, keyboard, `initialAspectRatio`, `initialCoverage`, `precise` | A | ~13 KB (min) / 22 KB (esm) |
| Crop UI **if the app is React / Vue / Angular** | `react-image-crop` (ISC, 5 KB) · `react-easy-crop` (MIT, 8 KB) · `vue-advanced-cropper` (MIT, 20 KB) · `ngx-image-cropper` (MIT, 13 KB) · headless `@zag-js/image-cropper` (MIT, ~6 KB) | A | 5–20 KB |
| High-quality **downscale/upscale** | `@jsquash/resize` (Lanczos3 / Magic Kernel; from §01) or `pica` (MIT) | A | 17 KB / 23 KB |
| **Smart crop** (classical saliency — *not AI*) | `smartcrop@2.0.5` (MIT) | A | 5 KB |
| **Perspective / "straighten a photographed page"** (manual 4-corner) | own homography + bilinear sampling, or `perspective-transform` (MIT) | A | ~2 KB |
| Perspective **auto-detect** document scanner (optional pack) | `@techstark/opencv-js` (Apache-2.0) + `opencv-document-scanner` (MIT) / `jscanify` (MIT) | A | **~3.7 MB** (OpenCV) — optional |
| **DPI metadata** change (no resample) | `changedpi` (MIT) / `dpi-tools` (MIT) or own 60-line JFIF/pHYs writer | A | ~2–3 KB |
| Blur for "blurred background" padding | `stackblur-canvas` (MIT) | A | 5 KB |
| Content-aware resize (futuristic) | `seam-carving-js` (MIT, 2017) | A | ~4 KB (slow) |
| Lossless 90° JPEG rotate | **gap** (see §02 G1) → EXIF-orientation flag or re-encode | — | — |
| Grid/carousel split, stitch, collage, print sheet, pad | plain canvas + `fflate` ZIP | A | 0 |

**Extras added by this section:** ≈ **55–70 KB gz** (optional scanner pack ≈ 3.7 MB). Everything else reuses §01/§02.

**Rejected (names only):** `pintura`(npm name is an unrelated Dojo package; the real Pintura editor is commercial), `tui-image-editor` (2022, heavy), `fabric`/`konva` (general canvas frameworks, not needed), `png-dpi-reader-writer` (no licence file), `jscanify` as a *default* dep (bundles 8.8 MB OpenCV).

---

## 1. Native baseline & why a wasm resampler is still worth it

| Capability | Fact | Source |
|---|---|---|
| `drawImage` scaling | Browsers use bilinear-class sampling; large down-scales (> 2×) can alias → use **step-down halving** or a proper Lanczos/Magic-Kernel resampler for export | `[unverified magnitude — test]` |
| `imageSmoothingQuality='high'` | Hint only; implementation varies by browser | `[unverified]` |
| `createImageBitmap(blob,{resizeWidth,resizeHeight,resizeQuality})` | Decodes **and** resizes in one step (lower peak memory for huge photos) | `[unverified per-browser fidelity]` |
| `OffscreenCanvas` | Lets resize/crop run in a Worker | `[verify support in target WebViews]` |
| iOS Safari canvas | max **16,777,216 px** per canvas | [verified-search] pqina.nl |
| Android WebView/Chrome | memory-bound limits; Chrome-Android accelerates canvases with ≈ ¼ desktop budget | [verified-search] |

**Rule:** previews with native canvas; **export through `@jsquash/resize`** (deterministic, high-quality, works in a worker, same output on every device).

---

## 2. Open-source base tools (verified)

### 2.1 Crop UI components

| Library | Ver · last pub | Licence | Gz (largest dist file) | Notes |
|---|---|---|---|---|
| **`cropperjs`** | 2.2.0 · 2026-08-23 | **MIT** | `cropper.min.js` 44 KB → **13 KB**; esm 125 KB → 22 KB | v2 = custom elements (`cropper-canvas/image/selection/handle…`); deps `@cropper/utils`, `@cropper/elements` (MIT). API strings found in package: `$toCanvas`, `$rotate`, `$scale`, `$center`, `$moveTo`, `$resize`, `$reset`, `$selection`, options `initialAspectRatio`, `initialCoverage`, `precise`, `keyboard`, `multiple`, `dynamic` [verified-registry]. **Best default** — works with any framework |
| `@cropper/elements` | 2.2.0 | MIT | `elements.min.js` 40 KB → 11 KB | the components alone |
| `react-image-crop` | 11.1.2 · 2026-06 | **ISC** | 19 KB → 5 KB (+css 1 KB) | tiny, % or px crop; no rotate/zoom built-in |
| `react-easy-crop` | 6.2.4 · 2026-10-06 | MIT | 39 KB → 8 KB | pinch-zoom/rotate, mobile friendly |
| `react-advanced-cropper` | 0.20.1 · 2025-03 | MIT | 86 KB → 14 KB | highly customisable, stencils |
| `vue-advanced-cropper` | 2.8.9 · 2024-06 | MIT | 83 KB → 20 KB | Vue |
| `ngx-image-cropper` | 9.1.7 · 2026-08 | MIT | 84 KB → 13 KB | Angular |
| `@zag-js/image-cropper` | 1.45.0 · 2026-10-05 | MIT | 31 KB → 6 KB | headless state-machine (build your own UI) |

> **Decision for the AI developer:** the front-end framework is not yet fixed. Prefer **`cropperjs` v2** (framework-agnostic). A **custom crop overlay** (pointer events + canvas) is also reasonable (~300 lines) and gives full control of the *exact-pixel* semantics and preset overlays; use cropperjs as the reference behaviour.

### 2.2 Resampling & smart crop

| Library | Ver | Licence | Gz | Capabilities |
|---|---|---|---|---|
| `@jsquash/resize` | 2.1.1 | Apache-2.0 | 17 KB (+hqx 19 KB opt.) | `triangle, catrom, mitchell, lanczos3, hqx, magicKernel, magicKernelSharp2013/2021`, `fitMethod` stretch/contain, `premultiply`, `linearRGB` [verified-registry] |
| `pica` | 10.0.3 · 2026-08 | MIT | 23 KB | Lanczos/box/Hamming; workers + WASM; mature |
| `image-blob-reduce` | 5.0.1 | MIT | 23 KB (+pica) | convenience wrapper |
| **`smartcrop`** | 2.0.5 · 2021-09 | MIT | 5 KB | **Classical** content-aware crop (edge detection + skin-tone + saturation scoring) — **no ML model**; returns best crop rectangle for a target aspect ratio. Stale but tiny and stable. (Quality is "good enough" for suggestions; always let the user adjust) |

### 2.3 Perspective, scanner, straighten

| Library | Ver · last pub | Licence | Size | Use |
|---|---|---|---|---|
| `perspective-transform` | 1.1.3 · 2015 | MIT | 4 KB min → 2 KB gz | 4-point homography matrix math; you still write the sampling loop (or WebGL) |
| Own implementation | — | — | ~2 KB | Compute 3×3 homography from 4 corner pairs, inverse-map each output pixel, **bilinear** sample. Pure JS in a worker is fast enough for ≤ 12 MP |
| `@techstark/opencv-js` | 5.0.0-release.1 · 2026-06 | **Apache-2.0** [verified-registry LICENSE] | `opencv.js` 13.0 MB → **3.67 MB gz** (brotli 2.65 MB) | Auto document-edge detection (Canny + contours), `warpPerspective`, adaptive threshold, deskew. **Heavy** → "Scanner pack", opt-in. A **custom OpenCV.js build** with only `imgproc` is possible and far smaller `[unverified size]` |
| `opencv-document-scanner` | 1.2.2 · 2025-09 | MIT | 5 KB → 2 KB gz | thin helper that expects opencv.js to be loaded |
| `jscanify` | 1.4.3 · 2026-07 | MIT | `src/opencv.js` 8.8 MB → 2.8 MB gz bundled | document-scanner convenience; **do not take as dependency** (ships its own old OpenCV) |

### 2.4 DPI metadata

| Library | Ver · last pub | Licence | Gz | Does |
|---|---|---|---|---|
| `changedpi` | 1.0.4 · 2018 | MIT (Shutterstock) | 2 KB | Rewrites JFIF density / PNG `pHYs` chunk **without re-encoding** |
| `dpi-tools` | 1.0.7 · 2020 | MIT (same licence text) | 3 KB | Same idea, ESM/CJS |
| `piexifjs` | 1.0.6 · 2019 | MIT | 12 KB | EXIF read/write incl. `XResolution/YResolution` (also used in §04) |

> DPI is **metadata only**: it changes how print software sizes the image, not the pixel count. Say so in the UI ("This changes print size, not sharpness").

### 2.5 Misc geometry

| Library | Licence | Gz | Use |
|---|---|---|---|
| `stackblur-canvas@3.0.1` (2026-03) | MIT | 5 KB | fast Gaussian-like blur for *blurred-background padding* (don't rely on `ctx.filter`, `[unverified: Safari support]`) |
| `seam-carving-js@1.0.0` (2017) | MIT | ~4 KB | content-aware width/height shrink; slow in pure JS; optional "wow" feature |
| `fflate` | MIT | 22 KB | ZIP of tiles/slides |

---

## 3. Geometry semantics (spec for the AI developer)

All tools must share one **Output Spec** so presets/recipes/crop/resize compose:

```ts
type FitMode =
  | 'exact-crop'  // user-selected rectangle → scaled to W×H (aspect locked to W:H)
  | 'cover'       // scale so image covers W×H, then crop overflow using an anchor (center/top/…/smart)
  | 'contain'     // scale to fit INSIDE W×H, output size = scaled size (no crop, no pad)
  | 'pad'         // contain + fill to exactly W×H (solid / blurred / edge-mirror / transparent)
  | 'stretch';    // ignore aspect (warn: distorts)
interface OutputSpec {
  width?: number; height?: number;        // px; if only one is given keep aspect
  fit: FitMode; anchor?: 'center'|'top'|'bottom'|'left'|'right'|'smart'|{x:number,y:number};
  noUpscale?: boolean;                    // default true: never enlarge beyond source
  resample?: 'lanczos3'|'magicKernel'|'catrom'|'triangle';
  background?: string|'blur'|'mirror'|'transparent';
  dpi?: number;                           // metadata only
  rotate?: 0|90|180|270; flipX?: boolean; flipY?: boolean; straightenDeg?: number;
  format?: 'jpg'|'png'|'webp'|'avif'; maxKB?: number; minKB?: number;   // see 01/02
}
```

**Rules**
1. **Order of operations:** apply EXIF orientation → rotate/flip/straighten → crop → resample → pad → (metadata) → encode.
2. **Crop in source coordinates** (natural pixels), never in display coordinates; keep sub-pixel `x,y,w,h` as floats and round once at the end; output `W×H` must be **exact integers** — verify by probing the encoded bytes (`probe-image-size`) in tests.
3. **Aspect-locked exact crop:** when the user picks `W×H`, the selection rectangle's ratio is locked to `W/H`; if the selected region is smaller than `W×H` show "upscaling X %" (warn > 150 %).
4. **No double resampling:** crop and scale in a single transform (`drawImage` with source rect → dest rect, or resize on the cropped `ImageData`).
5. **Downscale ratios > 2×** use Lanczos3 / Magic Kernel (wasm) or step-down halving; **never** one-shot bilinear.
6. **Huge sources (> 16 MP):** use `createImageBitmap` with `resize*` or the wasm resizer on tiles; crop first when possible to reduce memory.
7. **Rounding rule for physical sizes:** `px = round(mm / 25.4 × dpi)`; document it (e.g., 35×45 mm @300 dpi = **413×531**).
8. **Transparency:** `pad` with `transparent` only for PNG/WebP/AVIF; for JPEG force a solid colour.
9. **Presets set Output Spec + format/KB** — selecting a preset sets all three tools (crop → resize → compress) in one go.

### Reference size tables (computed; also in `data/presets.json`)

| Paper | mm | 72 (pt) | 150 dpi | **300 dpi** | 600 dpi |
|---|---|---|---|---|---|
| A4 | 210×297 | 595×842 | 1240×1754 | **2480×3508** | 4961×7016 |
| A5 | 148×210 | 420×595 | 874×1240 | 1748×2480 | 3496×4961 |
| A3 | 297×420 | 842×1191 | 1754×2480 | 3508×4961 | 7016×9921 |
| US Letter | 215.9×279.4 | 612×792 | 1275×1650 | **2550×3300** | 5100×6600 |

| Photo | @300 dpi | @600 dpi |
|---|---|---|
| 4×6 in | 1200×1800 | 2400×3600 |
| 5×7 in | 1500×2100 | 3000×4200 |
| 8×10 in | 2400×3000 | 4800×6000 |
| 35×45 mm (UK/EU/IN) | **413×531** | 827×1063 |
| 2×2 in (US) | 600×600 | 1200×1200 |

Sanity checks that agree with sources: US passport "2×2 in" ↔ min/max 600/1200 px; SSC "275×354 px" ↔ 3.5×4.5 cm @ 200 dpi = 276×354; PAN "394×276 px" ↔ 5×3.5 cm @ 200 dpi.

---

## 4. Preset database (high-value, needs care)

Full data: **`data/presets.json`** (51 entries; merged with the parallel research — see `11`) — social, stickers, store assets, ID/passport, India exams/government forms, with `confidence`, `sources[]`, `lastVerified`.

### Key verified facts (summary)

| Group | Highlights |
|---|---|
| **Instagram** | post 1080×1080 / **1080×1350 (4:5)** / 1080×1440 (3:4) / 1080×566 (1.91:1); Story/Reel **1080×1920**; profile 320×320 (circle) [third-party, buffer.com] |
| **Facebook** | cover **851×315** (≈ 640×360 on mobile); profile ≥ 320×320; shared/OG **1200×630** [third-party] |
| **LinkedIn** | personal banner **1584×396** (≤ 8 MB); profile 400×400; company cover 1128×191; feed 1200×627 [third-party] |
| **X** | header **1500×500**; profile 400×400 (≤ 2 MB); post 1200×675 (≤ 5 MB) [third-party] |
| **YouTube** | thumbnail **1280×720**, min width 640, **< 2 MB**; banner 2560×1440, **safe area 1546×423**, ≤ 6 MB; profile 800×800 [third-party] |
| **WhatsApp stickers** | **512×512 WebP, static ≤ 100 KB, animated ≤ 500 KB**, tray icon 96×96, 3–30 per pack [third-party] |
| **Telegram stickers** | static PNG/WebP, one side exactly **512**, other ≤ 512, **≤ 512 KB**; video: **WEBM VP9 ≤ 256 KB, ≤ 3 s, ≤ 30 fps** [**official** core.telegram.org] |
| **Google Play** | feature graphic **1024×500**, JPEG/24-bit PNG **no alpha**; screenshots min 320 px, 2–8 per device type [**official** support.google.com] |
| **US passport/visa (digital)** | **600–1200 px square, JPEG, ≤ 240 KB**, sRGB, 24-bit, compression ratio ≤ 20:1 [**official** travel.state.gov] |
| **UK passport (online)** | **≥ 600×750 px, 50 KB–10 MB, JPEG**; print 35×45 mm, head 29–34 mm [**official** gov.uk] |
| **India Passport Seva** | **630×810 px JPEG, 10–250 KB**; 35×45 mm [third-party; portal validates exactly] |
| **India exams** | SSC photo ≈ 275×354 px, 20–50 KB; signature 236×79 **or** 140×60 px, 10–20 KB · **UPSC** photo **350×350 px, 20–300 KB** (another source: ≤ 200 KB → enforce the stricter by default), signature 20–100 KB · **NEET UG** passport 200×230 px 10–200 KB, postcard 4×6 in 10–200 KB, signature 4–30 KB, thumbprints 10–200 KB, optional name+date strip · **IBPS** photo 200×230 (20–50 KB), signature 140×60 (10–20 KB), thumb 240×240 (20–50 KB), declaration 800×400 (50–100 KB) · JEE photo 10–200 KB, signature 10–100 KB (older 4–30 KB) [**conflicting / third-party — see `11`**] |
| **PAN** | photo 20–50 KB; reported change April 2026 to 5×3.5 cm (≈ 394×276 px @200 dpi); older 213×213 [**low confidence — verify**] |
| **Visa prints** | Schengen 35×45 mm (head 32–36 mm); China 33×48 mm; Canada 50×70 mm [third-party] |

### Why the preset system must be data-driven (lesson from the research)
- **Sources disagree and change** (SSC dimensions, JEE signature limits, PAN size change). Hard-coding specs would ship wrong numbers.
- Design: presets are **versioned JSON** with `confidence`, `sources`, `lastVerified`, `validNote`; the UI shows a small **"Check the official notice"** badge for anything not `official`.
- **Updates without owning a server:** (a) ship presets inside each app release; (b) optional, user-consented fetch of a static JSON file from a public repo/CDN you do not operate as an application server (e.g., GitHub raw) — still "no server of yours" but it **is a network call**, so keep it off by default and disclose it.
- **User-created presets** (save current settings as a named preset) + **import/export as JSON or share-link/QR** → community can fix gaps; add "report wrong preset" via a `mailto:`/issue link (no backend).

---

## 5. Creative features (what users will love)

### A. Exact-size crop that "just works"
1. **Pixel-exact badge:** live "Output: 413×531 px · 38 KB" while dragging; numeric fields for X, Y, W, H; arrow-key nudge (Shift = 10 px); mouse-wheel/pinch zoom; double-tap = fit.
2. **Preset search box** ("pan", "ssc", "insta story", "passport uk"): typeahead over `presets.json`, **recent + favourites**, country filter (auto-pick by `navigator.language`, always changeable).
3. **One-tap pipeline presets:** *size + format + KB limit + background + DPI* in one (e.g. "Passport Seva 630×810 · JPG · 10–250 KB · white"). Applies crop → resize → compress (`02`) automatically and **verifies** the result against the preset (✔ size, ✔ KB, ✔ format) before download.
4. **Ratio chips:** 1:1, 4:5, 3:4, 2:3, 9:16, 16:9, 1.91:1, 3:2, 3:1, 4:1, A-series (√2), custom; lock/unlock; swap orientation button.
5. **Overlays (pure drawing, no AI):** rule-of-thirds, golden-ratio, centre cross; **circle mask** for profile pictures; **safe areas** (YouTube banner 1546×423 verified; Instagram Story UI zones `[numbers unverified]`); **ID-photo head guide** (oval + chin/crown lines using the UK 29–34 mm rule) so the user aligns the face themselves.

6. **Exam-kit bundles** *(from the parallel research)*: pick an exam (NEET, UPSC, SSC, IBPS…) → the app asks for **one portrait + one signature (+ thumbprints/declaration where required)** and produces **every required file at the exact px and KB limits** in **one ZIP** (names like `Photograph.jpg`, `Signature.jpg` — several portals validate file names, `[verify per portal]`). Internally: crop (locked ratio) → resize (pica/Lanczos) → **target-KB search** (`02` §3) → verify against the preset → ZIP (`fflate`). Show ✔/✖ per requirement and the preset's `lastVerified` date.
7. **Caption strip** (NEET-style): optional white strip below the face with **candidate name + photo date** drawn on canvas before the size search (preset `neet-name-date-strip`; single-source rule — verify with the current bulletin). Fonts: §07 §2.5 (Gujarati/Devanagari/Latin).
8. **Stricter-limit default:** where sources disagree (UPSC 200 vs 300 KB), the tool aims for the **stricter** limit and tells the user.

### B. Multi-target & batch
6. **"Social kit" export:** from *one* image generate Instagram 4:5 + Story 9:16 + Facebook cover + LinkedIn banner + YouTube thumbnail + X header; each target gets an **independent crop** (initialised by `smartcrop`, adjustable), then one ZIP.
7. **Bulk crop with anchor** (centre/top/smart) to a fixed spec for hundreds of images (e-commerce square 1:1 listing photos; ID photos).
8. **Carousel splitter:** one wide image → N slides of 1080×1350 with exact seams; **Instagram grid splitter** (3×1, 3×2, 3×3) with correct posting order hint.
9. **Match size / make-all-same:** "Make B the same size as A" or normalise a folder to one W×H via `cover` or `pad`.
10. **Square-pad with blurred background** (popular for WhatsApp DPs and listings) — `pad` + `stackblur-canvas`.

### C. Print & documents
11. **Print-size calculator:** enter paper/photo size + target DPI → required px; **"Will this print sharp?"** shows effective ppi (e.g. "250 ppi at 8×10 — good") using generic thresholds `[guidance numbers unverified]`.
12. **Passport/ID sheet maker:** 35×45 mm × N on 4×6 in / A4 with cut guides, 300-dpi PNG/PDF (A4 @300 = 2480×3508; 4×6 = 1200×1800).
13. **DPI fixer:** "set 300 dpi without changing pixels" for upload sites that demand it (explain it is metadata).
14. **Two-sided ID on one A4 page** at real size (ISO ID-1 85.6×54 mm `[unverified here; standard]`).
15. **Document straighten:** manual 4-corner perspective fix (no OpenCV) + auto-edge option in the optional Scanner pack; clean-up filters (grayscale/B&W threshold) hand off to `02` document-scan mode.

### D. Mobile-only conveniences (Android)
16. **Wallpaper fitter:** detect device resolution (`screen.width × devicePixelRatio`) and crop exactly for lock/home screen incl. parallax margin.
17. **Share-target:** "Share → Crop to…" with last-used preset; **camera → crop to preset** (capture, align with the ID guide, export).
18. **Pinch-zoom + two-finger rotate straighten** with haptic tick at 0° and 90° `[WebView haptics plugin unverified]`.
19. **Gallery batch:** pick 50 photos → apply preset → save to a dedicated album (MediaStore), originals untouched.

### E. Fun / viral
20. **Circle & rounded-corner avatar maker** (transparent PNG), **sticker maker** (512×512 WebP with 100 KB auto-fit — chains with `02`), **meme-safe crops**.
21. **Seam-carving "reshape without cropping"** demo (content-aware); label as experimental.
22. **Before/after crop animation** shareable as GIF (chains with §05).

---

## 6. Implementation notes (gotchas)

1. **EXIF orientation first.** Crop coordinates must be in the *oriented* image. Use `createImageBitmap(blob,{imageOrientation:'from-image'})` or `@jsquash/jpeg` `decode(..., {preserveOrientation:true})`.
2. **Colour profile:** canvas works in sRGB; wide-gamut photos should be converted before export (see §01 §4-C).
3. **Retina/zoom maths:** keep a single transform matrix (image→screen) and derive crop in natural px from it; unit-test with odd sizes (e.g. 4031×3023).
4. **Touch:** `touch-action: none` on the crop surface; use Pointer Events; prevent page scroll while dragging; large handles (≥ 44 px hit area).
5. **Memory:** release `ImageBitmap`s (`close()`); crop-then-resize; avoid holding both full-res and preview copies in the main thread.
6. **Verification step:** after encoding, decode the header (`probe-image-size`) and compare to the Output Spec; fail loudly in tests.
7. **Preset UX:** never silently upscale; show warning chips (`Upscaled 180 %`, `Below min 600×750`).
8. **Lossless rotate (JPEG):** until a jpegtran WASM exists (see §02 G1), 90° rotation = decode → rotate → re-encode at quality ≥ 92 **or** set the EXIF Orientation flag (note: some uploaders ignore it). Tell the user which one happened.
9. **Seam carving & perspective in Workers** — they are CPU-heavy; show progress and allow cancel (terminate worker).
10. **Accessibility:** crop handles need keyboard support and ARIA labels; numeric inputs are the accessible path to exact crops.

---

## 7. Weight table (gzip)

| Component | Gz | Policy |
|---|---|---|
| cropperjs (min) | ~13 KB | core of the crop tool |
| @jsquash/resize (from §01) | 17 KB | on demand |
| smartcrop | 5 KB | on demand |
| stackblur-canvas | 5 KB | on demand |
| changedpi (or own writer) | 2 KB | core |
| perspective-transform (or own) | 2 KB | on demand |
| seam-carving-js | 4 KB | on demand (experimental) |
| fflate (ZIP; from §01) | 22 KB | core |
| presets.json (43 entries) | ≈ 4 KB | core |
| **Added by §03 (excl. §01/02)** | **≈ 55–70 KB** | |
| *Optional* Scanner pack: OpenCV.js (+helpers) | ≈ 3.7 MB | opt-in download; Android may bundle |

---

## 8. Rejected / not useful (names only)

- **Commercial / mis-named:** `pintura` (npm package is an unrelated Dojo-era package; the real Pintura editor is commercial).
- **Heavier than needed:** `tui-image-editor` (2022; 176 KB gz min), `fabric` (189 KB gz), `konva` (57 KB gz), `filerobot-image-editor` (stub on npm; real editor is a separate heavy package).
- **Unclear licence file:** `png-dpi-reader-writer` (package says MIT but ships no licence file).
- **Superseded / unnecessary:** `vue-cropperjs`/`ember-cropperjs`/`ng-cropperjs`/`angular-cropperjs` (old wrappers for Cropper.js v1), `exif-auto-rotate`, `jpeg-autorotate` (Node), `fast-png` (not needed).
- **Do not depend on:** `jscanify` (bundles an 8.8 MB OpenCV), `smartcrop-*` adapters (Node/Sharp/GM).
