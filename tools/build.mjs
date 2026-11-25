// Compile JSON sources in src/packs/<pack> into LevelDB packs in packs/<pack>.
import { compilePack } from '@foundryvtt/foundryvtt-cli';
import fs from 'node:fs';
const packs = JSON.parse(fs.readFileSync('tools/packs.json'));
for (const p of packs) {
  fs.rmSync(`packs/${p.name}`, { recursive: true, force: true });
  await compilePack(`src/packs/${p.name}`, `packs/${p.name}`, { log: false });
  for (const f of ['LOCK', 'LOG', 'LOG.old']) fs.rmSync(`packs/${p.name}/${f}`, { force: true });
  console.log(`compiled ${p.name}`);
}
