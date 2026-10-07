# 07 — Developer & Designer Utilities (research)

Status: **complete** · Verified on 2026-10-07 · Labels/tiers: see `00-methodology.md`

**Functions covered:** **App-icon / favicon studio** (ICO, ICNS, Android adaptive, iOS, PWA/maskable) · Open-Graph / social-card maker · Play-Store/App-Store screenshot & graphic maker · **SVG** optimise / SVG→PNG / SVG→data-URI · **QR & barcode** generate + scan · colour tools (picker, palette-from-image, gradients, shades, **contrast checker**, colour-blind preview, colour names) · image diff / compare · ASCII / pixel-art / mosaic / halftone effects · Base64 & code snippets · collage/justified layouts · multi-density asset generator (@1x/@2x/@3x, Android mdpi–xxxhdpi) · text-on-image with Indian-script fonts · emoji assets.

---

## 0. TL;DR (decisions)

| Job | Use | Tier | Weight (gz) |
|---|---|---|---|
| **ICO / PNG-in-ICO** | own writer (≈ 40 lines) | — | ~1 KB |
| **ICNS** (macOS) | own writer; reference **`png2icons@2.0.1`** (MIT, 2019; type codes verified in source) | A | ~2 KB / (png2icons ≈ 30 KB) |
| Favicon / PWA / Android / iOS packs | canvas + `@jsquash/resize` (§01) + `fflate` ZIP + templates | A | ~0 extra |
| **SVG optimise** | `svgo@4.1.0` browser build (`svgo/browser`), MIT | A | **191 KB** (lazy) |
| SVG → raster | `<img>`+canvas (0 KB) ; optional `resvg` (§01) | A / B | 0 |
| **QR generate** | headless: `uqr@0.1.3` (MIT) · styled (dots, logo, gradients): `qr-code-styling@1.9.2` (MIT) · classic: `qrcode@1.5.4` (MIT) | A | 8 KB / 14 KB / ~10 KB |
| **QR scan (light)** | `jsqr@1.4.0` (Apache-2.0; QR only; 2021) | A | 56 KB |
| **Barcode/QR scan (all formats)** | `zxing-wasm@3.1.5` **reader build** (MIT) | A | **408 KB** (lazy) |
| `BarcodeDetector` polyfill | `barcode-detector@3.2.2` (MIT; wraps zxing-wasm — **self-host the wasm**) | A | 17 KB + wasm |
| **1-D barcodes generate** | `jsbarcode@3.12.3` (MIT) | A | 11 KB (min) |
| **2-D barcodes generate** (DataMatrix, PDF417, Aztec, GS1…) | `bwip-js@4.11.4` / `@bwip-js/browser` (MIT) | A | 55 KB + 381 KB (lazy) |
| **Colour maths** | `colord@2.10.0` (MIT, **2 KB**) + plugins; `culori@4.0.2` (MIT, 31 KB) for OKLCH gradients | A | 2 / 31 KB |
| **Palette from image** (classical quantisation, no AI) | `colorthief@3.5.0` (MIT; OKLCH quantisation; `getPaletteSync`, `getSwatches`) | A | 12 KB |
| **Contrast checker** | **own WCAG 2.x formula** (public spec) — **not `apca-w3`** (restrictive licence) | — | ~0.5 KB |
| Colour-blind simulation | own matrices or `@bjornlu/colorblind@1.0.3` (MIT, 2020) | A | ~1 KB |
| Colour names | `color-name@2.1.1` (CSS names, MIT) for nearest-named-colour; `color-name-list` (MIT, 30 k names) only as an opt-in pack | A | 1 KB / 306 KB |
| **Image diff** | `pixelmatch@8.0.0` (ISC) | A | 7 KB |
| Collage / justified rows | `justified-layout@4.1.0` (ISC, Flickr) or own grid templates | A | 2 KB |
| DOM → PNG (share cards) | **canvas drawing (preferred)**; optional `html-to-image@1.11.13` / `modern-screenshot@4.7.0` (MIT) | A | 7 / 11 KB |
| Fonts for overlays (Indian scripts) | `@fontsource/inter`, `@fontsource/noto-sans-gujarati`, `@fontsource/noto-sans-devanagari` (**OFL-1.1**) | A (OFL) | woff2 per script: Latin 24 KB · Gujarati 37 KB · Devanagari 50 KB (400 weight) |
| Emoji graphics | `@twemoji/api@17.0.3` — code MIT, **graphics CC-BY-4.0 (attribution)** | A + CC-BY | 8 KB + images |

**Added by this section (typical session):** 20–60 KB core + lazy packs (SVGO 191 KB, zxing 408 KB, bwip 436 KB).

**Rejected (names only):** `apca-w3` (**"W3 License for Compliant Code Only"**, "All Rights Reserved, patent(s) pending" — not OSI/commercial-safe), `satori` as a default (MPL-2.0 OK, but needs fonts + rasteriser; canvas is lighter), `html5-qrcode`, `qr-image` (2016), `tinycolor2` (2023; superseded by colord), `resemblejs` (optional), `png-to-ico`/`ico-endec` (`ico-endec` is **MPL-2.0**, 2020; writing ICO by hand is simpler), `colorjs.io` (108 KB gz, overkill), `chroma-js` (fine licence but unnecessary).

---

## 1. Verified specs that drive the icon/favicon studio

| Target | Spec | Source |
|---|---|---|
| **Android adaptive icon** | Layer canvas **108×108 dp**; masked viewport **72×72 dp**; **safe zone 66×66 dp** (keep logo within 48–66 dp); **18 dp/side** reserved for system effects; provide **foreground + background** layers (vectors preferred) and an optional **monochrome** layer for themed icons | [verified-search] developer.android.com adaptive icons |
| **PWA maskable icon** | square image with the main icon inside a **safe-zone circle of radius 40 % of the width** (outer 10 % may be cropped); ≥ **192×192 and 512×512** PNG for installability; manifest `purpose: "maskable"` (or `"any maskable"`) | [verified-search] web.dev/maskable-icon, MDN |
| **iOS / App Store icon** | **1024×1024 PNG, no alpha/transparency**, sRGB | [verified-search] Apple developer forums / Xamarin docs |
| **Apple touch icon** | **180×180** PNG (single size covers iPhones/iPads) | [verified-search] favicon guides 2026 |
| **Favicon minimal set (2026)** | `favicon.svg` (supports `prefers-color-scheme`; Safari 17+), `favicon.ico` (32×32 legacy), `apple-touch-icon.png` 180, PWA 192 + 512; extended sizes 16/32/48/64 | [verified-search] favicon guides |
| **ICNS** type codes used by a complete encoder | `ic04, ic05, ic07, ic08, ic09, ic10, ic11, ic12, ic13, ic14` (PNG-based) + legacy `is32/s8mk, il32/l8mk` | [verified-registry: png2icons source] — size ↔ code mapping `[verify against the source/Apple docs]` |
| **ICO** sizes | 16, 24, 32, 48, 64, 72, 96, 128, 256 (PNG-compressed entries OK on Windows 10+; older Windows needs BMP entries) | [verified-registry: png2icons README] |
| **Play Store** | app icon (512×512 PNG `[unverified]`), feature graphic **1024×500** JPEG/24-bit PNG (no alpha), screenshots min dimension 320 px, 2–8 per device type | [verified-search] support.google.com |
| **Android launcher PNG densities** | mdpi 48 · hdpi 72 · xhdpi 96 · xxhdpi 144 · xxxhdpi 192 px (legacy launcher icons) and 1 : 1.5 : 2 : 3 : 4 density ratios | `[unverified; standard Android]` |
| **WCAG 2.x contrast** | ratio = (L1+0.05)/(L2+0.05), L = 0.2126 R + 0.7152 G + 0.0722 B (linearised sRGB); AA ≥ 4.5 : 1 text (3 : 1 large), AAA ≥ 7 : 1 (4.5 : 1 large) | `[standard; unverified here — public W3C spec]` |

---

## 2. Open-source base tools (verified)

### 2.1 Icons & SVG

| Library | Ver · last pub | Licence | Gz | Notes |
|---|---|---|---|---|
| `png2icons` | 2.0.1 · 2019-07 | MIT (bundles UPNG, UZIP — MIT) | ~30 KB | Complete **ICNS** (16→512@2×) and **ICO** (9 sizes, PNG or BMP entries) from one PNG; Node-style API (uses `Buffer`) → use as **reference** or add a Buffer shim |
| `png-to-ico` | 3.0.2 · 2026-07 | MIT | 9 KB raw | Node-oriented |
| `ico-endec` | 0.1.6 · 2020 | **MPL-2.0** | 2 KB | ICO encode/decode; tiny; MPL |
| **`svgo`** | 4.1.0 · 2026-08-24 | **MIT** | `dist/svgo.browser.js` 786 KB → **191 KB** | exports `svgo/browser` → `optimize(svgString, {plugins:[…]})`; remove metadata/comments/editor cruft, merge paths, minify, precision control |
| `canvg` | 4.0.3 | MIT | 36 KB | SVG→canvas (alt) |
| `html-to-image` | 1.11.13 · 2025-02 | MIT | 7 KB | DOM node → PNG/SVG/canvas (fonts/CORS caveats) |
| `modern-screenshot` | 4.7.0 · 2026-04 | MIT | 11–14 KB | similar, actively maintained |

### 2.2 QR & barcodes

| Library | Ver · last pub | Licence | Gz | Capabilities |
|---|---|---|---|---|
| `uqr` | 0.1.3 · 2026-04 | MIT | **8 KB** | tiny encoder → matrix / SVG / ASCII; modern |
| `qrcode` | 1.5.4 · 2024-08 | MIT | ~10 KB (core+renderers) | canvas/SVG/terminal; classic |
| `qrcode-generator` | 2.0.4 · 2025-08 | MIT | 11 KB | very compatible encoder |
| **`qr-code-styling`** | 1.9.2 · 2025-04 | MIT | **14 KB** | dot/rounded/classy/extra-rounded styles, corner styles, gradients, **logo in centre**, canvas/SVG; ideal "QR studio" base |
| `@konnorr/qr-creator` | 1.1.0 · 2026-07 | MIT | 11 KB | lightweight styled QR |
| `jsqr` | 1.4.0 · 2021-04 | **Apache-2.0** | 56 KB | pure-JS QR decoder from `ImageData`; QR only; stale but stable |
| **`zxing-wasm`** | 3.1.5 · 2026-10-06 | **MIT** | **reader 944 KB → 408 KB** · writer 632 KB → 338 KB · full 1.5 MB → 720 KB | ZXing-C++ in WASM: read **and** write QR, DataMatrix, Aztec, PDF417, EAN/UPC, Code 128/39 …; use **reader-only** build for scanning, **writer** only if you need exotic codes |
| `barcode-detector` | 3.2.2 · 2026-08 | MIT | 17 KB (+ zxing wasm) | polyfill for the native `BarcodeDetector` API built on zxing-wasm. **Check where it loads the `.wasm` from; override to a self-hosted URL** `[unverified default CDN behaviour]` |
| `qr-scanner` (Nimiq) | 1.4.2 · 2022-11 | MIT | 6 KB + worker 10 KB | uses native `BarcodeDetector` if present; stale |
| `@zxing/library` | 0.23.0 · 2026-04 | Apache-2.0 | ~106 KB (min) | pure-JS ZXing port (alternative) |
| `jsbarcode` | 3.12.3 · 2026-01 | MIT | `JsBarcode.all.min.js` 65 KB → **11 KB** | CODE128, EAN, UPC, CODE39, ITF, MSI, Pharmacode… canvas/SVG |
| `bwip-js` / `@bwip-js/browser` | 4.11.4 · 2026-08 | MIT | `bwip-js.mjs` 55 KB + `bwipp.mjs` 381 KB | **100+ barcode types** (DataMatrix, PDF417, Aztec, GS1, MaxiCode, …) (PostScript-derived engine) |

### 2.3 Colour

| Library | Ver · last pub | Licence | Gz | Notes |
|---|---|---|---|---|
| **`colord`** | 2.10.0 · 2026-08 | MIT | **2 KB** | parse/convert HEX/RGB/HSL/HWB; plugins (names, a11y/contrast, harmonies, mix, LCH/Lab/CMYK…) |
| `culori` | 4.0.2 · 2025-06 | MIT | 31 KB | OKLab/OKLCH, gamut mapping, **perceptual gradients**, tree-shakable |
| `chroma-js` | 3.2.0 · 2025-11 | `BSD-3-Clause AND Apache-2.0` | 19 KB (min) | scales/ColorBrewer; fine but optional |
| `colorjs.io` | 0.7.1 · 2026-07 | MIT | 108 KB | full CSS Color 4; too big |
| `tinycolor2` | 1.6.0 · 2023 | MIT | 10 KB | superseded by colord |
| **`colorthief`** | 3.5.0 · 2026-08 | MIT | **12 KB** | `getColorSync / getPaletteSync / getSwatches` (async in Node), **OKLCH quantisation** option, `observe()` live palettes from `<video>/<canvas>/<img>`, worker-friendly (`ImageBitmap`/`OffscreenCanvas`), Color objects with contrast + text-colour recommendation |
| `node-vibrant` | 4.0.4 · 2026-01 | MIT | (modular) | Vibrant/Muted swatches |
| `@bjornlu/colorblind` | 1.0.3 · 2020 | MIT | ~1 KB | protan/deutan/tritan simulation |
| `color-name` | 2.1.1 · 2026-07 | MIT | 1 KB | 148 CSS colour names |
| `color-name-list` | 14.51.0 · 2026-09 | MIT ("requires simple attribution"; curated from many sources incl. Wikipedia list of named colours) | `colornames.esm.js` 1.2 MB → **306 KB** | 30 k names → "Name that colour"; ship as **optional download pack**; keep attribution; re-check source licences before bundling |
| ❌ `apca-w3` | 0.1.9 · 2022 | **"Limited W3 License"** — *"W3 License for Compliant Code Only … All Rights Reserved. Patent(s) pending"* [verified-registry LICENSE] | — | **rejected**; offer WCAG 2.x only (or link to the APCA site) |
| `wcag-contrast` | 3.0.0 · 2019 | BSD-2-Clause | 1 KB | tiny; or write it yourself |

### 2.4 Diff, layout, effects

| Library | Licence | Gz | Use |
|---|---|---|---|
| `pixelmatch@8.0.0` (2026-10-06) | ISC | 7 KB | pixel diff + anti-aliasing tolerance; heat-map |
| `resemblejs@5.0.0` (2023) | MIT | 7 KB | alt diff with "ignore colours/antialiasing" |
| `justified-layout@4.1.0` (2021) | ISC | 2 KB | Flickr's justified rows for collages/galleries |
| `image-q@4.0.0` (§02/§05) | MIT | 19 KB | **fixed-palette quantise + dither** → pixel-art/retro/e-ink/halftone looks |
| own: nearest-neighbour upscale, ASCII ramp, Braille, Bayer matrices, mosaic | — | ~1–3 KB each | |

### 2.5 Fonts & emoji (for text-on-image, cards, watermarks)

| Package | Licence | Size (woff2, weight 400) | Notes |
|---|---|---|---|
| `@fontsource/inter@5.3.0` | **OFL-1.1** | latin 24 KB | UI/headline text |
| `@fontsource/noto-sans-gujarati@5.3.0` | OFL-1.1 | gujarati 37 KB + latin 11 KB | Gujarati text |
| `@fontsource/noto-sans-devanagari@5.3.0` | OFL-1.1 | devanagari 50 KB + latin 11 KB | Hindi/Marathi |
| *(other Noto Sans scripts exist for Tamil, Telugu, Bengali, Arabic, CJK…)* | OFL-1.1 | per subset | lazy-load by Unicode range (`@fontsource` CSS already splits by `unicode-range`) |
| `@twemoji/api@17.0.3` | **MIT (code) AND CC-BY-4.0 (graphics)** | 8 KB + SVG/PNG assets | attribution required; system emoji differ per OS — use Twemoji for consistent exports |

> Rule: **never rely on system fonts for exported images** (differ per device; some not redistributable). Bundle OFL fonts and draw with `FontFace` before canvas rendering.

---

## 3. Specs for the generators (for the AI developer)

### 3.1 App-Icon Studio — output matrix
Input: one square master (SVG or ≥ 1024 PNG) + background colour/gradient + padding + optional monochrome silhouette.
```
web/
  favicon.svg   favicon.ico(16,32,48)   apple-touch-icon.png(180)
  icon-192.png  icon-512.png  icon-maskable-192.png  icon-maskable-512.png (content inside 40%-radius circle)
  manifest.webmanifest  +  <head> snippet
android/
  adaptive: ic_launcher_foreground.png (432×432 = 108dp@4x), ic_launcher_background.png|color,
            ic_launcher_monochrome.png, res/mipmap-anydpi-v26/ic_launcher.xml (+ round)
  legacy:   mipmap-mdpi 48 · hdpi 72 · xhdpi 96 · xxhdpi 144 · xxxhdpi 192  (ic_launcher + ic_launcher_round)
  play:     512×512 PNG (store listing)
ios/
  AppIcon.appiconset/Contents.json + icon-1024.png (no alpha) [+ legacy sizes optional]
desktop/
  icon.ico (16–256)   icon.icns (ic04…ic14)
```
**Preview:** circle / squircle / rounded-square / teardrop masks; **safe-zone overlay** (66 dp circle; 40 % maskable circle); light/dark/themed (monochrome tinted) previews. **Validation:** iOS 1024 has *no alpha*; PWA 512 passes maskable safe-zone check.

### 3.2 QR design rules (make scans succeed)
- Quiet zone ≥ **4 modules**; high contrast dark-on-light (inversion/low-contrast gradients can fail); keep logo ≤ ~20–30 % of area with error-correction **Q/H**; minimal printed size ≈ 2 cm for simple URLs `[rule-of-thumb, unverified]`.
- **Self-test:** after generation, **decode the rendered canvas with `jsqr`** and show ✅ "scannable" (catches style/logo mistakes).
- Payload templates: URL · text · **Wi-Fi** (`WIFI:T:WPA;S:<ssid>;P:<pass>;;`) · vCard/MeCard · SMS · e-mail · `geo:` · calendar event · **UPI payment link** (`upi://pay?pa=<vpa>&pn=<name>&am=<amount>&cu=INR` — format `[unverified; confirm with NPCI spec]`).

### 3.3 Contrast & colour-blind tools
- Contrast: show ratio, AA/AAA pass/fail for normal/large text and UI components (3 : 1), and **suggest the nearest passing colour** by adjusting OKLCH lightness (`culori`).
- Colour-blind preview: protanopia, deuteranopia, tritanopia (+ achromatopsia) via 3×3 matrices on linear RGB; show original/sim side-by-side on the user's image.

### 3.4 Multi-density asset generator
From one **@3x / xxxhdpi** source: iOS `@1x/@2x/@3x`; Android `drawable-mdpi…xxxhdpi` (scales 1, 1.5, 2, 3, 4 `[standard]`); web `1x/2x`; output ZIP with correct folder/file names; Lanczos downscale (§03); optional oxipng pass (§01).

---

## 4. Creative features (what users will love)

### A. For app/web creators (also acquires SEO traffic)
1. **App-Icon Studio** (§3.1): drag one logo → **every** icon size + code snippets + ZIP; live previews on a fake home-screen (circle/squircle/themed) and browser tab; **maskable & adaptive safe-zone guides**; auto **monochrome** layer for Android themed icons; *"Your icon has transparency — App Store will reject it"* validator.
2. **Play-Store listing kit** (very relevant to *you* shipping this app): screenshot framer (caption, gradient background, simple device outline), **feature graphic 1024×500**, 512 icon, auto-export to required sizes; checklist of requirements (min 320 px, 2–8 shots, no alpha for JPEG/24-bit PNG) `[verified-search]`.
3. **Social/OG card maker:** 1200×630 templates (title + subtitle + logo + brand colours + image), **auto-fit multi-script text** (Gujarati/Hindi/Latin via Noto/Inter), export JPEG ≤ 300 KB (chains with §02) + `<meta property="og:image">` snippet.
4. **Multi-density asset exporter** (§3.4) and **sprite/atlas packer** (MaxRects, JSON atlas; shares code with §05 sprite sheets).
5. **SVG toolbox:** optimise (shows bytes saved), **SVG → PNG at N sizes**, **SVG → data-URI / base64 / CSS background snippet**, strip editor metadata, preview on light/dark checkerboard.
6. **Image → code:** Base64 data URI, `<img>`/`<picture>`/Markdown/CSS snippets, Android `VectorDrawable` import `[needs separate converter — optional]`.

### B. QR & barcode studio (everyday + business use)
7. **QR studio:** payload templates (Wi-Fi, UPI, vCard, event, geo…), **styled** (dots/corners/gradient/logo), SVG/PNG/PDF export, **scannability self-test**, **batch from CSV** (offline) → printable **label/sticker sheets**.
8. **Scan from image/gallery/camera**, copy/open/save; **history stored locally**; "scan multiple codes in one photo" (zxing multi-result).
9. **Barcode generator for shops:** EAN-13/UPC/Code-128/GS1 with check-digit calculation, price-label sheets (PDF).
10. **Wi-Fi poster maker:** SSID + QR + instructions → A4/A5 printable (chains with §03 print sizes).

### C. Colour lab
11. **Palette from photo** (6–10 swatches; **OKLCH** for balanced results) with **tap-to-copy HEX/RGB/HSL/OKLCH**, **CSS/Tailwind/Android XML/SwiftUI/Flutter export**, **poster palette card** image.
12. **Shade scale generator** (50 … 950), **harmony wheel** (complementary/triad/analogous), **gradient builder** with perceptual interpolation (`culori`) → CSS/SVG/PNG.
13. **Contrast checker with fixes**, **colour-blind simulator**, **"name this colour"** (optional pack).
14. **EyeDropper:** native `EyeDropper` API where available `[Chromium-only — unverified]`, else canvas pixel picker with magnifier loupe.
15. **Brand colour from logo → full theme** (light/dark tokens) JSON.

### D. Fun & creative effects (viral, shareable, all client-side)
16. **Pixel-art converter** (grid size, palette presets such as 4-shade Game-Boy-style, 16-colour retro; Bayer/FS dithering; ×N nearest-neighbour upscale).
17. **ASCII / Braille / emoji-mosaic** art (Twemoji with attribution), **photo-mosaic**, **halftone**, **1-bit e-ink/thermal-printer** output (Floyd–Steinberg/Atkinson).
18. **Cross-stitch / bead / LEGO-style pattern maker:** quantise to N colours, grid with **colour counts & legend**, printable PDF — strong "wow" with only image-q + canvas.
19. **Image diff & "spot the change":** slider, onion-skin, blink, heat-map (pixelmatch) — useful for designers/QA and kids' puzzles.
20. **Collage / photo-grid maker** (templates + justified rows), **text-on-image / meme** with Noto fonts, **placeholder & gradient wallpaper generator**.

### E. Mobile-specific
21. **Share-target QR:** share text/URL from any app → QR instantly (and save to gallery).
22. **Camera "scan anything" shortcut** (home-screen shortcut/widget): QR/barcode, then actions.
23. **Wallpaper generator** sized to the device (`screen × dpr`), with the palette-from-photo gradients.

---

## 5. Implementation notes (gotchas)

1. **Fonts before canvas text:** `await new FontFace(...).load(); document.fonts.add(f)` (or `document.fonts.load('16px Inter')`), otherwise canvas draws fallback fonts; use `ctx.measureText` for auto-fit; handle **complex scripts** (Gujarati/Devanagari shaping works in canvas via the browser's text engine; verify on Android WebView).
2. **QR from `<canvas>` scaling:** render at integer module sizes; disable smoothing (`imageSmoothingEnabled=false`) when upscaling.
3. **Scanning performance:** downscale frames to ~640 px; run decoding in a Worker; request `facingMode: 'environment'`; handle permission denial; on Android prefer the native `BarcodeDetector` when available else zxing-wasm.
4. **`barcode-detector`/`zxing-wasm` wasm hosting:** the README-default may fetch from a CDN → **self-host** and set the module override (otherwise breaks offline & the "no network" promise) `[verify]`.
5. **SVGO in browser:** run in a Worker (191 KB gz bundle; heavy on large SVGs); keep `viewBox`, don't remove `title` if accessibility matters; show diff of bytes.
6. **ICO/ICNS writers:** write PNG-compressed entries (smaller) but allow BMP for legacy Windows; ICNS = sequence of `[type(4) len(4) data]` chunks inside `icns` header — mirror `png2icons` source logic.
7. **Icon validation:** run the iOS "no alpha" check by scanning alpha channel; maskable check by measuring the opaque bounding box vs the 40 % circle.
8. **Palette extraction:** downscale to ≤ 200 px first; ignore near-white/near-black if desired; keep deterministic seeds.
9. **Licences page:** add Twemoji graphics attribution (CC-BY-4.0), Noto/Inter OFL notices, color-name-list attribution if used.
10. **Accessibility:** all colour tools must show text values, not colour alone; contrast tool outputs must be screen-reader friendly.

---

## 6. Weight table (gzip)

| Component | Gz | Policy |
|---|---|---|
| colord (+a11y/names plugins) | ~3 KB | core |
| culori (OKLCH, gradients) | 31 KB | on demand |
| colorthief | 12 KB | on demand |
| pixelmatch | 7 KB | on demand (shared §02) |
| uqr / qr-code-styling | 8 / 14 KB | on demand |
| jsqr | 56 KB | on demand |
| **zxing-wasm reader** | **408 KB** | on demand (multi-format scanning) |
| jsbarcode | 11 KB | on demand |
| bwip-js (2-D barcodes) | ≈ 436 KB | opt-in |
| svgo (browser) | 191 KB | on demand |
| ICO/ICNS writers + templates | ~4 KB | core of Icon Studio |
| justified-layout | 2 KB | on demand |
| Fonts (per script, woff2) | 24–50 KB each | lazy by Unicode range |
| color-name-list | 306 KB | opt-in pack |
| **Typical added weight per tool** | **10–60 KB** (+ lazy packs above) | |

---

## 7. Rejected / not useful (names only)

- **Licence:** `apca-w3` (restrictive "W3 License for Compliant Code Only", all rights reserved/patent pending).
- **Heavier than needed / superseded:** `colorjs.io`, `chroma-js` (kept as option only), `tinycolor2`, `satori` (as default), `html5-qrcode`, `qr-image` (2016), `qr-creator` (2020), `png-to-ico`, `ico-endec` (MPL, 2020), `sharp-ico` (Node).
- **Node-only / unsuitable for the web:** `favicons`, `pwa-asset-generator`, `sharp`-based tools.
- **Not needed:** `resemblejs` (pixelmatch suffices), `@zxing/library` (zxing-wasm preferred), `qr-scanner` (stale; native/zxing path preferred), `twemoji@14` (old package → use `@twemoji/api`).
