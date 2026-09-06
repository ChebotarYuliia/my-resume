#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { BREAKPOINTS } from "../src/styles/breakpoints.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "../src/styles/_breakpoints.generated.scss");

const scss = `// AUTO-GENERATED from src/styles/breakpoints.ts by
// scripts/generate-breakpoints-scss.mjs — do not edit directly.
${Object.entries(BREAKPOINTS)
  .map(([name, value]) => `$breakpoint-${name}: ${value}px;`)
  .join("\n")}
`;

writeFileSync(outPath, scss);
console.log(`Generated ${outPath}`);
