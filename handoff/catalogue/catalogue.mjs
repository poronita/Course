/* Single source of truth for every effect, character action and sound in Image Swiss Knife.
   Format of each row: 'id | Name | what the user sees | ms | sfx'
   sfx = family:variant:seconds  (see ../tools/make-sounds.py for the synth families). */
const rows = (cat, text) => text.trim().split('\n').map(l => {
  const [id, name, desc, ms, sfx] = l.split('|').map(s => s.trim());
  return { id, name, desc, ms: +ms, sfx, cat };
});

/* ---------- 1. Screen transitions (32) ---------- */
export const TRANSITIONS = rows('transition', `
tr-iris | Iris open | A circle grows from the exact tap point and reveals the next screen. | 600 | whoosh:up:0.5
tr-wipe | Blade wipe | The new screen slides in behind a shiny steel edge, like a blade passing over. | 550 | whoosh:right:0.45
tr-curtain | Curtain split | The old screen splits down the middle and slides out to both sides. | 650 | whoosh:split:0.55
tr-blinds | Venetian blinds | Eight vertical slats rotate to show the new screen. | 700 | click:ratchet:0.6
tr-pixel-bloom | Pixel bloom | Square pixels pop up in random order until the new screen is complete. | 750 | pop:cascade:0.7
tr-diamond | Diamond open | A diamond-shaped window opens from the centre. | 600 | whoosh:up:0.5
tr-zoom-through | Zoom through | The old screen zooms past the camera while the new one settles from slightly large. | 600 | whoosh:rise:0.55
tr-card-flip | 3D card flip | The screen flips like a card around a vertical axis. | 650 | paper:flip:0.5
tr-push-parallax | Parallax push | The new screen pushes the old one away, background layers move at different speeds. | 500 | whoosh:left:0.4
tr-drop-bounce | Drop and bounce | The new screen drops from above, squashes, and bounces once. | 700 | thud:bounce:0.6
tr-blade-swing | Blade swing | The new screen swings out from a hinge like a pocket-knife blade opening, with a click at the end. | 650 | mech:snap:0.6
tr-shutter | Camera shutter | Seven shutter blades close over the old screen and open on the new one. | 600 | click:shutter:0.5
tr-film-roll | Film-strip roll | The old screen rolls up like a film strip and the new one rolls in. | 750 | mech:reel:0.7
tr-page-curl | Page curl | The corner of the old screen curls back to reveal the new one. | 700 | paper:curl:0.6
tr-ripple | Water ripple | A ripple spreads from the tap and bends the old screen into the new one. | 800 | water:ripple:0.75
tr-glitch | Glitch slice | Horizontal slices slide sideways with a quick colour split, then settle. | 450 | glitch:short:0.4
tr-liquid | Liquid morph | The tapped button melts into a blob that spreads and becomes the new screen. | 800 | water:blob:0.7
tr-ink | Ink splash | Ink splashes from the tap and floods the screen, then the new screen shows through. | 800 | water:splash:0.7
tr-confetti-sweep | Confetti sweep | A wave of confetti sweeps across and leaves the new screen behind it. | 750 | sparkle:sweep:0.7
tr-clock-wipe | Clock wipe | A clock hand sweeps around and reveals the new screen behind it. | 700 | click:tickrun:0.65
tr-spiral | Spiral twist | The old screen twists into a spiral and the new one unwinds. | 800 | whoosh:spiral:0.75
tr-gooey | Gooey merge | Blobs of colour merge like liquid metal and become the new screen. | 800 | water:blob:0.7
tr-shatter | Shatter and assemble | The old screen cracks into tiles that fly away while the new tiles fly in. | 850 | glitch:shatter:0.8
tr-mosaic | Mosaic resolve | The new screen starts as big blocks and sharpens to full resolution. | 700 | pop:cascade:0.65
tr-sunrise | Sunrise sweep | A band of warm light sweeps up the screen and the new screen glows in. | 800 | arp:up:0.7
tr-card-shuffle | Card shuffle | The old screen becomes a card, shuffles into a deck, and the new card is dealt on top. | 800 | paper:shuffle:0.75
tr-portal | Tummy portal | A round portal opens from Pip's tummy and the new screen grows out of it. | 800 | magic:portal:0.75
tr-pip-pull | Pip pulls the screen | Pip runs across the screen pulling the new screen behind him like a curtain. | 900 | voice:whee:0.6
tr-unzip | Unzip | A zipper runs down the screen and the new screen is behind it. | 700 | zip:down:0.6
tr-peel | Sticker peel | The old screen peels off like a sticker from one corner. | 700 | paper:peel:0.6
tr-tool-flip | Tool flip | Pip's blade quiff flips to the tool's icon, the icon scales up to fill the screen and becomes the new page. | 800 | mech:snap:0.7
tr-vortex | Vortex | The old screen is sucked into a point and the new one blooms from the same point. | 850 | whoosh:suck:0.8
`);

/* ---------- 2. Save / download / completion effects (30) ---------- */
export const DOWNLOADS = rows('download', `
dl-tray-drop | Drop into tray | The result card drops into a tray at the bottom and the tray bounces. | 900 | thud:soft:0.5
dl-paper-plane | Paper plane | The result folds into a paper plane and glides to the gallery icon. | 1100 | paper:fold:0.6
dl-confetti-cannon | Confetti cannon | Two cannons from the bottom corners fire confetti over the result. | 1500 | pop:cannon:0.9
dl-coin-shower | Coin shower | XP coins rain down and fly into the XP bar. | 1400 | coin:shower:1.0
dl-curve-to-gallery | Curve to gallery | The thumbnail shrinks and travels along a curve into the gallery icon, which wiggles. | 900 | whoosh:suck:0.6
dl-stamp | SAVED stamp | A big SAVED stamp slams on the result with a small shockwave. | 800 | stamp:hit:0.5
dl-zip-pack | Zip pack | Several files squeeze together and a zipper closes them into one bundle. | 1000 | zip:up:0.8
dl-mailbox | Mailbox | The thumbnail flies into a mailbox, the flag lifts. | 1000 | thud:soft:0.5
dl-safe-lock | Safe lock | A shield with a padlock closes over the file. Used for privacy jobs. | 1000 | mech:lock:0.7
dl-gift-box | Gift box | The result is wrapped in a ribbon and the box opens to show it. | 1200 | magic:reveal:0.9
dl-rocket | Rocket launch | The result sits in a small rocket that blasts off to the share target. | 1200 | riser:rocket:1.0
dl-balloon-pop | Balloon pop | A balloon carries the result up, then pops into confetti. | 1200 | pop:balloon:0.8
dl-sparkle-sweep | Sparkle sweep | A diagonal shine sweeps across the thumbnail and sparkles pop. | 900 | sparkle:sweep:0.7
dl-ring-pop | Ring close and pop | The progress ring closes, flashes, and a check mark bursts out of it. | 800 | chime:ok:0.6
dl-check-draw | Ink check | A thick check mark draws itself with an ink stroke. | 700 | chime:ok:0.5
dl-polaroid | Polaroid print | The result prints out like an instant photo and slowly develops. | 1400 | mech:print:1.1
dl-vault | Vault door | A round vault door closes with spinning bolts. Used for location removal. | 1300 | mech:vault:1.0
dl-pip-catch | Pip catches it | Pip jumps and catches the result in both hands and holds it up. | 1000 | voice:yay:0.6
dl-slot-roll | Number reel | The final size digits roll like a slot machine and lock into place. | 1100 | click:reel:0.9
dl-fireworks | Fireworks | Three fireworks burst behind the result. | 1800 | pop:firework:1.2
dl-bubbles | Bubble float | Bubbles lift the result up and pop one by one. | 1200 | pop:bubbles:0.9
dl-magnet | Magnet pull | A magnet pulls the file onto the Save button, small sparks fly. | 800 | click:magnet:0.5
dl-drill | Arrow drill | A download arrow drills down through the card into the tray. | 800 | whoosh:down:0.5
dl-stack-tidy | Stack and tidy | Loose results stack into a neat pile and straighten up. | 900 | paper:shuffle:0.7
dl-lightning | Lightning snap | A quick flash and a lightning bolt strike the Save button. Used for very fast jobs. | 600 | zap:strike:0.5
dl-wax-seal | Wax seal | A wax seal stamps the result. Used for cleaned and private files. | 900 | stamp:wax:0.6
dl-origami-crane | Origami crane | The result folds into a crane and flies off the screen. | 1300 | paper:fold:0.9
dl-floppy | Floppy stamp | A retro floppy-disk icon stamps onto the result in pixels. | 800 | beep:retro:0.5
dl-mini-chest | Mini chest | A tiny chest pops up, opens, and the result rises out of it. | 1200 | magic:reveal:0.9
dl-glow-badge | Glow badge | A soft glow pulses around the result and a ribbon unrolls with the file size. | 900 | arp:up:0.7
`);

/* ---------- 3. Progress bars (12) ---------- */
export const BARS = rows('bar', `
bar-streams | Converging streams | Several mini bars race at different speeds then merge into one. | 0 | tick:soft:0.2
bar-liquid | Liquid fill | A wavy liquid fills the track and sloshes. | 0 | tick:soft:0.2
bar-orbit | Orbit | Little dots orbit a ring that fills as they gather. | 0 | tick:soft:0.2
bar-tiles | Tile flip | A grid of tiles flips to the accent colour in random order. | 0 | tick:soft:0.2
bar-comet | Comets | Comets race along the rail and dive into a bright head. | 0 | tick:soft:0.2
bar-warp | Warp | Stars streak outward faster as progress grows. | 0 | tick:soft:0.2
bar-pip-runs | Pip runs | Tiny Pip runs along the bar and leaves a coloured trail. | 0 | tick:soft:0.2
bar-blade-slice | Blade slice | A blade slices the photo into strips that slide together into one. | 0 | tick:soft:0.2
bar-zipper | Zipper | The bar is a zipper that closes as progress grows. | 0 | tick:soft:0.2
bar-gears | Gears | Small gears spin and all feed one big gear. | 0 | tick:soft:0.2
bar-fireflies | Fireflies | Fireflies swarm toward the end of the bar. | 0 | tick:soft:0.2
bar-segments | Charging segments | Segments light up like a battery and the last one pulses. | 0 | tick:soft:0.2
`);

/* ---------- 4. Character actions per service (9 services x 10) ---------- */
export const SERVICES = [
  { id: 'compress', name: 'Compress and target size', actions: rows('action', `
ac-cmp-press | Photo press | Pip hugs the photo and squeezes it like an accordion until it is small. | 2200 | squish:press:0.6
ac-cmp-belt | Belt tightening | Pip tightens his belt a notch at a time while the photo gets slimmer. | 2400 | mech:ratchet:0.8
ac-cmp-vacuum | Vacuum seal | Pip sucks the air out of a bag holding the photo until it hugs the photo. | 2400 | whoosh:suck:0.9
ac-cmp-dough | Kneading | Pip kneads the photo like dough and it folds smaller each time. | 2200 | squish:knead:0.6
ac-cmp-roller | Tiny steamroller | Pip drives a toy steamroller over the photo and the file size drops. | 2600 | rumble:engine:1.0
ac-cmp-stomp | Grape stomp | Pip jumps up and down on a pile of pixels and juice squirts out. | 2200 | squish:stomp:0.7
ac-cmp-balloon | Balloon deflate | Pip holds a balloon labelled MB. It deflates with a raspberry noise to KB. | 2200 | air:deflate:0.9
ac-cmp-weights | Weight lifting | Pip lifts a heavy weight labelled MB. It gets lighter every rep and ends as a feather. | 2600 | voice:effort:0.7
ac-cmp-fold | Origami fold | Pip folds the photo into a smaller and smaller square. | 2200 | paper:fold:0.7
ac-cmp-squeeze | Orange squeeze | Pip squeezes a pixel orange and the extra bytes drip out. | 2200 | water:drip:0.8
`) },
  { id: 'resize', name: 'Resize and crop', actions: rows('action', `
ac-crp-snip | Snip frame | Pip snips a frame out of the air with his blade and the photo slides inside. | 2000 | mech:snap:0.4
ac-crp-tape | Measuring tape | Pip pulls a tape across the photo and nods at the exact numbers. | 2200 | mech:tape:0.8
ac-crp-hammer | Hammer the frame | Pip hammers four nails into a wooden frame around the photo. | 2400 | thud:nail:0.8
ac-crp-chalk | Chalk line | Pip snaps a chalk line along the crop edge and blows the dust. | 2000 | whoosh:snap:0.4
ac-crp-laser | Laser cut | Pip cuts the crop outline with a tiny laser, sparks fly. | 2400 | laser:cut:1.0
ac-crp-cookie | Cookie cutter | Pip presses a cookie cutter on the photo and lifts out the crop. | 2000 | squish:stomp:0.5
ac-crp-chisel | Sculptor chisel | Pip chips away the extra photo with a chisel until the frame shape is left. | 2400 | thud:nail:0.8
ac-crp-wall | Hang on wall | Pip hangs the cropped photo on a wall and straightens it with a squint. | 2400 | thud:soft:0.5
ac-crp-saw | Carpenter saw | Pip saws along the line, a tiny sawdust cloud puffs. | 2200 | mech:saw:0.9
ac-crp-pinch | Stretch and pinch | Pip stretches the photo with both hands and pinches to the right size. | 2000 | squish:press:0.5
`) },
  { id: 'convert', name: 'Convert formats', actions: rows('action', `
ac-cnv-juggle | Format juggling | Pip juggles JPG, PNG and WebP blocks and catches only the one you chose. | 2400 | magic:juggle:0.8
ac-cnv-hat | Magic hat | Pip taps a hat with a wand and the photo comes out in the new format. | 2400 | magic:reveal:0.9
ac-cnv-blender | Blender | Pip drops the photo in a blender and pours out a new format. | 2400 | rumble:engine:0.9
ac-cnv-curtain | Costume change | The photo steps behind a curtain, Pip counts to three, it steps out in a new outfit. | 2400 | magic:reveal:0.8
ac-cnv-tennis | Format rally | Pip hits the photo like a tennis ball between two format boxes. | 2200 | click:racket:0.6
ac-cnv-chameleon | Chameleon | Pip changes colour from the old format colour to the new format colour. | 2200 | magic:morph:0.8
ac-cnv-conveyor | Conveyor belt | Pip stands at a conveyor belt and stamps each file on its way. | 2400 | mech:belt:0.9
ac-cnv-translate | Translator | Pip wears a headset and translates between two format flags. | 2200 | voice:babble:0.9
ac-cnv-wheel | Pottery wheel | The photo spins on a pottery wheel and Pip shapes it into the new format. | 2400 | water:blob:0.8
ac-cnv-shift | Shape-shifter | Pip flips through his own tools and the photo copies each shape. | 2200 | mech:snap:0.6
`) },
  { id: 'privacy', name: 'Privacy, location and metadata', actions: rows('action', `
ac-prv-detective | Detective | Pip puts on a hat and checks the photo with a magnifier. | 2200 | voice:hmm:0.7
ac-prv-radar | Radar | A radar sweeps around Pip until a pin blips on the photo. | 2200 | beep:radar:1.0
ac-prv-map | Treasure map | Pip unfolds a map and puts his finger on the place the photo was taken. | 2200 | paper:flip:0.6
ac-prv-eraser | Eraser | Pip rubs a big eraser over the location tag until it is gone. | 2200 | squish:knead:0.6
ac-prv-scissors | Cut the thread | The location is a thread tied to the photo. Pip snips it. | 2000 | mech:snap:0.4
ac-prv-sponge | Sponge wash | Pip scrubs the photo with a sponge and little data bubbles float away. | 2400 | water:bubbles:0.9
ac-prv-vacuum | Dust vacuum | Pip vacuums dust clouds labelled EXIF and GPS. | 2400 | rumble:engine:0.9
ac-prv-shades | Spy shades | Pip puts on shades, looks left and right, and slips the photo into a folder. | 2000 | beep:retro:0.4
ac-prv-ninja | Ninja hide | Pip hides behind the photo and peeks, then gives a thumbs up. | 2200 | whoosh:left:0.4
ac-prv-lock | Padlock polish | Pip polishes a padlock until it shines, then clicks it shut. | 2200 | mech:lock:0.7
`) },
  { id: 'video', name: 'Video, GIF and animation', actions: rows('action', `
ac-vid-clapper | Clapper board | Pip snaps a clapper board shut and shouts action. | 2000 | click:clap:0.4
ac-vid-projector | Projector crank | Pip cranks an old projector and frames flicker on the wall. | 2600 | mech:reel:1.0
ac-vid-flipbook | Flip book | Pip flips a flip-book with his thumb, the frames run past. | 2400 | paper:flip:0.8
ac-vid-popcorn | Popcorn | Pip eats popcorn while the video is processed and catches a kernel in his mouth. | 2400 | pop:cascade:0.8
ac-vid-dj | DJ scratch | Pip scratches the timeline like a record. | 2400 | glitch:scratch:0.7
ac-vid-scissors | Timeline trim | Pip snips the timeline at both ends and the middle part glows. | 2200 | mech:snap:0.4
ac-vid-juggle | Frame juggling | Pip juggles tiny frames, one after another, and drops none. | 2400 | magic:juggle:0.8
ac-vid-surf | Wave surfing | Pip surfs a wave made of the video frames. | 2600 | water:ripple:1.0
ac-vid-fast | Fast forward | Pip runs in fast forward with speed lines and a blur. | 2200 | whoosh:right:0.6
ac-vid-boomerang | Boomerang | Pip throws a boomerang that carries the clip and catches it as it comes back. | 2400 | whoosh:spiral:0.8
`) },
  { id: 'utilities', name: 'QR, colour, icons and SVG', actions: rows('action', `
ac-utl-laser | QR laser | Pip scans a QR code with a red laser from his eyes and it beeps. | 2200 | beep:radar:0.7
ac-utl-palette | Paint palette | Pip holds a palette and dabs the colours he found in the photo. | 2200 | water:drip:0.7
ac-utl-pixels | Pixel builder | Pip places pixel blocks one by one to build a QR code or icon. | 2400 | pop:cascade:0.9
ac-utl-stamp | Icon stamp | Pip stamps the same icon in many sizes. | 2200 | stamp:hit:0.4
ac-utl-rainbow | Rainbow painter | Pip paints a rainbow gradient with a wide brush. | 2400 | magic:glide:0.8
ac-utl-dropper | Eyedropper | Pip uses a big eyedropper on the photo and drips the colour into a cup. | 2000 | water:drip:0.6
ac-utl-pen | Calligraphy pen | Pip draws an SVG path with a calligraphy pen and the line smooths itself. | 2400 | paper:pen:0.8
ac-utl-checker | Barcode checker | Pip runs a barcode under a scanner and it beeps happily. | 2000 | beep:retro:0.5
ac-utl-magic | Colour magician | Pip pulls colour ribbons out of his sleeve, like a magician. | 2200 | magic:reveal:0.8
ac-utl-mosaic | Mosaic maker | Pip sticks tiles on a wall and steps back to see the picture. | 2400 | click:tickrun:0.8
`) },
  { id: 'batch', name: 'Batch, gallery cleaner and duplicates', actions: rows('action', `
ac-bat-broom | Broom sweep | Pip sweeps a pile of photos into a neat pile. | 2200 | paper:shuffle:0.8
ac-bat-memory | Matching cards | Pip plays a memory game and flips two matching cards for duplicates. | 2200 | click:racket:0.5
ac-bat-sort | Recycling sort | Pip drops photos into three coloured bins. | 2400 | thud:soft:0.5
ac-bat-librarian | Librarian stamps | Pip stamps each photo and files it in a drawer. | 2400 | stamp:hit:0.4
ac-bat-crane | Container ship | Pip drives a little crane that loads photos on a ship. | 2600 | mech:belt:1.0
ac-bat-assembly | Assembly line | Photos roll past Pip, he checks each one and nods. | 2400 | mech:belt:0.9
ac-bat-juggle | Many hands | Pip grows four arms for a second and handles many photos at once. | 2200 | magic:morph:0.8
ac-bat-counter | Counting | Pip counts photos on his fingers and runs out of fingers. | 2200 | voice:babble:0.8
ac-bat-conductor | Conductor | Pip conducts a row of photos like an orchestra. | 2400 | arp:up:0.8
ac-bat-spring | Spring cleaning | Pip opens a window, dusts the shelf and the room sparkles. | 2400 | sparkle:sweep:0.8
`) },
  { id: 'exam', name: 'Exam kits and ID photos', actions: rows('action', `
ac-exm-cap | Graduation cap | Pip puts on a graduation cap and straightens the tassel. | 2000 | voice:hmm:0.5
ac-exm-checklist | Checklist | Pip ticks each requirement on a clipboard, one by one. | 2400 | click:tickrun:0.8
ac-exm-rule | Rule check | Pip measures the photo with a ruler against the exam rule and nods. | 2200 | mech:tape:0.8
ac-exm-sign | Signature | Pip signs a tiny signature strip with a flourish. | 2200 | paper:pen:0.8
ac-exm-stamp | Official stamp | Pip stamps the photo with a round approved stamp. | 2000 | stamp:hit:0.5
ac-exm-clock | Deadline clock | Pip looks at a wall clock, relaxes, and says there is time. | 2000 | beep:retro:0.5
ac-exm-bag | Pack the bag | Pip packs photo, signature and thumb print into a school bag and zips it. | 2200 | zip:up:0.8
ac-exm-study | Study desk | Pip sits at a desk with a lamp and flips a book. | 2200 | paper:flip:0.7
ac-exm-pencil | Pencil tap | Pip taps a pencil on his head while he calculates the size. | 2000 | click:racket:0.5
ac-exm-medal | Pass medal | Pip hangs a small medal on the finished kit. | 2000 | chime:ok:0.6
`) },
  { id: 'idle', name: 'Waiting, idle and any tool', actions: rows('action', `
ac-idl-comic | Reading | Pip reads a comic and giggles at the right moment. | 3200 | voice:giggle:0.6
ac-idl-yoyo | Yo-yo | Pip plays with a yo-yo made from his keyring. | 3000 | whoosh:left:0.4
ac-idl-juggle | Bolt juggling | Pip juggles three bolts and drops one, then shrugs. | 3000 | magic:juggle:0.8
ac-idl-stretch | Stretch | Pip stretches his arms and legs and a joint clicks. | 3000 | click:ratchet:0.5
ac-idl-yawn | Yawn | Pip yawns and his blade droops, then he shakes himself awake. | 3200 | voice:yawn:1.0
ac-idl-polish | Blade polish | Pip polishes his blade quiff with a cloth and checks his reflection. | 3000 | sparkle:sweep:0.6
ac-idl-pushups | Push-ups | Pip does push-ups and counts to five. | 3200 | voice:effort:0.7
ac-idl-watch | Watch check | Pip checks a wrist watch he does not have. | 2400 | voice:hmm:0.6
ac-idl-dance | Little dance | Pip dances in place with the keyring swinging. | 3200 | arp:up:0.8
ac-idl-nap | Cat nap | Pip sits down, closes his eyes and snores softly, a Z floats up. | 4000 | voice:snore:1.2
`) },
];

/* ---------- 5. Celebrations, level-ups, badges, streaks, errors, easter eggs ---------- */
export const CELEBRATIONS = rows('celebrate', `
ce-backflip | Backflip | Pip does a backflip and lands with a pose. | 1400 | voice:yay:0.6
ce-cannon-hold | Cannon hold | Pip holds a confetti cannon and fires it. | 1500 | pop:cannon:0.9
ce-victory-dance | Victory dance | Pip does a happy dance with arms up. | 2200 | arp:up:0.9
ce-tool-fan | Tool fan | All his tools fan out behind him like a peacock. | 1800 | mech:snap:0.8
ce-high-five | Self high-five | Pip high-fives himself and gets a spark. | 1200 | click:clap:0.4
ce-moonwalk | Moonwalk | Pip moonwalks across the screen. | 2000 | voice:whee:0.7
ce-tornado | Spin tornado | Pip spins like a tornado and stops dizzy but smiling. | 1600 | whoosh:spiral:0.9
ce-rocket-jump | Rocket jump | Pip jumps so high he leaves the screen and falls back. | 1800 | riser:rocket:1.0
ce-trophy-lift | Trophy lift | A trophy appears and Pip lifts it over his head. | 1800 | chime:ok:0.7
ce-air-guitar | Air guitar | Pip plays an air guitar solo with his blade. | 2000 | arp:up:0.9
ce-pompoms | Cheerleader | Pip shakes two pom-poms made from tiny blades. | 2000 | sparkle:sweep:0.8
ce-juggle-tools | Tool juggle | Pip juggles scissors, magnifier and a crop corner. | 2000 | magic:juggle:0.8
ce-mic-drop | Mic drop | Pip drops his blade like a mic and walks away. | 1600 | thud:soft:0.6
ce-disco | Disco | A disco ball drops and Pip strikes a pose. | 2200 | arp:up:0.9
`);
export const LEVELUPS = rows('levelup', `
lv-ascend | Ascend | Pip rises on a column of light holding the new level medal. | 3000 | fanfare:big:2.0
lv-power-up | Power up | Pip grows giant for a second, flexes, then shrinks back with the medal. | 2800 | riser:power:1.6
lv-evolution | Evolution flash | A white silhouette flashes and Pip returns with a new accessory. | 3000 | magic:morph:1.6
lv-ladder | Ladder climb | Pip climbs a ladder of level numbers and rings a bell at the top. | 3200 | arp:up:1.6
lv-rocket | Rocket boost | Pip straps a rocket on his back and blasts to the next level. | 3000 | riser:rocket:1.6
lv-gold-blade | Golden blade | His blade turns solid gold one section at a time. | 3000 | sparkle:sweep:1.4
lv-crown | Crown drop | A tiny crown drops on his blade and he balances it. | 2600 | fanfare:small:1.2
lv-leap | Stair leap | Pip leaps from one glowing step to the next and lands on the new level. | 2800 | voice:whee:0.9
lv-transform | Tool transform | All tools unfold and spin around Pip, then fold back. | 3200 | mech:snap:1.4
lv-medal-bite | Medal bite | Pip bites the medal to test it, then smiles and holds it up. | 2400 | voice:yay:0.8
`);
export const BADGES = rows('badge', `
bd-drop | Badge drop | The badge drops from above and Pip catches it. | 1800 | chime:ok:0.8
bd-shine | Shine reveal | The badge appears under a spotlight with a shine sweep. | 1800 | sparkle:sweep:0.8
bd-stamp | Pin on chest | Pip pins the badge on his belt. | 1800 | stamp:hit:0.4
bd-spin | Coin spin | The badge spins like a coin and settles. | 1800 | coin:spin:0.8
bd-rare | Rare badge | Gold flash, camera shake, big cheer. Used for gold-tier badges. | 2600 | fanfare:small:1.4
`);
export const STREAKS = rows('streak', `
st-flame | Flame grows | The streak flame grows a size and Pip warms his hands. | 1500 | air:flame:0.8
st-calendar | Calendar tick | A calendar page flips and the new day gets a stamp. | 1500 | paper:flip:0.5
st-save | Streak saved | A shield saves a streak that was about to break. | 1500 | chime:ok:0.7
st-lost | Streak lost | The flame flickers out and Pip gives it a small hug. | 1800 | voice:sad:0.8
`);
export const ERRORS = rows('error', `
er-sad | Sad droop | Pip droops, the blade bends, a small cloud rains on him. | 2200 | voice:sad:1.0
er-confused | Confused | Pip scratches his head and question marks float up. | 2000 | voice:hmm:0.8
er-facepalm | Facepalm | Pip covers his face with one hand and peeks through the fingers. | 1800 | thud:soft:0.4
er-uhoh | Uh-oh | Pip's eyes go wide and a sweat drop slides down. | 1600 | voice:uhoh:0.6
er-shrug | Shrug | Pip shrugs and holds out his empty hands. | 1600 | voice:hmm:0.5
er-dizzy | Dizzy | Stars circle his head. | 2000 | voice:dizzy:0.9
`);
export const EGGS = rows('egg', `
eg-sneeze | Sneeze | A dust bunny makes Pip sneeze, his blade flicks. | 1400 | voice:sneeze:0.6
eg-hiccup | Hiccup | Pip hiccups and a tiny bolt pops out. | 1600 | voice:hiccup:0.7
eg-sing | Humming | Pip hums while notes float up. | 3000 | arp:up:1.2
eg-peek | Peek-a-boo | Pip hides behind the screen edge and peeks back in. | 2200 | voice:whee:0.5
eg-snow | Snow day | In winter, Pip shivers and wears a scarf. | 3000 | voice:brr:0.9
`);

/* ---------- 6. Touch and pointer zones on Pip ---------- */
export const ZONES = [
  { id: 'tummy', name: 'Tummy', tap: 'Opens the tools menu (radial, 6 tools). Pip giggles. Three different giggles are picked at random.', dwell: 'Pip looks down, pats his tummy and says hmm (1.5 s), then the radial menu peeks open halfway as a hint (3 s).' },
  { id: 'blade', name: 'Blade quiff', tap: 'The blade flips to another tool (scissors, magnifier, crop corner, clapper). Plays a click.', dwell: 'Pip crosses his eyes to look at his blade (1 s). Press and hold while he is standing still (0.6 s) = PICK UP (see below).' },
  { id: 'eyes', name: 'Eyes', tap: 'He blinks hard and says ouch, or winks. Three variants.', dwell: 'Eyes follow the pointer closely, pupils get big (1 s), then he leans in until he is almost cross-eyed (3 s), then he blinks and pushes the pointer away (5 s).' },
  { id: 'mouth', name: 'Mouth', tap: 'He sticks out his tongue, blows a raspberry, or tries to bite the pointer. Three variants.', dwell: 'He opens his mouth and waits (1.5 s), tries to nibble the pointer (3 s), then makes a funny face and pretends to be full (6 s).' },
  { id: 'ears', name: 'Shoulder rivets (his "ears")', tap: 'The knob rings like a bell and his head wobbles. Left and right give different notes.', dwell: 'The knob twitches (1 s), he tilts his head toward it (2.5 s), then he wiggles it to say stop (5 s).' },
  { id: 'hands', name: 'Hands (left and right)', tap: 'Left: high-five. Right: handshake. Both with a small spark.', dwell: 'He holds out the hand and waits (1.5 s), taps his foot (3 s), then shrugs and puts it down (5 s).' },
  { id: 'legs', name: 'Feet', tap: 'He hops, kicks, or stomps. Three variants, small dust puff.', dwell: 'He wiggles his toes (1 s), giggles because it tickles (2 s). After 2.5 s steady, the pointer turns into a MINI MAGIC CARPET (see below).' },
  { id: 'belt', name: 'Belt', tap: 'The belt buckle clicks and he shows his tool count.', dwell: 'He sucks in his tummy and says tight.' },
  { id: 'tail', name: 'Keyring tail', tap: 'The keyring spins like a propeller and Pip turns with it.', dwell: 'He chases his own tail slowly (2 s) and gets dizzy (5 s).' },
  { id: 'background', name: 'Space around Pip', tap: 'Pip looks at the tap and waves. Double tap makes him jump toward it.', dwell: 'He follows the pointer with his eyes, then loses interest and starts an idle action (8 s).' },
];
export const GESTURES = [
  { id: 'pickup', name: 'Pick up by the blade', how: 'Press and hold the blade quiff for 0.6 s while Pip is standing still (not mid-action).', result: 'Pip is lifted by the blade, his feet dangle and swing like a pendulum, eyes go wide, he squeals. He follows the pointer with physics (spring and pendulum). Fast moves make him fly sideways with the legs trailing. Release = he falls with gravity, squashes on landing, bounces twice, stars circle his head. A fast flick = he flies away, bounces off the screen edges and comes to rest. Dropping on a tool tile or the Save button counts as a tap on it.' },
  { id: 'carpet', name: 'Magic carpet', how: 'Keep the pointer (or a held finger) on a foot, still, for 2.5 s.', result: 'The cursor turns into a small flying carpet with tassels. The carpet slides under Pip, lifts him, and he sits cross-legged on it. The carpet follows the pointer with a delay, banks into turns, and the keyring tail trails behind. Desktop: the real cursor is replaced by the carpet. Touch: the carpet appears under the held finger. Sudden jerk (pointer speed above 2500 px per second change in under 80 ms) or any click or tap: the carpet bursts into threads and sparkles, Pip falls, squashes, shakes it off and says oops. Lifting a held finger gently lands the carpet softly and it folds away.' },
  { id: 'shake', name: 'Shake the phone', how: 'Device shake (accelerometer) on Android; fast pointer shake on the web.', result: 'Pip gets dizzy and loose bolts fall out. 3 shakes in 5 s and he says stop.' },
  { id: 'tickle', name: 'Tickle swipe', how: 'Swipe quickly across his tummy three times.', result: 'He laughs uncontrollably and falls over.' },
  { id: 'multi', name: 'Rapid taps', how: 'Three or more taps within 2 s anywhere on Pip.', result: 'He gets dizzy, spiral eyes, stars. Five taps and he pretends to be annoyed and turns his back.' },
  { id: 'sleep', name: 'Long idle', how: 'No touch for 45 s.', result: 'He yawns and falls asleep (Z letters). Any touch wakes him with a small start.' },
  { id: 'longpress-bg', name: 'Press and hold the background', how: 'Hold anywhere that is not Pip for 1 s.', result: 'Pip walks over and sits next to the finger.' },
];

/* ---------- 7. App sounds that are not tied to an effect ---------- */
export const UISOUNDS = rows('ui', `
ui-tap | Button tap | A soft wooden tick. | 80 | click:soft:0.08
ui-select | Select | A short two-note rise. | 120 | arp:up:0.12
ui-toggle-on | Switch on | A short upward blip. | 120 | beep:retro:0.1
ui-toggle-off | Switch off | A short downward blip. | 120 | beep:down:0.1
ui-back | Back | A soft downward swish. | 150 | whoosh:down:0.15
ui-open-sheet | Open sheet | A short upward swish. | 200 | whoosh:up:0.2
ui-close-sheet | Close sheet | A short downward swish. | 200 | whoosh:down:0.2
ui-error | Error | Two low soft notes. | 300 | beep:down:0.3
ui-success | Success | A bright two-note chime. | 400 | chime:ok:0.4
ui-menu-open | Radial menu opens | Six quick pops in a ring. | 350 | pop:cascade:0.35
ui-menu-pick | Radial menu pick | A satisfying click-pop. | 200 | pop:soft:0.2
ui-drop-file | File dropped | A paper thud. | 300 | thud:soft:0.3
ui-camera | Photo picked | A soft shutter. | 250 | click:shutter:0.25
ui-copy | Copied | A tiny blip. | 120 | beep:retro:0.1
ui-share | Share sheet | A swoosh up. | 300 | whoosh:up:0.3
ui-warning | Warning | A hollow double note. | 400 | beep:down:0.4
ui-process-start | Job starts | A rising riser. | 500 | riser:soft:0.5
ui-process-done | Job done | A chime and a click. | 500 | chime:ok:0.5
`);
export const GAMESOUNDS = rows('game', `
gm-xp-tick | XP tick | A small coin tick as the XP bar fills (rate limited). | 90 | coin:tick:0.09
gm-xp-gain | XP gained | A bright coin ping with the +XP text. | 400 | coin:shower:0.4
gm-quest-done | Quest done | A tick box sound with a sparkle. | 600 | chime:ok:0.6
gm-all-quests | All quests done | A rising arpeggio. | 900 | arp:up:0.9
gm-chest-shake | Chest shakes | A wooden rattle. | 700 | thud:bounce:0.7
gm-chest-open | Chest opens | A creak, a burst and a magic glide. | 1200 | magic:reveal:1.2
gm-award | Award appears | A shiny reveal. | 1000 | fanfare:small:1.0
gm-rank-up | Rank up | A short fanfare. | 1400 | fanfare:small:1.4
gm-locked | Locked item tapped | A dull knock and a tiny shake. | 300 | thud:soft:0.3
gm-trophy | Trophy added | A heavy shiny clink. | 900 | chime:ok:0.9
gm-skin-unlock | Skin unlocked | A magic swish and a ping. | 1100 | magic:morph:1.1
gm-daily-open | Daily bonus | A friendly hello jingle. | 900 | arp:up:0.9
`);
export const VOICE = rows('voice', `
vx-hello | Hello | A cheerful hello chirp when the app opens. | 700 | voice:happy:0.7
vx-hmm | Hmm | A thinking hum. | 700 | voice:hmm:0.7
vx-wow | Wow | A surprised rising chirp. | 600 | voice:wow:0.6
vx-yay | Yay | A short happy cheer. | 700 | voice:yay:0.7
vx-ouch | Ouch | A squeaky ouch. | 500 | voice:ouch:0.5
vx-giggle1 | Giggle 1 | A quick giggle. | 700 | voice:giggle:0.7
vx-giggle2 | Giggle 2 | A longer giggle. | 900 | voice:giggle:0.9
vx-giggle3 | Giggle 3 | A snort giggle. | 800 | voice:ticklish:0.8
vx-oops | Oops | A falling oops. | 600 | voice:oops:0.6
vx-squeal | Squeal | A short squeal when lifted. | 700 | voice:squeal:0.7
vx-whee | Whee | A flying whee. | 900 | voice:whee:0.9
vx-sleepy | Sleepy | A yawn into a snore. | 1400 | voice:yawn:1.4
vx-raspberry | Raspberry | A wet raspberry. | 700 | air:deflate:0.7
vx-nibble | Nibble | A chomp chomp. | 600 | voice:chomp:0.6
vx-grumble | Grumble | An annoyed grumble. | 700 | voice:grumble:0.7
vx-cheer-big | Big cheer | A longer cheer for big wins. | 1200 | voice:cheer:1.2
vx-sad | Sad | A soft sad whine. | 900 | voice:sad:0.9
vx-ring-l | Ear bell left | A bell note. | 600 | chime:bellL:0.6
vx-ring-r | Ear bell right | A higher bell note. | 600 | chime:bellR:0.6
vx-carpet-on | Carpet appears | A magic swish. | 900 | magic:glide:0.9
vx-carpet-fly | Carpet flight loop | A soft airy loop. | 1200 | air:loop:1.2
vx-carpet-burst | Carpet bursts | A pop and a rip. | 700 | pop:balloon:0.7
vx-pickup | Picked up | A short lift squeak. | 500 | voice:squeal:0.5
vx-drop | Dropped | A drop thud and a boing. | 900 | thud:bounce:0.9
`);

export const ALL = [
  ...TRANSITIONS, ...DOWNLOADS, ...BARS, ...SERVICES.flatMap(s => s.actions), ...CELEBRATIONS, ...LEVELUPS, ...BADGES, ...STREAKS, ...ERRORS, ...EGGS,
  ...UISOUNDS, ...GAMESOUNDS, ...VOICE,
];
export const SOUND_CATEGORIES = [
  { id: 'ui', name: 'Buttons and menus', cats: ['ui'] },
  { id: 'transitions', name: 'Screen transitions', cats: ['transition'] },
  { id: 'completion', name: 'Save and completion effects', cats: ['download'] },
  { id: 'progress', name: 'Progress bars', cats: ['bar'] },
  { id: 'actions', name: 'Pip at work (tool actions)', cats: ['action'] },
  { id: 'cheers', name: 'Celebrations, level-ups, badges and streaks', cats: ['celebrate', 'levelup', 'badge', 'streak'] },
  { id: 'reactions', name: 'Pip reactions, errors and surprises', cats: ['error', 'egg', 'voice'] },
  { id: 'game', name: 'XP, quests, chest and awards', cats: ['game'] },
];
