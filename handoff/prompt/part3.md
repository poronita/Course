## 13. Rewards and gamification (`packages/game`)

The owner likes the game feel (XP, levels) and wants **more reward**: virtual awards and badges so that finishing a job feels good. The system must feel grown-up and trustworthy, never pushy.

### 13.1 Principles
1. Rewards appear **after** a job, never block the flow, and can be dismissed with one tap.
2. No purchases, no timers that pressure the user, no loot boxes with money, no notifications unless the user turns reminders on (off by default).
3. Everything is **local**. See 13.7.
4. All numbers live in `data/gamification.json` so they can be tuned without code changes.

### 13.2 XP
{{XPTABLE}}

Extra rules: first job of the local day +{{FIRSTDAY}} XP; streak bonus +{{STREAKBONUS}} XP per streak day, capped at {{STREAKCAP}} days, once per day; badge XP: bronze {{BR}}, silver {{SI}}, gold {{GO}}; each finished quest +{{QUESTXP}} XP. **Repeat decay** per tool per day: the first 3 jobs give full XP, jobs 4 to 8 give half, later ones give 10 percent. **Daily cap {{DAILYCAP}} XP.** Show the XP pop-up as "+40 XP" floating up from the result, and tick the XP bar with a soft coin sound (`gm-xp-tick`, rate limited).

### 13.3 Levels and ranks
- XP needed to go from level L to L+1: `50 × L + 150` (level 7 needs 500, level 8 needs 550). The mock-up shows illustrative numbers; use this formula.
- Ranks by level: {{RANKS}}.
- Level ring in the header shows progress as a gold arc; the level number is inside it.
- Level-up plays one of the 10 level-up clips (section 10.2), then shows the rank card if the rank changed.

### 13.4 Streaks
{{STREAKRULES}}

### 13.5 Daily quests and the chest
{{QUESTRULES}}

Quest pool (20 quests, add more later):

{{QUESTTABLE}}

**Daily chest** (opens when all three quests are done; one per day). Loot is chosen by weight:

{{CHESTTABLE}}

### 13.6 Badges, skins and awards
**45 badges** with bronze, silver and gold tiers. Medal art is in `assets/badges`. Locked badges show as grey silhouettes with their rule, so people know what to aim for. Unlocking plays a badge reaction (10.3), the medal drops in with a shine, and the badge XP is added.

{{BADGETABLE}}

**Pip skins** (cosmetic, earned by playing):

{{SKINTABLE}}

**Awards**
{{AWARDLIST}}

### 13.7 Local-only data (must be visible to the user)
**All XP, levels, badges, streaks, awards, skins, stickers and settings are saved only on the user's device. They are not stored online.** Show this wording:

- Short (Awards footer, under the XP bar on first launch): "{{LOCALSHORT}}"
- First launch (one line from Pip, dismissible): "{{LOCALFIRST}}"
- Long (Settings, Data): "{{LOCALLONG}}"

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
