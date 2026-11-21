import { mkdirSync, writeFileSync } from "node:fs";

const poem = `By the forge I asked, "Let me lift the iron bar."
Grandfather smiled, "First tend the coals."
I shovelled ash, polished the anvil, tightened bolts.
When the fire glowed bright, he handed the handle—
the bar rose, my own hands steadied it.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
