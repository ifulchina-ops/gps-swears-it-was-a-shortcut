// The GPS Swears It Was a Shortcut — the GPS's own excuse for sending
// the driver down the wrong road, in its own smug, defensive voice,
// blaming the map. The joke's turn: the GPS is not lost, it is
// embarrassed — it believed the map about the lake being a road, and
// after three U-turns it was too ashamed to confess.
//
// The program writes that single line to /output/entry.txt. Nothing else:
// the judge reads two lines at a time and keeps the funnier one.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Don't blame me - the map swore that lake was a road, and after your third U-turn I was too embarrassed to admit it lied.";

function main(): void {
  // The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
  // not only white space, a single line. Fail loudly here rather than
  // shipping an entry the sealed scorer would mark invalid.
  if (ENTRY.length < 1 || ENTRY.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
}

main();
