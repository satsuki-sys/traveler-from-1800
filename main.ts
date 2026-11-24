// One Sentence for a Traveler from 1800 — make.fun bounty entry.
// Writes a single sentence (<=200 chars) explaining the modern internet
// to someone arriving from 1800, using only words and pictures they
// could already know: a road, a post office, a library, a letter, a book.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Imagine one road joining every post office and library in the world, so a letter you write at breakfast is read across the sea before dinner, and the book you seek lies open before you at once.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to /output/entry.txt`);
