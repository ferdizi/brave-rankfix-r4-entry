import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  `By the forge I asked, "Let me lift the iron bar."`,
  `Grandfather smiled, "First tend the coals."`,
  `I shovelled ash, polished the anvil, tightened bolts.`,
  `When the fire glowed bright, he handed the handle—`,
  `the bar rose, my own hands steadied it.`,
];

function writeEntry(path: string, lines: string[]): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(path, lines.join("\n"), "utf8");
}

writeEntry("/output/entry.txt", lines);
