#!/usr/bin/env node
/**
 * Publishes an exported JSON backup as the site's built-in starting data,
 * so anyone who opens the site fresh (with nothing in their own browser's
 * localStorage — e.g. every teammate you send the link to) sees your
 * latest stats instead of the placeholder sample roster.
 *
 * Usage:
 *   node scripts/publish-data.js path/to/wildcats-stats-2026-04-10.json
 *
 * What it does:
 *   Rewrites the STARTER_DATA constant near the top of js/app.js with the
 *   contents of the JSON file you give it. Nothing else in app.js is
 *   touched. Your own browser keeps using whatever is in its localStorage
 *   regardless — this only changes what NEW visitors see.
 *
 * Typical workflow after entering/editing stats:
 *   1. In the site, click "Export Backup" to download a JSON file.
 *   2. node scripts/publish-data.js ~/Downloads/wildcats-stats-....json
 *   3. git add -A && git commit -m "Publish updated stats" && git push
 */
const fs = require("fs");
const path = require("path");

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: node scripts/publish-data.js path/to/export.json");
  process.exit(1);
}

const appJsPath = path.join(__dirname, "..", "js", "app.js");

let data;
try {
  const raw = fs.readFileSync(inputPath, "utf8");
  data = JSON.parse(raw);
} catch (e) {
  console.error(`Couldn't read/parse ${inputPath}: ${e.message}`);
  process.exit(1);
}

if (!data || typeof data.teamName !== "string" || !Array.isArray(data.seasons)) {
  console.error("That file doesn't look like a Wildcats stats export (missing teamName/seasons).");
  process.exit(1);
}

let appJs;
try {
  appJs = fs.readFileSync(appJsPath, "utf8");
} catch (e) {
  console.error(`Couldn't read ${appJsPath}: ${e.message}`);
  process.exit(1);
}

const startMarker = "const STARTER_DATA = ";
const startIdx = appJs.indexOf(startMarker);
const endMarker = "\n};\n/* =====================================================================";
const endIdx = appJs.indexOf(endMarker, startIdx);

if (startIdx === -1 || endIdx === -1) {
  console.error("Couldn't locate the STARTER_DATA block in js/app.js — file may have been restructured.");
  process.exit(1);
}

const before = appJs.slice(0, startIdx);
const after = appJs.slice(endIdx + "\n};".length);
const newBlock = startMarker + JSON.stringify(data, null, 2) + ";";

const updated = before + newBlock + after;
fs.writeFileSync(appJsPath, updated, "utf8");

const seasonCount = data.seasons.length;
const gameCount = data.seasons.reduce((n, s) => n + (s.games ? s.games.length : 0), 0);
console.log(`Published "${data.teamName}" — ${seasonCount} season(s), ${gameCount} game(s) — into js/app.js`);
console.log("Now commit and push:  git add -A && git commit -m \"Publish updated stats\" && git push");
