# Image Swiss Knife: project log

A running record of what the product owner asked for, what was decided, and what was delivered. Newest entries are at the bottom. Keep adding to it after each round.

## Product in one paragraph

Image Swiss Knife is a free, ad-supported image toolkit, offered as a website and an Android app. All processing happens on the user's device; there are no servers from the owner's side. It uses only open-source libraries that are free for commercial use. There are **no AI features**. The plan is to win on experience: easy, clean, fun, visually stunning, and simple enough for a grandfather to use.

## Standing decisions

| # | Decision | Where it came from |
|---|---|---|
| D1 | 100 % client-side on the web; the Android app can use native APIs where they help. | First brief |
| D2 | Only licences that allow free commercial use. MIT, BSD and Apache are preferred. LGPL, MPL and CDDL go only into an "Extended" build, and only after legal review. GPL and AGPL are rejected. | Research round |
| D3 | No AI tools (the background remover was dropped). | Research round |
| D4 | Monetised with ads. Ads appear only after a job is finished, never during a task. | Research and UI rounds |
| D5 | The Android app is **one full download**, with no on-demand packs. | Message after the app-size question |
| D6 | One codebase for web and Android (a PWA plus a Capacitor wrapper). The owner will not build twice. | UI round 3 |
| D7 | UI direction: the **Pip Pro** style (style 9), which is gamified and has a mascot. | UI round 3 |
| D8 | The mascot becomes the brand identity. It must be recognisable from far away and memorable after one look. | UI round 3 |
| D9 | The site must be SEO friendly: every tool and popular preset has its own crawlable URL, and each tool's info (i) bubble text is in the HTML at load. | UI round 3 |
| D10 | **Pip Prime** is the mascot. Colour: Turkish blue (dark theme) and creamy white (light theme). The red was dropped. | UI round 4 |

## Timeline

### 1. First brief
- **Asked for:** a tool for both web and Android, covering converters, compression to a target size or pixel count, a photo location checker, cropping to a set size, GIF, WebP and WebM tools, video to frames or GIF, and basic colour edits. Study nine rival tools and suggest extra features.
- **Delivered:** the competitor study and a full function list.

### 2. Function catalogue
- **Asked for:** every non-editing image function that can run locally (the browser where possible, the app for the rest), including rare and futuristic ones, using only open-source tools that are free for commercial use.
- **Delivered:** the catalogue (C, P, G, M, V and U groups in `report/README.md`).

### 3. Deep research on functions 1, 2, 3, 4, 5 and 7
- **Asked for:** a `report/` folder of point-wise `.md` files, with licence checks, capabilities, library size and weight in the app, separate sections for base tools and for creative uses (social crop presets and so on), and a names-only list of rejected sources. This is input for the owner's AI that will build the app.
- **Delivered:** `report/00` to `report/10`, the data files, the licence register and the size budget. Commits `f2c1927` and `672b54f`, pull request #1.

### 4. Parallel research merge
- **Asked for:** fold in the owner's own research `.docx`.
- **Delivered:** `report/11-parallel-research-reconciliation.md` and the Strict versus Extended build profiles.

### 5. Formats and size
- **Asked:** how many formats are supported, and how big the Play Store app is.
- **Answer:** about 20 input formats and about 17 output formats. The Lite install is roughly 8–12 MB and Standard roughly 12–18 MB (estimates, not measured).

### 6. On-demand downloads
- **Asked:** how keeping the app small and downloading the rest later would work.
- **Answer:** use Play Asset Delivery, or static files from the website.
- **Decision:** the owner chose one full download (D5).

### 7. UI round 1: eight directions
- **Asked for:** 8 different UI ideas as one HTML file of motion graphics, each about 40 s long, with a style drop-down, an App/Web toggle and timeline controls.
- **Delivered:** `design/ui-style-lab.html`, styles 1 to 8 (Swiss Blade, Say It, Big & Calm, Clay Buddy, Aurora Glass, Smart Drop, Sticker Pop, Recipe Blocks).
- **Published:** https://claude.ai/artifact/APu3tA3MjzRCZx1XexE8e7

### 8. UI round 2: eight gamified directions (styles 9 to 16)
- **Owner liked:** Clay Buddy plus the game feel.
- **Asked for:**
  - a more detailed, expressive character that you can tap to open a quick menu;
  - a professional look rather than a cartoon;
  - a more evolved game layer;
  - minimal clicks and a compact layout;
  - beautiful progress animations that make waiting feel short, with 3 or 4 bar styles shown at random;
  - unique transition, process and finish effects.
- **Delivered:** styles 9 to 16 (Pip Pro, Bolt Control, Lumi Deep, Quest Map, Mochi Cards, Panda Dojo, Cosmo Launchpad, Sprout Garden), plus the engine's progress-bar library, screen transitions and a "Shuffle bars" button. Same artifact link.

### 9. UI round 3: Pip Pro chosen, character casting
- **Owner chose:** the Pip Pro style.
- **Asked for:**
  1. **More reward:** keep XP and levels, and add virtual awards and badges so finishing a job feels more rewarding.
  2. **A stronger mascot:** Pip looks low-effort. Make the mascot stylish, detailed, interactive and reactive, and so memorable that someone seeing it on another person's screen from far away knows it is Image Swiss Knife.
  3. **Search engines:** each function should be findable separately (for example "crop photo to 1:1"), with dedicated pages if needed, while keeping the integrated app feel.
  4. **Info bubbles:** each function gets a small (i) bubble whose detailed text loads with the page, so crawlers can read it. Build everything once for both web and Android.
  5. **Characters first:** design 8 mascot characters as one HTML motion-graphic file, choose one, then update the app mockup.
  6. **Keep a record of the chat.** That record is this file.
- **Delivered:** this log and `design/character-lab.html`, the Mascot Casting Room, with 8 interactive candidates:
  1. Pip Prime: a red knife-handle body with a tool-flipping blade quiff.
  2. Blink: a camera-lens cyclops whose shutter blades blink.
  3. Snip: a crab with scissor claws.
  4. Moxie: a cat whose tail is a multi-tool.
  5. Hoot: an owl with lens eyes and blade ear tufts.
  6. Dot: the app-icon squircle with a face and a steel corner, which morphs into tools.
  7. Alpi: an alpine ibex with knife-blade horns and a red scarf.
  8. Nib: a hedgehog with blade spines that spins as the loader.

  Each candidate has 10 moods, follows the pointer, reacts to pokes, and is shown in recognition tests and a silhouette line-up.
- **Published:** https://claude.ai/artifact/A8heE81CL3ugiLSfBp7F4Z
- **Note:** a usage limit interrupted the first attempt. The drafts were kept, then reviewed and polished after the reset.
- **Next:** the owner picks a character. Then update the Pip Pro mockup with the new mascot, the reward and badge system, and the SEO page structure.

### 10. UI round 4: Pip Prime mockup (current)
- **Owner chose:** Pip Prime, but not in red. Dark theme uses a little dark Turkish blue, light theme uses creamy white.
- **Asked for:** one HTML file with a single 60-second mockup, a dark/light theme toggle and an app/website toggle. Focus points repeated by the owner:
  1. Keep XP and levels, and add virtual awards and badges so the app feels more rewarding.
  2. A page for each type of function so search engines list each one (for example "crop photo to 1:1"), while the app still feels integrated. A separate page is not mandatory if the web app is listed anyway.
  3. An (i) bubble on each function with detailed text that loads with the app, so search crawlers can read it. One codebase for Android and web.
- **Delivered:** `design/pip-prime-mockup.html` (source in `design/mockup/`).
  - Pip Prime re-coloured per theme (`design/mockup/tint.mjs`).
  - Story: meet Pip, pick a photo, shrink to 200 KB, crop to 1:1 (tap Pip for the quick menu, open the (i) bubble), check and remove a location, video to GIF, level up with a trophy case and daily chest, results with one ad slot, then how search engines find each tool.
  - Game layer: XP ring and bar, streak, daily quests, bronze, silver and gold badges, rank titles, level-up moment, weekly trophy, daily chest with a Pip skin.
  - SEO shown: the address bar changes per tool and preset in website mode (`/compress-image-to-200kb`, `/crop-photo-1-1`, `/photo-location-checker`, `/video-to-gif`), the tab title changes, and the last scene shows search results and the page source with the (i) text in the HTML.
- **Next:** the owner reviews it and gives changes. After that, the build can start from the SEO plan below.

## SEO plan (D9), first draft for the next round

1. **One app, many URLs.** Each tool and each popular preset gets its own route, for example `/crop/1-1-square`, `/compress/to-200kb`, `/heic-to-jpg`, `/resize/1080x1080` and `/exam-photo/upsc`. Every route opens the same app with that tool preselected.
2. **Pre-render at build time.** Each route is generated as static HTML with its own `<title>`, meta description, H1, canonical link and JSON-LD (`SoftwareApplication`, plus `HowTo` or `FAQPage` where it fits). The app then takes over in the browser, so users still get one smooth app. Static hosting is enough; no server is needed.
3. **(i) bubble text is real HTML.** It is written into the page at build time and shown and hidden with CSS or a `<details>` element, not fetched later. Search engines index content inside collapsed elements, so this counts as normal page content as long as a user can open it.
4. **Same source for Android.** Capacitor ships the same bundle. The routes still work inside the app, and the SEO tags are simply unused there. Nothing is built twice.
5. **Generated from data.** The tool list and presets (`report/data/presets.json`) generate the routes, sitemap and info text, so adding a preset adds a page automatically.
