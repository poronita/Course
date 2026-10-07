/* Rewrites catalogue/catalogue.json and data/gamification.json from the .mjs sources. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as m from '../catalogue/catalogue.mjs';
import * as g from '../catalogue/gamification.mjs';
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
fs.writeFileSync(path.join(root, 'catalogue/catalogue.json'), JSON.stringify({ transitions: m.TRANSITIONS, downloads: m.DOWNLOADS, bars: m.BARS, services: m.SERVICES, celebrations: m.CELEBRATIONS, levelups: m.LEVELUPS, badges: m.BADGES, streaks: m.STREAKS, errors: m.ERRORS, eggs: m.EGGS, zones: m.ZONES, gestures: m.GESTURES, ui: m.UISOUNDS, game: m.GAMESOUNDS, voice: m.VOICE, soundCategories: m.SOUND_CATEGORIES, all: m.ALL }, null, 1));
fs.mkdirSync(path.join(root, 'data'), { recursive: true });
fs.writeFileSync(path.join(root, 'data/gamification.json'), JSON.stringify(g.data, null, 1));
console.log('ok');
