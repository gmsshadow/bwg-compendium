# Burning Wheel Gold Revised — Compendium (bwg-compendium)

Compendium packs for the community **Burning Wheel** Foundry VTT system (`burningwheel` 1.7.x, Foundry v13–v14),
built from *Burning Wheel Gold Revised*. Every item carries a `Source: … p. N` line so you can check it against the book.

This module contains text from the book. It is for your own use with your own copy; don't publish it.

## Install
Unzip into `Data/modules/` so you have `Data/modules/bwg-compendium/module.json`, then enable it in your Burning Wheel world.
The packs appear under a **Burning Wheel Gold Revised** compendium folder. The character burner's compendium picker will list them.

## Packs
| Pack | Contents |
|---|---|
| BWG Skills (642) | The full General Skill List (pp. 252–309), split into folders by skill type, plus training and § magical skills; the six named History skills; 41 Elven spell songs (pp. 144–152); 302 wises (those in the skill list plus every wise named in a lifepath); and a few lifepath-only variants (Flute, Lyre, Drum, Horse/Dog Husbandry, Heretical/Foreign/Cult Doctrine, Monastic Ritual, Garrote, Waterworks, Mounted Combat: Bowman Training). |
| BWG Traits (720) | The Trait List (pp. 310–356): 435 character, 223 die and 62 call-on traits, with cost, type and restrictions. It also includes 28 lifepath character traits that appear only in lifepath trait lists. |
| BWG Weapons (62) | All of the Weapons Appendix: basic, poor, run of the mill and superior melee weapons (the polearm has both Axe Strike and Thrust attacks); weapon gear (pommels, beak); shields used as weapons; found weapons; bows and crossbows (including the Elven Bow and Dwarven Arbalest); firearms (with the gunpowder flag set); thrown weapons (set to use the thrower's Power); and the iron-cased bomb. |
| BWG Armor and Shields (79) | Gambeson through full plate as full suits in poor, run of the mill and superior quality. Also run of the mill breastplates, arms and leggings; half-sleeves and half-leggings; seven helmets; five shields; and stock armour (Dwarven Mail, Dwarven-made mail, Forge Mask, Dwarven Shield, Elven armour, Black Iron Helmet and Shield, Orc armour). Clumsy weight, the untrained armour category and helmet Perception penalties are all set. |
| BWG Possessions and Property (98) | The Human, Dwarven, Elven and Orc Resources lists (including Servant gear), with rp costs. Toolkit and workshop flags are set. |
| BWG Spells (77) | Sorcery spells (pp. 207–223) and the Orc Rituals of Night (pp. 247–249). Each has its obstacle, ^, actions, facets and rp cost. The damaging spells have their Will-based damage, VA, weapon length and range filled in. |
| BWG Lifepaths (609) | Every Dwarf, Elf, Human and Orc lifepath from the core book, plus the Codex lifepaths (Wizard Burner, Dark Elf Path of Spite, Roden, Troll and Great Wolf), in folders by stock and setting. Time, resources, stat, leads, skill/general/trait points, skill and trait lists, requirements and restrictions are filled in. |
| BWG Verdorben Pregens (6) | The six pregenerated characters from *Twilight in the Duchy Verdorben* (Gunther, Brin, Cerebirn, Daniel Wigel, Fureard, Theoden), built from their character sheets: stats, attributes, beliefs, instincts, traits, skills, relationships, reputations, affiliations, gear, armour and spells, using the items from these packs. |
| BWG Twilight in the Duchy Verdorben (Adventure) | All three scenarios—*Trouble in Hochen*, *Dinner for One* and *Your Day in Court*—as one importable Adventure. Journals are split into pages by the book's sections, in full text with the book's art and maps. Stat blocks link to twelve NPC actors, and names in the text link to actors and journals. It also includes player handouts, the six pregens with portraits, adventure items (Infected by the Black Oil, Black Rod, Cold to the Touch, three wises) and scenes for Hochen and Manor Stravit, with journal pins on the manor's rooms. |
| BWC Codex Traits (225) | The Burning Wheel Codex *Monstrous Trait List*: 63 character, 128 die and 30 call-on traits, with costs, restrictions and page references. |
| BWC Codex Spells (2) | The Great Wolf Dire Haunt spells Ancient Grip and Trackless Path. |
| BWC Codex Skills (43) | The Codex *Monstrous Skill List*, plus the Dark Elf spell songs and the Great Wolf Spirit Hunter songs. The list, including Death Art, Savage Attack, Summoning, Spirit Binding and the updated Alchemy, Enchanting and Sorcery. These sit alongside the core versions rather than replacing them. |
| BWG Lifepath Settings (40) | One Setting actor per setting or subsetting (24 core plus 16 Codex), with its lifepaths in book order, ready for the character burner. |

## Notes and judgement calls
- **Skill names in lifepath lists are matched to the pack items.** The book sometimes names the same skill differently (e.g. Engineer → Engineering, Armor → Armor Training, Black-Metal Artifice → Black Metal Artifice), so the lifepath skill and trait lists were rewritten to use the exact item names. The character burner can then match all of them.
- **"Javelin or Bow"–style choices** are listed as both skills. The original wording is kept in the lifepath note.
- **Two trait names contain a comma** ("Where There's a Whip, There's a Way" and "He's a Jonah, That One."). The burner splits trait lists on commas, so these use a look-alike character (U+201A ‚) in place of the comma.
- **Hatred and Grief roots** (Orc Hatred skills, some Elven songs) aren't stats the system can use as a root. They are set to Will, and the description says what the book root is.
- **Wises** use skill type *Special* (the Wises entry's own type). The system has no Wise type.
- **Melee weapon rp cost** is set to the Arms price for that quality (poor 3, run of the mill 5, superior 20). In the book, one Arms purchase covers the character's whole set of weapons, so in the burner charge it once.
- **Pistol and Arquebus** have VA that depends on range. VA is set to 3 (optimal range) and the description lists the full VA by range.
- **Found weapons** have no weapon length or handedness in the book. They are set to shortest and one-handed.
- **Helmets** are priced at half of the suit with matching dice. The book's own example prices a sallet at 25 rps, and this is noted on the item.
- **Half-sleeves and half-leggings** have no separate price in the book. They are priced like arms and leggings (a third of the suit).
- Die and call-on traits have no automated modifiers set. The rules are in each trait's text.
- **Magical (§) skills and spell songs are set to roll open-ended** (`open: true`), which is the flag the system uses when it rolls them (v1.1.0).
- **Verdorben pregens:** Cerebirn's sheet records no Grief exponent; it is set to B4 from the Starting Grief rules (pp. 152–153). Gunther's armour clumsy weight uses the sheet's values (Stealthy +3, Perception +3). Fureard's "Dwarven plated leather" uses the Dwarven-made light mail stats. Theoden's miracles and Brin's spell list are in each sheet's notes.
- **Verdorben adventure:** open the Adventure in the compendium and click Import. Everything lands in folders named "Twilight in the Duchy Verdorben". NPC traits and skills that aren't in the core packs (monster traits such as Hideous, and wises such as Drudgery-wise) are created as simple items with a note. The scenes are gridless floor plans meant for placing tokens, not battle maps.
- **Codex packs (v1.3.0):** the Verdorben NPCs now use Codex entries where the core book has none (Reanimated Corpse, Dead to Pain, Unfeeling, Night Eyed, Hungry Dead, Clumsy Walker, Suicidal, Death Art, Savage Attack and others). A few NPC traits appear in neither book (Keen Smell, Fanged, Devastator, Omnivore, Verdorben and similar). Those stay as items with a note, and the die traits among them say to adjudicate from the name.
- **Codex lifepaths (v1.4.0):** the Wizard Burner's Peasant, Villager, City Dweller, Court and Outcast lifepaths go into the matching core settings (the Codex's Court setting is the core Noble Court Subsetting). Its Servant of the Dark Blood lifepath goes into the Orc Servant of the Dark Blood Subsetting. The Special Gifted lifepaths are placed where the Codex says they can be used: Gifted Child in the Peasant, Villager, City Dweller, Seafaring and Servitude settings, and Apt Pupil in the Noble Court, Religious, Professional Soldier and Outcast subsettings. College of Magic and the Death Cult are new Human settings. The Path of Spite sits with the Elves. Roden, Troll and Great Wolf have their own folders. Each Codex lifepath's note says where it comes from. Great Wolf "½ yr" lifepaths have a time of 0.5.
- **Document IDs** are now derived from each item's name and folder, so they stay the same from one release to the next (they changed once, in v1.4.0).
