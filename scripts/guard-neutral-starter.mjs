import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const runtimeDirs = ["src"];
const forbidden = [
  "Tagaytay Garden Classic",
  "Alex Lisa",
  "Alex & Lisa",
  "alex-lisa",
  "The Garden Hall",
  "Formal garden attire",
  "client-specific"
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(path));
      continue;
    }
    if (/\.(css|json|mjs|js|jsx|ts|tsx)$/.test(entry.name)) files.push(path);
  }

  return files;
}

const failures = [];

for (const dir of runtimeDirs) {
  for (const file of await walk(join(root, dir))) {
    const content = await readFile(file, "utf8");
    for (const term of forbidden) {
      if (content.includes(term)) failures.push(`${file.replace(`${root}/`, "")}: contains "${term}"`);
    }
  }
}

if (failures.length) {
  console.error("Neutral starter guard failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Neutral starter guard passed.");
