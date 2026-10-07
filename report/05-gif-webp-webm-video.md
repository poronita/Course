# 05 — GIF, Animated WebP/APNG, WebM & Video (research)

Status: **complete** · Verified on 2026-10-07 · Labels/tiers: see `00-methodology.md`
Reference implementation to match: **your own `video-to-gif`** (FFmpeg `palettegen/paletteuse`, 5 dithers, 2–256 colours, 1–50 fps, 0.25–4× speed, trim, crop, reverse, boomerang, loop count, GIF + animated WebP, ZIP). This file shows how to reproduce that **fully in the browser/app without FFmpeg**.

**Functions covered:** video → GIF / animated WebP / APNG · video → frames (ZIP) · frames → GIF/WebP/APNG/video · GIF/WebP/APNG → frames · GIF ↔ WebP ↔ APNG ↔ MP4/WebM · GIF optimiser · speed/reverse/boomerang/trim/crop/resize (parameters of the exporters) · WebM encode (incl. sticker presets) · video compress/mute/trim/extract-audio · sprite sheets · poster/contact sheet · Motion-Photo / Live-Photo extraction.

---

## 0. TL;DR (decisions)

| Job | Use | Tier | Weight (gz) |
|---|---|---|---|
| **Decode video / extract frames** | **WebCodecs `VideoDecoder`** driven by **`mediabunny`** (MPL-2.0) — or `<video>`+canvas fallback (0 KB) | B (MPL) / native | mediabunny: minified bundle **173 KB** (unminified 270 KB), tree-shaken est. 80–150 KB `[measure]` |
| **Encode GIF** (fast, tiny) | **`gifenc`** (MIT) + own palette/dither code (+ optional `image-q` MIT for dithering) | A | 4 KB (+19 KB) |
| **Decode GIF** | `gifuct-js` (MIT) *(or `modern-gif` MIT)* | A | ~3 KB / 9 KB |
| **APNG** encode/decode | `upng-js` (MIT) ; parser/player `apng-js` (MIT) | A | 9 KB (+pako 14 KB) / 7 KB |
| **Animated WebP encode+decode** | `wasm-webp` (MIT wrapper, libwebp BSD-3; `encodeAnimation`/`decodeAnimation`) *or* custom RIFF muxer around `@jsquash/webp` frames | A | 182 KB wasm + 38 KB js |
| **Animated WebP decode (pure JS fallback)** | `@stacksjs/ts-webp` (MIT) | A | 26 KB |
| **WebM / MP4 encode** | WebCodecs `VideoEncoder` + `mediabunny` (`CanvasSource`, `Mp4/WebMOutputFormat`) ; fallback `MediaRecorder` | B / native | (shared with mediabunny) |
| **Trim / mute / remux without re-encoding** | `mediabunny` Conversion API (transmux) | B | (shared) |
| **Video compress / resize / rotate / crop** | `mediabunny` transcode (hardware via WebCodecs) → **on Android prefer Media3 Transformer** (Apache-2.0, MediaCodec + OpenGL) | B / A | native AAR |
| **Audio extract** (copy stream) | `mediabunny` | B | — |
| MP3 / AAC **encode** (when the platform lacks it) | `@mediabunny/mp3-encoder` (LAME, **LGPL inside**, 130 KB) / `@mediabunny/aac-encoder` (libavcodec, 250 KB; **licence of the embedded build not stated → verify**) | **B\*** | 130 / 250 KB |
| WebCodecs missing (old WebView) | `libavjs-webcodecs-polyfill` (0BSD) + `@libav.js/variant-webcodecs` (LGPL-2.1) | **B** | ≈ 31 + 55 + 888 = **~0.97 MB** |
| Sprite sheet / contact sheet / poster | plain canvas + `fflate` | A | 0 |
| Motion-Photo extraction | own byte parser (XMP `Container:Directory` / `Item:Length`) | — | ~2 KB |

**Hard rejections (licence):** `@ffmpeg/core` & `@ffmpeg/core-mt` — **GPL-2.0-or-later**, wasm **31.5 MB → 10 MB gz** · `gifsicle-wasm` — **GPL-2.0-only** · `gifsicle-wasm-browser` — labelled MIT but bundles gifsicle (GPL) · `@wordpress/video-conversion` — GPL-2.0-or-later · `gifski`/`gifski-lite` — AGPL-3.0 (see earlier correction) · `web-demuxer` (no licence) · FFmpegKit for Android (**retired**).
**So: no FFmpeg in this product.** *(Parallel-research note, verified: `@jsquash/webp` has **no animation API** — animated WebP needs `wasm-webp` or the custom muxer below.)* **Strict-permissive profile video path** (no MPL): `mp4box` (BSD-3, ~59 KB gz incl. shared chunk) demux + WebCodecs + `mp4-muxer`/`webm-muxer` (MIT, deprecated but functional, 14/11 KB gz) — ≈ 85 KB total, see `11` §3. Everything is built from WebCodecs + small pure-JS/WASM encoders, which also keeps the app light.

---

## 1. Platform facts

| # | Fact | Source |
|---|---|---|
| 1 | **WebCodecs** reached Baseline across browsers during 2026 (Chromium 2022, Firefox 2023, Safari 26.x) — sources differ on Safari's exact version → **feature-detect** `VideoEncoder`, `VideoDecoder`, `ImageDecoder` | [verified-search] |
| 2 | **Android WebView supports `VideoEncoder` from v94**; hardware H.264 on devices with Qualcomm/Exynos and a subset of HiSilicon/MediaTek chipsets, software fallback on Android M+; **HEVC WebCodecs enabled in Chrome M130 (Win/macOS/Android)** | [verified-search] |
| 3 | ⇒ **Codec availability varies per device** — always `await VideoEncoder.isConfigSupported(cfg)` and choose: `avc1` (MP4) → `vp9`/`vp8` (WebM) → `av01`; show a clear message if none works. | derived |
| 4 | **FFmpegKit is retired** (binaries removed 2025); maintained forks exist under LGPL — but with LGPL-only builds there is **no libx264** → hardware **MediaCodec/Media3** is the right native path. | [verified-search] |
| 5 | **Media3 Transformer**: trimming, scaling, rotating, cropping, effects, transcoding, HDR/slow-motion handling; implemented on **MediaCodec + OpenGL**; `androidx/media` repository licence = **Apache-2.0** | [verified-search] + [verified-upstream LICENSE] |
| 6 | **Motion Photos** = primary image (JPEG/HEIC/AVIF) **followed by an embedded MP4**; XMP *Container* metadata locates it: `Container:Directory` items with `Item:Mime`, `Item:Semantic`, **`Item:Length`** (video size, counted from **end of file**), `Item:Padding`; older Pixel files: `GCamera:MicroVideo` / **`GCamera:MicroVideoOffset`** | [verified-search] developer.android.com/media/platform/motion-photo-format |
| 7 | GIF stores frame delays in **centiseconds**; very small delays are historically coerced by viewers (≈ ≤ 10 ms → 100 ms) → keep delay ≥ 20 ms (≤ 50 fps) | `[unverified — test on target viewers]` |
| 8 | Telegram video sticker: **WEBM, VP9, ≤ 256 KB, ≤ 3 s, ≤ 30 fps, one side 512 px** (official). WhatsApp animated sticker: **WebP 512×512, ≤ 500 KB, ≥ 8 ms/frame, ≤ 10 s** (third-party) | [verified-search] core.telegram.org; docs.zavu.dev / moda.app |
| 9 | Canvas `captureStream` + `MediaRecorder` → WebM in **real time** (slow, quality varies) — last-resort fallback only | `[unverified]` |

---

## 2. Open-source base tools (verified)

### 2.1 Media toolkit — **`mediabunny`** (the key finding)

| Item | Value |
|---|---|
| Package | `mediabunny@1.61.3` (2026-10-05), pure TypeScript, **zero dependencies** |
| Licence | **MPL-2.0**; upstream says it is *"free to use for any purpose, including closed-source commercial use"* [verified-upstream README §License] → **Tier B** (MPL: share changes to MPL files only) |
| Size | `mediabunny.min.mjs` → **173 KB gz** (minified full bundle; unminified `mediabunny.mjs` 1.46 MB raw → 270 KB gz); tree-shakable ESM — only imported formats/codecs count `[measure real bundle]` |
| Formats | **Read & write** MP4, MOV, WebM, MKV, HLS, WAVE, MP3, Ogg, ADTS, FLAC, MPEG-TS |
| Codecs | 25+ video/audio/subtitle codecs through **WebCodecs (hardware-accelerated)**; extension packages add encoders the platform lacks |
| API (from README) | `Input`/`BlobSource`/`ALL_FORMATS`, `computeDuration()`, `getPrimaryVideoTrack()`, `getDisplayWidth/Height()`, `getRotation()`, `getMetadataTags()`; `Output`/`Mp4OutputFormat`/`BufferTarget`/**`CanvasSource`** (`codec:'avc'`, `bitrate: new Quality('high')`), `addVideoTrack`, `start`, `finalize`; **Conversion API**: *transmuxing, transcoding, resizing, rotation, cropping, resampling, trimming*; streaming I/O (any file size, memory-efficient) |
| Frame extraction sinks | The docs describe canvas/sample sinks for decoding frames `[unverified API names — read docs at mediabunny.dev]` |
| Extensions (all **MPL-2.0** wrappers) | `@mediabunny/mp3-encoder` — **LAME 3.100** WASM, ~130 KB gz; README states LAME is **LGPL** (LAME asks users to observe its licence page) · `@mediabunny/aac-encoder` — AAC-LC from **libavcodec**, 250 KB gz (**no licence statement for the embedded FFmpeg build in the README → treat as Tier B\*, verify**) · `@mediabunny/flac-encoder` — libFLAC, 82 KB gz · also `ac3`, `dts`, `prores` |
| Maturity | very active (1.61.x, sponsors incl. Remotion, Mux); recommended **primary** engine for video |

> **Why this matters:** it replaces ffmpeg.wasm (GPL, 10 MB gz) for MP4/WebM mux/demux, trimming, remux, mute, extract audio, resize/rotate, compress — with hardware codecs where available.

### 2.2 Alternative / lower-level demux & mux

| Package | Ver · last pub | Licence | Gz | Notes |
|---|---|---|---|---|
| `mp4box` | 2.4.1 · 2026-06 | **BSD-3-Clause** | ~15 KB (`mp4box.all`) – 43 KB | GPAC's MP4Box in JS; demux for WebCodecs; use if you prefer BSD over MPL |
| `@webav/mp4box.js` | 0.5.7 · 2025-07 | BSD-3-Clause | 32 KB (min) | fork |
| `mp4-muxer`, `webm-muxer` | 5.2.2 / 5.1.4 | MIT | 14 / 11 KB | **DEPRECATED** in favour of mediabunny (same author line) |
| `fix-webm-duration`, `ts-ebml` | MIT | 5 KB / 85 KB min | only needed for the `MediaRecorder` fallback (adds duration/seek cues to WebM) |
| `mediainfo.js` | 0.3.8 · 2026-09 | BSD-2-Clause | wasm **956 KB** gz | detailed media info; not needed (mediabunny reads metadata) |
| `libavjs-webcodecs-polyfill` + `@libav.js/variant-webcodecs` | 0.5.5 (0BSD) / 6.10.9 (**LGPL-2.1**) | **B** | polyfill 31 KB + `libav…wasm.wasm` 2.29 MB → **888 KB** + glue 55 KB | WebCodecs ponyfill for old WebViews/browsers; asm.js fallback 1.2 MB gz; variant has VP8/VP9/AV1/Opus-class codecs (no x264/GPL) |
| `web-demuxer` | 4.0.0 | **no licence field** | wasm 1.0 MB gz | ❌ rejected |

### 2.3 GIF

| Library | Ver · last pub | Licence | Gz | Features / limits |
|---|---|---|---|---|
| **`gifenc`** | 1.0.3 · 2021-03 | **MIT** | **esm 4 KB** (22 KB unminified UMD → 6 KB) | `GIFEncoder().writeFrame(index,w,h,{palette,transparent,transparentIndex,delay(ms),repeat(-1 once/0 forever/n),dispose})`, `quantize(rgba, maxColors, {format:'rgb565'|'rgb444'|'rgba4444', oneBitAlpha…})` (PNN quantiser), `applyPalette()`; streaming (`bytesView()`); **multi-worker friendly**; README speed claim: 150 × 1024² frames ≈ 2.1 s with workers (Chrome). **No dithering, no interlace** (README lists as future work). Stability badge "experimental" but widely used |
| `image-q` | 4.0.0 | MIT | 19 KB | **WuQuant/NeuQuant/RGBQuant + Floyd-Steinberg, Stucki, Atkinson, Jarvis, Burkes, Sierra…** → gives you *your five dithers* (`video-to-gif` parity). Slower (JS) — run in worker, sample frames |
| `gifuct-js` | 2.1.2 · 2021-11 | MIT | lib ~3 KB (+`js-binary-schema-parser`) | decode → frames with patches/`dims`/disposal; you composite (examples included) |
| `omggif` | 1.0.10 · 2019 | MIT | 9 KB | enc + dec (lower-level) |
| `modern-gif` | 2.1.0 · 2026-04 | MIT | 9 KB + worker 11 KB | encode/decode with **web worker**, "max colours 2–255", "compression size" option; higher-level than gifenc |
| `ts-gif` | 0.1.2 · 2025-02 | MIT | 4 KB | tiny TS enc/dec; young |
| `gif.js` | 0.2.0 · **2016** | MIT | worker 5 KB | obsolete; slower than gifenc (per gifenc README) |
| `gif-encoder-2` | 1.0.5 · 2019 | Unlicense | ~9 KB | NeuQuant JS; slower/older |
| ❌ `gifski` / `gifski-lite` | AGPL-3.0 | — | — | **rejected** (quality leader, but AGPL; commercial licence only from author) |
| ❌ `gifsicle-wasm`, `gifsicle-wasm-browser` | GPL-2.0 / GPL-inside | — | 102 KB wasm | **rejected** |

### 2.4 Animated WebP / APNG / AVIF

| Format | Library | Licence | Gz | Capabilities / gap |
|---|---|---|---|---|
| **Animated WebP — encode+decode** | **`wasm-webp@0.1.0`** (2026-03; port of libwebp 1.3.2 per README; repo `nieyuyao/webp-wasm`) | **MIT** wrapper; libwebp **BSD-3** (add its notice) | wasm 471 KB → **182 KB** + js 144 KB → 38 KB | `encodeAnimation(w,h,hasAlpha,frames[{data,duration,config?{lossless,quality}}])`, `decodeAnimation()`, static `encode/encodeRGB/decode`. Only `lossless` & `quality` config fields exposed. v0.1.0 → test thoroughly; **fallback = own RIFF muxer** (below) |
| Animated WebP — decode (pure JS) | `@stacksjs/ts-webp@0.1.6` (2026-09) | MIT | 26 KB | full lossless+lossy codec, `decodeAnimation()` returns frames+loopCount+background; young project |
| **Own muxer (zero-dependency option)** | encode each frame with `@jsquash/webp` (§01), then wrap into `RIFF/WEBP` with `VP8X` + `ANIM` + `ANMF` chunks | — | ~3 KB code | Container is simple, but you lose libwebp's **inter-frame diff/sub-rectangle optimisation** → bigger files; choose per-frame lossy for photo clips, lossless for graphics |
| **APNG** | `upng-js@2.1.0` (2017; stable) | MIT | 9 KB (+pako 14 KB) | `UPNG.encode(frames,w,h,cnum,delays)` incl. **lossy palette `cnum`**; `decode`/`toRGBA8` (frames) |
| APNG parse/play | `apng-js@1.1.5` (2025-01) | MIT | 7 KB | read frames/timing |
| **Animated AVIF** | **no verified encoder package** (`@jsquash/avif` = still images). Options: ship AV1 inside **MP4/WebM** via WebCodecs `av01` (device-dependent) | — | — | gap; low priority |
| Animated image **decode** (any) | WebCodecs **`ImageDecoder`** (GIF/WebP/APNG/AVIF in supporting browsers) | native | 0 | `[unverified per-browser matrix]` → fall back to gifuct / ts-webp / upng |

### 2.5 Android-native (app only)

| Option | Licence | Use |
|---|---|---|
| **`androidx.media3:media3-transformer` / `-effect`** | **Apache-2.0** [verified-upstream androidx/media LICENSE] | Trim, transcode (H.264/H.265 via MediaCodec hardware), scale, rotate, crop, speed; wrap as a **Capacitor plugin** (Kotlin) `{ trim, compress, extractAudio, mute }` returning a file URI. Guarantees MP4/H.264 export where WebView WebCodecs can't |
| `MediaMetadataRetriever.getFrameAtTime()` | AOSP (Apache-2.0) | frame grabbing fallback `[unverified perf]` |
| ❌ FFmpegKit (retired); LGPL forks | — | not recommended |

---

## 3. Reference pipelines (reproducing `video-to-gif` in the browser)

### 3.1 Video → GIF (quality + size control)
```
inputs: file, start, end, fps (1–50), width/height (or preset 640/480/320/240), crop{x,y,w,h},
        speed (0.25–4), colors (2–256), dither ('none'|'bayer'|'floyd-steinberg'|'atkinson'|'sierra'),
        loop (inf|once|n), reverse, boomerang, targetKB? 
1. Probe (mediabunny): duration, display size, rotation. Clamp [start,end].
2. Plan timestamps: t_i = start + i * (speed / fps)   (speed>1 skips source time; <1 slows)
3. Decode frames at those timestamps (VideoDecoder via mediabunny; fallback <video>.seek loop).
   For each frame: drawImage(crop → resize) into an OffscreenCanvas of the FINAL size; frame.close().
4. PASS 1 (palette): sample up to ~20–40 frames (every Nth) → build ONE GLOBAL palette
   (gifenc.quantize on the concatenated/sampled pixels, or image-q Wu/NeuQuant)  ← equals ffmpeg palettegen
5. PASS 2 (encode): for every frame → map to palette with chosen dither (applyPalette or ordered Bayer / error diffusion)
   → index buffer; encode with gifenc.writeFrame(index,w,h,{palette (first only), delay, repeat, transparent?}).
6. Optimise: frame-difference → set unchanged pixels to a transparent index (+dispose=1 'do not dispose') to shrink 20–60% on static-background clips;
   drop near-identical frames and add their delay to the previous; optional palette reduction.
7. reverse = reverse frame list; boomerang = frames + reverse(frames[1..n-2]).
8. If targetKB: iterate (fps ↓, width ↓ ×0.9, colours ↓ 256→128→64, dither none) until size ≤ target (same loop as 02-compression §3).
9. Stream: never hold all frames in RAM — store palette-indexed frames (1 byte/px) or encode as you go after PASS 1.
```
**Delay mapping (centiseconds):** 10 fps → 10 cs · 12.5 → 8 · **20 → 5** · **25 → 4** · 50 → 2 · for 15/24/30 fps use alternating cs (e.g. 15 fps = 7,7,6; 30 fps = 3,3,4) so average speed is right. `[derived]`

### 3.2 Video → animated WebP / APNG
Same steps 1–3; then `wasm-webp.encodeAnimation` (per-frame `quality`, `lossless`) **or** own muxer; WebP is usually far smaller than GIF for photographic clips; APNG for lossless graphics (palette-reduce with `cnum`). Provide a **side-by-side size comparison** (GIF vs WebP vs APNG vs WebM/MP4) before download.

### 3.3 Video → frames
Timestamps by fps or "every N-th frame" or **keyframes only** or "at these times"; export PNG/JPG/WebP (jSquash) → **streamed ZIP** (`fflate`); naming `{name}_{index:05d}.png`; max-dimension downscale to protect memory.

### 3.4 GIF / WebP / APNG → frames or → video
Decode (`ImageDecoder` → `gifuct-js` / `wasm-webp.decodeAnimation` / `upng`) → composite per disposal rules → frames list → (a) ZIP; (b) mediabunny `CanvasSource` → **MP4 (avc) or WebM (vp9/vp8)** — typically **90 %+ smaller** than the GIF `[expected, measure]`.

### 3.5 Trim / mute / extract audio / compress (video tools)
- **Trim, mute, remux, extract audio:** mediabunny **transmux** — *no re-encode, instant, lossless* (trim snaps to keyframes unless re-encode requested).
- **Compress to target size:** `bitrate ≈ (targetBytes*8 / duration) − audioBitrate`, resize ≤ 720p/480p, re-encode (hardware) → measure → adjust once (preview with a 5-s sample first). On Android use Media3.
- **Rotate/crop/resize:** Conversion API (web) / Media3 effects (app).

### 3.6 Motion Photo → image + video / GIF
1. Read XMP (`exifr` XMP segment) → if `Container:Directory` has an item with `Item:Semantic="MotionPhoto"` and `Item:Mime="video/mp4"`, take `Item:Length` bytes **from the end of the file**; older files: `GCamera:MicroVideoOffset` (from end). 2. Fallback: locate the `ftyp` box after the JPEG EOI. 3. Slice → Blob → feed to the video pipeline (GIF/MP4/frames). iOS **Live Photos** are two files (image + `.mov`) — let the user pick both ("Live Photo → GIF/MP4") `[pairing by content identifier unverified]`.

---

## 4. Capability ↔ library matrix

| Function | Web | Android app |
|---|---|---|
| Video → GIF/WebP/APNG | mediabunny + WebCodecs + gifenc/wasm-webp/upng | same (WebView); optional Media3 for decoding speed |
| Video → frames | mediabunny / `<video>` fallback | same |
| GIF ↔ MP4/WebM | gifuct + mediabunny | same |
| Trim/mute/remux/extract audio | mediabunny | same, or Media3 |
| Video compress | mediabunny (codec-dependent) | **Media3 (guaranteed H.264/H.265 + hardware)** |
| MP3/AAC export | mediabunny extensions (LGPL/verify) | Android `MediaCodec` AAC (OS) |
| Animated AVIF | ❌ | ❌ |
| HEVC/H.265 output | device-dependent WebCodecs | Media3/MediaCodec (patent flag) |

---

## 5. Creative features

### A. "Make a GIF" that beats ezgif/Giphy for privacy and control
1. **Live preview scrubber** with start/end handles (like your tool) + **real-time size estimate** (sample-encode 10 frames → extrapolate) — fix size *before* the long encode.
2. **Smart presets:** *Chat (≤ 8 MB / 480 px / 12 fps)*, *Sticker (512 px, transparent)*, *HD loop (720 px, 15 fps, 128 colours)*, *Tiny (≤ 1 MB)* — each preset sets fps, width, colours, dither, loop. `[chat/email size limits vary by app; keep them user-editable]`
3. **"Target size" mode:** "Make it ≤ 2 MB" → auto-search fps/size/colours (algorithm §3.1 step 8) and show what was sacrificed.
4. **Seamless loop finder:** compare first/last frames (pixelmatch) across the selected range and **suggest the best loop points**; one-tap **boomerang**.
5. **Text/caption & speech-bubble overlay, watermark, crop-to-ratio, speed ramp** (some are *editing* — keep as optional layers).
6. **GIF → "smaller GIF"** optimiser and **GIF → MP4/WebM** converter with a visible **"saves 92 %"** number (this is what users search for).
7. **Screen-recording → GIF** (web: `getDisplayMedia` capture [permission prompt], Android: pick recorded MP4) with auto-trim of idle start/end.
8. **Animated sticker maker:** WhatsApp (WebP 512×512, ≤ 500 KB, ≥ 8 ms, ≤ 10 s) and **Telegram (WEBM VP9, ≤ 256 KB, ≤ 3 s, ≤ 30 fps)** — presets live in `data/presets.json`; auto-fit loop (reduce fps/size/quality until the limit passes); **verification checklist** before download.
9. **Sprite-sheet maker/splitter & frame-by-frame export** (game devs, CSS animators): grid layout, power-of-two option, JSON atlas.
10. **Contact sheet / storyboard**: N evenly spaced frames in a grid + timestamps (ideal for sharing a video preview).

### B. Video utilities that fit the "image Swiss-knife" brand
11. **Video → best-frame picker** (sharpest frame via Laplacian variance) → "Pick a thumbnail".
12. **Mute / extract audio / trim / change speed / reverse** (remux-only operations are instant).
13. **Compress video to N MB** (WhatsApp/Email) with preview and warnings; **Android: runs in background** with a progress notification (Media3).
14. **Rotate / flip / crop video** — fixes sideways phone videos.
15. **Photos + music → slideshow video** (Ken-Burns pan/zoom via canvas; encode MP4/WebM) *— futuristic-lite, but only canvas + mediabunny.*
16. **Time-lapse maker:** pick N photos → fps → video; **reverse time-lapse (video → time-lapse by frame skipping).**

### C. Mobile-only
17. **Motion Photo / Live Photo → GIF/MP4/still** (see §3.6) and **batch extract videos from motion photos** in the gallery.
18. **Share-target:** "Share video → GIF/Compress/Extract audio" with last-used preset.
19. **Gallery batch:** compress all videos > 50 MB in the background (Media3 + WorkManager) with undo bin (pairs with §02).

### D. Trust & limits
20. Show **device codec capabilities** page ("Your device can export: MP4/H.264 ✔, WebM/VP9 ✔, HEVC ✖") — makes failures explicable and reduces support.

---

## 6. Implementation notes (gotchas)

1. **Always close frames:** `VideoFrame.close()` immediately after `drawImage`; unclosed frames stall the decoder (hardware decoder pool is small on phones).
2. **Backpressure:** respect `decoder.decodeQueueSize` / `encoder.encodeQueueSize`; use mediabunny's pipeline rather than hand-rolled loops.
3. **Resize at decode time:** draw into a canvas of the *final* size (never keep 4K frames); GIF frames ≥ 1080p are rarely useful.
4. **Orientation:** apply `videoTrack.getRotation()` (phone videos are often rotated by metadata).
5. **Colour space:** WebCodecs frames may be BT.709/HDR; for HDR sources tone-map or warn (colours look washed otherwise) `[unverified handling]`.
6. **Transparency:** GIF supports **1-bit** transparency only; APNG/WebP support full alpha; WebM-VP9 alpha is device-dependent `[unverified]`.
7. **GIF quality levers (in order):** fewer pixels → fewer frames → fewer colours → dithering off → transparent frame-diff. Each step must be reversible in the UI preview.
8. **Determinism:** global palette + ordered dither (Bayer) gives stable, flicker-free results; error-diffusion dithers shimmer between frames — default to Bayer/none for animation, offer FS/Atkinson for stills.
9. **WASM threads:** `wasm-webp`, `gifenc` run fine single-threaded; **don't require COOP/COEP**.
10. **Workers:** decode/encode in a Worker; post progress; cancel by terminating; keep UI at 60 fps.
11. **Memory budget:** compute `frames × w × h` before starting; refuse/auto-reduce above a device-based limit (e.g. 150 MB indexed frames).
12. **Testing:** golden clips (portrait phone video, 4K HEVC, screen-recording, long 10-min clip), measure time on a low-end Android phone.
13. **LGPL/MPL compliance:** keep `@libav.js/*` and LAME/libavcodec wasm as separate files; include notices; mediabunny MPL file-level obligations only if you modify its files.
14. **Patents:** MP4/H.264, HEVC and AAC rely on platform codecs (WebCodecs/MediaCodec) — the platform vendor holds the licence; shipping your *own* software encoders for these is outside this research's recommendation `[legal review if ever considered]`.

---

## 7. Weight table (gzip)

| Component | Gz | Policy |
|---|---|---|
| `gifenc` + palette/dither code (own) | ≈ 8 KB | on demand |
| `image-q` (optional dithers) | 19 KB | on demand |
| `gifuct-js` (+schema parser) | ≈ 5 KB | on demand |
| `upng-js` + pako (shared with §01) | 9 + 14 KB | on demand |
| `wasm-webp` (anim encode/decode) | ≈ 220 KB | on demand |
| `@stacksjs/ts-webp` (decode fallback) | 26 KB | optional |
| **`mediabunny`** (tree-shaken estimate) | **≈ 80–150 KB** `[measure]` (minified full bundle 173 KB) | on demand (video tools) |
| `@mediabunny/mp3-encoder` / `aac-encoder` / `flac-encoder` | 130 / 250 / 82 KB | opt-in (LGPL/verify) |
| `mp4box` (if used instead of/with mediabunny) | 15–43 KB | optional |
| WebCodecs polyfill pack (libav.js webcodecs) | ≈ 0.97 MB | opt-in fallback (LGPL) |
| **MVP total (GIF + WebP-anim + APNG + video tools)** | **≈ 0.35–0.45 MB** | |
| Android: Media3 transformer AAR | `[measure]` | native dependency |

---

## 8. Rejected / not useful (names only)

- **GPL/AGPL (hard no):** `@ffmpeg/core`, `@ffmpeg/core-mt` (GPL-2.0-or-later, 31–32 MB wasm), `gifsicle-wasm` (GPL-2.0-only), `gifsicle-wasm-browser` (MIT label; contains gifsicle), `@wordpress/video-conversion` (GPL-2.0-or-later), `gifski`, `gifski-lite` (AGPL-3.0).
- **No licence:** `web-demuxer`.
- **LGPL JS libraries (hard to comply when minified/bundled):** `lamejs`, `@breezystack/lamejs`, `lamejs-patched/fixed` (prefer `@mediabunny/mp3-encoder` or the OS encoder).
- **Deprecated / obsolete:** `mp4-muxer`, `webm-muxer` (→ mediabunny), `gif.js` (2016), `gif-encoder` (2018), `libavjs-webcodecs-bridge` (not needed), `mp4-wasm` (2021).
- **Retired / not available:** FFmpegKit (Android).
- **Not needed:** `mediainfo.js` (956 KB gz), `wasm-media-encoders` (282 KB gz; encoders include LAME — licence handling unclear), `ts-gif` (young), `@jimp/gif` (Jimp).
