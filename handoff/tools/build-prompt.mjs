/* Assembles handoff/MASTER-PROMPT.md from prompt/part*.md and the catalogue data. Run: node build-prompt.mjs */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as C from '../catalogue/catalogue.mjs';
import * as G from '../catalogue/gamification.mjs';
const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '..');
const esc = s => String(s).replace(/\|/g, '\\|');
const table = (head, rows) => `| ${head.join(' | ')} |\n|${head.map(() => '---').join('|')}|\n` + rows.map(r => `| ${r.map(esc).join(' | ')} |`).join('\n');
const sec = s => `${(s / 1000).toFixed(1)} s`;
const effRows = list => list.map((e, i) => [i + 1, '`' + e.id + '`', e.name, e.desc, e.ms ? e.ms + ' ms' : 'follows the job', '`' + e.sfx.split(':').slice(0, 2).join(':') + '`']);
const effTable = list => table(['#', 'Id', 'Name', 'What the user sees', 'Length', 'Sound'], effRows(list));
const pad = n => String(n).padStart(2, '0');

const rep = {
  ZONES: table(['Zone', 'Tap or click', 'Dwell (stays near or on it without clicking)'], C.ZONES.map(z => [z.name, z.tap, z.dwell])),
  GESTURES: C.GESTURES.map(g => `- **${g.name}.** *How:* ${g.how} *What happens:* ${g.result}`).join('\n'),
  SERVICES: C.SERVICES.map((s, i) => `### 10.${'ABCDEFGHI'[i]} ${s.name} (10 actions)\n\n` + effTable(s.actions)).join('\n\n'),
  CELEBRATIONS: effTable(C.CELEBRATIONS), LEVELUPS: effTable(C.LEVELUPS), BADGES: effTable(C.BADGES), STREAKS: effTable(C.STREAKS), ERRORS: effTable(C.ERRORS), EGGS: effTable(C.EGGS),
  TRANSITIONS: effTable(C.TRANSITIONS), DOWNLOADS: effTable(C.DOWNLOADS), BARS: effTable(C.BARS),
  SOUNDCATS: C.SOUND_CATEGORIES.map(c => `| \`${c.id}\` | ${c.name} | ${C.ALL.filter(x => c.cats.includes(x.cat)).length} sounds |`).join('\n'),
  SOUNDTABLE: table(['Sound id', 'Plays with', 'Category', 'Family:variant', 'Length'], C.ALL.map(x => ['`' + x.id + '`', x.name, C.SOUND_CATEGORIES.find(c => c.cats.includes(x.cat)).id, '`' + x.sfx.split(':').slice(0, 2).join(':') + '`', x.sfx.split(':')[2] + ' s'])),
  XPTABLE: table(['Job type', 'What counts', 'Base XP'], G.XP_PER_JOB.map(r => [r[0], r[1], r[2]])),
  FIRSTDAY: G.XP_RULES.firstJobOfDay, STREAKBONUS: G.XP_RULES.streakBonusPerDay, STREAKCAP: G.XP_RULES.streakBonusCapDays, BR: G.XP_RULES.badgeBronze, SI: G.XP_RULES.badgeSilver, GO: G.XP_RULES.badgeGold, QUESTXP: G.XP_RULES.questDone, DAILYCAP: G.XP_RULES.dailyCap,
  RANKS: G.RANKS.map(r => `${r[0] === r[1] ? 'level ' + r[0] : r[1] >= 999 ? 'level ' + r[0] + ' and up' : 'levels ' + r[0] + ' to ' + r[1]}: ${r[2]}`).join('; '),
  STREAKRULES: G.STREAK_RULES.map(s => '- ' + s).join('\n'), QUESTRULES: G.QUEST_RULES.map(s => '- ' + s).join('\n'),
  QUESTTABLE: table(['Id', 'Quest text', 'Tool group', 'Count'], G.QUEST_POOL.map(q => ['`' + q[0] + '`', q[1], q[2], q[3]])),
  CHESTTABLE: table(['Loot', 'Weight', 'What the user gets'], G.CHEST_LOOT.map(l => ['`' + l.id + '`', l.weight, l.text])),
  BADGETABLE: table(['Id', 'Badge', 'Icon', 'Tier', 'How to earn it'], G.BADGES.map(b => ['`' + b[0] + '`', b[1], b[2], b[3], b[4]])),
  SKINTABLE: table(['Id', 'Skin', 'Slot', 'How to unlock'], G.SKINS.map(s => ['`' + s[0] + '`', s[1], s[2], s[3]])),
  AWARDLIST: G.AWARDS.map(a => `- **${a[0]}.** ${a[1]}`).join('\n'),
  LOCALSHORT: G.LOCAL_COPY.short, LOCALFIRST: G.LOCAL_COPY.firstRun, LOCALLONG: G.LOCAL_COPY.long,
};
let out = ['part1', 'part2', 'part3'].map(p => fs.readFileSync(path.join(root, 'prompt', p + '.md'), 'utf8')).join('\n');
out = out.replace(/\{\{([A-Z]+)\}\}/g, (m, k) => { if (!(k in rep)) throw new Error('missing ' + k); return rep[k]; });
fs.writeFileSync(path.join(root, 'MASTER-PROMPT.md'), out);
console.log('MASTER-PROMPT.md', out.length, 'chars,', out.split(/\s+/).length, 'words,', out.split('\n').length, 'lines');
