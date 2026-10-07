// Copies the Pip rig sources into handoff/assets/character/rig and generates the two tinted builds.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { tint, DARK, LIGHT } from '../../design/mockup/tint.mjs';
const here = path.dirname(fileURLToPath(import.meta.url));
const design = path.join(here, '..', '..', 'design');
const out = path.join(here, '..', 'assets', 'character', 'rig');
fs.mkdirSync(out, { recursive: true });
const rd = p => fs.readFileSync(path.join(design, p), 'utf8');
const pip = rd('characters/src/chars/01-pip.js');
fs.writeFileSync(path.join(out, 'cast.js'), rd('characters/src/cast.js'));
fs.writeFileSync(path.join(out, '01-pip.js'), pip);
fs.writeFileSync(path.join(out, 'pip-dark.js'), '/* Pip Prime, Turkish blue (dark theme). Generated from 01-pip.js with tint.mjs DARK map. */\n' + tint(pip, DARK, 'pip-dark', 'Pip Prime · Turkish blue'));
fs.writeFileSync(path.join(out, 'pip-light.js'), '/* Pip Prime, creamy white (light theme). Generated from 01-pip.js with tint.mjs LIGHT map. */\n' + tint(pip, LIGHT, 'pip-light', 'Pip Prime · Creamy white'));
fs.copyFileSync(path.join(design, 'mockup', 'tint.mjs'), path.join(out, 'tint.mjs'));
console.log('rig written to', out);
