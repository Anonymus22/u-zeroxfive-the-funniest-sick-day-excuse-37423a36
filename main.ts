// The Funniest Sick-Day Excuse — make.fun micro entry (program/v1)
//
// The joke's construction: it opens like a perfectly ordinary sick-day text
// ("Sorry, can't come in today"), then the reason is a fresh, modern mishap
// instead of a worn excuse — a smart lock that updated itself overnight and
// forgot its owner's face. The twist lands on the very last word:
// the sender is locked out of their own flat "in my pyjamas", a small,
// humiliating detail a boss might half believe and a coworker would laugh
// at. Every word does work; nothing is decoration.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry, can't come in today — my smart lock updated overnight, forgot my face, and now I'm locked out of my own flat in my pyjamas.";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("excuse must be a single line");
}
if (EXCUSE.trim().length === 0) {
  throw new Error("excuse must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
