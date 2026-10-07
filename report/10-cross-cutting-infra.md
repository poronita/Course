# 10 — Cross-Cutting Infrastructure (web + Android shell, tooling, hosting, compliance)

Status: **complete** · Verified on 2026-10-07 · Labels/tiers: see `00-methodology.md`
Scope: everything the six function sections (`01`–`05`, `07`) depend on but that is not an image function: app shell, Android bridge, build/test tooling, hosting & headers, offline/PWA, storage, ads & privacy wording, licence-compliance automation.

---

## 0. TL;DR

| Decision | Recommendation | Why |
|---|---|---|
| App shell | **One TypeScript code base → PWA (web) + Capacitor 8 (Android)** | offline-first, bundled WASM, native bridges for Android-only features |
| Android shell | **Capacitor** (`@capacitor/core|android|cli` **8.5.2**, MIT; **minSdk 24, target/compile SDK 36**) | needs native plugins (original-file/GPS access, Media3, share-target, background work) — a TWA cannot call native APIs |
| TWA/Bubblewrap | `@bubblewrap/cli` 1.25.0 (Apache-2.0) = *fallback* if you ever ship only the hosted site | no native bridge, no bundled offline assets |
| Build | **Vite 8** (MIT) + **TypeScript** (Apache-2.0) + `vite-plugin-pwa` 2.0 (MIT) | WASM-friendly, fast |
| UI framework | **your AI developer's choice**; all candidates are MIT (`preact`, `react`, `vue`, `svelte`, `solid-js`). Prefer a **small** runtime (Preact/Solid/Svelte) because the product is tool-heavy, not UI-heavy | crop-UI libraries exist per framework (§03) |
| Concurrency | **Web Workers + `comlink`** (Apache-2.0, 3 KB) | all codecs run off the main thread |
| Storage | `idb-keyval` (Apache-2.0, 2 KB) for recipes/history; **OPFS**/Cache API for large temp files `[verify on target WebViews]` | no server |
| Hosting | **Cloudflare Pages** (supports `_headers`) or any static host; **not GitHub Pages if you need custom headers** | see §3 |
| **Licence profile** | **`PROFILE=strict` (default for MVP) / `extended`** — Tier-B packs compiled in only for `extended` (see `11` §3) | follows the product owner's conservative LGPL stance; Extended after a legal read |
| Cross-origin isolation (COOP/COEP) | **Do not require it** | breaks third-party ad scripts on the web build; not needed if you use single-thread WASM builds (§3) |
| Licence automation | `license-checker-rseidelsohn` (BSD-3) / `license-report` (MIT) + `@cyclonedx/cyclonedx-npm` (Apache-2.0 SBOM) in CI, deny-list GPL/AGPL/NC | keeps the "free for commercial use" promise true over time |

---

## 1. Architecture (monorepo sketch)

```
packages/
  core/            # pure TS: engines & recipes — no DOM
    codecs/        # jSquash wrappers, heic, raw, gif, webp-anim … (lazy packs; feature-detected)
    pipeline/      # decode → ImageData → ops → encode; OutputSpec (see 03 §3); size-target search (02 §3)
    meta/          # exifr/piexif/strip/geocode
    presets/       # presets.json + schema + validators
    workers/       # comlink-exposed worker entrypoints
  ui/              # shared components (crop, before/after, file drop, progress, licences page)
apps/
  web/             # Vite PWA (service worker, manifest, pack downloader)
  android/         # Capacitor project (same web build) + native plugins (Kotlin)
data/              # presets.json, cities pack build script, licences.json (generated)
```

**Pack system (core idea):** every heavy capability is a **versioned pack** `{id, files[], sizeGzip, license, loader()}` listed in a manifest. The shell loads packs on demand, caches them (Cache API), shows size before download, works offline afterwards. On Android the build can **pre-bundle** selected packs into the APK/assets. This keeps first load small (web) and tools instant (app). See `08-…` for measured pack sizes.

**Shell + Worker budget** *(adopted from the parallel research)*: keep the **initial HTML/CSS/JS shell < 200 KB gz**; render the UI immediately; use native `createImageBitmap`/canvas for the first preview when a file is dropped; **prefetch the heavy WASM pack the user is likely to need (e.g. AVIF/vectoriser) in the background right after the first drop** so it is cached before they press Convert. Never load more than one heavy pack concurrently on low-memory devices.

**Feature-detection layer:** one `capabilities.ts` returning booleans: `wasmSimd`, `wasmThreads` (cross-origin isolated?), `offscreenCanvas`, `imageDecoder`, `videoEncoder{avc,vp9,vp8,av01}`, `canvasWebp/AVIF`, `fileSystemAccess`, `eyeDropper`, `barcodeDetector`, `intlDisplayNames`, `storagePersist`. UI adapts; failures show human messages.

---

## 2. Android shell: Capacitor + native plugins

### 2.1 Capacitor core & first-party plugins (all MIT, verified on npm 2026-10-07)

| Package | Version · last pub | Use in this product | Caveat |
|---|---|---|---|
| `@capacitor/core`, `@capacitor/android`, `@capacitor/cli` | **8.5.2 · 2026-09-11** | shell | Capacitor 8: **minSdk 24, compile/target SDK 36**, AGP 8.13.0, Gradle 8.14.3, Android Studio Otter 2025.2.1+ [verified-search capacitorjs.com + capgo] |
| `@capacitor/filesystem` | 8.1.4 · 2026-10-02 | read/write app files, cache dirs | scoped-storage rules apply; large files → stream |
| `@capacitor/share` | 8.0.3 · 2026-10-02 | "Share result" to other apps | |
| `@capacitor/camera` | 8.2.5 · 2026-10-02 | capture / pick photos | **may use the system photo picker which redacts GPS** (see 04 §1) — don't use it for location tools |
| `@capacitor/preferences` | 8.0.1 | tiny key-value (settings) | |
| `@capacitor/haptics`, `@capacitor/network`, `@capacitor/device`, `@capacitor/app`, `@capacitor/browser`, `@capacitor/status-bar`, `@capacitor/splash-screen` | 8.x | UX niceties; `network` can power a "you are offline — everything still works" badge | |
| `@capacitor/background-runner` | 3.0.0 · 2025-12 | scheduled **JS** tasks | sandboxed JS runtime with limited APIs → **not suitable** for WASM image processing; use native WorkManager (below) `[unverified limits]` |

### 2.2 Community plugins (MIT, verified)

| Package | Version · last pub | Use | Notes |
|---|---|---|---|
| `@capawesome/capacitor-file-picker` | 8.1.0 · 2026-09-05 | pick files/images/videos, multiple selection | **Test whether it returns the original file (with GPS) or a redacted copy** |
| `@capacitor-community/media` | 9.1.0 · 2026-03 | save images/videos to gallery albums | for "Save to Pictures/AppName" |
| `@capacitor-community/file-opener` | 8.0.1 · 2026-05 | open a result file in another app | |
| `@aparajita/capacitor-biometric-auth` | 10.0.0 · 2026-02 | biometric unlock for the photo vault | check Capacitor-8 compatibility |
| `@supernotes/capacitor-send-intent` | 7.0.0 · 2025-04 | receive **Share-to-app** (Android `SEND` intents) | **built for Capacitor 7** — verify Cap-8 compatibility or write your own (it is small) |
| `@capawesome/capacitor-android-edge-to-edge-support` | 8.0.8 · 2026-04 | edge-to-edge layout (needed for modern target SDKs) | |
| `@capacitor-community/admob` | 8.2.1 · 2026-10-06 | AdMob ads (**wrapper MIT; the Google Mobile Ads SDK itself is proprietary**) | see §6 |

### 2.3 Custom native plugins to write (Kotlin) — interface spec for the AI developer

These are the **Android-only capabilities** that justify the app. No existing plugin was found that is verified to do them.

```ts
// 1) Original-file access (GPS intact)       — needs READ_MEDIA_IMAGES + ACCESS_MEDIA_LOCATION  (Android 10+)
interface OriginalFilePlugin {
  pickOriginals(opts:{multiple:boolean; mime:string[]}): Promise<{files:{uri:string;name:string;size:number;mime:string}[]}>;
  readBytes(opts:{uri:string; offset?:number; length?:number}): Promise<{base64:string}>;   // or stream to a temp file path
  // implementation: SAF ACTION_OPEN_DOCUMENT or MediaStore + MediaStore.setRequireOriginal(uri)   [verified-search]
}
// 2) Video work with hardware codecs (Media3 Transformer, Apache-2.0)
interface VideoPlugin {
  trim(o:{uri;startMs;endMs;outName}): Promise<{uri:string}>;
  compress(o:{uri;maxHeight?;targetBitrate?;targetBytes?;codec:'h264'|'hevc'}): Promise<{uri:string}>;
  extractAudio(o:{uri}): Promise<{uri:string}>;  mute(o:{uri}): Promise<{uri:string}>;
  onProgress(cb:(p:{id:string;percent:number})=>void): void;
}
// 3) Native image decode/encode shortcuts (optional): HEIC/AVIF decode via ImageDecoder (API 28+/31+ `[unverified]`), HEIC encode via androidx.heifwriter `[unverified]`
// 4) Background batch (WorkManager, Apache-2.0): enqueueCompressJob({uris,recipe}) with notification progress, constraints (charging/idle)
// 5) MediaStore bulk: queryLargeImages({minBytes}), saveToAlbum({bytes,name,album}), deleteOriginals({uris}) with user confirmation (scoped-storage prompts)
// 6) Share-target intake (ACTION_SEND/SEND_MULTIPLE) → emits {uris,mime} to JS on cold/warm start
// 7) Persisted folder access (SAF tree URIs) for folder-in/folder-out batch
```
All of these should expose **the same JS interface as the web fallback** (e.g. `getOriginalFile()` returns a `Blob`), so tools stay platform-agnostic.

### 2.4 TWA alternative
`@bubblewrap/cli@1.25.0` (Apache-2.0) packages a hosted PWA as a Trusted-Web-Activity AAB: smallest effort, but **no native bridge and no bundled offline assets** → loses §2.3 features. Keep only as contingency.

---

## 3. Hosting, headers, cross-origin isolation

| Fact | Source |
|---|---|
| `Cross-Origin-Embedder-Policy: require-corp` + `Cross-Origin-Opener-Policy: same-origin` make a page **cross-origin isolated** → required for `SharedArrayBuffer` / threaded WASM (Chrome 88+ on Android) | [verified-search] developer.chrome.com |
| **Cloudflare Pages** supports custom headers via a `_headers` file in the build output (not applied to Pages Functions responses) | [verified-search] developers.cloudflare.com |
| **GitHub Pages does not support custom HTTP headers** (COOP/COEP requests are open feature requests) | [verified-search] GitHub community discussion #13309 |
| `coi-serviceworker@0.1.7` (MIT, 2023, ~1 KB gz) injects COOP/COEP via a service worker as a workaround | [verified-registry] |

**Recommendations**
1. **Design all WASM usage for single-thread builds** (jSquash `*_enc.wasm` non-`mt`, oxipng non-parallel, wasm-webp, mediabunny/WebCodecs). Then **no COOP/COEP is needed anywhere**.
2. **If you later want threaded WASM** (faster AVIF/JXL, wasm-vips): host the *tool pages* on a static host with `_headers` (Cloudflare Pages) **and keep ad-bearing pages un-isolated** — `COEP: require-corp` blocks cross-origin subresources (third-party ad scripts/iframes) unless they send CORP/CORS headers `[derived; verify with your ad network]`. Alternative: serve tools in a separate **isolated sub-path/subdomain** without ads in the work area.
3. **Inside the Android WebView** cross-origin isolation is not available out-of-the-box with Capacitor's local server; you would need request interception in a custom plugin — **avoid** `[unverified]`.
4. Static hosting also needs correct **MIME for `.wasm`** (`application/wasm`) and long-lived immutable caching for hashed filenames.

**CSP suggestion (web):** `default-src 'self'; script-src 'self' 'wasm-unsafe-eval' <ad-script-hosts>; worker-src 'self' blob:; img-src 'self' data: blob:; connect-src 'self' <ad-hosts>; frame-src <ad-hosts>` — jSquash is documented as "no dynamic code execution" (works in strict environments) [verified-upstream]; `wasm-unsafe-eval` is the CSP keyword for WebAssembly compilation `[unverified exact keyword support per browser]`.

---

## 4. Build, test, quality tooling (all verified licences)

| Tool | Version · last pub | Licence | Role |
|---|---|---|---|
| `vite` | 8.3.3 · 2026-10-06 | MIT | dev server/bundler; add every `@jsquash/*` to `optimizeDeps.exclude` (§01 §5) |
| `typescript` | 7.0.2 · 2026-07 | Apache-2.0 | types |
| `vite-plugin-pwa` | 2.0.0 · 2026-10-03 | MIT | service worker/manifest generation (uses Workbox) |
| `workbox-window` | 7.4.1 · 2026-05 | MIT | SW registration/update prompts |
| `vitest` | 5.0.3 · 2026-09 | MIT | unit tests (geometry maths, size-search, metadata strip golden files) |
| `@playwright/test` | 1.63.0 · 2026-09 | Apache-2.0 | browser E2E; Chromium preinstalled in the build container |
| `comlink` | 4.4.2 | Apache-2.0 | worker RPC |
| `idb-keyval` | 6.3.0 | Apache-2.0 | recipes/history/settings |
| `dexie` | 4.4.6 | Apache-2.0 | only if you need real indexed queries (gallery metadata cache) — 50 KB gz |
| `browser-fs-access` | 0.38.0 | Apache-2.0 | File System Access API with `<input>` fallback (folder-in/out on Chromium) |
| `file-saver` | 2.0.5 · **2020** | MIT | download blobs (or use `<a download>` natively) |
| `zustand` | 5.0.15 | MIT | tiny state store (optional) |
| UI frameworks | `preact` 11.0.0 · `react` 19.3.0 · `vue` 3.5.43 · `svelte` 5.57.2 · `solid-js` 1.9.16 | all MIT | pick one |
| `license-checker-rseidelsohn` 5.0.1 / `license-report` 6.8.5 / `@cyclonedx/cyclonedx-npm` 6.0.1 | BSD-3 / MIT / Apache-2.0 | licence audit & SBOM in CI |

**Test corpus & golden files** (create in repo `testdata/`): see §04 notes — phones (iPhone HEIC/JPEG, Pixel Ultra-HDR/motion, Samsung motion, DJI), DSLR RAW+JPEG, WhatsApp-processed, screenshots, CMYK JPEG, 16-bit PNG, animated GIF/WebP/APNG, 4K HEVC video, portrait phone video, 48 MP photo. **Performance budget tests** on a low-end Android (3–4 GB RAM): 12 MP JPEG→WebP < N s, 48 MP resize no-crash, 60-image batch memory stable.

---

## 5. Offline, PWA, storage

1. **Service worker:** precache the app shell + core packs; **runtime-cache** optional packs after first use; `Cache-Control: immutable` for hashed WASM; versioned pack manifest so updates are atomic.
2. **Pack downloader UI:** "AVIF tools need 1.4 MB — Download once, works offline" with progress; remember in `idb-keyval`; allow deletion (manage storage page).
3. **Storage quota:** call `navigator.storage.persist()` (best-effort) and `estimate()`; warn before big downloads; OPFS for scratch files on large video/RAW jobs `[verify support on Android WebView and Safari]`.
4. **Install prompts:** PWA install banner on web; link to Play Store listing from the website for Android users.
5. **Update flow:** `workbox-window` "New version available — Reload" toast; Android uses Play updates.
6. **No analytics by default** (supports the privacy promise). If product analytics are needed later, prefer **self-hosted** or **aggregate-only** methods and disclose in the Data-safety form.

---

## 6. Ads, privacy wording, policies

- **Ad SDKs are not open source and not "free dependencies"** — they are third-party SDKs/scripts: **Google Mobile Ads (AdMob)** via `@capacitor-community/admob` (MIT wrapper), **AdSense/other networks** on the web. They collect identifiers, so the Play **Data Safety** form and privacy policy **must declare ad-related data**; the promise should read **"Your images never leave your device"**, *not* "we collect no data" (see `00-methodology.md` §7).
- Consent: EU/UK/etc. require a consent flow (Google's **UMP** SDK for AdMob) `[verify current requirements]`.
- **UX rules that protect the brand:** never show ads *inside* the processing/preview area; no ad during a running job; interstitials only after completion and frequency-capped; keep a visible **"works offline / 0 bytes uploaded"** badge.
- **Size impact of ad SDKs on the APK** — `[unverified; measure]`.
- Licence screen must list: Tier A attributions, Tier B notices (LGPL libheif etc.), data attributions (GeoNames CC-BY-4.0; Twemoji CC-BY-4.0; Noto/Inter OFL; Natural Earth none), ad SDK notices.

---

## 7. Licence-compliance automation (so the product stays "free & commercial-safe")

```yaml
# CI policy (pseudo)
allow:   [MIT, ISC, BSD-2-Clause, BSD-3-Clause, Apache-2.0, 0BSD, Unlicense, CC0-1.0, Zlib, OFL-1.1, CC-BY-4.0(data/art only), "MIT AND Zlib"]
allow-tier-B-by-name:                      # ONLY when PROFILE=extended; explicit allow-list; each needs a notice + replaceable file
  - libheif-js (LGPL-3.0)         # separate .wasm
  - "@colorhythm/libraw-wasm"     # choose CDDL-1.0 of LibRaw
  - wasm-vips (LGPL)              # optional pack only
  - mediabunny (MPL-2.0), exifreader (MPL-2.0), "@resvg/resvg-wasm" (MPL-2.0)
  - "@libav.js/variant-webcodecs" (LGPL-2.1)   # optional fallback pack
  - "@mediabunny/mp3-encoder" (LAME, LGPL)     # optional
deny:    [GPL-*, AGPL-*, SSPL-*, "CC-BY-NC*", UNLICENSED, UNKNOWN, "Limited W3 License"]
check:   wrapper licence AND bundled native/wasm licences (see 00-methodology §3) — review THIRD-PARTY-NOTICES on every dependency bump
output:  licenses.json → in-app "Open-source licences" page; SBOM (CycloneDX) attached to releases
```
Key lesson from this research: **a permissive wrapper licence is not enough** — `libimagequant-wasm` (MIT label, GPL core), `gifsicle-wasm-browser` (MIT label, GPL core), `heic2any` (MIT label, LGPL core), `@ffmpeg/core` (GPL) all pass a naive licence scan. Maintain `data/libraries.json` (`08`) as the reviewed allow-list and fail CI for any package **not** in it.

---

## 8. Accessibility & localisation (cheap wins)

- UI strings via a small i18n layer (JSON); ship **English + Hindi + Gujarati** first if targeting India (fonts: §07 §2.5; Noto Sans Gujarati/Devanagari OFL). Use `Intl.*` for numbers/dates/regions (feature-detect).
- Respect `prefers-reduced-motion`, `prefers-color-scheme`; large tap targets; labels/ARIA for crop handles (see §03 note 10).
- Preset ordering by locale (e.g., India exam presets first when `navigator.language` ends with `-IN`), always overridable.

---

## 9. Open questions to settle early (spikes)

1. **GPS on Android WebView:** does `<input type=file>` / `@capawesome/capacitor-file-picker` return redacted EXIF? → build the `OriginalFilePlugin` spike first (04 §1).
2. **WebCodecs encoders on target phones:** run `isConfigSupported` for avc1/vp9/vp8/av01/hevc on 5–10 real devices; decide MP4/H.264 vs Media3 default (05 §1).
3. **Real bundle sizes** (tree-shaken mediabunny, exifr custom build, pdf.js worker) → update `08` numbers.
4. **LGPL packaging** in APK/AAB (libheif-js `.wasm` as a separate asset) + legal read; consider OS-decoder-first on Android to drop libheif from the APK.
5. **Ad network vs cross-origin isolation** compatibility if threaded WASM is ever desired.
6. **Play Store policy fit** for a Capacitor-wrapped web app (functionality, ads placement, data-safety form) — read current Play policies before submission `[not researched here]`.
