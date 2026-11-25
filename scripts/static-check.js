/**
 * Static site sanity check for Phasestep buildCommand (`npm run check`).
 * Always validates locked docs. Once the site scaffold appears, validates core paths.
 * Progressive: if a list/detail page exists, its pair must exist too.
 */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
let failed = false;

function exists(rel) {
  return fs.existsSync(path.join(root, rel));
}

function requireFile(rel) {
  if (!exists(rel)) {
    console.error(`Missing: ${rel}`);
    failed = true;
  }
}

const always = [
  "package.json",
  "docs/product.md",
  "docs/USER_FLOW.md",
  "docs/architecture.md",
  "docs/DESIGN_SYSTEM.md",
  "docs/BUILD_PLAN.md",
];

always.forEach(requireFile);

/* Full scaffold required only once HTML entry exists (allows CSS/assets steps first). */
const siteStarted = exists("index.html");

if (siteStarted) {
  [
    "index.html",
    "about.html",
    "assets/css/tokens.css",
    "assets/css/base.css",
    "assets/css/components.css",
    "assets/js/main.js",
  ].forEach(requireFile);
}

if (exists("destinations.html")) {
  requireFile("destinations/sylhet.html");
}

if (exists("festivals.html")) {
  requireFile("festivals/nobanno-utshob.html");
}

if (exists("assets/js/booking-mock.js")) {
  requireFile("destinations/sylhet.html");
  requireFile("festivals/nobanno-utshob.html");
}

if (exists("gallery.html")) {
  requireFile("faq.html");
}

if (failed) {
  console.error("static-check failed");
  process.exit(1);
}

console.log("static-check ok");
