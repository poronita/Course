# 04 — Metadata, Location, Privacy & Forensics (research)

Status: **complete** · Verified on 2026-10-07 · Labels/tiers: see `00-methodology.md`

**Functions covered:** EXIF/IPTC/XMP/ICC viewer · **photo → location** (GPS → map link, nearest city/country offline, Plus Code) · photo-timeline map · strip metadata (all / GPS-only / selective) · edit metadata (date, camera, GPS, copyright) · privacy scan ("what does this photo reveal?") · redaction · Content Credentials (C2PA) verify · duplicate / near-duplicate finder (hashes) · edit-detection indicators (ELA, thumbnail mismatch) · steganography · encrypted vault · sun-position plausibility check.

---

## 0. TL;DR (decisions)

| Job | Use | Tier | Weight (gz) |
|---|---|---|---|
| **Read EXIF / GPS / XMP / IPTC / ICC / thumbnail / orientation** | **`exifr`** (`lite` or `mini` bundle) — MIT | A | **9 KB (mini) / 15 KB (lite) / 26 KB (full)** |
| Alt reader (very complete, actively maintained) | `exifreader@4.46.0` — **MPL-2.0** | **B** | 38 KB |
| **Write/edit EXIF** (JPEG) | `piexifjs@1.0.6` — MIT (stale 2019, widely used) | A | 12 KB |
| **Strip metadata (lossless)** | **own code**: JPEG segments / PNG chunks / WebP RIFF (≈ 150 lines); reference: `exif-be-gone` (ISC, JPEG/TIFF/PNG) | A | ~2–4 KB |
| Strip/edit **HEIC/AVIF/RAW/video** metadata | no light lib → re-encode path, or optional **ExifTool WASM** pack (see §2.3 — **Tier B\*/legal review, 7.6 MB gz**) | B\* | 7.6 MB (optional) |
| **Where was this taken?** (offline) | `exifr.gps()` + **GeoNames `cities15000` (CC-BY 4.0)** packed by you + `kdbush`/`geokdbush` (ISC) nearest-city; country via Natural Earth (public domain) `world-atlas` | A + CC-BY | ≈ 0.4–0.8 MB data + 4 KB code |
| World dot-map (no tiles) | `world-atlas` `countries-110m.json` (ISC; Natural Earth PD) + `topojson-client` (ISC) drawn on `<canvas>` | A | 38 KB + 3 KB |
| Real map (online, optional) | `leaflet` (BSD-2) / `maplibre-gl` (BSD-3) + **tiles from a provider you may legally use** — *not* `tile.openstreetmap.org` (see §1) | A | 41 KB / 280 KB |
| Plus Codes | `open-location-code` (Apache-2.0, 2015) | A | 7 KB |
| Sun position (golden hour / plausibility) | `suncalc@2.1.1` (BSD-2-Clause) | A | 8 KB |
| **Content Credentials (C2PA) — read/verify** | light: `@trustnxt/c2pa-ts` (Apache-2.0, pure TS; *"not fully functional yet"*) · full: `@contentauth/c2pa-web` (MIT; **3.3 MB gz wasm**) | A | ~0.1–0.25 MB / 3.3 MB |
| Exact duplicates | WebCrypto `SHA-256` (native, 0 KB) | native | 0 |
| **Near-duplicate / similar photos** | own **dHash/aHash** (20 lines) → Phase 2 `pdq-wasm` (BSD-3; Meta PDQ is BSD) | A | 0 / 18 KB |
| Steganography (hide text/files) | own LSB encoder + WebCrypto AES-GCM | native | ~2 KB |
| Password KDF for vault | WebCrypto PBKDF2 (native) or Argon2id via `hash-wasm` (MIT) | A | 0 / <80 KB |
| ELA / thumbnail-mismatch / quantisation-table checks | own canvas + `exifr.thumbnail()` | — | ~3 KB |

**Added by this section (MVP set):** ≈ **60–75 KB gz of code** + **~0.5 MB of data** (cities & world shapes), lazy-loaded. Heavy optional packs: C2PA full (3.3 MB), ExifTool (7.6 MB).

---

## 1. Platform facts that change the design (read these)

| # | Fact | Source / status |
|---|---|---|
| 1 | **Android 10+ redacts EXIF GPS** for MediaStore URIs unless the app holds **`ACCESS_MEDIA_LOCATION`** *and* calls `MediaStore.setRequireOriginal(uri)`; without them lat/long silently come back `null`/`[0,0]`. | [verified-search] commonsware.com, ente.io, developer.android.com |
| 2 | The newer **Android Photo Picker redacts location regardless** of that permission. | [verified-search] (known issue reports) |
| 3 | ⇒ In the **Android app**, reading GPS requires a **native bridge** (Capacitor plugin: SAF `ACTION_OPEN_DOCUMENT` or MediaStore + permission) — a plain `<input type=file>` in the WebView likely goes through the picker and loses GPS. **Must be tested on real devices.** | derived; `[unverified in WebView]` |
| 4 | In the **web** version, browsers/OS pickers may also strip GPS (esp. iOS Safari/Photos). Show a helpful message when `gps()` returns nothing: *"This file has no location, or your device removed it when you selected it."* | `[unverified for iOS — test]` |
| 5 | **`tile.openstreetmap.org` must not be the default tile source of a distributed app**: "heavy use (such as distributing a heavy-usage app that uses tiles from openstreetmap.org)" is forbidden without permission; attribution required; don't hard-code the URL. | [verified-search] operations.osmfoundation.org policy |
| 6 | **GeoNames** data: **CC-BY 4.0**, commercial use allowed, credit required. | [verified-search] geonames.org/export |
| 7 | **Natural Earth** map data: **public domain**, no attribution required. | [verified-search] naturalearthdata / atlas.co |
| 8 | HEIC/AVIF EXIF is in the ISO-BMFF `meta` box → **no lightweight lossless editing**; ExifTool can do it (heavy). | `[unverified detail]`, consistent with exifr table below |
| 9 | exifr coverage: files **.jpg .tif .png .heic .avif .iiq**; segments **TIFF(EXIF/GPS), XMP, ICC, IPTC, JFIF, IHDR**; XMP/IPTC **not** read for HEIF; embedded **thumbnail only for JPEG**; ~1 ms/file. | [verified-registry] exifr README |
| 10 | Many apps strip metadata on share, many don't; do **not** make claims about specific platforms in the UI without testing. | policy |

> **Map strategy (no servers, legal):** default to **link-outs** (`geo:lat,lon?q=lat,lon(label)` on Android; `https://www.openstreetmap.org/?mlat=LAT&mlon=LON#map=16/LAT/LON` and Google/Apple map links on web — user-initiated navigation is not "tile use") and the **offline world dot-map**. Offer an embedded real map only with a tile source whose terms allow it (own **PMTiles** file on a CDN you control with `pmtiles` BSD-3 + Protomaps/OSM data under ODbL attribution, or a commercial provider's free tier — evaluate terms at build time).

---

## 2. Open-source base tools (verified)

### 2.1 Reading metadata

| Library | Ver · last pub | Licence | Gz size | Capabilities | Verdict |
|---|---|---|---|---|---|
| **`exifr`** | 7.1.3 · 2021-08 | **MIT** | **mini 9.1 KB · lite 14.9 KB · full 26.3 KB** (ESM) | JPEG/TIFF/PNG/HEIC/AVIF; EXIF, GPS (decimal conversion), XMP (own parser), ICC, IPTC, JFIF, thumbnail, `orientation()`, `rotation()` (handles iOS/Chrome auto-rotate quirks), `gps()`; ~1 ms/file; tree-shakable/custom build. Stale since 2021 but stable and the de-facto standard | ✅ **primary** (use `lite`; `full` if you need maker-note dictionaries) |
| `exifreader` | 4.46.0 · 2026-09-26 | **MPL-2.0** | 38 KB | very complete, actively maintained; supports many formats incl. WebP/AVIF/HEIC; MPL = file-level copyleft only | ✅ B — fallback/second opinion |
| `exif-reader` | 2.0.3 · 2025-12 | MIT | 5 KB | parses a **raw EXIF buffer** only (you extract it) | optional |
| `exif-js` | 2.3.0 · 2017 | MIT | 9 KB | old, JPEG only | ❌ not needed |
| `exif-parser` | 0.1.12 · 2017 | **no licence field** | 5 KB | old | ❌ rejected |
| `fast-xml-parser` | 5.11.2 · 2026-09 | MIT | 21 KB (min) | only if you need full XMP trees (exifr's XMP parser is usually enough) | optional |

### 2.2 Writing / stripping

| Library | Ver · last pub | Licence | Gz | Capabilities |
|---|---|---|---|---|
| `piexifjs` | 1.0.6 · 2019-06 | MIT | 12 KB | JPEG EXIF **load / dump / insert / remove**, GPS IFD helpers (`GPSIFD`), thumbnail; **JPEG only**. Known to be stale; test with phone JPEGs (maker notes, large EXIF) |
| `exif-be-gone` | 1.5.1 · 2024-07 | **ISC** | 2 KB | Zero-dependency stream transformer: **JPEG/TIFF** — removes APP1 EXIF/XMP/FLIR; **PNG** — removes `tIME, iTXt, tEXt, zTXt, eXIf, dSIG` chunks [verified-registry README]. Node streams → port the logic to `Uint8Array` |
| `png-chunks-extract` / `png-chunks-encode` | 1.0.0 · 2015 | MIT | ~1 KB | PNG chunk list read/write (tiny; could be re-written in 40 lines) |
| **Own lossless strip** (recommended) | — | — | ~2–4 KB | See §4 algorithms: JPEG / PNG / WebP |

### 2.3 Heavy optional: ExifTool in WASM

| Package | Licence situation | Size |
|---|---|---|
| `@colorhythm/exiftool-wasm@1.0.4` (2026-07) | Wrapper **Apache-2.0** [verified-registry]. **ExifTool itself is distributed "under the same terms as Perl itself (either the Perl Artistic License or GPL)"** [verified-upstream exiftool README] and the build ships a **Perl interpreter (zeroperl)** → a dual-licence "choose Artistic" situation that **needs a legal read**; classify **Tier B\*** | `zeroperl.wasm` 25.5 MB → **7.6 MB gz** (+ glue 104 KB gz) |
| Value | Reads/writes metadata in **almost every format** (HEIC, AVIF, RAW, MP4, PDF, XMP/IPTC writing) | |
| Verdict | **Not for MVP.** Only as an opt-in "Pro metadata pack" on Android if HEIC/video metadata editing proves in demand. `exiftool-vendored*` are Node-only → rejected | |

### 2.4 Location, maps, geodata

| Item | Ver | Licence | Gz size | Notes |
|---|---|---|---|---|
| **GeoNames `cities15000`** (data you download & pack) | — | **CC-BY 4.0** (credit "GeoNames") | est. 0.3–0.7 MB packed `[unverified — measure]` | ~25 k cities ≥ 15 k population; fields: name, ASCII name, lat/lon, country, admin1, population. Use `cities5000` (~50 k) for denser coverage |
| `kdbush` | 4.1.0 · 2026-05 | **ISC** | 2 KB | spatial index |
| `geokdbush` | 2.1.0 · 2026-04 | **ISC** | 2 KB | nearest-neighbour by **great-circle** distance (lng/lat) → *nearest city in < 1 ms* |
| `world-atlas` (Natural Earth) | 2.0.2 · 2019 | **ISC** (code) · data **public domain** | `countries-110m` 108 KB → **38 KB gz**; `50m` 756 KB → 229 KB; `10m` 3.7 MB → 917 KB | country polygons / land masses for the **dot-map** and offline country detection |
| `topojson-client` | 3.1.0 | ISC | 3 KB | decode TopoJSON → GeoJSON |
| `d3-geo` | 3.1.1 | ISC | 13 KB min | optional projections (Mercator, Natural Earth, orthographic globe!) |
| `@turf/boolean-point-in-polygon` / `point-in-polygon` | 7.4.0 / 1.1.0 | MIT | ~2–3 KB | country from lat/lon (use 50m polygons for accuracy) |
| Country names | **`Intl.DisplayNames({type:'region'})`** (browser built-in) or `i18n-iso-countries@7.14.0` (MIT) | — | 0 / ~3 KB per language | `[unverified WebView support — feature-detect]` |
| `open-location-code` | 1.0.3 · 2015 | **Apache-2.0** | 7 KB | Plus Codes encode/decode |
| `suncalc` | 2.1.1 · 2026-10-05 | **BSD-2-Clause** [verified-upstream mourner/suncalc LICENSE] | 8 KB | sun azimuth/altitude, sunrise/sunset, golden hour for (lat, lon, time) |
| `leaflet` | 1.9.4 · 2023 | BSD-2-Clause | 41 KB (min) | map widget (needs tiles) |
| `maplibre-gl` | 6.13.0 · 2026-10 | BSD-3-Clause | ~280 KB (WebGL) | vector maps (needs tiles/style) |
| `pmtiles` | 4.5.0 · 2026-08 | BSD-3-Clause | 8 KB | read single-file tile archives over HTTP range requests — no tile server needed, just static hosting |

**Rejected here:** `offline-geocode-city` (MIT code, but data = **UN/LOCODE** (ports/trade locations; 103 k locations) with its own terms and poor coverage of ordinary towns; 211 KB gz) · `reverse-geocode` (2019; per-country JSON up to 4 MB; data source unclear) · `country-reverse-geocoding` (**no licence**, 2014, 129 KB gz) · `geo-tz` (58 MB package) · `react-geocode`/`node-geocoder`/`@bigdatacloudapi/*` (call remote APIs → breaks "nothing leaves the device").

### 2.5 Content Credentials (C2PA)

| Package | Licence | Size | Capabilities |
|---|---|---|---|
| `@trustnxt/c2pa-ts@0.14.0` (2026-04) | **Apache-2.0** | ~1.4 MB unpacked; code chunks ≈ 75 KB gz + deps (`pkijs`, `@peculiar/x509`, `cbor-x`, `@noble/hashes`, …) | **Pure TypeScript** (no wasm). **Reads** manifests; validation "mostly implemented **except chain-of-trust**"; can create manifests. Formats: **JPEG, PNG, HEIC/HEIF, MP3, MP4** (not WebP/GIF/TIFF/JXL). README: *"under active development and not fully functional yet"* |
| `@contentauth/c2pa-web@0.15.3` + `@contentauth/c2pa-wasm@0.13.2` (2026-09, Adobe) | **MIT** (repo LICENSE verified) | wasm **8.8 MB → 3.3 MB gz** (+ JS 16 KB gz) | Official `c2pa-rs` in WASM: complete read/validate, trust handling |
| `c2pa@0.30.17` (legacy) | MIT | — | **DEPRECATED** → rejected |

> Use case is **"verify where an image came from"** (e.g. 'Signed by X, edited with Y, AI-generated: yes/no' when present). Most photos have **no** credentials — show a graceful "No Content Credentials found" and never imply "no credentials = fake".

### 2.6 Hashing, similarity, crypto, steganography

| Library | Licence | Gz | Use |
|---|---|---|---|
| WebCrypto `crypto.subtle.digest('SHA-256')`, AES-GCM, PBKDF2 | native | 0 | integrity hash, vault encryption, stego payload encryption |
| `hash-wasm@4.12.0` | MIT | ~76 KB (full ESM; tree-shake to one algorithm for far less `[unverified]`) | fast xxHash/BLAKE3 for huge galleries; **Argon2id** |
| `blockhash-core@0.1.0` (2019) | MIT | 2 KB | perceptual hash (block mean) |
| `browser-image-hash@0.0.7` (2026-03) | MIT | 8 KB | dHash helper |
| `pdq-wasm@0.3.9` (2025-11) | BSD-3-Clause wrapper; **Meta PDQ** algorithm under Meta's BSD licence [verified-upstream facebook/ThreatExchange LICENSE] | wasm 25 KB → 12 KB + js 6 KB | robust 256-bit image hash; Hamming distance ≤ ~31 = similar `[threshold unverified — calibrate]` |
| `@pinta365/steganography@0.3.2` | MIT | large (bundles image codecs, 1.7 MB unpacked) | not needed — own LSB is simpler |

---

## 3. What metadata can leak (checklist for the Privacy Scan)

> This table is **domain knowledge**, not extracted from a source above → label **`[unverified — validate with sample files from several phones/cameras/drones]`**.

| Item | Where | Risk |
|---|---|---|
| GPS lat/lon/altitude/direction/speed/timestamp | EXIF GPS IFD; XMP | **High** (home/work location) |
| Date/time (original, digitised) + offset | EXIF `DateTimeOriginal`, `OffsetTimeOriginal` | Medium (when you were there) |
| Device make/model, lens, **serial numbers**, owner name | EXIF/MakerNote | Medium |
| Software / edit history | EXIF `Software`, XMP history | Low–Medium |
| **Embedded thumbnail** (can show the *uncropped* original) | EXIF IFD1 (JPEG) | **Medium–High** — classic "cropped photo still has full thumbnail" leak |
| XMP: creator, keywords, city/country, face regions | XMP / IPTC | Medium |
| Drone telemetry (home point) | XMP (vendor) | **High** |
| Motion-photo / HDR gain-map secondary images | MPF (APP2) / XMP | Medium (extra images inside file) |
| Comments, Photoshop IRB, FLIR data | COM, APP13 | Low–Medium |
| ICC profile name (device) | APP2 | Low |

**Privacy score:** 0–100 = weighted sum of present items; traffic-light UI (🟢 clean / 🟡 minor / 🔴 location or serials present) and a **one-tap "Clean & share"**.

---

## 4. Algorithms (reference for the AI developer)

### 4.1 Lossless JPEG strip (no re-encode)
```
parse markers from SOI (FFD8):
  for each segment until SOS (FFDA):
    APP0  (JFIF)                    → KEEP
    APP1  'Exif\0\0' | XMP          → DROP   (but see orientation rule)
    APP2  'ICC_PROFILE'             → KEEP by default (colour accuracy) / option DROP
    APP2  'MPF\0'                   → DROP (multi-picture/HDR secondary images)
    APP13 (Photoshop IRB / IPTC)    → DROP
    APP14 (Adobe)                   → KEEP (affects colour transform!)
    COM                             → DROP
    DQT/SOFx/DHT/DRI/…              → KEEP
  copy everything from SOS to EOI verbatim.
ORIENTATION RULE: if EXIF Orientation ≠ 1, insert a MINIMAL new APP1 containing ONLY the Orientation tag
  (≈ 40 bytes) — otherwise the image appears rotated after stripping. (Or bake rotation by re-encoding.)
Also drop trailing data after EOI (e.g. Samsung motion-photo/SEFT trailer) — option.
```

### 4.2 PNG / WebP
- **PNG:** keep `IHDR, PLTE, IDAT, IEND, tRNS, gAMA, cHRM, sRGB, iCCP?, pHYs`; drop `tEXt, zTXt, iTXt, eXIf, tIME, dSIG` [verified list from exif-be-gone]. CRCs of kept chunks unchanged.
- **WebP (RIFF):** drop `EXIF` and `XMP ` chunks; **update the `VP8X` flags** (EXIF/XMP bits) and the RIFF size field. `[unverified: bit positions — consult the WebP container spec]`.
- **HEIC / AVIF / RAW / MP4:** no safe lightweight path → offer **re-encode** (to JPEG/WebP/AVIF) with "metadata removed" or the ExifTool pack.

### 4.3 GPS-only removal / edit (keep the rest of EXIF)
JPEG: `piexifjs` → `load` → delete/replace `GPS` IFD → `dump` → `insert`. Verify by re-reading with `exifr`. For PNG/WebP EXIF blobs: wrap in a throw-away JPEG APP1 for piexifjs, extract the result back.

### 4.4 Offline "Where was this taken?" pipeline
```
build time (script, run once per release):
  download cities15000.zip from download.geonames.org  → keep fields (name, lat, lon, cc, admin1, pop)
  quantise lat/lon to 1e-3°, store as typed arrays + string table, gzip → cities.bin (~0.4–0.7 MB [measure])
runtime:
  {latitude, longitude} = await exifr.gps(file)
  idx = kdbush(cities); near = geokdbush.around(idx, lon, lat, 3)       // 3 nearest
  country = pointInPolygon(lon, lat, world-atlas 50m) → Intl.DisplayNames
  show: "≈ 4.2 km from Ismaning, Bavaria, Germany" + coordinates (DMS + decimal) + Plus Code
  links: Maps (geo:, OSM, Google, Apple) — user-initiated
  attribution line: "Place names: GeoNames (CC BY 4.0). Map shapes: Natural Earth (public domain)."
```
Accuracy notes: GPS can be missing/zeroed ((0,0) = "null island" — treat as no data), indoor fixes are coarse; "nearest city" is **not** the exact place — wording must say *near*.

### 4.5 Edit-detection indicators (not proof)
1. **Software tag** present (Photoshop/Lightroom/Snapseed…).
2. **Thumbnail mismatch:** decode `exifr.thumbnail()` and compare structure/aspect with the main image (cropped/edited images keep the old thumbnail).
3. **Date inconsistency:** EXIF original vs XMP/created/modified vs file `lastModified`.
4. **Error Level Analysis (ELA):** re-save at q≈90 → amplified difference heat-map (canvas).
5. **JPEG quantisation tables:** parse `DQT`; compare with known camera/software signatures (needs a reference table you curate).
6. **Sun/shadow plausibility:** with GPS + time, `suncalc` gives the sun's azimuth/altitude; user compares to shadows ("was it daytime?").
> UI must say **"indicators, not proof"**; ELA has many false positives.

### 4.6 Steganography (PNG only)
Header (magic + length + CRC) + payload (optionally **AES-GCM** encrypted with a password via PBKDF2) embedded in the **LSB of RGB channels**; capacity ≈ `w×h×3/8` bytes. **Must output lossless PNG** — any JPEG/WebP-lossy re-save destroys it (warn!). Provide "extract" tool that checks the magic.

### 4.7 Duplicate / similar finder
Stage 1: exact (`size` + `SHA-256`). Stage 2: **dHash 64-bit** on a 9×8 grayscale thumbnail; compare by Hamming distance (≤ 5–10 → near-duplicate `[calibrate]`); brute-force 10 k images ≈ 50 M comparisons (fast with `BigUint64Array`/popcount); cluster, keep best by resolution/size/sharpness (variance of Laplacian). Phase 2: PDQ for crop/rotation/compression robustness.

---

## 5. Creative features (user-visible value)

### A. Location & trips
1. **"Where was this photo taken?"** card: map link-outs, coordinates (DMS/decimal), nearest city/country **offline**, Plus Code, compass direction (`GPSImgDirection`), altitude; copy buttons; "Open in Maps".
2. **Photo-trip map:** drop 1–1000 photos → **offline world dot-map** (+ optional real map) with city clusters, day-by-day timeline, distance travelled; **export GPX / KML / CSV** (plain-text formats, no library); great for travellers & bloggers.
3. **Batch rename by metadata:** `{date}_{city}_{seq}` (e.g. `2026-10-07_Tokyo_001.jpg`); **fix wrong camera clock** (shift all dates by ±Δ); **set/geotag manually** (paste coordinates or pick on map) for photos from cameras without GPS.
4. **Geotag from a GPX track:** match photo time to a track file (very popular with DSLR users) — pure maths.
5. **"Golden-hour & sun" info:** sun altitude/azimuth at capture; "Was this taken at golden/blue hour?".

### B. Privacy
6. **Privacy Scan → Clean & Share:** traffic-light report; per-item toggles; **Android share-target** ("Share → Clean → back to WhatsApp/Gmail"); setting "**Always strip location when sharing**".
6a. **Privacy-Shield copy** *(from the parallel research)*: on drop, immediately show concrete findings — *"GPS location detected: <nearest city, country>"*, *"Device: <model>"*, *"Taken: <relative time>"* — then a single **Sanitise** button; keep an **"also re-encode (paranoid)"** toggle (drops everything incl. embedded thumbnails/maker notes at the cost of JPEG re-compression).
7. **Global "Privacy defaults"** applied by every tool's exporter (strip GPS by default, keep date optional).
8. **Redaction suite:** solid boxes / **irreversible** heavy-mosaic / blur with **"flatten & strip"**; warning that light blur/pixelation can be reversible; one-tap **hide QR/barcodes** (detected with the decoder in §07, not AI); manual only for faces/text (AI excluded).
9. **KYC-safe sharing (India-relevant):** diagonal tiled watermark "For <Purpose> only · <Recipient> · <Date>" + masked-digit helper (user selects the digits) → export JPEG ≤ N KB (chains with `02`/`03` presets). *Idea — validate demand.*
10. **Remove-thumbnail leak** specifically explained ("the small preview inside your file may show the uncropped photo").

### C. Authenticity & forensics
11. **"Is this photo edited?" report** (§4.5) with **plain-language findings** and disclaimers.
12. **Content Credentials viewer:** signer, tool, edits, "AI-generated" flag when present; works offline.
13. **Compare two photos:** metadata diff + pixel diff (`pixelmatch`, §02) + hash similarity.
14. **File integrity:** SHA-256 / CRC32 shown & copyable; "verify against hash you were given".

### D. Organise & protect
15. **Duplicate / similar photos finder** + "keep best" (Android gallery cleaner pairs with §02 bulk shrink).
16. **Encrypted photo vault (Android):** AES-GCM (WebCrypto) with Argon2id/PBKDF2 key; **biometric unlock via a Capacitor biometric plugin `[plugin licence/maintenance to verify in 10-cross-cutting-infra]`**; hide from gallery by storing inside app-private storage.
17. **Hide a message/file in a PNG** (steg) with password; capacity meter.
18. **Copy metadata A → B** (restore EXIF after an editor removed it), **batch add copyright/artist** templates (EXIF `Artist`, `Copyright`; XMP/IPTC need a writer — see §2.3).
19. **Restore dates from filenames** (e.g. messenger-downloaded `IMG-YYYYMMDD-…` patterns `[naming patterns unverified]`) → write EXIF `DateTimeOriginal`.
20. **Shot-settings "photographer card":** camera, lens, ISO, shutter, aperture, focal length, histogram → shareable card rendered on canvas.

---

## 6. Implementation notes

1. **Never trust a single read.** Wrap `exifr` calls in try/catch; show "unreadable metadata" instead of failing.
2. **Parse in a Worker** for batches; `exifr` can read just the first N KB of a file (fast for thousands of photos) — pass `File.slice`.
3. **Orientation:** treat via `exifr.rotation()`; see §03 notes. When stripping, apply the **orientation rule** (§4.1).
4. **Timezones:** EXIF `DateTimeOriginal` has *no timezone*; use `OffsetTimeOriginal` when present; else show "local time of camera". Don't convert silently.
5. **Coordinates:** decimal degrees for computation; show DMS for humans; clamp ranges; treat (0,0) as invalid; mind hemisphere refs (exifr already converts).
6. **Don't ship a third-party map tile URL by default.** Link-outs + dot-map. If embedding tiles, make the tile URL **configurable** (policy demands being able to switch without an app update) [verified-search].
7. **Android GPS access needs a native plugin** (see §1 #1–#3); design the JS side as `getOriginalFile(uri)` so the web (File/Blob) and Android (content URI→Blob via plugin) implementations are swappable.
8. **Never claim certainty** in forensics; use "indicators". Never auto-upload images for "analysis" (promise!).
9. **Attribution page:** "Place names © GeoNames, CC BY 4.0; Natural Earth (public domain); Plus Codes (Open Location Code, Apache-2.0)".
10. **Test corpus:** collect sample files from iPhone (HEIC & JPEG), Pixel (Ultra HDR/Motion), Samsung (motion photo trailer), DJI drone, DSLR RAW+JPEG, WhatsApp-processed, screenshots, WebP/AVIF; create golden-file tests for read/strip/orientation.

---

## 7. Weight table

| Component | Gz | Policy |
|---|---|---|
| exifr (lite) | 15 KB | core of metadata tools |
| piexifjs | 12 KB | on demand (edit) |
| own strip code | ~3 KB | core |
| kdbush + geokdbush | 4 KB | on demand (location) |
| cities pack (GeoNames-derived) | ≈ 0.4–0.7 MB `[measure]` | on demand; Android can bundle |
| world-atlas 110m / 50m | 38 KB / 229 KB | on demand |
| topojson-client (+d3-geo optional) | 3 KB (+13 KB) | on demand |
| open-location-code, suncalc | 7 KB + 8 KB | on demand |
| dHash (own) / PDQ wasm | 1 KB / 18 KB | on demand |
| ELA/steg/redaction code (own) | ~6 KB | on demand |
| **MVP total (excluding data)** | **≈ 60–75 KB** | |
| *Optional* C2PA light (c2pa-ts + deps) | ≈ 0.1–0.25 MB `[measure]` | on demand |
| *Optional* C2PA full (Adobe wasm) | ≈ 3.3 MB | opt-in |
| *Optional* ExifTool WASM | ≈ 7.6 MB | opt-in (legal review) |
| *Optional* Leaflet / MapLibre | 41 KB / 280 KB | only with a legal tile source |

---

## 8. Rejected / not useful (names only)

- **Licence / provenance problems:** `exif-parser` (no licence field), `country-reverse-geocoding` (no licence), `offline-geocode-city` (UN/LOCODE data terms unclear + poor town coverage), `exiftool-vendored*` (Node-only; Perl Artistic/GPL), `c2pa` (deprecated).
- **Remote services (violate no-upload promise):** `node-geocoder`, `react-geocode`, `@bigdatacloudapi/*`, `leaflet-geosearch`, AWS Geo Places SDK, Nominatim-style APIs.
- **Stale / superseded:** `exif-js` (2017), `reverse-geocode` (2019, heavy data), `open-location-code` (kept: tiny, stable — but verify behaviour with tests), `filepond-plugin-image-exif-orientation`, `exif-auto-rotate`, `jpeg-autorotate` (Node).
- **Too heavy for the benefit:** `geo-tz` (58 MB), `maplibre-gl` as default (280 KB + needs tiles), `@pinta365/steganography`, `scanbot-web-sdk` (commercial).
- **Policy-restricted:** `tile.openstreetmap.org` as default tile source of a distributed app.
