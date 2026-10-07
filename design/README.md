# UI Style Lab

Open `ui-style-lab.html` in a browser. It is one self-contained file and needs no server.

The page shows sixteen UI directions for Image Swiss Knife in two rounds. Each one tells the same 40-second story: pick a photo, shrink it to 196 KB for an exam form, crop it for Instagram, find and remove the location, turn a video into a GIF, then save. Use the drop-down to switch style and the App / Web toggle to switch layout. The timeline can be paused, scrubbed and slowed down.

| # | Style | Big idea |
|---|---|---|
| 1 | Swiss Blade | Every tool folds out of one red knife. |
| 2 | Say It | Say what you want in one sentence by tapping coloured words. |
| 3 | Big & Calm | One question per screen, in plain words. |
| 4 | Clay Buddy | A clay mascot does the work while you watch. |
| 5 | Aurora Glass | Cinematic light and glass, with plain words and big buttons. |
| 6 | Smart Drop | Drop in a file and tap the suggestion bubble that fits. |
| 7 | Sticker Pop | Loud stickers and stamps, with one big button. |
| 8 | Recipe Blocks | Snap tools together once and reuse the recipe forever. |
| 9 | Pip Pro | A detailed, professionally lit mascot with XP, quests and a radial quick menu. |
| 10 | Bolt Control | A robot co-pilot in a mission-control screen, with ranks and mission stamps. |
| 11 | Lumi Deep | A glowing jellyfish spirit; every result becomes a pearl on a necklace. |
| 12 | Quest Map | A fox explorer on an adventure map where each tool is a level. |
| 13 | Mochi Cards | A lucky cat dealer; every result is a collectible card from a card pack. |
| 14 | Panda Dojo | A sensei panda with belt ranks and an ink-brush progress bar. |
| 15 | Cosmo Launchpad | An astronaut with missions and patches; progress bars are hyperspace jumps. |
| 16 | Sprout Garden | A plant companion that grows; every result becomes a plant in the garden. |

Styles 1 to 8 are round 1. Styles 9 to 16 are round 2: gamified, with a character you can tap for a quick tool menu, compact layouts, and a different progress bar for each job. Press **Shuffle bars** to see another set of progress bars for the same jobs.

To change a style, edit `src/styles/NN-id.js` and run `node build.mjs`. `CONTRACT.md` explains the engine and the shared story.
