import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(readFileSync(resolve(root, 'benchmarks.json'), 'utf8'));
const csvLines = readFileSync(resolve(root, 'benchmarks.csv'), 'utf8').trim().split('\n');
const stateLines = readFileSync(resolve(root, 'us-50-state-janitor-wages-2026.csv'), 'utf8').trim().split('\n');
const pcLines = readFileSync(resolve(root, 'post-construction-phase-benchmarks.csv'), 'utf8').trim().split('\n');

if (data.facilityBenchmarks.length !== 6) {
  throw new Error(`Expected 6 facilities in benchmarks.json, got ${data.facilityBenchmarks.length}`);
}
if (csvLines.length !== 7) {
  throw new Error(`Expected 7 lines (header + 6 rows) in benchmarks.csv, got ${csvLines.length}`);
}
if (stateLines.length !== 52) {
  throw new Error(`Expected 52 lines (header + 50 states + DC) in us-50-state-janitor-wages-2026.csv, got ${stateLines.length}`);
}
if (pcLines.length !== 5) {
  throw new Error(`Expected 5 lines (header + 4 rows) in post-construction-phase-benchmarks.csv, got ${pcLines.length}`);
}

for (const b of data.facilityBenchmarks) {
  const sum = b.defaultFloorMixPct.carpetPct + b.defaultFloorMixPct.vctPct + b.defaultFloorMixPct.tilePct + b.defaultFloorMixPct.hardwoodPct;
  if (sum !== 100) {
    throw new Error(`Floor mix does not sum to 100 for ${b.id}: ${sum}`);
  }
  if (!csvLines.some((line) => line.startsWith(b.id + ','))) {
    throw new Error(`Missing ${b.id} in benchmarks.csv`);
  }
}

console.log(`OK: Verified ${data.facilityBenchmarks.length} facility presets, ${stateLines.length - 1} US state wage rows, and ${pcLines.length - 1} post-construction phases.`);
