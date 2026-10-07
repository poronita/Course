# MASTER PROMPT: build "Image Swiss Knife" (web + Android, one codebase)

> **How the owner uses this file.** This document is long (about 22,000 words) on purpose. Do **not** paste all of it into a chat box.
> 1. Copy the whole `handoff/` folder into the root of your Android Studio project.
> 2. Open your AI assistant (Gemini in Android Studio, Claude Code, or any coding agent that can read project files).
> 3. Paste the short text from `handoff/KICKSTART-PROMPT.md` as your first message. It tells the assistant to read this file and work milestone by milestone.
> 4. After each milestone, answer its questions and say "go" for the next one (section 17).
>
> Folder map (what the assistant will find):
> - `handoff/MASTER-PROMPT.md`: this prompt (the full brief).
> - `handoff/assets/`: Pip the mascot (SVG, PNG, layers, source rig), icons, badges, app icon, colours, 262 placeholder sounds, and a reference copy of the approved mock-up.
> - `handoff/catalogue/` and `handoff/data/`: the effect, action and sound catalogue (`catalogue.json`) and the reward data (`gamification.json`). The tables in this prompt are generated from them.
> - `handoff/reference/report/`: the full research (functions, licences, library sizes, presets, Android native plugin specs).
> - `handoff/reference/mockup/`: the source of the approved 60-second mock-up (reference only).
> - `handoff/PROJECT-LOG.md`: the history of decisions.

=== START OF PROMPT ===` as the first message. Put the whole `handoff/` folder in the project root first, so the assistant can read the files this prompt points to. Paste one milestone at a time after that (section 17 says how).
>
> Folder map (what the assistant will find):
> - `handoff/MASTER-PROMPT.md`: this prompt.
> - `handoff/assets/`: Pip the mascot (SVG, PNG, layers, source rig), icons, badges, app icon, colours, 262 placeholder sounds, a reference copy of the approved mock-up.
> - `handoff/catalogue/` and `handoff/data/`: the effect, action and sound catalogue (`catalogue.json`) and the reward data (`gamification.json`). The tables in this prompt are generated from them.
> - `handoff/reference/report/`: the full research (functions, licences, library sizes, presets, Android native plugin specs).
> - `handoff/reference/mockup/`: the source of the approved 60-second mock-up.

=== START OF PROMPT ===

## 1. Your role and the mission

You are a senior engineer who builds polished consumer apps. You will build **Image Swiss Knife**: a free, ad-supported image toolkit that runs as a **website** and as an **Android app**, from **one code base**. All image work happens **on the user's device**. The product owner does not want to build anything twice, so every decision below favours one shared code base.

The product wins on **experience**, not on having secret features. Other apps already offer the same tools. Ours must be so easy that a grandfather can use it, so clean, so fun and so beautiful that people come back for the character and the surprises. The character is **Pip Prime**, a pocket-knife-shaped mascot who is the brand. A person who sees Pip on someone else's screen from across the room should know which app it is.

**Definition of success**
1. A first-time user finishes a job (for example "photo under 200 KB for an exam form") in **3 taps or fewer** without reading anything.
2. Every job feels fast, because waiting is hidden behind beautiful progress animations and a character who is busy doing something funny.
3. A returning user always sees something new: transitions, save effects and Pip's actions are picked at random from big catalogues, so the app never feels the same twice.
4. Search engines list every tool and every popular preset as its own page, for example "crop photo to 1:1", while the app still feels like one integrated app.
5. The Android app and the website behave the same, from the same source.
6. No image ever leaves the device. XP, badges and streaks never leave the device either.

## 2. Non-negotiable rules

1. **100 % client-side.** No servers owned by the product for image processing, accounts, analytics of user content, or progress storage. The website is static files. There is no sign-up and no login.
2. **Open source, free for commercial use only.** Allowed licences: MIT, ISC, BSD-2, BSD-3, Apache-2.0, 0BSD, Unlicense, CC0, Zlib, OFL (fonts), CC-BY-4.0 (data and art only, with credit). **Build profile `strict` is the default**: it ships no LGPL, MPL or CDDL code. A second profile `extended` may add reviewed LGPL/MPL/CDDL packs, only after the owner says a legal review is done. Reject GPL, AGPL, SSPL and any non-commercial licence. **A permissive wrapper can hide a copyleft core** (examples that were rejected: `libimagequant-wasm`, `gifsicle-wasm-browser`, `heic2any`, `@ffmpeg/ffmpeg`); check what is inside every package. See `reference/report/08-licence-register-and-size-budget.md` and `09-rejected-sources.md`.
3. **No AI features of any kind.** No cloud AI, no on-device ML models, no "magic" background removers. Classical algorithms are fine (for example `smartcrop`).
4. **One full download on Android.** The Android app contains everything. There are no on-demand packs, no Play Asset Delivery, and no downloads after install. (The website may lazy-load code for speed.)
5. **Ads only after a job is done.** Never during a running job, never over the preview or editor, never as a pop-up on launch. One clearly labelled "Ad" slot on the results screen, plus an optional interstitial after a finished job with a frequency cap. See section 15.
6. **Never use the Swiss flag, the white cross, or any national flag as a logo.** That is a legal restriction. The mascot is a pocket knife with a face, nothing else.
7. **Rewards stay on the device.** XP, levels, badges, streaks, awards, skins, settings and sound choices are stored locally only. The app must say so (section 13.7). On Android set `android:allowBackup="false"` and a data-extraction rule that excludes the app's databases and preferences, because Android's cloud backup would otherwise copy them online.
8. **Sound and motion are always optional.** Every sound can be switched off, from one master switch down to each single sound. Motion respects the system "reduce motion" setting and an in-app setting.
9. **Honest privacy wording.** Say "your images never leave your device". Do **not** say "no data collected", because ad SDKs collect data.
10. **Plain language.** All user-facing text uses short, active sentences and everyday words. No jargon where a simple word works.
11. **Keep the owner's decisions.** If something here seems wrong, say so and propose a change. Do not silently change a decision.

## 3. What you are given

Read these in this order before you write code.

1. This prompt.
2. `handoff/assets/README.md` and `assets/character/rig/README.md`: the mascot, its moods, how the source rig works.
3. `handoff/assets/reference/pip-prime-mockup.html`: the **approved visual and interaction mock-up** (60 seconds, app and website layouts, dark and light themes). Open it in a browser. It is the visual truth for layout, spacing, colour, copy and motion feel. Where this prompt adds features the mock-up does not show (more effects, more actions, pick-up, carpet, sounds), follow this prompt and keep the same look.
4. `handoff/catalogue/catalogue.json`, `handoff/data/gamification.json`: data that the app should load (do not retype it).
5. `handoff/reference/report/README.md`, then the numbered files. They hold the function list (IDs such as C01, P02, G08, M02, V01, U04), the chosen libraries with licences and sizes, the Android native plugin specs (`10-cross-cutting-infra.md` section 2.3), the preset database (`data/presets.json`), and the build phases.
6. `handoff/PROJECT-LOG.md`: the history of decisions.

If two sources disagree, the order of trust is: this prompt, then the mock-up, then the report. Report conflicts to the owner; do not guess.

## 4. Technology decisions

| Area | Decision |
|---|---|
| Shape | **TypeScript monorepo**. One web build. It is the website (PWA) **and** the UI inside the Android app. |
| Android shell | **Capacitor 8.x** (`@capacitor/core|android|cli` 8.5.2 or newer, MIT). `minSdk 24`, `compileSdk` and `targetSdk 36`. Kotlin for native plugins. Open `apps/android/android` in **Android Studio** (Otter 2025.2.1 or newer, AGP 8.13, Gradle 8.14). |
| Build | **Vite** (latest 8.x) with TypeScript (strict mode), `vite-plugin-pwa`, `vitest`, `@playwright/test`. |
| UI framework | **Preact** with `@preact/signals` (small, fast, MIT). Plain CSS with custom properties (design tokens from `assets/palette`). No heavy UI kit. |
| Concurrency | Web Workers with `comlink`. All codecs run off the main thread. Design all WASM for **single-thread builds**, so cross-origin isolation (COOP/COEP) is **not** required. |
| Image engines | As chosen in `reference/report` (jSquash for JPEG, PNG, WebP, AVIF, JXL; oxipng; `@jsquash/resize`; `exifr`; own metadata strippers; `gifenc`; WebCodecs with `mediabunny` only in `extended`; `cropperjs` v2; `smartcrop`; `fflate`; `uqr`). Follow the report's `strict` profile. |
| Native (Android only) | Custom Kotlin Capacitor plugins from `report/10 section 2.3`: **OriginalFilePlugin** (photos with GPS intact), **VideoPlugin** (Media3 Transformer), **WorkManager batch**, **MediaStore bulk**, **share-target intake**, **SAF folder access**. Same JS interface as the web fallback. |
| Sound | Web Audio API in the shared web layer. Works the same in the website and in the Android WebView. |
| Haptics | `@capacitor/haptics` on Android, `navigator.vibrate` on the web where it exists. |
| Storage of progress | **IndexedDB** through `idb-keyval` (small) or `dexie` (only if queries are needed), plus `@capacitor/preferences` for tiny settings on Android. All local. |
| Ads | Android: `@capacitor-community/admob` (wrapper is MIT; the Google Mobile Ads SDK and Google UMP consent SDK are proprietary and must be declared). Web: one ad network of the owner's choice, loaded only on the results screen. |
| Fonts | Bricolage Grotesque (display), Hanken Grotesk (text), JetBrains Mono (numbers). All SIL OFL. **Bundle the font files** (no Google Fonts requests at runtime, to keep the privacy promise and to work offline). |
| i18n | JSON string files. English first. Hindi and Gujarati are planned for phase 2, so never hard-code user text. |
| Hosting (web) | Any static host that can set headers, for example Cloudflare Pages (`_headers`). Correct `application/wasm` MIME and immutable caching for hashed files. |

### Repository layout (create this)

```
image-swiss-knife/
  package.json            # npm workspaces
  packages/
    core/                 # pure TypeScript engines. No DOM. Fully unit-tested.
      codecs/ pipeline/ meta/ presets/ workers/
    ui/                   # shared UI: tool shell, crop, before/after, file drop, progress, info bubble
    pip/                  # THE MASCOT: rig port, state machine, zones, physics, skins, action library
    fx/                   # effects: transitions, save effects, progress bars, effect picker
    sound/                # sound engine, manifest loader, settings model
    game/                 # XP, levels, streaks, quests, badges, awards, chest. Local storage only.
    seo/                  # route table, prerender, per-route head, info text, sitemap
  apps/
    web/                  # Vite app: PWA, prerendered routes
    android/              # Capacitor project (android/ folder opens in Android Studio) + native plugins
  content/
    tools/*.json          # per-tool copy: title, h1, meta, (i) text, FAQ, steps
    strings/en.json       # all UI strings
  data/                   # presets.json, gamification.json, catalogue.json, licences.json (generated)
  assets/                 # copied from handoff/assets (character, icons, badges, sounds, fonts)
  testdata/               # golden files and sample photos/videos
  tools/                  # scripts: licence check, SBOM, route generator, sound lint, effect snapshot
```

## 5. Android Studio and Android specifics

1. Create the Capacitor Android project with `npx cap add android`. Use application id `app.imageswissknife` unless the owner gives another. Ask the owner to confirm the id before the first release (it cannot change after publishing).
2. Capacitor config: `androidScheme: 'https'`, `webDir: '../web/dist'`, no remote `server.url` in release builds, history-API routing with a fallback to `index.html` so deep routes such as `/crop-photo-1-1` open inside the app.
3. **Edge-to-edge** layout (required for target SDK 35 and up). Draw behind the status and navigation bars and apply insets in CSS using `env(safe-area-inset-*)`. Support Android's predictive back gesture (`android:enableOnBackInvokedCallback="true"`) and map it to the app's own back stack.
4. **Permissions**: ask only when needed and explain first with Pip. `READ_MEDIA_IMAGES`, `READ_MEDIA_VIDEO` and `ACCESS_MEDIA_LOCATION` (for the location tools, Android 10 and up). No broad storage permission. No internet permission is needed for the app to work, but the ad SDK needs it: declare `INTERNET` and `ACCESS_NETWORK_STATE`, and make every tool work offline.
5. **Backup**: `android:allowBackup="false"` and `android:dataExtractionRules` and `android:fullBackupContent` that exclude everything (rule 7).
6. **Release build**: R8 and resource shrinking on, ABI splits are not needed for an AAB, signing config read from `keystore.properties` (never committed), version code and name from one place. Target size: the AAB base module under 40 MB. Report real numbers after each milestone.
7. **Splash**: Android 12 splash API with Pip's face icon (`assets/app-icon`), then a Pip hello animation inside the web layer (`vx-hello`).
8. **Adaptive and themed icon**: use `ic_launcher_foreground`, the background and the monochrome variant from `assets/app-icon`.
9. **Share target**: the app appears in the share sheet for images and videos (`ACTION_SEND` and `SEND_MULTIPLE`). Shared files open straight in "What do you want to do?" with Pip's suggestions.
10. **Native plugin tests**: each plugin needs an instrumented test or a documented manual test on a real phone. Run the Phase 0 spikes from the report before building features on top of them.
11. **Device matrix** for testing: a low-end phone (3 to 4 GB RAM, Android 9 or 10), a mid phone (Android 12 or 13), a current phone (Android 15 or newer), one tablet. Also Chrome, Safari and Firefox on the web.
12. **Performance budgets**: cold start to usable home screen under 2 s on the mid phone; interaction response under 100 ms; animations at 60 fps on the mid phone and no worse than 30 fps on the low-end phone (the effect system must lower its quality automatically, see section 11.5).

## 6. Product scope and build order

The full function list, with IDs, engines and phases, is in `reference/report/README.md` section 3. Use those IDs in code, tests and commit messages. Summary:

| Group | Functions (IDs) |
|---|---|
| Convert | C01 JPG/PNG/WebP, C03 HEIC to JPG, C06 fix my file, C08 images to PDF and back, C09 multi-export ZIP; later C02 AVIF/JXL, C04 RAW preview, C05 TIFF/PSD/BMP/ICO, C07 SVG |
| Compress | P01 by quality, **P02 to an exact KB**, P05 PNG optimise; later P03 total budget, P04 visually lossless, P06 format shoot-out, P07 gallery cleaner (Android), P08 receipt compressor |
| Resize and crop | G01 resize, **G02 exact W x H crop**, **G03 preset browser**, G06 rotate/flip, **G08 exam kits**; later G04 social kit and splitter, G05 passport sheet, G07 scanner |
| Metadata and privacy | M01 EXIF viewer, **M02 "Where was this taken?"**, M03 strip metadata; later M04 edit EXIF, M05 clean and share, M06 redaction, M07 duplicates, M08 to M10 extras, **M11 original-file access (Android)** |
| GIF and video | V01 video to GIF, V02 animated WebP/APNG, V03 frames, V04 GIF optimiser, V05 stickers, V06 trim/mute/audio, V07 video compress (Media3), V08 motion photo, V09 sprite sheet |
| Utilities | U04 QR make and scan, U01 icon studio, U03 SVG tools, U06 colour tools, U07 image diff; later U02, U05, U08 |

**Phases**
- **Phase 0, spikes (do first, one to two weeks):** (1) pipeline, worker pool and codec loading; (2) Android `OriginalFilePlugin` with GPS; (3) WebCodecs encoder test on real phones; (4) measure real bundle sizes; (5) preset schema and search UI; (6) **the Pip rig port and effect engine proof**: Pip on screen reacting to the pointer at 60 fps, one transition, one save effect, one sound. Report results and decide go or no-go on each risky item.
- **Phase 1, MVP:** C01, C03, C06, C08, P01, P02, P05, G01, G02, G03, G06, **G08**, M01, M02, M03, U04, plus the whole experience layer at a first level: themes, Pip with 10 moods and the tummy menu, XP and levels, 12 badges, daily quests, 8 transitions, 8 save effects, 6 progress bars, sounds with settings, (i) info bubbles, SEO routes, ads after jobs.
- **Phase 2, growth:** the rest of Convert, Compress and Resize; GIF and video tools; privacy scan; QR, colour and icon tools; Android share target, gallery cleaner and background batch; Hindi and Gujarati; the **full effect and action catalogues** (all 32 transitions, 30 save effects, 12 bars, 90 service actions, all celebrations); pick-up and carpet interactions; all badges, skins and awards.
- **Phase 3, extras:** Media3 video compress, content credentials, vault, scanner, extended-profile packs.

Because the owner wants the experience to be the difference, **the experience layer is part of the MVP, not a later extra**. Build the engines (effects, sound, Pip, game) in a way that adding another effect is one file and one catalogue row.

## 7. Screens and flows

Follow `assets/reference/pip-prime-mockup.html` for every screen. Keep the app compact: base text 13 to 15 px, controls 40 to 44 px high, tap targets at least 44 px, dense but breathable cards.

### 7.1 Navigation
- **App:** header (streak pill, XP bar with rank and numbers, level ring), content area, bottom bar with **Tools**, **Pip** (centre, the mascot peeks above the bar) and **Awards**. Tap Pip's tummy to open the radial tools menu.
- **Website:** left sidebar with the tool list (each tool is a real link with its own URL), top bar with breadcrumb, streak, XP and level, right rail with Pip, daily quests and the daily chest.
- In both layouts the same components are used. Only the layout shell changes.

### 7.2 Flow, with the tap budget
1. **Home.** Pip greets once per launch (`vx-hello`) with a speech bubble. Big "Pick a photo" button, tool tiles, daily quests. On the website the button also says "or drop it here" and accepts drag and drop and paste.
2. **Pick.** Photo grid (recent first). One tap on a photo selects it and shows the purpose chips: "For WhatsApp", "Exam or job form", "For email", "Type my own size". Pip's suggested chip is highlighted ("Pip picks").
3. **Run.** One tap on a chip **starts the job immediately** (no Next, no Start button). The progress screen shows one of the 12 progress bars (random), the live size counter (for example 4.8 MB counting down to 196 KB), stage labels, and Pip doing a service action (section 10).
4. **Result.** Before and after, the saved size, **Save** and **Share** (two buttons only), a save effect (section 11), XP gained (section 13), badge or quest pop-ups if earned, and a "Next up" row with one or two suggested follow-up tools (for example "Remove location", "Video to GIF").
5. **Ad.** One labelled "Ad" slot on the result screen, below the actions. Optional interstitial after every third finished job at most, never in the first session.
6. Taps to finish: shrink 3 (open, photo, chip) plus Save. Crop 4. Location check 3. GIF 5. Show a small "N taps" receipt on the done screen, as in the mock-up.

### 7.3 Other screens
- **Tool page** (for every tool and preset): H1, the (i) bubble, the tool UI, related presets. See section 14.
- **Preset browser** (G03): search box, groups (Social, Stickers, Store, ID and passport, Exams), each preset shows size in pixels, aspect, maximum KB, formats, a "check the official notice" line, a confidence label and the source. Presets come from `data/presets.json` and the user can edit values.
- **Awards**: trophy case (badges grid with new and locked states, tier colours), weekly trophy, level medal, skins, sticker album, the daily chest, streak calendar. Footer text: the local-only sentence (section 13.7).
- **Settings**: appearance, Pip, sound, motion, data (section 12.5 and 13.7), privacy, licences, about.
- **Licences page**: generated from `licences.json`, lists attributions and notices (GeoNames CC-BY, fonts OFL, Twemoji if used, ad SDKs).
- **Empty, error and offline states**: always with Pip (an error reaction from section 10.5) and a plain sentence that says what to do next.

### 7.4 Copy rules
- Buttons are verbs: "Save", "Share", "Remove location".
- Numbers are specific: "4.8 MB to 196 KB", "Pune, India".
- Every tool says "Done on your phone. Nothing uploaded." (website: "Done in your browser. Nothing uploaded.").
- No exclamation marks in errors. Pip may use them in celebrations.

## 8. Design system

Use the tokens in `assets/palette` (`colors.json`, `colors.xml`, `tokens.css`) exactly.

- **Two themes.** Dark: deep Turkish-blue background (`#071A21`), cards `#0E2A34`, accent `#2BB3D1`, gold rewards `#FFC94A`. Light: creamy white background (`#F8F1E0`), cards `#FFFCF4`, accent `#0E7C99`, gold `#E0A21B`. Follow the system theme by default, with a manual switch (System, Dark, Light). The theme switch recolours Pip too: **Turkish blue Pip in dark, creamy white Pip (with a thin warm outline) in light**.
- **Type**: display 800 weight for headings, body 400 to 700, mono for numbers and file facts.
- **Shape**: 14 to 18 px radius on cards, 15 px on buttons, pill chips.
- **Elevation**: soft shadows, glow in the accent colour for the primary action.
- **Motion principles**: every motion has a reason (feedback, continuity, delight); quick (150 to 400 ms) for UI, longer (600 to 900 ms) for transitions and rewards; ease-out for entering, ease-in for leaving, springs for playful things.
- **Accessibility**: contrast at least 4.5:1 for text, visible focus rings, labels for all icon buttons, the (i) bubble reachable by keyboard and screen reader, text scales with the system font size, nothing relies on colour alone, no flashing faster than 3 times per second, a reduce-motion path for every effect (section 11.6).

