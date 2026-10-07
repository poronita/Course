# Image Swiss Knife: asset pack

Everything visual and audible that the Android Studio project can start from. Open `reference/pip-prime-mockup.html` first: it is the approved look and motion.

| Folder | What is inside | How to use it |
|---|---|---|
| `character/svg/<dark or light>/` | Pip Prime in 16 poses (10 moods, a blink frame, an open mouth, and 4 tool poses: clapper, crop, lens, scissors). Standalone SVG, 400 x 400. | Splash screens, store art, stickers, fallbacks, design work. |
| `character/png/<theme>/` | The same poses as transparent PNG at 256, 512 and 1024 px. | Notifications, share images, places that cannot use SVG. |
| `character/layers/<theme>/` | Pip split into 28 stacked layers (29 in the light theme, which adds the outline) (body, belt, eyes, lids, mouth, arms, hands, feet, blade quiff, keyring and more) with `index.json` (order, bounding box, pivot, parent). `preview.html` rebuilds him with a slider per layer. | The base for new animations, skins and hit regions. Artists can redraw any layer. |
| `character/rig/` | The animated source (JavaScript) in both colours, plus `demo.html`. | Port it to TypeScript in `packages/pip`. Read its `README.md`. |
| `icons/svg/` and `icons/vector-drawable/` | 55 line icons (24 x 24). The Android folder has `ic_*.xml` VectorDrawables. | Android: copy `ic_*.xml` into `res/drawable`. Web: use the SVGs. |
| `badges/svg/` | Medals (bronze, silver, gold, locked, blank), 8 badge medals with icons, level medal, trophy, chest (open and closed), flame, XP coin, crown, ribbon, rank pills, Golden Blade skin. | The other badges in `data/gamification.json` are the **blank medal of the tier plus the icon** named in the data. Compose them in code. |
| `app-icon/` | Adaptive icon foreground and background, a themed single-colour version (`ic_launcher_monochrome-432.png`, white with alpha, for Android 13 themed icons), the 512 px Play Store icon, a 1024 px maskable PNG, favicon. Dark (Turkish blue Pip) is the default, light is an option. | Android Studio: File, New, Image Asset, or copy the XML files. |
| `palette/` | `colors.json`, `colors.xml`, `colors-night.xml` (Android), `tokens.css` (web), `typography.md`. Names start with `isk_`. | Copy into `res/values` and `res/values-night`, and into the web styles. |
| `sounds/` | 262 placeholder sounds as `.ogg` (1.7 MB total), `sounds.json` manifest, `_report.txt`. Synthesised from scratch (CC0), so no licence risk. | Wire to the effects by id. Replace with final audio under the same file names later. |
| `reference/pip-prime-mockup.html` | The approved 60-second mock-up (dark and light, app and website). | Visual truth for layout, colour and motion. |
| `MANIFEST.json` | Every file with its size. | Checking nothing is missing. |

## Importing into Android Studio
- **VectorDrawables:** copy `icons/vector-drawable/*.xml` and `app-icon/*.xml` into `app/src/main/res/drawable`. For SVG art such as Pip, use File, New, Vector Asset, Local file. Complex gradients may not convert exactly; if one looks wrong, use the PNG.
- **PNG:** put them in `res/drawable-nodpi`, or keep them in the web assets for the Capacitor layer.
- **Colours:** merge `palette/colors.xml` into `res/values/colors.xml` and `palette/colors-night.xml` into `res/values-night/colors.xml`.
- **Capacitor note:** the app screens are web pages inside the Android WebView, so the SVG rig, icons, badges and sounds are used **directly in the web layer**. The VectorDrawables and PNGs are for native parts: launcher icon, splash screen, notifications.

## Known limits
- The launcher monochrome icon is derived automatically from the foreground (it keeps the round plate as a faint disc). A designer should redraw a clean one-colour silhouette before release.
- Some SVG gradients may not convert exactly in Android Studio's Vector Asset tool. Use the PNGs for those.
- The sounds are synthesised placeholders. They pass automatic checks (level, fades, duration, loops) but have not been judged by ear. Expect to replace some, especially Pip's voice.
- Pip has no separate legs or ears (see `character/rig/README.md`).

## Licence
All art, the rig and the sounds belong to the project owner. Fonts are SIL OFL. The sounds are CC0 and synthesised.
