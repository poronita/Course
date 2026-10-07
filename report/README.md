# Image Swiss-Knife — Research Report (open-source, client-side, free-for-commercial-use)

**Product:** one tool-set, two targets — **website (100 % client-side, no own servers)** and **Android app** (same code, Capacitor), free for users, **ad-supported**.
**Rule set:** every dependency must be open source **and** free for commercial use; **no AI features**; web = what browsers can do, app = everything possible.
**Researched:** 2026-10-06 → 2026-10-07 · Registry versions/dates are "latest on 2026-10-07".
**Audience:** the AI that will build the app. Start with this file, then `00-methodology.md`.

---

## 1. File index

| File | What it contains | Machine-readable twin |
|---|---|---|
| `00-methodology.md` | research plan, **licence tiers A/B/X**, evidence labels, size definitions, limits of the research | — |
| `01-format-conversion.md` | converters (JPEG/PNG/WebP/AVIF/JXL/HEIC/RAW/TIFF/PSD/SVG/PDF/ICO/BMP…), vectorise, long-tail engines | `data/verdicts-01-*.json` |
| `02-compression-and-size.md` | compress by quality / **target KB** / px, perceptual "visually lossless", lossy PNG, placeholders; **target-size algorithm** | `data/verdicts-02-*.json` |
| `03-resize-crop-geometry.md` | resize, **exact W×H crop**, fit modes (OutputSpec), perspective, DPI, print sizes, **preset database** | `data/presets.json`, `data/verdicts-03-*.json` |
| `04-metadata-privacy-forensics.md` | EXIF/GPS, **offline location**, strip/edit, privacy scan, duplicates, C2PA, steganography, forensics | `data/verdicts-04-*.json` |
| `05-gif-webp-webm-video.md` | video→GIF/WebP/APNG/frames, GIF optimiser, video tools via WebCodecs + mediabunny, Android Media3 | `data/verdicts-05-*.json` |
| `07-dev-designer-utilities.md` | icon/favicon studio, SVG, QR/barcodes, colour tools, diff, fun effects, fonts | `data/verdicts-07-*.json` |
| `08-licence-register-and-size-budget.md` | **generated**: pack sizes, scenarios (Android Lite/Standard/Full), licence register, Tier-B checklist, attributions | `data/packs.computed.json`, `data/libraries.json` |
| `09-rejected-sources.md` | **generated**: rejected & not-needed sources (names + reasons), "licence traps" | — |
| `11-parallel-research-reconciliation.md` | **review of the product owner's own Word research**: agreements, 12 verified disagreements/corrections, **Strict vs Extended licence profiles**, size-claim comparison, adopted ideas | updated `data/presets.json` |
| `10-cross-cutting-infra.md` | Capacitor + native plugin specs, hosting/headers, build/test tooling, PWA/storage, ads wording, licence CI | — |
| `tools/` | `inspect-pkgs.mjs` (measure licence/size from npm tarballs), `headtext.mjs`, `build-register.mjs` (regenerates 08/09 + JSON) | — |
| `data/measurements.json` | raw measurements for 257 packages (version, licence, publish date, per-file raw/gzip/brotli) | — |

*(There is no `06` — function group 6 was AI features and was removed from scope.)*

---

## 2. Headline decisions (one screen)

| Area | Decision |
|---|---|
| **Shell** | TypeScript monorepo → **PWA** + **Capacitor 8** Android app (minSdk 24, target 36); heavy features as **lazy "packs"**; Android pre-bundles a scenario |
| **Image codecs** | **jSquash** (mozjpeg, libwebp, libavif, libjxl, oxipng, resize — Apache-2.0 wrappers over BSD/MIT codecs). Native canvas only for previews (Safari can't encode WebP; unsupported `toBlob` types silently return PNG) |
| **HEIC** | **Strict:** Safari native + Android OS decoder. **Extended:** + `libheif-js` (**LGPL-3.0**, separate `.wasm`, 503 KB gz) for other web browsers; OS decoder first on Android (also avoids HEVC-patent exposure) |
| **RAW / TIFF / PSD / PDF / SVG** | LibRaw-wasm (**CDDL** option) · UTIF · ag-psd · pdf.js + own minimal PDF writer · `<img>`/canvas (+svgo, vtracer) |
| **Compression** | target-KB search (algorithm in `02`), WebP native `target_size`, oxipng, image-q/UPNG for lossy PNG, Butteraugli/SSIMULACRA2 score thresholds for "visually lossless" |
| **Crop/resize** | `cropperjs` v2 (or framework cropper), `smartcrop` (classical, not AI), Lanczos3/Magic-Kernel resize, **data-driven preset DB** (51 entries with confidence + sources) |
| **Metadata & location** | `exifr` (read), `piexifjs` + own JPEG/PNG/WebP strippers (write), **GeoNames (CC-BY) nearest-city + Natural Earth shapes offline**, link-outs to maps (no OSM tile use) |
| **Android-only edge** | custom Kotlin plugins: **original-file/GPS access**, **Media3 video compress/trim**, **WorkManager background batch**, share-target, MediaStore bulk — specs in `10 §2.3` |
| **GIF / animated / video** | **No FFmpeg** (GPL core). `gifenc` + palette/dither code, `wasm-webp`, `upng-js`, **WebCodecs + `mediabunny` (MPL-2.0)**; Media3 on Android |
| **Utilities** | svgo, `uqr`/`qr-code-styling`/`jsqr`/`zxing-wasm`, `jsbarcode`/`bwip-js`, `colord`/`culori`/`colorthief`, `pixelmatch`, OFL fonts (Latin, Gujarati, Devanagari) |
| **Hosting** | static host with `_headers` (Cloudflare Pages) — but **design single-thread** so COOP/COEP is *not required* (it would conflict with ad scripts; GitHub Pages can't set headers) |
| **Licence profiles** | **Strict-permissive (default MVP):** MIT/Apache/ISC/BSD/zlib only — Android Standard **4.43 MB**. **Extended:** + Tier-B packs (LGPL/MPL/CDDL) after legal review — **5.01 MB**. Decision logic in `11 §3` |
| **Compliance** | CI licence deny-list + (Extended-only) Tier-B allow-list + SBOM; in-app Licences page; ad SDKs declared in Data-Safety |

### Size at a glance (gzip, measured; see `08`)
| Scenario | Total |
|---|---|
| Web first-load libs (excl. your UI) | **≈ 42 KB** |
| Core image codecs (JPEG/PNG/WebP/oxipng/resize) | **≈ 502 KB** (lazy) |
| Android **Lite** pre-bundle (core codecs, metadata, crop, GIF, QR, palette, offline location) | **≈ 0.85 MB** |
| Android **Standard** (+AVIF, JXL, HEIC, TIFF, PSD, PDF, SVG/vectorise, animated WebP, video, SVGO) | **≈ 5.0 MB** Extended · **≈ 4.4 MB Strict** |
| Android **Full** (+RAW, multi-format scanner, 2-D barcodes, PDF extras) | **≈ 6.8 MB** Extended · **≈ 5.9 MB Strict** |
| Optional heavies (never default) | ImageMagick 5.4 MB · ExifTool 7.5 MB · wasm-vips 3.9 MB · C2PA 3.3 MB · OpenCV 3.6 MB |

*(Add your own app code, UI framework, Capacitor runtime, ad SDKs and native AARs when scaffolding.)*

---

## 3. Master function catalogue (for planning & task generation)

Legend — **Plat:** W = web, A = Android-only, WA = both · **Phase:** 0 spike, 1 MVP, 2 growth, 3 later · **Pack** = id in `08`/`data/packs.json`.

### A. Convert (`01`)
| ID | Function | Plat | Phase | Engine → Pack |
|---|---|---|---|---|
| C01 | JPG↔PNG↔WebP convert (+ quality, strip metadata, background for transparency) | WA | 1 | jSquash → `core-image-codecs` |
| C02 | AVIF / JXL convert | WA | 2 | `avif`, `jxl` |
| C03 | **HEIC → JPG/PNG** (batch) | WA | 1 | OS decoder (A) / `heic-decode` (W) |
| C04 | RAW → JPG: **preview extraction (Strict, UTIF)** · full develop (Extended, LibRaw) | WA | 2 | `tiff` (UTIF) / `raw-decode` |
| C05 | TIFF (multi-page), PSD→PNG, BMP, ICO | WA | 2 | `tiff`, `psd`, own writers |
| C06 | **"Fix my file"** (detect true type, rename, orient) | WA | 1 | `file-type` → `core-always-loaded` |
| C07 | SVG→raster; raster→SVG | WA | 2 | canvas; `vectorise` |
| C08 | Images→PDF; PDF→images | WA | 1/2 | own writer; `pdf-read` |
| C09 | Multi-output export pack (many sizes/formats → ZIP) | WA | 1 | `fflate` |
| C10 | Long-tail formats (opt-in) | WA | 3 | `OPTIONAL-imagemagick` |

### B. Compress (`02`)
| ID | Function | Plat | Phase | Engine |
|---|---|---|---|---|
| P01 | Compress by quality / % / max px | WA | 1 | jSquash |
| P02 | **Compress to exact KB** (never-exceed / closest) | WA | 1 | search algorithm (02 §3) |
| P03 | Total-budget mode (N files ≤ X MB) | WA | 2 | allocation (02 §3) |
| P04 | "Visually lossless" auto mode | WA | 2 | `metrics-butteraugli` / SSIMULACRA2 |
| P05 | Lossless PNG optimise; lossy PNG palette | WA | 1/2 | oxipng; `lossy-png-and-apng` |
| P06 | Format shoot-out + `srcset`/`<picture>` pack + placeholders | WA | 2 | jSquash, `placeholders` |
| P07 | Gallery cleaner / bulk shrink in place / auto-compress screenshots | **A** | 2/3 | native plugins (WorkManager, MediaStore) |
| P08 | Receipt / expense compressor (HEIC→JPEG→scan filter→palette→≤150 KB image/PDF) | WA | 2 | canvas + image-q + own PDF writer |

### C. Resize / crop (`03`)
| ID | Function | Plat | Phase | Engine |
|---|---|---|---|---|
| G01 | Resize (px, %, longest side, print size+DPI) | WA | 1 | `@jsquash/resize` |
| G02 | **Exact W×H crop** (exact-crop/cover/contain/pad) | WA | 1 | `crop-ui` + OutputSpec |
| G03 | **Preset browser** (social, stickers, store, ID/passport, exam portals) + recipes | WA | 1 | `presets.json` |
| G04 | Social-kit export (one image → many crops) · carousel/grid splitter · stitch | WA | 2 | canvas + `smartcrop` |
| G05 | Passport/ID sheet maker · print-size calculator · DPI fixer | WA | 2 | canvas, `changedpi` |
| G06 | Rotate/flip/straighten · manual perspective fix | WA | 1/2 | canvas |
| G07 | Auto document scanner (opt-in) | WA | 3 | `OPTIONAL-opencv` |
| G08 | **Exam kits** (NEET/UPSC/SSC/IBPS: photo + postcard + signature + thumb + declaration → one ZIP, caption strip, verified against preset) | WA | **1** | crop-ui + target-KB search + `presets.json` + `fflate` |

### D. Metadata / privacy (`04`)
| ID | Function | Plat | Phase | Engine |
|---|---|---|---|---|
| M01 | EXIF/IPTC/XMP viewer | WA | 1 | `exifr` |
| M02 | **Where was this taken?** (coords, nearest city/country offline, Plus Code, map link-outs) | WA | 1 | `location-code` + city pack + `world-110m` |
| M03 | Strip metadata (all / GPS-only), orientation-safe | WA | 1 | own strippers, `piexifjs` |
| M04 | Edit EXIF (date/GPS/copyright); batch rename by metadata; geotag from GPX | WA | 2 | `piexifjs` + own |
| M05 | **Privacy scan → Clean & Share** (share-target) | WA/A | 2 | exifr + strip; send-intent |
| M06 | Redaction (solid/mosaic) · KYC watermark | WA | 2 | canvas |
| M07 | Duplicate/similar finder | WA/A | 2 | SHA-256 + dHash (→ PDQ) |
| M08 | Edit-indicator report (ELA, thumbnail mismatch…) | WA | 3 | canvas + exifr |
| M09 | Content Credentials viewer | WA | 3 | c2pa-ts / `OPTIONAL-c2pa-web` |
| M10 | Steganography · encrypted vault | WA / **A** | 3 | WebCrypto; biometric plugin |
| M11 | Original-file/GPS access on Android | **A** | **0** | custom `OriginalFilePlugin` |

### E. GIF / video (`05`)
| ID | Function | Plat | Phase | Engine |
|---|---|---|---|---|
| V01 | **Video→GIF** (palette+dither, trim, crop, speed, reverse, boomerang, loop) | WA | 2 | `video-mediabunny` + `gif-tools` (+image-q) |
| V02 | Video→animated WebP / APNG | WA | 2 | `animated-webp`, `lossy-png-and-apng` |
| V03 | Video→frames ZIP; GIF/WebP/APNG→frames | WA | 2 | mediabunny / decoders |
| V04 | GIF→MP4/WebM; GIF optimiser; target-size GIF | WA | 2 | mediabunny; frame-diff |
| V05 | Animated sticker maker (WhatsApp/Telegram presets) | WA | 2 | presets + V02 |
| V06 | Trim / mute / extract audio / remux (no re-encode) | WA | 2 | mediabunny |
| V07 | **Video compress / rotate / crop** | WA / **A** (Media3) | 3 | mediabunny / `VideoPlugin` |
| V08 | Motion Photo / Live Photo → GIF/MP4/still | WA | 3 | byte parser + V01 |
| V09 | Sprite sheet / contact sheet / poster frame | WA | 2 | canvas |

### F. Dev / designer (`07`)
| ID | Function | Plat | Phase | Engine |
|---|---|---|---|---|
| U01 | **App-Icon Studio** (favicon, PWA/maskable, Android adaptive, iOS, ICO/ICNS) | WA | 2 | canvas + writers |
| U02 | Play-Store listing kit; OG/social card maker (multi-script fonts) | WA | 2 | canvas + OFL fonts |
| U03 | SVG optimise / SVG→data-URI / multi-density assets | WA | 2 | `svgo` |
| U04 | QR studio (styled, templates, self-test) + scan | WA | 1/2 | `qr-generate`, `qr-scan-lite` |
| U05 | Multi-format barcode scan / 2-D barcode generate | WA | 3 | `qr-scan-full`, `barcode-*` |
| U06 | Palette from image, shades, gradients, contrast & colour-blind tools | WA | 2 | `colour-tools` |
| U07 | Image diff / compare | WA | 2 | pixelmatch |
| U08 | Pixel-art, ASCII, mosaic, halftone, cross-stitch patterns | WA | 3 | image-q + canvas |

### Phased build order
- **Phase 0 — spikes (de-risk first):** (1) pipeline + worker pool + pack loader; (2) **Android `OriginalFilePlugin` (GPS)**; (3) **WebCodecs encoder matrix on real phones**; (4) measure real bundle sizes; (5) LGPL packaging + legal read; (6) preset schema/search UI.
- **Phase 1 — MVP (web + Android):** C01, C03, C06, C08, P01, P02, P05, G01–G03, **G08 (exam kits — highest India demand)**, G06, M01–M03, U04.
- **Phase 2 — growth:** AVIF/JXL, RAW/TIFF/PSD, GIF/WebP/APNG/video tools, icon studio, privacy scan, duplicates, QR/colour tools, Android share-target + gallery cleaner + background batch.
- **Phase 3 — differentiators/long tail:** Media3 compress, C2PA, vault/steganography, scanner pack, fun effects, optional heavy packs.

---

## 4. Top findings you must not forget

1. **A permissive wrapper licence can hide a copyleft core.** Traps found: `libimagequant-wasm` (MIT → GPL core), `gifsicle-wasm-browser` (MIT → GPL), `heic2any` (MIT → LGPL), `@ffmpeg/ffmpeg` (needs GPL `@ffmpeg/core`). Everything in `08` was checked below the wrapper. CI must enforce the allow-list (`10 §7`).
2. **No FFmpeg is needed** — WebCodecs + `mediabunny` (MPL-2.0) cover video; GIF/WebP/APNG use small permissive encoders. `gifski` is AGPL (earlier recommendation withdrawn).
3. **Android hides photo GPS** unless you hold `ACCESS_MEDIA_LOCATION` and bypass the system photo picker — a native plugin is mandatory for the location features.
4. **Safari cannot encode WebP via canvas; unsupported `toBlob` types silently return PNG** → ship WASM encoders for deterministic output.
5. **Preset data is volatile** (SSC, JEE, UPSC KB limit, PAN changed/conflicted) → data-driven presets with `confidence`, `sources`, `lastVerified`, user-editable.
6. **Don't use `tile.openstreetmap.org` as default tiles**; use link-outs + an offline dot-map built from Natural Earth.
7. **Don't require COOP/COEP** (breaks ad scripts; GitHub Pages can't set headers; Capacitor WebView can't easily) → single-thread WASM builds.
8. **Lossless JPEG tools (jpegtran) have no verified browser package** → own metadata stripper + EXIF-flag rotate; optionally compile jpegtran (BSD/IJG).
9. **Animated AVIF encode and JPEG-2000 have no verified permissive package** → low priority/gaps.
10. **Ad SDKs mean you cannot claim "no data collected"** — claim "your images never leave your device".

---

## 4b. Corrections from reviewing the parallel research (details in `11`)
- **UTIF.js does not "develop" RAW** (README): preview/sensor-data extraction only → Strict profile = RAW *preview*.
- **`@jsquash/jxl` has no lossless-JPEG-transcode API**; **`@jsquash/webp` has no animation API**; **pdf.js cannot create PDFs**.
- Their **LGPL stance** is now a first-class build profile (**Strict**), not an afterthought.
- Their **exam presets** were merged (UPSC 350×350 / 20–300 KB with conflict flag; IBPS ×4; NEET ×4) and **Exam kits** added to the MVP.

## 5. What is *not* verified (be honest in the build)

- **Blocked sources:** Play-Store apps (3), iLoveIMG, FreeConvert, online-convert, resizeimage.io, MDN, caniuse, OSM/GeoNames pages were unreachable from the research sandbox → competitor feature matrices rest on web-search summaries; browser-support facts are marked `[verified-search]` or `[unverified]`.
- **Counts of `[unverified]` tags** per file are your to-do list for the first spikes: grep `\[unverified` in `01`–`10`.
- **No code was executed** from the libraries (only unpacked/measured). Performance, memory and device behaviour are **untested**.
- **Preset values** are search-reported (only Telegram, Google Play and travel.state.gov / gov.uk were quoted from the issuing body via search); always show "check the official notice".
- **Legal:** nothing here is legal advice — HEVC patents (HEIC), LGPL packaging in an APK, ExifTool/Perl, ad-SDK data disclosures, and Play-policy fit need a human/legal check.

## 6. Re-verifying later
```
cd report
node tools/inspect-pkgs.mjs data/_new.json /tmp/work <packages…>   # re-measure licences & sizes
node tools/build-register.mjs                                      # regenerate 08, 09, libraries.json
```
Re-run quarterly and on every dependency bump; fail the build on licence/tier changes.
