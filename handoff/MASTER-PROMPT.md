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


## 9. Pip Prime, the mascot (this is the brand)

Pip Prime is a small pocket-knife-shaped character: a rounded body, a steel belt, two arms with mitts, two feet, two shoulder rivets that act as his ears, a keyring that swings like a tail, a face with big eyes and an expressive mouth, and a **steel blade quiff** on top that flips between tools. **Dark theme: Turkish blue body. Light theme: creamy white body with a thin warm outline.** The original red build exists in `assets/character/rig` for reference only and is not used in the app.

### 9.1 How Pip is rendered
- Pip is an **SVG rig** (400 x 400 viewBox) driven every frame by a state object. The source is in `assets/character/rig` (`cast.js`, `pip-dark.js`, `pip-light.js`, and `README.md`). **Port it to TypeScript as `packages/pip`**, keep the drawing code, and keep the same state object (`t, mood, mt, prev, blend, look, poke, pokes, hover, small`). Because the app UI is web-based, the same rig runs on the website and in the Android WebView. Do not rebuild Pip in Compose or as a Lottie file.
- Static art for splash screens, notifications, store listings and fallbacks is in `assets/character/svg` and `png`. Separate body parts with pivots are in `assets/character/layers` (use them for skins, hit regions and new actions).
- One big Pip at a time on screen (hero, nav or rail) plus small Pips in effects. Use `requestAnimationFrame`, pause when the tab or app is hidden, and cap work at 60 fps. Reuse DOM nodes; do not rebuild the SVG per frame. Target under 3 ms of script per frame for Pip on the mid phone.
- **Rig facts (checked against the layers):** Pip has no separate legs and no ears. The "feet" zone is the two foot ovals under the body; the "ears" zone is the two shoulder rivets on the arms; the tail is the keyring. Actions in the catalogue that need legs (running, moonwalk, push-ups, stomping) must be done with body bounce, squash and stretch and foot movement. If the owner later wants real legs, the artist adds them as new layers; do not block on it.
- Pip never blocks the UI. His container has `pointer-events: none`; only his hit regions (below) receive events.

### 9.2 The Pip brain: a small state machine
States, from highest priority to lowest. A higher state interrupts a lower one with a 150 to 250 ms blend.

1. **Carpet** (flying on the carpet)
2. **Held** (picked up by the blade)
3. **Reaction** (a reaction to a touch on a body part, or to a gesture)
4. **Reward** (celebration, level-up, badge, streak)
5. **Action** (a service action while a job runs)
6. **Mood** (one of the 10 base moods: idle, happy, wink, surprised, thinking, working, celebrate, sleepy, levelup, signature)
7. **Idle life** (blink, breathe, sway, eyes drift, small idle actions)

Rules:
- Every reaction, action and reward is an **animation clip** with an id from the catalogue, a duration, a sound id, and an `interruptible` flag. Build clips as small TypeScript modules that set properties of rig parts over time (pure functions of `t`, so they can be frozen for tests).
- **Random with memory:** when a trigger has several variants, pick one at random but never repeat either of the last two used for that trigger. Store counts of seen clips (this feeds sticker unlocks and the "Best Friend" badge).
- Never queue more than two clips. Drop the oldest.
- **Eyes always follow** the pointer (mouse) or the last touch point, unless a clip says otherwise. Eye travel is limited so he never looks broken.
- **Quiet Pip setting:** `Playful` (everything), `Calm` (no dwell escalation, no idle actions, short celebrations), `Off` (Pip shows as a static, blinking icon, no interactions, no sound from Pip).

### 9.3 Touch and pointer zones
Hit regions are shapes in the 400 x 400 rig space (ellipses and polygons). Take the pivots and bounds from `assets/character/layers/<theme>/index.json`. Approximate starting values: tummy ellipse centre (200, 285), radius (58, 42); eyes at (171, 201) and (229, 201); blade pivot near (212, 140); feet near y 318 to 336. Verify against the layers and adjust. Expand small hit regions to at least 44 dp on the screen.

| Zone | Tap or click | Dwell (stays near or on it without clicking) |
|---|---|---|
| Tummy | Opens the tools menu (radial, 6 tools). Pip giggles. Three different giggles are picked at random. | Pip looks down, pats his tummy and says hmm (1.5 s), then the radial menu peeks open halfway as a hint (3 s). |
| Blade quiff | The blade flips to another tool (scissors, magnifier, crop corner, clapper). Plays a click. | Pip crosses his eyes to look at his blade (1 s). Press and hold while he is standing still (0.6 s) = PICK UP (see below). |
| Eyes | He blinks hard and says ouch, or winks. Three variants. | Eyes follow the pointer closely, pupils get big (1 s), then he leans in until he is almost cross-eyed (3 s), then he blinks and pushes the pointer away (5 s). |
| Mouth | He sticks out his tongue, blows a raspberry, or tries to bite the pointer. Three variants. | He opens his mouth and waits (1.5 s), tries to nibble the pointer (3 s), then makes a funny face and pretends to be full (6 s). |
| Shoulder rivets (his "ears") | The knob rings like a bell and his head wobbles. Left and right give different notes. | The knob twitches (1 s), he tilts his head toward it (2.5 s), then he wiggles it to say stop (5 s). |
| Hands (left and right) | Left: high-five. Right: handshake. Both with a small spark. | He holds out the hand and waits (1.5 s), taps his foot (3 s), then shrugs and puts it down (5 s). |
| Feet | He hops, kicks, or stomps. Three variants, small dust puff. | He wiggles his toes (1 s), giggles because it tickles (2 s). After 2.5 s steady, the pointer turns into a MINI MAGIC CARPET (see below). |
| Belt | The belt buckle clicks and he shows his tool count. | He sucks in his tummy and says tight. |
| Keyring tail | The keyring spins like a propeller and Pip turns with it. | He chases his own tail slowly (2 s) and gets dizzy (5 s). |
| Space around Pip | Pip looks at the tap and waves. Double tap makes him jump toward it. | He follows the pointer with his eyes, then loses interest and starts an idle action (8 s). |

**Dwell** means: the pointer rests inside the zone (or within 24 px of it) and moves slower than 20 px per second. A mouse can hover; on a phone the user touches and holds without moving (no hover exists on touch). Reset the dwell timer if the pointer leaves the zone by more than 40 px for 300 ms. The "does not click" behaviour on the website is a pure hover. Every dwell stage plays a different clip and sound.

Every zone must also work for keyboard and screen-reader users in a simple way: Pip as a whole is one focusable button "Pip, open the tools menu" that opens the tools menu. The playful zones are extras, never the only way to reach a function.

### 9.4 Special gestures

- **Pick up by the blade.** *How:* Press and hold the blade quiff for 0.6 s while Pip is standing still (not mid-action). *What happens:* Pip is lifted by the blade, his feet dangle and swing like a pendulum, eyes go wide, he squeals. He follows the pointer with physics (spring and pendulum). Fast moves make him fly sideways with the legs trailing. Release = he falls with gravity, squashes on landing, bounces twice, stars circle his head. A fast flick = he flies away, bounces off the screen edges and comes to rest. Dropping on a tool tile or the Save button counts as a tap on it.
- **Magic carpet.** *How:* Keep the pointer (or a held finger) on a foot, still, for 2.5 s. *What happens:* The cursor turns into a small flying carpet with tassels. The carpet slides under Pip, lifts him, and he sits cross-legged on it. The carpet follows the pointer with a delay, banks into turns, and the keyring tail trails behind. Desktop: the real cursor is replaced by the carpet. Touch: the carpet appears under the held finger. Sudden jerk (pointer speed above 2500 px per second change in under 80 ms) or any click or tap: the carpet bursts into threads and sparkles, Pip falls, squashes, shakes it off and says oops. Lifting a held finger gently lands the carpet softly and it folds away.
- **Shake the phone.** *How:* Device shake (accelerometer) on Android; fast pointer shake on the web. *What happens:* Pip gets dizzy and loose bolts fall out. 3 shakes in 5 s and he says stop.
- **Tickle swipe.** *How:* Swipe quickly across his tummy three times. *What happens:* He laughs uncontrollably and falls over.
- **Rapid taps.** *How:* Three or more taps within 2 s anywhere on Pip. *What happens:* He gets dizzy, spiral eyes, stars. Five taps and he pretends to be annoyed and turns his back.
- **Long idle.** *How:* No touch for 45 s. *What happens:* He yawns and falls asleep (Z letters). Any touch wakes him with a small start.
- **Press and hold the background.** *How:* Hold anywhere that is not Pip for 1 s. *What happens:* Pip walks over and sits next to the finger.

#### Pick-up physics (default numbers, tune by feel)
- Start: pointer down on the blade region, moved less than 8 px, held 600 ms, Pip not in an `Action` or `Reward` state, and no job running. Play `vx-pickup`, haptic tick. The rig lifts by the blade: body hangs below the pointer.
- Model Pip as a **pendulum hanging from the pointer**: angle `θ''= -(g/L)·sin θ - c·θ' + (a_x/L)·cos θ`, with `L = 0.55 · Pip height`, `g = 2400 px/s²`, damping `c = 1.8`. Feet kick in proportion to `|θ'|`. Body stretches `scaleY = 1 + min(0.12, speed/6000)`. The eyes widen when speed is high.
- Release: gravity `2200 px/s²`, floor at the top of the bottom bar (the safe area), restitution `0.38`, squash on impact `scaleY = 1 - min(0.35, v/3500)` with a spring-back, two bounces, then 1.5 s of dizzy stars (`er-dizzy`), then back to idle with a small shake.
- Fling: release speed above 900 px/s sends Pip flying with air drag `0.4 /s` and spin; he bounces off the screen edges (restitution 0.6, up to 4 bounces) and comes to rest. Play `vx-whee` while he flies and `vx-drop` on the first landing.
- If he is dropped over a tool tile or the Save button, treat it as a tap on that control (a playful shortcut) after he lands.
- Disabled when "Pip interactions" is off, when a modal is open, or when a job is running.

#### Carpet physics
- Start: dwell on a foot for 2.5 s. The cursor (desktop) or a carpet sprite under the finger (touch) becomes a **mini magic carpet** (about 0.9 x Pip's width, tassels, a soft shadow). It slides under Pip in 0.9 s, lifts him 12 px, and he sits cross-legged on it. Play `vx-carpet-on`, then the looping `vx-carpet-fly` while moving.
- Follow: a critically damped spring toward the pointer with `ω = 6 rad/s` (about 0.3 s lag). Bank angle = `clamp(vx / 900, -1, 1) · 18°`. Bob `sin(t·3)·4 px`. The keyring tail streams behind. Pip's eyes look in the flight direction.
- Burst: the carpet bursts when **any** of these happens: a click, tap or second finger; pointer acceleration jump above 2500 px/s within 80 ms (a sudden jerk); the pointer leaves the window. On burst: pop of threads and sparkles (`vx-carpet-burst`), Pip falls with the pick-up landing physics, says "oops" (`vx-oops`), dizzy stars, then back to idle.
- Gentle end: if the user lifts a held finger slowly (speed under 200 px/s), the carpet lands softly and folds away. No burst, no fall.
- On desktop hide the real cursor (`cursor: none`) only while the carpet is active, and restore it on any exit path (including errors, blur and Escape).
- Badges: "Up, Up and Away", "Magic Carpet Ride" (10 s of flight), "Oops!" (a burst).

### 9.5 Idle life and surprises
- Always on: blink every 2 to 5 s (random, with the occasional double blink), breathing, tiny sway, eyes that drift, the keyring that swings with lag.
- After 8 s without touch on a calm screen, play an idle action from `idle` (section 10) every 10 to 25 s (random).
- After 45 s of no touch, Pip yawns and falls asleep (`ac-idl-nap`, floating Z). Any touch wakes him.
- Easter eggs (section 10.6) fire with a small random chance (about 1 in 40 idle slots) and are counted.
- Season and time hooks: a scarf and shiver in cold months, a sleepy mood late at night, a "good morning" stretch in the morning, a birthday hat on the app's install anniversary. All local, based only on the device date.

### 9.6 Skins and rewards on Pip
Skins are cosmetic overlays that attach to named pivots (head, blade, face, neck, back, tail). See `gamification.json` for the list and unlock rules. A skin is a small SVG group; it must survive every clip (follow the pivot) and must be shown in both themes (give each skin a light and a dark colour set). The user picks one skin per slot in the Awards screen.

## 10. Pip's action library (every service gets 10 playful actions)

Each time a job runs, Pip does **something related to the job**, picked at random from that service's 10 actions, so the same job feels different each time. Each action has its own sound.

**Choosing and running an action**
1. Map the running tool to a service (table below). Unknown tool: use `idle`.
2. Pick an action at random, excluding the last three used for that service (persisted).
3. If the job will last longer than the action, **chain** two to four different actions (no repeats in the chain), with a 200 ms blend between them. Never loop one action twice in a row.
4. Jobs shorter than 1.2 s skip the action and just get a quick happy hop.
5. When the job ends, cut the action within 250 ms, blend to the reward clip (celebration) and hold the result screen.
6. Pip must never cover the size counter, the cancel button or the progress bar. Place him beside them.
7. The progress bar and Pip are independent: the bar shows real progress, Pip entertains.

| Tool | Service |
|---|---|
| Compress, target size, P-group | Compress |
| Resize, crop, presets, G-group | Resize and crop |
| Convert, C-group | Convert formats |
| Metadata, location, privacy, M-group | Privacy |
| GIF, video, animation, V-group | Video, GIF |
| QR, colour, icon, SVG, barcode, U-group | Utilities |
| Batch, gallery cleaner, duplicates | Batch |
| Exam kits, passport photos | Exam |
| Waiting on anything else, idle on a tool page | Waiting |

### 10.A Compress and target size (10 actions)

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `ac-cmp-press` | Photo press | Pip hugs the photo and squeezes it like an accordion until it is small. | 2200 ms | `squish:press` |
| 2 | `ac-cmp-belt` | Belt tightening | Pip tightens his belt a notch at a time while the photo gets slimmer. | 2400 ms | `mech:ratchet` |
| 3 | `ac-cmp-vacuum` | Vacuum seal | Pip sucks the air out of a bag holding the photo until it hugs the photo. | 2400 ms | `whoosh:suck` |
| 4 | `ac-cmp-dough` | Kneading | Pip kneads the photo like dough and it folds smaller each time. | 2200 ms | `squish:knead` |
| 5 | `ac-cmp-roller` | Tiny steamroller | Pip drives a toy steamroller over the photo and the file size drops. | 2600 ms | `rumble:engine` |
| 6 | `ac-cmp-stomp` | Grape stomp | Pip jumps up and down on a pile of pixels and juice squirts out. | 2200 ms | `squish:stomp` |
| 7 | `ac-cmp-balloon` | Balloon deflate | Pip holds a balloon labelled MB. It deflates with a raspberry noise to KB. | 2200 ms | `air:deflate` |
| 8 | `ac-cmp-weights` | Weight lifting | Pip lifts a heavy weight labelled MB. It gets lighter every rep and ends as a feather. | 2600 ms | `voice:effort` |
| 9 | `ac-cmp-fold` | Origami fold | Pip folds the photo into a smaller and smaller square. | 2200 ms | `paper:fold` |
| 10 | `ac-cmp-squeeze` | Orange squeeze | Pip squeezes a pixel orange and the extra bytes drip out. | 2200 ms | `water:drip` |

### 10.B Resize and crop (10 actions)

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `ac-crp-snip` | Snip frame | Pip snips a frame out of the air with his blade and the photo slides inside. | 2000 ms | `mech:snap` |
| 2 | `ac-crp-tape` | Measuring tape | Pip pulls a tape across the photo and nods at the exact numbers. | 2200 ms | `mech:tape` |
| 3 | `ac-crp-hammer` | Hammer the frame | Pip hammers four nails into a wooden frame around the photo. | 2400 ms | `thud:nail` |
| 4 | `ac-crp-chalk` | Chalk line | Pip snaps a chalk line along the crop edge and blows the dust. | 2000 ms | `whoosh:snap` |
| 5 | `ac-crp-laser` | Laser cut | Pip cuts the crop outline with a tiny laser, sparks fly. | 2400 ms | `laser:cut` |
| 6 | `ac-crp-cookie` | Cookie cutter | Pip presses a cookie cutter on the photo and lifts out the crop. | 2000 ms | `squish:stomp` |
| 7 | `ac-crp-chisel` | Sculptor chisel | Pip chips away the extra photo with a chisel until the frame shape is left. | 2400 ms | `thud:nail` |
| 8 | `ac-crp-wall` | Hang on wall | Pip hangs the cropped photo on a wall and straightens it with a squint. | 2400 ms | `thud:soft` |
| 9 | `ac-crp-saw` | Carpenter saw | Pip saws along the line, a tiny sawdust cloud puffs. | 2200 ms | `mech:saw` |
| 10 | `ac-crp-pinch` | Stretch and pinch | Pip stretches the photo with both hands and pinches to the right size. | 2000 ms | `squish:press` |

### 10.C Convert formats (10 actions)

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `ac-cnv-juggle` | Format juggling | Pip juggles JPG, PNG and WebP blocks and catches only the one you chose. | 2400 ms | `magic:juggle` |
| 2 | `ac-cnv-hat` | Magic hat | Pip taps a hat with a wand and the photo comes out in the new format. | 2400 ms | `magic:reveal` |
| 3 | `ac-cnv-blender` | Blender | Pip drops the photo in a blender and pours out a new format. | 2400 ms | `rumble:engine` |
| 4 | `ac-cnv-curtain` | Costume change | The photo steps behind a curtain, Pip counts to three, it steps out in a new outfit. | 2400 ms | `magic:reveal` |
| 5 | `ac-cnv-tennis` | Format rally | Pip hits the photo like a tennis ball between two format boxes. | 2200 ms | `click:racket` |
| 6 | `ac-cnv-chameleon` | Chameleon | Pip changes colour from the old format colour to the new format colour. | 2200 ms | `magic:morph` |
| 7 | `ac-cnv-conveyor` | Conveyor belt | Pip stands at a conveyor belt and stamps each file on its way. | 2400 ms | `mech:belt` |
| 8 | `ac-cnv-translate` | Translator | Pip wears a headset and translates between two format flags. | 2200 ms | `voice:babble` |
| 9 | `ac-cnv-wheel` | Pottery wheel | The photo spins on a pottery wheel and Pip shapes it into the new format. | 2400 ms | `water:blob` |
| 10 | `ac-cnv-shift` | Shape-shifter | Pip flips through his own tools and the photo copies each shape. | 2200 ms | `mech:snap` |

### 10.D Privacy, location and metadata (10 actions)

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `ac-prv-detective` | Detective | Pip puts on a hat and checks the photo with a magnifier. | 2200 ms | `voice:hmm` |
| 2 | `ac-prv-radar` | Radar | A radar sweeps around Pip until a pin blips on the photo. | 2200 ms | `beep:radar` |
| 3 | `ac-prv-map` | Treasure map | Pip unfolds a map and puts his finger on the place the photo was taken. | 2200 ms | `paper:flip` |
| 4 | `ac-prv-eraser` | Eraser | Pip rubs a big eraser over the location tag until it is gone. | 2200 ms | `squish:knead` |
| 5 | `ac-prv-scissors` | Cut the thread | The location is a thread tied to the photo. Pip snips it. | 2000 ms | `mech:snap` |
| 6 | `ac-prv-sponge` | Sponge wash | Pip scrubs the photo with a sponge and little data bubbles float away. | 2400 ms | `water:bubbles` |
| 7 | `ac-prv-vacuum` | Dust vacuum | Pip vacuums dust clouds labelled EXIF and GPS. | 2400 ms | `rumble:engine` |
| 8 | `ac-prv-shades` | Spy shades | Pip puts on shades, looks left and right, and slips the photo into a folder. | 2000 ms | `beep:retro` |
| 9 | `ac-prv-ninja` | Ninja hide | Pip hides behind the photo and peeks, then gives a thumbs up. | 2200 ms | `whoosh:left` |
| 10 | `ac-prv-lock` | Padlock polish | Pip polishes a padlock until it shines, then clicks it shut. | 2200 ms | `mech:lock` |

### 10.E Video, GIF and animation (10 actions)

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `ac-vid-clapper` | Clapper board | Pip snaps a clapper board shut and shouts action. | 2000 ms | `click:clap` |
| 2 | `ac-vid-projector` | Projector crank | Pip cranks an old projector and frames flicker on the wall. | 2600 ms | `mech:reel` |
| 3 | `ac-vid-flipbook` | Flip book | Pip flips a flip-book with his thumb, the frames run past. | 2400 ms | `paper:flip` |
| 4 | `ac-vid-popcorn` | Popcorn | Pip eats popcorn while the video is processed and catches a kernel in his mouth. | 2400 ms | `pop:cascade` |
| 5 | `ac-vid-dj` | DJ scratch | Pip scratches the timeline like a record. | 2400 ms | `glitch:scratch` |
| 6 | `ac-vid-scissors` | Timeline trim | Pip snips the timeline at both ends and the middle part glows. | 2200 ms | `mech:snap` |
| 7 | `ac-vid-juggle` | Frame juggling | Pip juggles tiny frames, one after another, and drops none. | 2400 ms | `magic:juggle` |
| 8 | `ac-vid-surf` | Wave surfing | Pip surfs a wave made of the video frames. | 2600 ms | `water:ripple` |
| 9 | `ac-vid-fast` | Fast forward | Pip runs in fast forward with speed lines and a blur. | 2200 ms | `whoosh:right` |
| 10 | `ac-vid-boomerang` | Boomerang | Pip throws a boomerang that carries the clip and catches it as it comes back. | 2400 ms | `whoosh:spiral` |

### 10.F QR, colour, icons and SVG (10 actions)

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `ac-utl-laser` | QR laser | Pip scans a QR code with a red laser from his eyes and it beeps. | 2200 ms | `beep:radar` |
| 2 | `ac-utl-palette` | Paint palette | Pip holds a palette and dabs the colours he found in the photo. | 2200 ms | `water:drip` |
| 3 | `ac-utl-pixels` | Pixel builder | Pip places pixel blocks one by one to build a QR code or icon. | 2400 ms | `pop:cascade` |
| 4 | `ac-utl-stamp` | Icon stamp | Pip stamps the same icon in many sizes. | 2200 ms | `stamp:hit` |
| 5 | `ac-utl-rainbow` | Rainbow painter | Pip paints a rainbow gradient with a wide brush. | 2400 ms | `magic:glide` |
| 6 | `ac-utl-dropper` | Eyedropper | Pip uses a big eyedropper on the photo and drips the colour into a cup. | 2000 ms | `water:drip` |
| 7 | `ac-utl-pen` | Calligraphy pen | Pip draws an SVG path with a calligraphy pen and the line smooths itself. | 2400 ms | `paper:pen` |
| 8 | `ac-utl-checker` | Barcode checker | Pip runs a barcode under a scanner and it beeps happily. | 2000 ms | `beep:retro` |
| 9 | `ac-utl-magic` | Colour magician | Pip pulls colour ribbons out of his sleeve, like a magician. | 2200 ms | `magic:reveal` |
| 10 | `ac-utl-mosaic` | Mosaic maker | Pip sticks tiles on a wall and steps back to see the picture. | 2400 ms | `click:tickrun` |

### 10.G Batch, gallery cleaner and duplicates (10 actions)

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `ac-bat-broom` | Broom sweep | Pip sweeps a pile of photos into a neat pile. | 2200 ms | `paper:shuffle` |
| 2 | `ac-bat-memory` | Matching cards | Pip plays a memory game and flips two matching cards for duplicates. | 2200 ms | `click:racket` |
| 3 | `ac-bat-sort` | Recycling sort | Pip drops photos into three coloured bins. | 2400 ms | `thud:soft` |
| 4 | `ac-bat-librarian` | Librarian stamps | Pip stamps each photo and files it in a drawer. | 2400 ms | `stamp:hit` |
| 5 | `ac-bat-crane` | Container ship | Pip drives a little crane that loads photos on a ship. | 2600 ms | `mech:belt` |
| 6 | `ac-bat-assembly` | Assembly line | Photos roll past Pip, he checks each one and nods. | 2400 ms | `mech:belt` |
| 7 | `ac-bat-juggle` | Many hands | Pip grows four arms for a second and handles many photos at once. | 2200 ms | `magic:morph` |
| 8 | `ac-bat-counter` | Counting | Pip counts photos on his fingers and runs out of fingers. | 2200 ms | `voice:babble` |
| 9 | `ac-bat-conductor` | Conductor | Pip conducts a row of photos like an orchestra. | 2400 ms | `arp:up` |
| 10 | `ac-bat-spring` | Spring cleaning | Pip opens a window, dusts the shelf and the room sparkles. | 2400 ms | `sparkle:sweep` |

### 10.H Exam kits and ID photos (10 actions)

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `ac-exm-cap` | Graduation cap | Pip puts on a graduation cap and straightens the tassel. | 2000 ms | `voice:hmm` |
| 2 | `ac-exm-checklist` | Checklist | Pip ticks each requirement on a clipboard, one by one. | 2400 ms | `click:tickrun` |
| 3 | `ac-exm-rule` | Rule check | Pip measures the photo with a ruler against the exam rule and nods. | 2200 ms | `mech:tape` |
| 4 | `ac-exm-sign` | Signature | Pip signs a tiny signature strip with a flourish. | 2200 ms | `paper:pen` |
| 5 | `ac-exm-stamp` | Official stamp | Pip stamps the photo with a round approved stamp. | 2000 ms | `stamp:hit` |
| 6 | `ac-exm-clock` | Deadline clock | Pip looks at a wall clock, relaxes, and says there is time. | 2000 ms | `beep:retro` |
| 7 | `ac-exm-bag` | Pack the bag | Pip packs photo, signature and thumb print into a school bag and zips it. | 2200 ms | `zip:up` |
| 8 | `ac-exm-study` | Study desk | Pip sits at a desk with a lamp and flips a book. | 2200 ms | `paper:flip` |
| 9 | `ac-exm-pencil` | Pencil tap | Pip taps a pencil on his head while he calculates the size. | 2000 ms | `click:racket` |
| 10 | `ac-exm-medal` | Pass medal | Pip hangs a small medal on the finished kit. | 2000 ms | `chime:ok` |

### 10.I Waiting, idle and any tool (10 actions)

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `ac-idl-comic` | Reading | Pip reads a comic and giggles at the right moment. | 3200 ms | `voice:giggle` |
| 2 | `ac-idl-yoyo` | Yo-yo | Pip plays with a yo-yo made from his keyring. | 3000 ms | `whoosh:left` |
| 3 | `ac-idl-juggle` | Bolt juggling | Pip juggles three bolts and drops one, then shrugs. | 3000 ms | `magic:juggle` |
| 4 | `ac-idl-stretch` | Stretch | Pip stretches his arms and legs and a joint clicks. | 3000 ms | `click:ratchet` |
| 5 | `ac-idl-yawn` | Yawn | Pip yawns and his blade droops, then he shakes himself awake. | 3200 ms | `voice:yawn` |
| 6 | `ac-idl-polish` | Blade polish | Pip polishes his blade quiff with a cloth and checks his reflection. | 3000 ms | `sparkle:sweep` |
| 7 | `ac-idl-pushups` | Push-ups | Pip does push-ups and counts to five. | 3200 ms | `voice:effort` |
| 8 | `ac-idl-watch` | Watch check | Pip checks a wrist watch he does not have. | 2400 ms | `voice:hmm` |
| 9 | `ac-idl-dance` | Little dance | Pip dances in place with the keyring swinging. | 3200 ms | `arp:up` |
| 10 | `ac-idl-nap` | Cat nap | Pip sits down, closes his eyes and snores softly, a Z floats up. | 4000 ms | `voice:snore` |

### 10.1 Celebrations (job finished)
Pick at random; the bigger the win, the bigger the clip. Use the saved-bytes ratio, first job of the day, new badge, and streak to choose a **tier**: small (any job), medium (saved more than 50 percent, or a new badge), large (first job of a streak day, 3 quests done, or a gold badge). Large celebrations pick from the whole list, small ones only from the first four rows.

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `ce-backflip` | Backflip | Pip does a backflip and lands with a pose. | 1400 ms | `voice:yay` |
| 2 | `ce-cannon-hold` | Cannon hold | Pip holds a confetti cannon and fires it. | 1500 ms | `pop:cannon` |
| 3 | `ce-victory-dance` | Victory dance | Pip does a happy dance with arms up. | 2200 ms | `arp:up` |
| 4 | `ce-tool-fan` | Tool fan | All his tools fan out behind him like a peacock. | 1800 ms | `mech:snap` |
| 5 | `ce-high-five` | Self high-five | Pip high-fives himself and gets a spark. | 1200 ms | `click:clap` |
| 6 | `ce-moonwalk` | Moonwalk | Pip moonwalks across the screen. | 2000 ms | `voice:whee` |
| 7 | `ce-tornado` | Spin tornado | Pip spins like a tornado and stops dizzy but smiling. | 1600 ms | `whoosh:spiral` |
| 8 | `ce-rocket-jump` | Rocket jump | Pip jumps so high he leaves the screen and falls back. | 1800 ms | `riser:rocket` |
| 9 | `ce-trophy-lift` | Trophy lift | A trophy appears and Pip lifts it over his head. | 1800 ms | `chime:ok` |
| 10 | `ce-air-guitar` | Air guitar | Pip plays an air guitar solo with his blade. | 2000 ms | `arp:up` |
| 11 | `ce-pompoms` | Cheerleader | Pip shakes two pom-poms made from tiny blades. | 2000 ms | `sparkle:sweep` |
| 12 | `ce-juggle-tools` | Tool juggle | Pip juggles scissors, magnifier and a crop corner. | 2000 ms | `magic:juggle` |
| 13 | `ce-mic-drop` | Mic drop | Pip drops his blade like a mic and walks away. | 1600 ms | `thud:soft` |
| 14 | `ce-disco` | Disco | A disco ball drops and Pip strikes a pose. | 2200 ms | `arp:up` |

### 10.2 Level-ups (10 types)
Played full screen with the rays background, the level medal and the new rank title. Pick at random, never the same twice in a row. Always show: the new level number, the rank (if it changed), and the XP bar resetting. 2.4 to 3.2 seconds, skippable by tap after 1 second.

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `lv-ascend` | Ascend | Pip rises on a column of light holding the new level medal. | 3000 ms | `fanfare:big` |
| 2 | `lv-power-up` | Power up | Pip grows giant for a second, flexes, then shrinks back with the medal. | 2800 ms | `riser:power` |
| 3 | `lv-evolution` | Evolution flash | A white silhouette flashes and Pip returns with a new accessory. | 3000 ms | `magic:morph` |
| 4 | `lv-ladder` | Ladder climb | Pip climbs a ladder of level numbers and rings a bell at the top. | 3200 ms | `arp:up` |
| 5 | `lv-rocket` | Rocket boost | Pip straps a rocket on his back and blasts to the next level. | 3000 ms | `riser:rocket` |
| 6 | `lv-gold-blade` | Golden blade | His blade turns solid gold one section at a time. | 3000 ms | `sparkle:sweep` |
| 7 | `lv-crown` | Crown drop | A tiny crown drops on his blade and he balances it. | 2600 ms | `fanfare:small` |
| 8 | `lv-leap` | Stair leap | Pip leaps from one glowing step to the next and lands on the new level. | 2800 ms | `voice:whee` |
| 9 | `lv-transform` | Tool transform | All tools unfold and spin around Pip, then fold back. | 3200 ms | `mech:snap` |
| 10 | `lv-medal-bite` | Medal bite | Pip bites the medal to test it, then smiles and holds it up. | 2400 ms | `voice:yay` |

### 10.3 Badge unlock reactions

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `bd-drop` | Badge drop | The badge drops from above and Pip catches it. | 1800 ms | `chime:ok` |
| 2 | `bd-shine` | Shine reveal | The badge appears under a spotlight with a shine sweep. | 1800 ms | `sparkle:sweep` |
| 3 | `bd-stamp` | Pin on chest | Pip pins the badge on his belt. | 1800 ms | `stamp:hit` |
| 4 | `bd-spin` | Coin spin | The badge spins like a coin and settles. | 1800 ms | `coin:spin` |
| 5 | `bd-rare` | Rare badge | Gold flash, camera shake, big cheer. Used for gold-tier badges. | 2600 ms | `fanfare:small` |

### 10.4 Streak reactions

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `st-flame` | Flame grows | The streak flame grows a size and Pip warms his hands. | 1500 ms | `air:flame` |
| 2 | `st-calendar` | Calendar tick | A calendar page flips and the new day gets a stamp. | 1500 ms | `paper:flip` |
| 3 | `st-save` | Streak saved | A shield saves a streak that was about to break. | 1500 ms | `chime:ok` |
| 4 | `st-lost` | Streak lost | The flame flickers out and Pip gives it a small hug. | 1800 ms | `voice:sad` |

### 10.5 Errors and empty states

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `er-sad` | Sad droop | Pip droops, the blade bends, a small cloud rains on him. | 2200 ms | `voice:sad` |
| 2 | `er-confused` | Confused | Pip scratches his head and question marks float up. | 2000 ms | `voice:hmm` |
| 3 | `er-facepalm` | Facepalm | Pip covers his face with one hand and peeks through the fingers. | 1800 ms | `thud:soft` |
| 4 | `er-uhoh` | Uh-oh | Pip's eyes go wide and a sweat drop slides down. | 1600 ms | `voice:uhoh` |
| 5 | `er-shrug` | Shrug | Pip shrugs and holds out his empty hands. | 1600 ms | `voice:hmm` |
| 6 | `er-dizzy` | Dizzy | Stars circle his head. | 2000 ms | `voice:dizzy` |

### 10.6 Easter eggs (rare)

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `eg-sneeze` | Sneeze | A dust bunny makes Pip sneeze, his blade flicks. | 1400 ms | `voice:sneeze` |
| 2 | `eg-hiccup` | Hiccup | Pip hiccups and a tiny bolt pops out. | 1600 ms | `voice:hiccup` |
| 3 | `eg-sing` | Humming | Pip hums while notes float up. | 3000 ms | `arp:up` |
| 4 | `eg-peek` | Peek-a-boo | Pip hides behind the screen edge and peeks back in. | 2200 ms | `voice:whee` |
| 5 | `eg-snow` | Snow day | In winter, Pip shivers and wears a scarf. | 3000 ms | `voice:brr` |

## 11. The effects engine: transitions, save effects, progress bars

The owner wants **at least 25 effects, used randomly or appropriately, so even a daily user gets surprises**. This section defines **32 screen transitions, 30 save and completion effects, and 12 progress bars** (74 effects). Each has its own sound (section 12).

### 11.1 Architecture (`packages/fx`)
```ts
interface Effect {
  id: string;                     // from catalogue.json, for example 'tr-iris'
  kind: 'transition' | 'save' | 'bar';
  durationMs: number;
  tier: 'css' | 'svg' | 'canvas' | 'webgl';   // implementation technique, lowest tier that looks good
  minQuality: 0 | 1 | 2;          // 0 = always allowed, 2 = only on fast devices
  contexts: string[];             // where it may be used (see tables below)
  sound: { id: string; cueAt: number };       // cueAt = 0..1 of the effect when the sound starts
  render(ctx: EffectContext, p: number, seed: number): void;  // PURE function of progress p (0..1) and seed
  cleanup?(): void;
}
```
- **Every effect is a pure function of progress `p` and a seed.** No hidden state. This lets the app scrub, pause and **freeze-frame test** every effect, exactly like the mock-up did.
- Transitions work on two layers (the leaving screen and the entering screen). Implement them with the cheapest technique that looks right: **CSS** (`clip-path`, `mask-image`, `transform`, `opacity`, 3D transforms) for most; **SVG filters** (`feTurbulence` + `feDisplacementMap`) for ripple, liquid, ink, glitch, gooey; **Canvas 2D** (OffscreenCanvas where available) for confetti sweep, shatter, tiles; **WebGL** only if one effect truly needs it and a CSS fallback exists. Do not take screenshots of the DOM into textures.
- A registry loads the catalogue and the implementations. A missing implementation falls back to a plain cross-fade (log it in debug builds). Adding an effect = one file in `packages/fx/src/effects/` plus a catalogue row.
- The "View Transitions API" may be used where it helps (Chromium WebView 111 and newer) but never as the only path.

### 11.2 The 32 screen transitions

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `tr-iris` | Iris open | A circle grows from the exact tap point and reveals the next screen. | 600 ms | `whoosh:up` |
| 2 | `tr-wipe` | Blade wipe | The new screen slides in behind a shiny steel edge, like a blade passing over. | 550 ms | `whoosh:right` |
| 3 | `tr-curtain` | Curtain split | The old screen splits down the middle and slides out to both sides. | 650 ms | `whoosh:split` |
| 4 | `tr-blinds` | Venetian blinds | Eight vertical slats rotate to show the new screen. | 700 ms | `click:ratchet` |
| 5 | `tr-pixel-bloom` | Pixel bloom | Square pixels pop up in random order until the new screen is complete. | 750 ms | `pop:cascade` |
| 6 | `tr-diamond` | Diamond open | A diamond-shaped window opens from the centre. | 600 ms | `whoosh:up` |
| 7 | `tr-zoom-through` | Zoom through | The old screen zooms past the camera while the new one settles from slightly large. | 600 ms | `whoosh:rise` |
| 8 | `tr-card-flip` | 3D card flip | The screen flips like a card around a vertical axis. | 650 ms | `paper:flip` |
| 9 | `tr-push-parallax` | Parallax push | The new screen pushes the old one away, background layers move at different speeds. | 500 ms | `whoosh:left` |
| 10 | `tr-drop-bounce` | Drop and bounce | The new screen drops from above, squashes, and bounces once. | 700 ms | `thud:bounce` |
| 11 | `tr-blade-swing` | Blade swing | The new screen swings out from a hinge like a pocket-knife blade opening, with a click at the end. | 650 ms | `mech:snap` |
| 12 | `tr-shutter` | Camera shutter | Seven shutter blades close over the old screen and open on the new one. | 600 ms | `click:shutter` |
| 13 | `tr-film-roll` | Film-strip roll | The old screen rolls up like a film strip and the new one rolls in. | 750 ms | `mech:reel` |
| 14 | `tr-page-curl` | Page curl | The corner of the old screen curls back to reveal the new one. | 700 ms | `paper:curl` |
| 15 | `tr-ripple` | Water ripple | A ripple spreads from the tap and bends the old screen into the new one. | 800 ms | `water:ripple` |
| 16 | `tr-glitch` | Glitch slice | Horizontal slices slide sideways with a quick colour split, then settle. | 450 ms | `glitch:short` |
| 17 | `tr-liquid` | Liquid morph | The tapped button melts into a blob that spreads and becomes the new screen. | 800 ms | `water:blob` |
| 18 | `tr-ink` | Ink splash | Ink splashes from the tap and floods the screen, then the new screen shows through. | 800 ms | `water:splash` |
| 19 | `tr-confetti-sweep` | Confetti sweep | A wave of confetti sweeps across and leaves the new screen behind it. | 750 ms | `sparkle:sweep` |
| 20 | `tr-clock-wipe` | Clock wipe | A clock hand sweeps around and reveals the new screen behind it. | 700 ms | `click:tickrun` |
| 21 | `tr-spiral` | Spiral twist | The old screen twists into a spiral and the new one unwinds. | 800 ms | `whoosh:spiral` |
| 22 | `tr-gooey` | Gooey merge | Blobs of colour merge like liquid metal and become the new screen. | 800 ms | `water:blob` |
| 23 | `tr-shatter` | Shatter and assemble | The old screen cracks into tiles that fly away while the new tiles fly in. | 850 ms | `glitch:shatter` |
| 24 | `tr-mosaic` | Mosaic resolve | The new screen starts as big blocks and sharpens to full resolution. | 700 ms | `pop:cascade` |
| 25 | `tr-sunrise` | Sunrise sweep | A band of warm light sweeps up the screen and the new screen glows in. | 800 ms | `arp:up` |
| 26 | `tr-card-shuffle` | Card shuffle | The old screen becomes a card, shuffles into a deck, and the new card is dealt on top. | 800 ms | `paper:shuffle` |
| 27 | `tr-portal` | Tummy portal | A round portal opens from Pip's tummy and the new screen grows out of it. | 800 ms | `magic:portal` |
| 28 | `tr-pip-pull` | Pip pulls the screen | Pip runs across the screen pulling the new screen behind him like a curtain. | 900 ms | `voice:whee` |
| 29 | `tr-unzip` | Unzip | A zipper runs down the screen and the new screen is behind it. | 700 ms | `zip:down` |
| 30 | `tr-peel` | Sticker peel | The old screen peels off like a sticker from one corner. | 700 ms | `paper:peel` |
| 31 | `tr-tool-flip` | Tool flip | Pip's blade quiff flips to the tool's icon, the icon scales up to fill the screen and becomes the new page. | 800 ms | `mech:snap` |
| 32 | `tr-vortex` | Vortex | The old screen is sucked into a point and the new one blooms from the same point. | 850 ms | `whoosh:suck` |

**Where each kind of transition is allowed** (the picker only chooses from the allowed pool for the situation):

| Situation | Allowed pool |
|---|---|
| Open a tool from home or the radial menu | `tr-iris`, `tr-diamond`, `tr-zoom-through`, `tr-portal` (when opened from Pip's tummy), `tr-tool-flip`, `tr-blade-swing`, `tr-liquid`, `tr-vortex`, `tr-unzip`, `tr-gooey`, `tr-pixel-bloom`, `tr-spiral`, `tr-shutter`, `tr-sunrise` |
| Pick a purpose chip, start a job | `tr-iris` (from the chip), `tr-wipe`, `tr-curtain`, `tr-blinds`, `tr-clock-wipe`, `tr-film-roll`, `tr-ink`, `tr-ripple` |
| Show the result | `tr-mosaic`, `tr-sunrise`, `tr-glitch`, `tr-shutter`, `tr-card-flip`, `tr-confetti-sweep`, `tr-shatter`, `tr-peel` |
| Switch bottom tab or sidebar item | `tr-push-parallax`, `tr-card-flip`, `tr-card-shuffle`, `tr-page-curl`, `tr-wipe` |
| Go back | The mirror of the effect that was used to enter (store it on the history entry), or `tr-push-parallax` reversed, or `tr-iris` closing |
| Open Awards or Settings | `tr-pip-pull`, `tr-drop-bounce`, `tr-card-shuffle`, `tr-sunrise` |
| Reduce motion is on | Cross-fade only (150 ms) |

### 11.3 The 30 save and completion effects
They play when a result is saved, shared, or ready.

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `dl-tray-drop` | Drop into tray | The result card drops into a tray at the bottom and the tray bounces. | 900 ms | `thud:soft` |
| 2 | `dl-paper-plane` | Paper plane | The result folds into a paper plane and glides to the gallery icon. | 1100 ms | `paper:fold` |
| 3 | `dl-confetti-cannon` | Confetti cannon | Two cannons from the bottom corners fire confetti over the result. | 1500 ms | `pop:cannon` |
| 4 | `dl-coin-shower` | Coin shower | XP coins rain down and fly into the XP bar. | 1400 ms | `coin:shower` |
| 5 | `dl-curve-to-gallery` | Curve to gallery | The thumbnail shrinks and travels along a curve into the gallery icon, which wiggles. | 900 ms | `whoosh:suck` |
| 6 | `dl-stamp` | SAVED stamp | A big SAVED stamp slams on the result with a small shockwave. | 800 ms | `stamp:hit` |
| 7 | `dl-zip-pack` | Zip pack | Several files squeeze together and a zipper closes them into one bundle. | 1000 ms | `zip:up` |
| 8 | `dl-mailbox` | Mailbox | The thumbnail flies into a mailbox, the flag lifts. | 1000 ms | `thud:soft` |
| 9 | `dl-safe-lock` | Safe lock | A shield with a padlock closes over the file. Used for privacy jobs. | 1000 ms | `mech:lock` |
| 10 | `dl-gift-box` | Gift box | The result is wrapped in a ribbon and the box opens to show it. | 1200 ms | `magic:reveal` |
| 11 | `dl-rocket` | Rocket launch | The result sits in a small rocket that blasts off to the share target. | 1200 ms | `riser:rocket` |
| 12 | `dl-balloon-pop` | Balloon pop | A balloon carries the result up, then pops into confetti. | 1200 ms | `pop:balloon` |
| 13 | `dl-sparkle-sweep` | Sparkle sweep | A diagonal shine sweeps across the thumbnail and sparkles pop. | 900 ms | `sparkle:sweep` |
| 14 | `dl-ring-pop` | Ring close and pop | The progress ring closes, flashes, and a check mark bursts out of it. | 800 ms | `chime:ok` |
| 15 | `dl-check-draw` | Ink check | A thick check mark draws itself with an ink stroke. | 700 ms | `chime:ok` |
| 16 | `dl-polaroid` | Polaroid print | The result prints out like an instant photo and slowly develops. | 1400 ms | `mech:print` |
| 17 | `dl-vault` | Vault door | A round vault door closes with spinning bolts. Used for location removal. | 1300 ms | `mech:vault` |
| 18 | `dl-pip-catch` | Pip catches it | Pip jumps and catches the result in both hands and holds it up. | 1000 ms | `voice:yay` |
| 19 | `dl-slot-roll` | Number reel | The final size digits roll like a slot machine and lock into place. | 1100 ms | `click:reel` |
| 20 | `dl-fireworks` | Fireworks | Three fireworks burst behind the result. | 1800 ms | `pop:firework` |
| 21 | `dl-bubbles` | Bubble float | Bubbles lift the result up and pop one by one. | 1200 ms | `pop:bubbles` |
| 22 | `dl-magnet` | Magnet pull | A magnet pulls the file onto the Save button, small sparks fly. | 800 ms | `click:magnet` |
| 23 | `dl-drill` | Arrow drill | A download arrow drills down through the card into the tray. | 800 ms | `whoosh:down` |
| 24 | `dl-stack-tidy` | Stack and tidy | Loose results stack into a neat pile and straighten up. | 900 ms | `paper:shuffle` |
| 25 | `dl-lightning` | Lightning snap | A quick flash and a lightning bolt strike the Save button. Used for very fast jobs. | 600 ms | `zap:strike` |
| 26 | `dl-wax-seal` | Wax seal | A wax seal stamps the result. Used for cleaned and private files. | 900 ms | `stamp:wax` |
| 27 | `dl-origami-crane` | Origami crane | The result folds into a crane and flies off the screen. | 1300 ms | `paper:fold` |
| 28 | `dl-floppy` | Floppy stamp | A retro floppy-disk icon stamps onto the result in pixels. | 800 ms | `beep:retro` |
| 29 | `dl-mini-chest` | Mini chest | A tiny chest pops up, opens, and the result rises out of it. | 1200 ms | `magic:reveal` |
| 30 | `dl-glow-badge` | Glow badge | A soft glow pulses around the result and a ribbon unrolls with the file size. | 900 ms | `arp:up` |

**Preferred effects by job** (use these first, then the rest at random):

| Job | Prefer |
|---|---|
| Privacy, location removed, metadata stripped | `dl-safe-lock`, `dl-vault`, `dl-wax-seal` |
| Compress | `dl-slot-roll`, `dl-coin-shower`, `dl-stack-tidy`, `dl-glow-badge`, `dl-lightning` |
| Resize, crop | `dl-stamp`, `dl-polaroid`, `dl-pip-catch`, `dl-sparkle-sweep` |
| Convert | `dl-zip-pack`, `dl-magnet`, `dl-origami-crane`, `dl-floppy` |
| GIF, video | `dl-polaroid`, `dl-rocket`, `dl-fireworks`, `dl-balloon-pop` |
| Share action | `dl-paper-plane`, `dl-mailbox`, `dl-rocket`, `dl-origami-crane` |
| Save to gallery | `dl-curve-to-gallery`, `dl-tray-drop`, `dl-drill`, `dl-bubbles` |
| Exam kit | `dl-zip-pack`, `dl-stamp`, `dl-gift-box`, `dl-mini-chest` |
| Batch with more than 5 files | `dl-stack-tidy`, `dl-zip-pack`, `dl-confetti-cannon`, `dl-fireworks` |
| Any job, first of the day | `dl-confetti-cannon`, `dl-fireworks`, `dl-mini-chest`, `dl-ring-pop` |

### 11.4 The 12 progress bars
Show **3 or 4 different bars per session**, picked at random, so the same job shows a different bar next time. Use a different bar for each job in a row. Every bar is built from many mini elements that **converge into one bar** so the wait feels fast.

| # | Id | Name | What the user sees | Length | Sound |
|---|---|---|---|---|---|
| 1 | `bar-streams` | Converging streams | Several mini bars race at different speeds then merge into one. | follows the job | `tick:soft` |
| 2 | `bar-liquid` | Liquid fill | A wavy liquid fills the track and sloshes. | follows the job | `tick:soft` |
| 3 | `bar-orbit` | Orbit | Little dots orbit a ring that fills as they gather. | follows the job | `tick:soft` |
| 4 | `bar-tiles` | Tile flip | A grid of tiles flips to the accent colour in random order. | follows the job | `tick:soft` |
| 5 | `bar-comet` | Comets | Comets race along the rail and dive into a bright head. | follows the job | `tick:soft` |
| 6 | `bar-warp` | Warp | Stars streak outward faster as progress grows. | follows the job | `tick:soft` |
| 7 | `bar-pip-runs` | Pip runs | Tiny Pip runs along the bar and leaves a coloured trail. | follows the job | `tick:soft` |
| 8 | `bar-blade-slice` | Blade slice | A blade slices the photo into strips that slide together into one. | follows the job | `tick:soft` |
| 9 | `bar-zipper` | Zipper | The bar is a zipper that closes as progress grows. | follows the job | `tick:soft` |
| 10 | `bar-gears` | Gears | Small gears spin and all feed one big gear. | follows the job | `tick:soft` |
| 11 | `bar-fireflies` | Fireflies | Fireflies swarm toward the end of the bar. | follows the job | `tick:soft` |
| 12 | `bar-segments` | Charging segments | Segments light up like a battery and the last one pulses. | follows the job | `tick:soft` |

Rules for bars:
1. The bar takes the **real progress** `p` (0..1) from the job. Use a **front-loaded curve** (`1 - (1 - p)^2.3`) so the bar jumps ahead early and slows near the end. It must be monotonic, must never reach 100 % before the job is done, and must hit 100 % when the job finishes.
2. When the job has no measurable progress (waiting for the WASM pack, for example), use an indeterminate version of the same bar (no percentage text).
3. Show the live counters: the size counting down or up, the stage label ("Trying quality 84, 76, 68"), and the percentage.
4. Colours come from the theme tokens (accent, accent-light, gold, field).
5. Jobs under 400 ms skip the bar and go straight to the save effect.
6. Every bar draws on a `<canvas>` sized to its container with `devicePixelRatio` up to 2, and updates from one shared animation loop.

### 11.5 Choosing effects at random, with memory (the "surprise engine")
```
pick(context, kind):
  pool = effects of this kind allowed in this context AND minQuality <= device quality tier
  remove the last 6 effects used for this kind (stored in IndexedDB)
  weight(e) = (1 / (1 + sqrt(seenCount[e]))) * (e.rare ? 0.35 : 1) * (e is "preferred for this job" ? 2.5 : 1)
  choose with weighted random using a seeded RNG (seed = install id + day + counter)
  store: seenCount[e] += 1, lastUsed list, and update "effects seen" for the Surprise badges
```
- **First launch ever:** play a fixed, signature set for the first three transitions (`tr-iris`, `tr-blade-swing`, `tr-wipe`) and the first save effect (`dl-ring-pop`) so the brand lands. Random from then on.
- **Intensity setting**: `Full` (all effects), `Calm` (only effects with `minQuality 0`, shorter, fewer particles), `Off` (cross-fade and a simple check mark).
- **Auto quality tier**: measure frame times during the first 10 effects. If the 95th percentile is above 20 ms, lower the tier (drop `webgl` and `canvas` effects, halve particle counts). Re-measure when the app updates. Let the user force a tier in Settings.
- **Reduce motion** (system setting or in-app): every effect swaps to a 150 ms cross-fade, Pip stops idle actions, confetti and shakes are off, but rewards still show as static cards.
- Never run two big effects at once. Queue them.
- Never delay the user. A transition may not make a screen unusable for more than 250 ms; input is accepted while it plays after that.

### 11.6 Test the effects
- A hidden **Effects Lab** screen (Settings, About, tap the version 7 times) lists every effect, action, reaction and sound with a Play button, a scrub slider, theme switch and a slow-motion switch. This is for the owner and QA.
- **Freeze-frame tests**: for every effect render frames at `p = 0, 0.25, 0.5, 0.75, 1` in both themes and compare with stored images (small tolerance). A frame must never be blank or clipped.
- A unit test confirms every catalogue id has an implementation (or a documented fallback) and a sound file.

## 12. Sound system (`packages/sound`)

**Every effect, action and reaction has its own sound. Every sound can be switched off.** The 262 placeholder sounds in `assets/sounds` follow the catalogue ids exactly (`tr-iris.ogg`, `ac-cmp-press.ogg` and so on), with `sounds.json` describing them. They are **synthesised placeholders with no licence risk**. Replace them later with final audio under the same file names; no code changes are needed.

### 12.1 Engine
- Web Audio API. One `AudioContext`, created and resumed on the first user gesture. A master gain, then one gain per category (sections below), then per-sound gain from `sounds.json`.
- Load `sounds.json`. **Preload** the small critical set at start (`ui-*`, `vx-hello`, `gm-xp-tick`). Decode other sounds **on demand** and keep them in an LRU cache (about 6 MB of decoded audio). On Android the files are bundled in the app; on the web they are fetched with long cache headers.
- Playback rules: the same sound id may not retrigger within 80 ms; at most 6 voices at once; priorities (fanfares and voice reactions above ambience; ducking UI sounds by 6 dB while a fanfare plays); loops (the `bar-*` tick sounds and `vx-carpet-fly`) stop on route change, on app background, and when the effect ends.
- Do **not** take audio focus; mix politely with the user's music at low default volume. Do not play when the device is in silent or vibrate mode if the OS tells you (add a small native plugin call `AudioManager.getRingerMode()` on Android; on the web respect the page's muted state). Pause everything when the app goes to the background.
- Sound is never the only carrier of information. Every important cue also has a visual.

### 12.2 Sound categories and per-sound switches
Settings, Sound, shows:
1. **Master switch** and **master volume** slider.
2. **Category switches** (below).
3. **Pip's voice style**: Full, Soft (quieter, fewer words and giggles), Off.
4. **Haptics** switch (separate from sound).
5. **"Sound details"**: a searchable list of **every sound** (name, category, a play button, and an on/off switch for that one sound). Group by category. A "Reset sounds" button restores defaults.

| Category id | Name | Covers |
|---|---|---|
| `ui` | Buttons and menus | 18 sounds |
| `transitions` | Screen transitions | 32 sounds |
| `completion` | Save and completion effects | 30 sounds |
| `progress` | Progress bars | 12 sounds |
| `actions` | Pip at work (tool actions) | 90 sounds |
| `cheers` | Celebrations, level-ups, badges and streaks | 33 sounds |
| `reactions` | Pip reactions, errors and surprises | 35 sounds |
| `game` | XP, quests, chest and awards | 12 sounds |

Storage: `sound.master`, `sound.volume`, `sound.cat.<id>`, `sound.off` (array of disabled sound ids), `sound.voiceStyle`, `haptics.on`. All local. When a sound id is disabled, the matching effect plays silently; nothing else changes.

First launch: Pip asks once, "Want sounds? I have a few." with **Sounds on** and **Keep it quiet**. The choice sets the master switch. It can be changed any time in Settings.

### 12.3 Haptics map (Android)
Light tick on taps and toggles; medium on badge unlock and stamp-like hits; heavy pattern on level-up and the carpet burst; none on long loops. Always respect the haptics switch.

### 12.4 Sound table
Each row is one sound. The id equals the effect, action or reaction id that uses it. "Family" names the synthesis recipe in `tools/make-sounds.py` (useful when you replace a sound with a recorded one: keep the same character, length and loudness).

| Sound id | Plays with | Category | Family:variant | Length |
|---|---|---|---|---|
| `tr-iris` | Iris open | transitions | `whoosh:up` | 0.5 s |
| `tr-wipe` | Blade wipe | transitions | `whoosh:right` | 0.45 s |
| `tr-curtain` | Curtain split | transitions | `whoosh:split` | 0.55 s |
| `tr-blinds` | Venetian blinds | transitions | `click:ratchet` | 0.6 s |
| `tr-pixel-bloom` | Pixel bloom | transitions | `pop:cascade` | 0.7 s |
| `tr-diamond` | Diamond open | transitions | `whoosh:up` | 0.5 s |
| `tr-zoom-through` | Zoom through | transitions | `whoosh:rise` | 0.55 s |
| `tr-card-flip` | 3D card flip | transitions | `paper:flip` | 0.5 s |
| `tr-push-parallax` | Parallax push | transitions | `whoosh:left` | 0.4 s |
| `tr-drop-bounce` | Drop and bounce | transitions | `thud:bounce` | 0.6 s |
| `tr-blade-swing` | Blade swing | transitions | `mech:snap` | 0.6 s |
| `tr-shutter` | Camera shutter | transitions | `click:shutter` | 0.5 s |
| `tr-film-roll` | Film-strip roll | transitions | `mech:reel` | 0.7 s |
| `tr-page-curl` | Page curl | transitions | `paper:curl` | 0.6 s |
| `tr-ripple` | Water ripple | transitions | `water:ripple` | 0.75 s |
| `tr-glitch` | Glitch slice | transitions | `glitch:short` | 0.4 s |
| `tr-liquid` | Liquid morph | transitions | `water:blob` | 0.7 s |
| `tr-ink` | Ink splash | transitions | `water:splash` | 0.7 s |
| `tr-confetti-sweep` | Confetti sweep | transitions | `sparkle:sweep` | 0.7 s |
| `tr-clock-wipe` | Clock wipe | transitions | `click:tickrun` | 0.65 s |
| `tr-spiral` | Spiral twist | transitions | `whoosh:spiral` | 0.75 s |
| `tr-gooey` | Gooey merge | transitions | `water:blob` | 0.7 s |
| `tr-shatter` | Shatter and assemble | transitions | `glitch:shatter` | 0.8 s |
| `tr-mosaic` | Mosaic resolve | transitions | `pop:cascade` | 0.65 s |
| `tr-sunrise` | Sunrise sweep | transitions | `arp:up` | 0.7 s |
| `tr-card-shuffle` | Card shuffle | transitions | `paper:shuffle` | 0.75 s |
| `tr-portal` | Tummy portal | transitions | `magic:portal` | 0.75 s |
| `tr-pip-pull` | Pip pulls the screen | transitions | `voice:whee` | 0.6 s |
| `tr-unzip` | Unzip | transitions | `zip:down` | 0.6 s |
| `tr-peel` | Sticker peel | transitions | `paper:peel` | 0.6 s |
| `tr-tool-flip` | Tool flip | transitions | `mech:snap` | 0.7 s |
| `tr-vortex` | Vortex | transitions | `whoosh:suck` | 0.8 s |
| `dl-tray-drop` | Drop into tray | completion | `thud:soft` | 0.5 s |
| `dl-paper-plane` | Paper plane | completion | `paper:fold` | 0.6 s |
| `dl-confetti-cannon` | Confetti cannon | completion | `pop:cannon` | 0.9 s |
| `dl-coin-shower` | Coin shower | completion | `coin:shower` | 1.0 s |
| `dl-curve-to-gallery` | Curve to gallery | completion | `whoosh:suck` | 0.6 s |
| `dl-stamp` | SAVED stamp | completion | `stamp:hit` | 0.5 s |
| `dl-zip-pack` | Zip pack | completion | `zip:up` | 0.8 s |
| `dl-mailbox` | Mailbox | completion | `thud:soft` | 0.5 s |
| `dl-safe-lock` | Safe lock | completion | `mech:lock` | 0.7 s |
| `dl-gift-box` | Gift box | completion | `magic:reveal` | 0.9 s |
| `dl-rocket` | Rocket launch | completion | `riser:rocket` | 1.0 s |
| `dl-balloon-pop` | Balloon pop | completion | `pop:balloon` | 0.8 s |
| `dl-sparkle-sweep` | Sparkle sweep | completion | `sparkle:sweep` | 0.7 s |
| `dl-ring-pop` | Ring close and pop | completion | `chime:ok` | 0.6 s |
| `dl-check-draw` | Ink check | completion | `chime:ok` | 0.5 s |
| `dl-polaroid` | Polaroid print | completion | `mech:print` | 1.1 s |
| `dl-vault` | Vault door | completion | `mech:vault` | 1.0 s |
| `dl-pip-catch` | Pip catches it | completion | `voice:yay` | 0.6 s |
| `dl-slot-roll` | Number reel | completion | `click:reel` | 0.9 s |
| `dl-fireworks` | Fireworks | completion | `pop:firework` | 1.2 s |
| `dl-bubbles` | Bubble float | completion | `pop:bubbles` | 0.9 s |
| `dl-magnet` | Magnet pull | completion | `click:magnet` | 0.5 s |
| `dl-drill` | Arrow drill | completion | `whoosh:down` | 0.5 s |
| `dl-stack-tidy` | Stack and tidy | completion | `paper:shuffle` | 0.7 s |
| `dl-lightning` | Lightning snap | completion | `zap:strike` | 0.5 s |
| `dl-wax-seal` | Wax seal | completion | `stamp:wax` | 0.6 s |
| `dl-origami-crane` | Origami crane | completion | `paper:fold` | 0.9 s |
| `dl-floppy` | Floppy stamp | completion | `beep:retro` | 0.5 s |
| `dl-mini-chest` | Mini chest | completion | `magic:reveal` | 0.9 s |
| `dl-glow-badge` | Glow badge | completion | `arp:up` | 0.7 s |
| `bar-streams` | Converging streams | progress | `tick:soft` | 0.2 s |
| `bar-liquid` | Liquid fill | progress | `tick:soft` | 0.2 s |
| `bar-orbit` | Orbit | progress | `tick:soft` | 0.2 s |
| `bar-tiles` | Tile flip | progress | `tick:soft` | 0.2 s |
| `bar-comet` | Comets | progress | `tick:soft` | 0.2 s |
| `bar-warp` | Warp | progress | `tick:soft` | 0.2 s |
| `bar-pip-runs` | Pip runs | progress | `tick:soft` | 0.2 s |
| `bar-blade-slice` | Blade slice | progress | `tick:soft` | 0.2 s |
| `bar-zipper` | Zipper | progress | `tick:soft` | 0.2 s |
| `bar-gears` | Gears | progress | `tick:soft` | 0.2 s |
| `bar-fireflies` | Fireflies | progress | `tick:soft` | 0.2 s |
| `bar-segments` | Charging segments | progress | `tick:soft` | 0.2 s |
| `ac-cmp-press` | Photo press | actions | `squish:press` | 0.6 s |
| `ac-cmp-belt` | Belt tightening | actions | `mech:ratchet` | 0.8 s |
| `ac-cmp-vacuum` | Vacuum seal | actions | `whoosh:suck` | 0.9 s |
| `ac-cmp-dough` | Kneading | actions | `squish:knead` | 0.6 s |
| `ac-cmp-roller` | Tiny steamroller | actions | `rumble:engine` | 1.0 s |
| `ac-cmp-stomp` | Grape stomp | actions | `squish:stomp` | 0.7 s |
| `ac-cmp-balloon` | Balloon deflate | actions | `air:deflate` | 0.9 s |
| `ac-cmp-weights` | Weight lifting | actions | `voice:effort` | 0.7 s |
| `ac-cmp-fold` | Origami fold | actions | `paper:fold` | 0.7 s |
| `ac-cmp-squeeze` | Orange squeeze | actions | `water:drip` | 0.8 s |
| `ac-crp-snip` | Snip frame | actions | `mech:snap` | 0.4 s |
| `ac-crp-tape` | Measuring tape | actions | `mech:tape` | 0.8 s |
| `ac-crp-hammer` | Hammer the frame | actions | `thud:nail` | 0.8 s |
| `ac-crp-chalk` | Chalk line | actions | `whoosh:snap` | 0.4 s |
| `ac-crp-laser` | Laser cut | actions | `laser:cut` | 1.0 s |
| `ac-crp-cookie` | Cookie cutter | actions | `squish:stomp` | 0.5 s |
| `ac-crp-chisel` | Sculptor chisel | actions | `thud:nail` | 0.8 s |
| `ac-crp-wall` | Hang on wall | actions | `thud:soft` | 0.5 s |
| `ac-crp-saw` | Carpenter saw | actions | `mech:saw` | 0.9 s |
| `ac-crp-pinch` | Stretch and pinch | actions | `squish:press` | 0.5 s |
| `ac-cnv-juggle` | Format juggling | actions | `magic:juggle` | 0.8 s |
| `ac-cnv-hat` | Magic hat | actions | `magic:reveal` | 0.9 s |
| `ac-cnv-blender` | Blender | actions | `rumble:engine` | 0.9 s |
| `ac-cnv-curtain` | Costume change | actions | `magic:reveal` | 0.8 s |
| `ac-cnv-tennis` | Format rally | actions | `click:racket` | 0.6 s |
| `ac-cnv-chameleon` | Chameleon | actions | `magic:morph` | 0.8 s |
| `ac-cnv-conveyor` | Conveyor belt | actions | `mech:belt` | 0.9 s |
| `ac-cnv-translate` | Translator | actions | `voice:babble` | 0.9 s |
| `ac-cnv-wheel` | Pottery wheel | actions | `water:blob` | 0.8 s |
| `ac-cnv-shift` | Shape-shifter | actions | `mech:snap` | 0.6 s |
| `ac-prv-detective` | Detective | actions | `voice:hmm` | 0.7 s |
| `ac-prv-radar` | Radar | actions | `beep:radar` | 1.0 s |
| `ac-prv-map` | Treasure map | actions | `paper:flip` | 0.6 s |
| `ac-prv-eraser` | Eraser | actions | `squish:knead` | 0.6 s |
| `ac-prv-scissors` | Cut the thread | actions | `mech:snap` | 0.4 s |
| `ac-prv-sponge` | Sponge wash | actions | `water:bubbles` | 0.9 s |
| `ac-prv-vacuum` | Dust vacuum | actions | `rumble:engine` | 0.9 s |
| `ac-prv-shades` | Spy shades | actions | `beep:retro` | 0.4 s |
| `ac-prv-ninja` | Ninja hide | actions | `whoosh:left` | 0.4 s |
| `ac-prv-lock` | Padlock polish | actions | `mech:lock` | 0.7 s |
| `ac-vid-clapper` | Clapper board | actions | `click:clap` | 0.4 s |
| `ac-vid-projector` | Projector crank | actions | `mech:reel` | 1.0 s |
| `ac-vid-flipbook` | Flip book | actions | `paper:flip` | 0.8 s |
| `ac-vid-popcorn` | Popcorn | actions | `pop:cascade` | 0.8 s |
| `ac-vid-dj` | DJ scratch | actions | `glitch:scratch` | 0.7 s |
| `ac-vid-scissors` | Timeline trim | actions | `mech:snap` | 0.4 s |
| `ac-vid-juggle` | Frame juggling | actions | `magic:juggle` | 0.8 s |
| `ac-vid-surf` | Wave surfing | actions | `water:ripple` | 1.0 s |
| `ac-vid-fast` | Fast forward | actions | `whoosh:right` | 0.6 s |
| `ac-vid-boomerang` | Boomerang | actions | `whoosh:spiral` | 0.8 s |
| `ac-utl-laser` | QR laser | actions | `beep:radar` | 0.7 s |
| `ac-utl-palette` | Paint palette | actions | `water:drip` | 0.7 s |
| `ac-utl-pixels` | Pixel builder | actions | `pop:cascade` | 0.9 s |
| `ac-utl-stamp` | Icon stamp | actions | `stamp:hit` | 0.4 s |
| `ac-utl-rainbow` | Rainbow painter | actions | `magic:glide` | 0.8 s |
| `ac-utl-dropper` | Eyedropper | actions | `water:drip` | 0.6 s |
| `ac-utl-pen` | Calligraphy pen | actions | `paper:pen` | 0.8 s |
| `ac-utl-checker` | Barcode checker | actions | `beep:retro` | 0.5 s |
| `ac-utl-magic` | Colour magician | actions | `magic:reveal` | 0.8 s |
| `ac-utl-mosaic` | Mosaic maker | actions | `click:tickrun` | 0.8 s |
| `ac-bat-broom` | Broom sweep | actions | `paper:shuffle` | 0.8 s |
| `ac-bat-memory` | Matching cards | actions | `click:racket` | 0.5 s |
| `ac-bat-sort` | Recycling sort | actions | `thud:soft` | 0.5 s |
| `ac-bat-librarian` | Librarian stamps | actions | `stamp:hit` | 0.4 s |
| `ac-bat-crane` | Container ship | actions | `mech:belt` | 1.0 s |
| `ac-bat-assembly` | Assembly line | actions | `mech:belt` | 0.9 s |
| `ac-bat-juggle` | Many hands | actions | `magic:morph` | 0.8 s |
| `ac-bat-counter` | Counting | actions | `voice:babble` | 0.8 s |
| `ac-bat-conductor` | Conductor | actions | `arp:up` | 0.8 s |
| `ac-bat-spring` | Spring cleaning | actions | `sparkle:sweep` | 0.8 s |
| `ac-exm-cap` | Graduation cap | actions | `voice:hmm` | 0.5 s |
| `ac-exm-checklist` | Checklist | actions | `click:tickrun` | 0.8 s |
| `ac-exm-rule` | Rule check | actions | `mech:tape` | 0.8 s |
| `ac-exm-sign` | Signature | actions | `paper:pen` | 0.8 s |
| `ac-exm-stamp` | Official stamp | actions | `stamp:hit` | 0.5 s |
| `ac-exm-clock` | Deadline clock | actions | `beep:retro` | 0.5 s |
| `ac-exm-bag` | Pack the bag | actions | `zip:up` | 0.8 s |
| `ac-exm-study` | Study desk | actions | `paper:flip` | 0.7 s |
| `ac-exm-pencil` | Pencil tap | actions | `click:racket` | 0.5 s |
| `ac-exm-medal` | Pass medal | actions | `chime:ok` | 0.6 s |
| `ac-idl-comic` | Reading | actions | `voice:giggle` | 0.6 s |
| `ac-idl-yoyo` | Yo-yo | actions | `whoosh:left` | 0.4 s |
| `ac-idl-juggle` | Bolt juggling | actions | `magic:juggle` | 0.8 s |
| `ac-idl-stretch` | Stretch | actions | `click:ratchet` | 0.5 s |
| `ac-idl-yawn` | Yawn | actions | `voice:yawn` | 1.0 s |
| `ac-idl-polish` | Blade polish | actions | `sparkle:sweep` | 0.6 s |
| `ac-idl-pushups` | Push-ups | actions | `voice:effort` | 0.7 s |
| `ac-idl-watch` | Watch check | actions | `voice:hmm` | 0.6 s |
| `ac-idl-dance` | Little dance | actions | `arp:up` | 0.8 s |
| `ac-idl-nap` | Cat nap | actions | `voice:snore` | 1.2 s |
| `ce-backflip` | Backflip | cheers | `voice:yay` | 0.6 s |
| `ce-cannon-hold` | Cannon hold | cheers | `pop:cannon` | 0.9 s |
| `ce-victory-dance` | Victory dance | cheers | `arp:up` | 0.9 s |
| `ce-tool-fan` | Tool fan | cheers | `mech:snap` | 0.8 s |
| `ce-high-five` | Self high-five | cheers | `click:clap` | 0.4 s |
| `ce-moonwalk` | Moonwalk | cheers | `voice:whee` | 0.7 s |
| `ce-tornado` | Spin tornado | cheers | `whoosh:spiral` | 0.9 s |
| `ce-rocket-jump` | Rocket jump | cheers | `riser:rocket` | 1.0 s |
| `ce-trophy-lift` | Trophy lift | cheers | `chime:ok` | 0.7 s |
| `ce-air-guitar` | Air guitar | cheers | `arp:up` | 0.9 s |
| `ce-pompoms` | Cheerleader | cheers | `sparkle:sweep` | 0.8 s |
| `ce-juggle-tools` | Tool juggle | cheers | `magic:juggle` | 0.8 s |
| `ce-mic-drop` | Mic drop | cheers | `thud:soft` | 0.6 s |
| `ce-disco` | Disco | cheers | `arp:up` | 0.9 s |
| `lv-ascend` | Ascend | cheers | `fanfare:big` | 2.0 s |
| `lv-power-up` | Power up | cheers | `riser:power` | 1.6 s |
| `lv-evolution` | Evolution flash | cheers | `magic:morph` | 1.6 s |
| `lv-ladder` | Ladder climb | cheers | `arp:up` | 1.6 s |
| `lv-rocket` | Rocket boost | cheers | `riser:rocket` | 1.6 s |
| `lv-gold-blade` | Golden blade | cheers | `sparkle:sweep` | 1.4 s |
| `lv-crown` | Crown drop | cheers | `fanfare:small` | 1.2 s |
| `lv-leap` | Stair leap | cheers | `voice:whee` | 0.9 s |
| `lv-transform` | Tool transform | cheers | `mech:snap` | 1.4 s |
| `lv-medal-bite` | Medal bite | cheers | `voice:yay` | 0.8 s |
| `bd-drop` | Badge drop | cheers | `chime:ok` | 0.8 s |
| `bd-shine` | Shine reveal | cheers | `sparkle:sweep` | 0.8 s |
| `bd-stamp` | Pin on chest | cheers | `stamp:hit` | 0.4 s |
| `bd-spin` | Coin spin | cheers | `coin:spin` | 0.8 s |
| `bd-rare` | Rare badge | cheers | `fanfare:small` | 1.4 s |
| `st-flame` | Flame grows | cheers | `air:flame` | 0.8 s |
| `st-calendar` | Calendar tick | cheers | `paper:flip` | 0.5 s |
| `st-save` | Streak saved | cheers | `chime:ok` | 0.7 s |
| `st-lost` | Streak lost | cheers | `voice:sad` | 0.8 s |
| `er-sad` | Sad droop | reactions | `voice:sad` | 1.0 s |
| `er-confused` | Confused | reactions | `voice:hmm` | 0.8 s |
| `er-facepalm` | Facepalm | reactions | `thud:soft` | 0.4 s |
| `er-uhoh` | Uh-oh | reactions | `voice:uhoh` | 0.6 s |
| `er-shrug` | Shrug | reactions | `voice:hmm` | 0.5 s |
| `er-dizzy` | Dizzy | reactions | `voice:dizzy` | 0.9 s |
| `eg-sneeze` | Sneeze | reactions | `voice:sneeze` | 0.6 s |
| `eg-hiccup` | Hiccup | reactions | `voice:hiccup` | 0.7 s |
| `eg-sing` | Humming | reactions | `arp:up` | 1.2 s |
| `eg-peek` | Peek-a-boo | reactions | `voice:whee` | 0.5 s |
| `eg-snow` | Snow day | reactions | `voice:brr` | 0.9 s |
| `ui-tap` | Button tap | ui | `click:soft` | 0.08 s |
| `ui-select` | Select | ui | `arp:up` | 0.12 s |
| `ui-toggle-on` | Switch on | ui | `beep:retro` | 0.1 s |
| `ui-toggle-off` | Switch off | ui | `beep:down` | 0.1 s |
| `ui-back` | Back | ui | `whoosh:down` | 0.15 s |
| `ui-open-sheet` | Open sheet | ui | `whoosh:up` | 0.2 s |
| `ui-close-sheet` | Close sheet | ui | `whoosh:down` | 0.2 s |
| `ui-error` | Error | ui | `beep:down` | 0.3 s |
| `ui-success` | Success | ui | `chime:ok` | 0.4 s |
| `ui-menu-open` | Radial menu opens | ui | `pop:cascade` | 0.35 s |
| `ui-menu-pick` | Radial menu pick | ui | `pop:soft` | 0.2 s |
| `ui-drop-file` | File dropped | ui | `thud:soft` | 0.3 s |
| `ui-camera` | Photo picked | ui | `click:shutter` | 0.25 s |
| `ui-copy` | Copied | ui | `beep:retro` | 0.1 s |
| `ui-share` | Share sheet | ui | `whoosh:up` | 0.3 s |
| `ui-warning` | Warning | ui | `beep:down` | 0.4 s |
| `ui-process-start` | Job starts | ui | `riser:soft` | 0.5 s |
| `ui-process-done` | Job done | ui | `chime:ok` | 0.5 s |
| `gm-xp-tick` | XP tick | game | `coin:tick` | 0.09 s |
| `gm-xp-gain` | XP gained | game | `coin:shower` | 0.4 s |
| `gm-quest-done` | Quest done | game | `chime:ok` | 0.6 s |
| `gm-all-quests` | All quests done | game | `arp:up` | 0.9 s |
| `gm-chest-shake` | Chest shakes | game | `thud:bounce` | 0.7 s |
| `gm-chest-open` | Chest opens | game | `magic:reveal` | 1.2 s |
| `gm-award` | Award appears | game | `fanfare:small` | 1.0 s |
| `gm-rank-up` | Rank up | game | `fanfare:small` | 1.4 s |
| `gm-locked` | Locked item tapped | game | `thud:soft` | 0.3 s |
| `gm-trophy` | Trophy added | game | `chime:ok` | 0.9 s |
| `gm-skin-unlock` | Skin unlocked | game | `magic:morph` | 1.1 s |
| `gm-daily-open` | Daily bonus | game | `arp:up` | 0.9 s |
| `vx-hello` | Hello | reactions | `voice:happy` | 0.7 s |
| `vx-hmm` | Hmm | reactions | `voice:hmm` | 0.7 s |
| `vx-wow` | Wow | reactions | `voice:wow` | 0.6 s |
| `vx-yay` | Yay | reactions | `voice:yay` | 0.7 s |
| `vx-ouch` | Ouch | reactions | `voice:ouch` | 0.5 s |
| `vx-giggle1` | Giggle 1 | reactions | `voice:giggle` | 0.7 s |
| `vx-giggle2` | Giggle 2 | reactions | `voice:giggle` | 0.9 s |
| `vx-giggle3` | Giggle 3 | reactions | `voice:ticklish` | 0.8 s |
| `vx-oops` | Oops | reactions | `voice:oops` | 0.6 s |
| `vx-squeal` | Squeal | reactions | `voice:squeal` | 0.7 s |
| `vx-whee` | Whee | reactions | `voice:whee` | 0.9 s |
| `vx-sleepy` | Sleepy | reactions | `voice:yawn` | 1.4 s |
| `vx-raspberry` | Raspberry | reactions | `air:deflate` | 0.7 s |
| `vx-nibble` | Nibble | reactions | `voice:chomp` | 0.6 s |
| `vx-grumble` | Grumble | reactions | `voice:grumble` | 0.7 s |
| `vx-cheer-big` | Big cheer | reactions | `voice:cheer` | 1.2 s |
| `vx-sad` | Sad | reactions | `voice:sad` | 0.9 s |
| `vx-ring-l` | Ear bell left | reactions | `chime:bellL` | 0.6 s |
| `vx-ring-r` | Ear bell right | reactions | `chime:bellR` | 0.6 s |
| `vx-carpet-on` | Carpet appears | reactions | `magic:glide` | 0.9 s |
| `vx-carpet-fly` | Carpet flight loop | reactions | `air:loop` | 1.2 s |
| `vx-carpet-burst` | Carpet bursts | reactions | `pop:balloon` | 0.7 s |
| `vx-pickup` | Picked up | reactions | `voice:squeal` | 0.5 s |
| `vx-drop` | Dropped | reactions | `thud:bounce` | 0.9 s |

### 12.5 Replacing placeholders
Keep the file names and ids. Target loudness: UI sounds about -22 LUFS, effects about -18 LUFS, fanfares about -14 LUFS. Mono Ogg Vorbis or Opus, 32 to 48 kbps, 24 or 32 kHz. Total sound size under 3.5 MB. Add a script `tools/sound-lint` that checks duration, peak, silence at the start and the licence field in `sounds.json` (only CC0, own work, or a licence that allows commercial use without attribution, or with attribution listed on the Licences page).


## 13. Rewards and gamification (`packages/game`)

The owner likes the game feel (XP, levels) and wants **more reward**: virtual awards and badges so that finishing a job feels good. The system must feel grown-up and trustworthy, never pushy.

### 13.1 Principles
1. Rewards appear **after** a job, never block the flow, and can be dismissed with one tap.
2. No purchases, no timers that pressure the user, no loot boxes with money, no notifications unless the user turns reminders on (off by default).
3. Everything is **local**. See 13.7.
4. All numbers live in `data/gamification.json` so they can be tuned without code changes.

### 13.2 XP
| Job type | What counts | Base XP |
|---|---|---|
| convert | Convert a file | 25 |
| compress | Compress or hit a target size | 40 |
| resize | Resize or crop | 30 |
| privacy | Check, edit or remove metadata or location | 50 |
| video | Video, GIF or animation job | 60 |
| utility | QR, colour, icon, SVG, barcode | 25 |
| batch | Batch job, per file (cap 100 per job) | 5 |
| exam | Exam kit (all files in one go) | 80 |

Extra rules: first job of the local day +20 XP; streak bonus +5 XP per streak day, capped at 10 days, once per day; badge XP: bronze 25, silver 50, gold 100; each finished quest +30 XP. **Repeat decay** per tool per day: the first 3 jobs give full XP, jobs 4 to 8 give half, later ones give 10 percent. **Daily cap 600 XP.** Show the XP pop-up as "+40 XP" floating up from the result, and tick the XP bar with a soft coin sound (`gm-xp-tick`, rate limited).

### 13.3 Levels and ranks
- XP needed to go from level L to L+1: `50 × L + 150` (level 7 needs 500, level 8 needs 550). The mock-up shows illustrative numbers; use this formula.
- Ranks by level: levels 1 to 2: Rookie; levels 3 to 4: Tinkerer; levels 5 to 6: Fixer; level 7: Craftsman; levels 8 to 9: Artisan; levels 10 to 14: Maker; levels 15 to 19: Expert; levels 20 to 29: Master; level 30 and up: Legend.
- Level ring in the header shows progress as a gold arc; the level number is inside it.
- Level-up plays one of the 10 level-up clips (section 10.2), then shows the rank card if the rank changed.

### 13.4 Streaks
- A streak day is a local calendar day with at least one finished job. Use the device time zone; the day changes at 00:00 local time.
- Travel or daylight-saving changes never break a streak: compare calendar dates, not 24-hour gaps.
- One free "streak shield" per week. If a day is missed and a shield is available the streak survives and the shield is used (show the st-save reaction). Shields cannot be bought.
- Streak milestones: 3, 7, 14, 30, 60, 100, 200, 365 days give a badge and a chest.

### 13.5 Daily quests and the chest
- Three quests per local day, picked from the pool with a seeded random generator (seed = date + install id) so the same day gives the same quests after an app restart.
- Never pick two quests for the same tool. Prefer tools the user has used least. Never give a quest the device cannot do (for example, video quests on a device without video support).
- Finishing a quest gives +30 XP and a tick animation. Finishing all three opens the Daily Chest (one chest per day).

Quest pool (20 quests, add more later):

| Id | Quest text | Tool group | Count |
|---|---|---|---|
| `q-shrink-1` | Shrink a photo | compress | 1 |
| `q-crop-1` | Crop a photo | resize | 1 |
| `q-privacy-1` | Remove a location | privacy | 1 |
| `q-gif-1` | Make a GIF | video | 1 |
| `q-convert-1` | Convert one file | convert | 1 |
| `q-qr-1` | Make a QR code | utility | 1 |
| `q-exam-1` | Build an exam kit | exam | 1 |
| `q-batch-5` | Process 5 photos in one go | batch | 5 |
| `q-three-tools` | Use 3 different tools | any | 3 |
| `q-info` | Open the (i) info on a tool | ui | 1 |
| `q-pip-tap` | Tap Pip's tummy and pick a tool | pip | 1 |
| `q-pip-pickup` | Pick Pip up by his blade | pip | 1 |
| `q-share` | Share a result | any | 1 |
| `q-heic` | Convert a HEIC photo to JPG | convert | 1 |
| `q-1kb` | Compress a photo under 100 KB | compress | 1 |
| `q-square` | Crop a photo to 1:1 | resize | 1 |
| `q-video-trim` | Trim a video | video | 1 |
| `q-palette` | Get a colour palette from a photo | utility | 1 |
| `q-preset` | Use a preset from the preset browser | resize | 1 |
| `q-save-5mb` | Save 5 MB in one day | any | 5 |

**Daily chest** (opens when all three quests are done; one per day). Loot is chosen by weight:

| Loot | Weight | What the user gets |
|---|---|---|
| `xp-small` | 40 | +50 XP |
| `xp-big` | 15 | +150 XP |
| `badge-bronze` | 10 | A surprise bronze badge, if one is still locked |
| `skin` | 20 | A Pip skin you do not own yet (falls back to XP when you own all) |
| `shield` | 10 | An extra streak shield (max 2 held) |
| `sticker` | 5 | A rare Pip sticker for the sticker album |

### 13.6 Badges, skins and awards
**45 badges** with bronze, silver and gold tiers. Medal art is in `assets/badges`. Locked badges show as grey silhouettes with their rule, so people know what to aim for. Unlocking plays a badge reaction (10.3), the medal drops in with a shine, and the badge XP is added.

| Id | Badge | Icon | Tier | How to earn it |
|---|---|---|---|---|
| `b-feather` | Feather Weight | shrink | bronze | Finish 1 compress job. |
| `b-feather2` | Feather Weight II | shrink | silver | Finish 25 compress jobs. |
| `b-feather3` | Feather Weight III | shrink | gold | Finish 100 compress jobs. |
| `b-square` | Perfect Square | crop | bronze | Crop 1 photo to 1:1. |
| `b-crop2` | Sharp Eye | crop | silver | Finish 25 crop or resize jobs. |
| `b-crop3` | Master Cropper | crop | gold | Finish 100 crop or resize jobs. |
| `b-guard` | Privacy Guard | shield | silver | Remove location from 1 photo. |
| `b-guard2` | Privacy Guard II | shield | gold | Remove location or metadata from 50 photos. |
| `b-detective` | Location Detective | pin | bronze | Check where 5 photos were taken. |
| `b-loop` | Loop Master | film | bronze | Make 1 GIF. |
| `b-loop2` | Director | film | silver | Finish 25 video or GIF jobs. |
| `b-loop3` | Blockbuster | film | gold | Finish 100 video or GIF jobs. |
| `b-hopper` | Format Hopper | convert | bronze | Convert files into 5 different formats. |
| `b-hopper2` | Format Wizard | convert | silver | Convert 100 files. |
| `b-heic` | Apple Whisperer | convert | bronze | Convert 10 HEIC photos. |
| `b-exam` | Exam Ready | check | silver | Build 1 exam kit. |
| `b-exam2` | Top of the Class | check | gold | Build 10 exam kits. |
| `b-qr` | Code Cracker | qr | bronze | Make or scan 5 QR codes. |
| `b-palette` | Colour Spy | palette | bronze | Get 5 palettes from photos. |
| `b-streak3` | On a Roll | star | bronze | 3-day streak. |
| `b-streak7` | Week Warrior | star | silver | 7-day streak. |
| `b-streak30` | Habit Hero | star | gold | 30-day streak. |
| `b-streak100` | Unstoppable | star | gold | 100-day streak. |
| `b-early` | Early Bird | sparkle | silver | Finish a job before 7:00 local time. |
| `b-night` | Night Owl | sparkle | silver | Finish a job after 23:00 local time. |
| `b-saver` | Space Saver | save | bronze | Save 50 MB in total. |
| `b-saver2` | Space Hero | save | silver | Save 1 GB in total. |
| `b-saver3` | Space Legend | save | gold | Save 10 GB in total. |
| `b-batch` | Batch Boss | layers | silver | Process 50 files in one batch. |
| `b-share` | Sharer | share | bronze | Share 5 results. |
| `b-explorer` | Explorer | grid | silver | Use every tool group at least once. |
| `b-curious` | Curious Mind | search | bronze | Open the (i) info on 10 different tools. |
| `b-pickup` | Up, Up and Away | heart | bronze | Pick Pip up by his blade. |
| `b-carpet` | Magic Carpet Ride | heart | silver | Fly Pip on the carpet for 10 seconds. |
| `b-oops` | Oops! | heart | bronze | Burst the carpet. |
| `b-tickle` | Giggle Maker | heart | bronze | Tickle Pip 20 times. |
| `b-friend` | Best Friend | heart | gold | Find 10 different Pip reactions. |
| `b-surprise` | Surprise Hunter | sparkle | silver | See 20 different transition effects. |
| `b-surprise2` | Surprise Collector | sparkle | gold | See all 32 transition effects. |
| `b-finish` | Finish Line | sparkle | gold | See all 30 save effects. |
| `b-offline` | Off the Grid | globe | bronze | Finish a job in airplane mode. |
| `b-level10` | Double Digits | star | silver | Reach level 10. |
| `b-level25` | Quarter Century | star | gold | Reach level 25. |
| `b-quests` | Quest Keeper | check | silver | Finish all 3 daily quests 7 times. |
| `b-chest` | Treasure Hunter | gift | bronze | Open 10 daily chests. |

**Pip skins** (cosmetic, earned by playing):

| Id | Skin | Slot | How to unlock |
|---|---|---|---|
| `sk-gold-blade` | Golden Blade | blade | Daily chest, first reward. Also level 8. |
| `sk-party-hat` | Party Hat | hat | Reach a 7-day streak. |
| `sk-sunglasses` | Cool Shades | face | Remove location from 10 photos. |
| `sk-crown` | Tiny Crown | hat | Reach level 15. |
| `sk-headphones` | Headphones | head | Make 10 GIFs. |
| `sk-scarf` | Red Scarf | neck | Open 5 chests. |
| `sk-cape` | Hero Cape | back | Reach a 30-day streak. |
| `sk-wizard` | Wizard Hat | hat | Convert 100 files. |
| `sk-helmet` | Astronaut Helmet | head | Save 1 GB in total. |
| `sk-grad-cap` | Graduation Cap | hat | Build 5 exam kits. |
| `sk-snow` | Winter Scarf | neck | Use the app in December or January. |
| `sk-rainbow` | Rainbow Keyring | tail | Finish all 3 daily quests 14 times. |

**Awards**
- **Weekly Fixer trophy.** Awarded every Monday for the week before when the user finished at least 10 jobs. Shown in the trophy case with the week range.
- **Monthly Maker trophy.** Awarded on the 1st for the month before when the user was active on at least 15 days.
- **Level medals.** A medal for every 5th level (5, 10, 15 ...), shown with the level number.
- **Pip stickers.** Collectible stickers of Pip reactions. A new sticker is unlocked the first time a reaction is seen (celebration, level-up, error or easter egg types).

### 13.7 Local-only data (must be visible to the user)
**All XP, levels, badges, streaks, awards, skins, stickers and settings are saved only on the user's device. They are not stored online.** Show this wording:

- Short (Awards footer, under the XP bar on first launch): "Your XP, badges and streaks are saved only on this device. We do not store them online."
- First launch (one line from Pip, dismissible): "Your rewards live on this phone only. Nothing is stored online."
- Long (Settings, Data): "Your XP, levels, badges, streaks and awards are saved only on this device. We do not store them online and we cannot restore them. If you clear the app data, uninstall, or switch phones, they start again. You can save a backup file yourself in Settings and load it on another device."

Implementation rules:
- Storage: IndexedDB (and Capacitor Preferences for tiny values). No network call is ever made with progress data. A unit test and a network-mock end-to-end test must prove that finishing a job sends **zero** requests that contain progress data.
- Android: `allowBackup="false"` plus extraction rules that exclude all app data (section 5.5), so Google's cloud backup cannot copy it.
- **Backup file** (optional, user-made): Settings, Data, "Save a backup file" writes `imageswissknife-progress-YYYYMMDD.json` (versioned, with a checksum) to a place the user picks; "Load a backup" validates it and **merges** (takes the larger value of each counter, the union of badges and skins). Never upload it anywhere.
- "Reset my progress" needs a confirmation with Pip looking sad (`er-sad`) and cannot be undone.
- Data model (version 1; migrate with explicit steps):
```ts
interface Progress {
  v: 1; installId: string;                       // random id made on first launch, never leaves the device
  xp: { total: number; level: number; inLevel: number };
  streak: { current: number; best: number; lastDay: string; shields: number };   // dates as YYYY-MM-DD in local time
  daily: { date: string; xpToday: number; jobsByTool: Record<string, number>; quests: { id: string; done: boolean }[]; chestOpened: boolean };
  counters: { jobsByTool: Record<string, number>; files: number; bytesSaved: number; shares: number; heic: number; pipTickles: number; carpetSeconds: number; pickups: number; bursts: number; infoOpened: string[] };
  badges: Record<string, { at: string }>;
  skins: { owned: string[]; equipped: Record<string, string> };
  awards: { id: string; at: string; label: string }[];
  seen: { transitions: Record<string, number>; saves: Record<string, number>; actions: Record<string, number>; reactions: Record<string, number>; last: Record<string, string[]> };
  stickers: string[];
  settings: Settings;
}
```
- Game logic is an **event reducer**: the pipeline emits `JobFinished {tool, bytesIn, bytesOut, files, ms, offline}`, the UI emits `InfoOpened`, `PipPickedUp`, and so on. The reducer returns the new state plus a list of **reward events** for the UI to animate (`xp`, `levelUp`, `badge`, `quest`, `chest`, `streak`). The UI queues them: at most two pop-ups on screen at once, each dismissible, none covering the Save button.
- Unit-test the reducer thoroughly (streak edge cases across midnight, DST and time-zone changes; repeat decay; the daily cap; quest picking determinism; import merge).

## 14. Search engines: every tool and preset is its own page, and the (i) text is in the page

The owner wants "crop photo to 1:1" to find the app, without separate throw-away landing pages and without building the website twice. The answer: **one app, many real URLs, pre-rendered at build time**.

### 14.1 Principles
1. Every tool and every popular preset has its own **clean URL** that opens the same app with that tool preselected. The user never leaves the app shell.
2. Each URL is **pre-rendered to static HTML** at build time with its own title, description, H1, canonical link, structured data, and the (i) text. A crawler that does not run JavaScript still gets all of it.
3. Pages must contain **unique, useful text**, not the same paragraph with a number changed.
4. The same bundle runs inside the Android app. The routes work there too; the SEO tags are simply unused.
5. Everything is generated from data: `data/presets.json` and `content/tools/*.json`. Adding a preset adds a page.

### 14.2 URL design
- Lowercase, hyphen-separated, no query strings for indexable pages, no trailing slash, stable forever (never rename; add redirects if you must).
- Patterns:

| Pattern | Examples |
|---|---|
| `/<verb>-<object>-<spec>` for a popular spec | `/crop-photo-1-1`, `/crop-photo-4-5`, `/crop-photo-16-9`, `/compress-image-to-200kb`, `/compress-image-to-100kb`, `/compress-image-to-1mb`, `/resize-image-to-1080x1080` |
| `/<from>-to-<to>` for conversions | `/heic-to-jpg`, `/jpg-to-png`, `/png-to-webp`, `/webp-to-jpg`, `/jpg-to-pdf`, `/pdf-to-jpg` |
| Tool pages | `/photo-location-checker`, `/remove-photo-location`, `/remove-exif-data`, `/video-to-gif`, `/gif-to-mp4`, `/qr-code-generator`, `/image-color-palette` |
| Exam and ID | `/exam-photo/upsc`, `/exam-photo/neet`, `/exam-photo/ssc`, `/passport-photo-size/india`, `/passport-photo-size/us` |
| Hubs | `/crop-photo`, `/compress-image`, `/convert-image`, `/resize-image`, `/photo-privacy`, `/gif-and-video`, `/tools` |

- Generate a route list file `routes.json` from the data in CI and fail the build if two routes share a title or a canonical.
- Plan **about 25 tool pages and 60 to 120 preset pages** for launch. Create preset pages only for presets that have real search demand and a **verified source** in `presets.json` (the `confidence` field). Do not publish pages for unverified presets.

### 14.3 Per-route content (`content/tools/<id>.json`)
```json
{
  "id": "crop-1-1",
  "route": "/crop-photo-1-1",
  "parent": "/crop-photo",
  "title": "Crop photo to 1:1 (square), free and private",
  "h1": "Crop photo to 1:1",
  "description": "Crop any photo to a perfect 1:1 square, 1080 x 1080 pixels, in one tap. Runs on your device. Nothing is uploaded.",
  "intro": "Two short, visible sentences that say what this tool does and for whom.",
  "info": "The (i) text, 60 to 120 words. See 14.5.",
  "steps": ["Pick your photo.", "Choose 1:1 Square.", "Drag the photo inside the frame.", "Tap Done, then Save."],
  "faq": [{ "q": "Does my photo get uploaded?", "a": "No. Everything happens on your device." }],
  "related": ["/crop-photo-4-5", "/crop-photo-16-9", "/resize-image-to-1080x1080"],
  "preset": "ig-post-square",
  "tool": "G02"
}
```
- Title at most 60 characters, description at most 155, one H1, descriptive H2s, alt text on images.
- Preset pages add facts from `presets.json` (pixels, aspect, maximum KB, formats, the source and "check the official notice").
- Hand-write the intro and (i) text for the top 25 pages. For the long tail, compose from a template **plus** the preset's own facts and a small set of varied sentence blocks; reject pages whose text is more than 70 percent similar to another page (add a similarity check to CI).
- Structured data (JSON-LD): `WebApplication` (name, offers free, operatingSystem "Any", applicationCategory "MultimediaApplication"), `BreadcrumbList`, `HowTo` from `steps`, `FAQPage` from `faq`. Validate in CI.
- Open Graph and Twitter tags with a generated share image (Pip plus the page's H1) made at build time.

### 14.4 The (i) info bubble (requirement 3a)
Every tool has a small **(i)** bubble next to its title. The mock-up shows it (italic serif "i" in a ring; tap opens a card with a heading, the text, and a small footer "This text is in the page from the first load").
- The text lives in **the HTML from the first load**, not fetched later. Markup:
```html
<h1>Crop photo to 1:1</h1>
<button class="info-btn" type="button" aria-expanded="false" aria-controls="info-crop-1-1" aria-label="About this tool">i</button>
<details id="info-crop-1-1" class="info-card"><summary class="visually-hidden">About: Crop photo to 1:1</summary><p>...the full (i) text...</p></details>
```
  Style the `<details>` as a floating bubble, open it from the button, and close it on outside tap or Escape. The same component renders the sidebar and tile (i) markers; each links to the same text.
- Search engines can index text inside collapsed `details`, but it may get less weight than visible text. So the **first two sentences of every (i) text are also shown as the visible intro paragraph** on the page. The full text stays in the bubble.
- Write the (i) text in this order: what the tool does, who it helps, formats and limits, the privacy line ("Everything runs on your device, so nothing is uploaded. Free, with no sign-up."). 60 to 120 words. Plain words.
- Two approved examples:
  - **Crop photo to 1:1:** "Crop a photo to 1:1, a perfect square of 1080 × 1080 pixels, for profile pictures and feed posts. Drag the photo inside the frame, or switch to 4:5, 16:9 or passport size in one tap. Save as JPG, PNG or WebP. The photo never leaves your device. Free, with no sign-up."
  - **Compress image to 200 KB:** "Compress an image to 200 KB or any size you choose. Pip shrinks JPG, PNG, WebP and HEIC photos until they fit exam forms, job portals and email limits, and keeps the picture as sharp as the limit allows. Everything runs on your device, so nothing is uploaded. Free, with no sign-up."
- Track `infoOpened` for the quest and the "Curious Mind" badge.

### 14.5 Build pipeline
1. `tools/gen-routes` reads `presets.json` and `content/tools/*.json`, writes `routes.json`.
2. A prerender step renders each route to `dist/<route>/index.html` using the real app components (for example `preact-render-to-string`, or a Playwright prerender if components cannot run on the server). The page includes the tool shell, the visible intro, the steps, the (i) text, the FAQ and related links. The app then **hydrates** and takes over; it must not flash or reflow.
3. Generate `sitemap.xml` (with `lastmod`), `robots.txt`, a `404.html` that redirects to `/tools`, and the share images.
4. Lazy-load Pip, sounds and effects after the main content is interactive. They must not delay the Largest Contentful Paint.
5. **Core Web Vitals** targets: LCP under 2.5 s on a mid phone with a slow 4G profile, CLS under 0.1, INP under 200 ms. App shell JS under 200 KB gzip. Self-hosted fonts with `font-display: swap`.
6. Lighthouse CI (SEO, accessibility, performance) must pass on 10 sample routes.
7. **Android**: the same `dist` is copied into the app. History-API routing opens any route directly. Optional later: Android App Links so that a tapped website link opens the app.

### 14.6 After launch (the owner does these)
Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools; watch coverage and queries; ask the developer to improve the pages that get impressions but few clicks.

## 15. Ads, privacy and compliance

1. **Ad placement.** Only on the result screen (a labelled "Ad" slot) and an optional interstitial after a finished job (never in the first session, at most one per three finished jobs, never within 60 seconds of the previous one, never on exit). Never in the editor, during progress, or over Pip. Use `@capacitor-community/admob` on Android and one web ad script on the website, both loaded only when the result screen is about to show.
2. **Consent.** Google UMP consent flow for the regions that need it, with a "Privacy choices" entry in Settings. Honour the answer before any ad request.
3. **Play Data safety form** must declare the data the ad SDK collects. The in-app and store wording stays: "Your images never leave your device." Do not claim "no data collected".
4. **Privacy policy** page on the website and linked in the app. Plain English. Say: images are processed on the device, progress is stored on the device, ads are served by third parties and may use an advertising identifier.
5. **Audience.** The mascot is friendly, but the app is for everyone. Treat it as a general-audience app (not "Designed for Families") unless the owner decides otherwise; ask before the store listing (see section 18).
6. **Trademarks.** Preset names may mention platforms as plain text ("Instagram post"). Never use third-party logos. Never use the Swiss flag or cross.
7. **Preset data.** Show "check the official notice" on exam and ID presets and the `lastVerified` date. Never promise acceptance.
8. **Licence automation.** CI runs a licence scan (`license-checker-rseidelsohn` or `license-report`), fails on any package not in the reviewed allow-list (`data/libraries.json` from the report) or with a deny-listed licence, checks wrapper **and** bundled native or WASM code, and creates a CycloneDX SBOM per release. The app has an "Open-source licences" page generated from it. In the `strict` profile, any Tier B package (LGPL, MPL, CDDL) fails the build.
9. **Things a human must check** (list them in the repo as `LEGAL-TODO.md`): HEVC and HEIC patent exposure, LGPL packaging if `extended` is ever used, ad SDK disclosures, Play policy fit, and the final privacy policy.
10. **Security basics.** Strict CSP on the web (`default-src 'self'`, `script-src 'self' 'wasm-unsafe-eval'` plus the ad hosts only on the result route), no `eval`, sanitise any text that comes from file metadata before showing it, never trust file names, and cap memory use for very large images (decode in tiles or downscale first).

## 16. Quality: tests, CI and performance

- **Unit tests** (`vitest`): geometry and crop maths, the target-KB search (never exceed, closest, 20 percent tolerance modes), preset schema validation, metadata strippers on golden files (verify GPS is really gone and the image is unchanged), the game reducer, the effect picker (no repeat, weighting, seeding), the sound settings model.
- **Golden files** in `testdata/` as listed in `report/10 section 4`: iPhone HEIC and JPEG, Pixel and Samsung motion photos, DSLR RAW and JPEG, WhatsApp-processed, screenshots, CMYK JPEG, 16-bit PNG, animated GIF/WebP/APNG, 4K HEVC video, portrait phone video, a 48 MP photo.
- **End-to-end** (`@playwright/test`): the main flows (shrink, crop 1:1, remove location, GIF), in both themes and both layouts, plus a test that **no network request carries image or progress data**.
- **Visual tests**: the freeze-frame tests from 11.6; Pip pose snapshots for the 10 moods in both themes.
- **Accessibility**: automated axe checks, keyboard-only run-through, TalkBack run-through on Android, reduce-motion run-through (every effect becomes a cross-fade), 200 percent font size run-through.
- **Performance**: a repeatable benchmark on the low-end phone (12 MP JPEG to WebP, 48 MP resize, 30 s video to GIF), the start-up budget, and an effect frame-time report (p50 and p95 per effect). Fail CI if a budget regresses by more than 15 percent.
- **CI** (GitHub Actions or similar): lint, type-check, unit, build both targets, licence scan, SBOM, route and similarity check, Lighthouse CI, Android debug build, and a nightly Playwright run. Keep the repo free of secrets; keystores come from CI secrets.

## 17. How you must work

1. **Start by reading, then plan.** First reply with: (a) a list of anything unclear or contradictory, (b) your proposed repo structure, (c) the Phase 0 spike plan with success criteria, (d) the milestone list below with your estimates. Wait for the owner's go-ahead on open questions (section 18) that block you; start the rest.
2. **Work in milestones.** After each milestone: what works (with a screen recording or screenshots for UI), what does not, measured numbers (bundle size, frame times, start-up), tests added, licence scan result, and the next milestone. Be honest about anything unverified or untested on a real device.
3. **Small, reviewable commits** with clear messages. One feature per pull request.
4. **Never invent facts** about libraries. Check the licence of every new dependency (including what is inside it) and add it to the allow-list with a reason. Prefer fewer, smaller dependencies.
5. **Data-driven.** Presets, effects, actions, sounds, badges, quests and copy are data files, not hard-coded.
6. **Do not** add analytics, accounts, cloud sync, AI, tracking pixels, or anything that sends images or progress off the device. **Do not** add on-demand downloads to the Android app. **Do not** change the visual style without asking.
7. **Ask before**: adding a dependency with a non-permissive licence, changing the application id, changing a decision in section 2, spending more than 10 percent over a budget, or removing a feature.

### Milestones

| # | Milestone | Done when |
|---|---|---|
| M0 | Repo, CI, Phase 0 spikes | Monorepo builds web and Android; spike report with go or no-go on: worker pipeline, `OriginalFilePlugin` GPS, WebCodecs on real phones, real bundle sizes, preset UI, **Pip rig at 60 fps with one effect and one sound** |
| M1 | Shell and first tools (web) | App shell, themes, tool shell, file pick and drop, C01, C03, C06, P01, P02, G01, G02, G03 working with the preset browser; unit and golden tests pass |
| M2 | Android shell and native | Capacitor app runs M1; share target; `OriginalFilePlugin`; M01, M02, M03 location and metadata tools; permission flows with Pip |
| M3 | Pip v1 | Pip port in `packages/pip`; 10 moods; eyes follow; tummy radial menu; speech bubbles; skins hook; both themes; hit regions; keyboard access |
| M4 | Effects, sound and progress v1 | `packages/fx` and `packages/sound`; 8 transitions, 8 save effects, 6 bars, the picker with memory, intensity and reduce-motion; sound engine, sound settings with per-sound switches, first-run sound question, haptics |
| M5 | Game v1 | XP, levels, ranks, streaks, quests, chest, 12 badges, Awards screen, local-only copy, backup and reset; reducer tests |
| M6 | SEO and content | `routes.json`, prerender, per-route head and JSON-LD, (i) bubbles on every tool with text in the HTML, sitemap, hubs, 25 hand-written tool pages, Lighthouse CI green |
| M7 | Ads and MVP polish (Phase 1 done) | Ad slots and consent, G08 exam kits, P05, C08, U04, Licences page, store listing assets, closed beta build, all budgets met |
| M8 | Pip v2 | Every zone with tap and dwell reactions, pick-up and carpet physics, gestures, idle actions, sleep, the first 3 actions per service |
| M9 | Full catalogues | All 32 transitions, 30 save effects, 12 bars, all 90 service actions, celebrations, level-ups, badges, errors, easter eggs, all 262 sounds wired, all 45 badges, skins, awards, Effects Lab, freeze-frame tests |
| M10 | Phase 2 tools | GIF and video, privacy scan, AVIF/JXL, RAW preview, QR and colour tools, gallery cleaner, background batch |
| M11 | Languages | Hindi and Gujarati strings and fonts, locale-aware preset order |
| M12 | Release hardening | Store listing, Data safety form, privacy policy, accessibility audit, crash-free run on the device matrix, final licence audit |

## 18. Open questions for the owner (ask them early)

1. Final **app name** and **application id** (default `app.imageswissknife`), and the website domain.
2. Which **ad network** for the website? (AdMob for Android is assumed.)
3. Is the **target audience** general (13 and over) or does the owner want a family-friendly listing? This changes ad and data rules.
4. Does the owner want an **opt-in reminder notification** for streaks? (Default: no notifications.)
5. Languages after English: confirm Hindi and Gujarati, and in which order.
6. Is a **legal review** planned for the `extended` licence profile? Until the owner says yes, ship `strict` only.
7. Should the **backup file** also be allowed to be saved to Google Drive by the user (their own choice, through the system file picker)? The app itself never uploads it.
8. Final **Pip voice**: keep the synthesised placeholder voice, or commission recorded sounds?

## 19. Appendix A: sample route table (launch set, extend from presets.json)

| Route | H1 | Title (max 60) |
|---|---|---|
| `/compress-image-to-200kb` | Compress image to 200 KB | Compress image to 200 KB, free and private |
| `/compress-image-to-100kb` | Compress image to 100 KB | Compress image to 100 KB, free and private |
| `/compress-image-to-1mb` | Compress image to 1 MB | Compress image to 1 MB, free and private |
| `/crop-photo-1-1` | Crop photo to 1:1 | Crop photo to 1:1 (square), free and private |
| `/crop-photo-4-5` | Crop photo to 4:5 | Crop photo to 4:5 for Instagram posts |
| `/crop-photo-16-9` | Crop photo to 16:9 | Crop photo to 16:9 for thumbnails and banners |
| `/resize-image-to-1080x1080` | Resize image to 1080 × 1080 | Resize image to 1080 × 1080 pixels, free |
| `/heic-to-jpg` | Convert HEIC to JPG | HEIC to JPG converter, free and private |
| `/jpg-to-png` | Convert JPG to PNG | JPG to PNG converter, free and private |
| `/png-to-webp` | Convert PNG to WebP | PNG to WebP converter, free and private |
| `/jpg-to-pdf` | Convert JPG to PDF | JPG to PDF, free and private |
| `/photo-location-checker` | Where was this photo taken? | Photo location checker, see where a photo was taken |
| `/remove-photo-location` | Remove location from a photo | Remove GPS location from a photo, free |
| `/remove-exif-data` | Remove EXIF data | Remove EXIF data from photos, free and private |
| `/video-to-gif` | Video to GIF | Video to GIF maker, free and private |
| `/qr-code-generator` | QR code generator | QR code generator, free, no sign-up |
| `/exam-photo/upsc` | Photo and signature for the UPSC form | UPSC photo and signature size tool (check official notice) |
| `/exam-photo/neet` | Photo and signature for the NEET form | NEET photo and signature size tool (check official notice) |
| `/passport-photo-size/india` | Passport photo size for India | Passport photo size India, crop and print sheet |

## 20. Appendix B: quick glossary
- **Pip Prime**: the mascot and brand character. **Rig**: the SVG drawing that can be posed by code. **Zone**: a body part that reacts. **Clip**: one animation with an id and a sound.
- **Effect**: a transition, a save effect or a progress bar. **Picker**: the random choice with memory. **Tier**: how heavy an effect is to draw.
- **Strict / Extended**: licence build profiles. **Pack**: a lazily loaded group of codecs (web only; on Android everything is bundled).
- **(i) bubble**: the small info button whose text is part of the page HTML.

=== END OF PROMPT ===
