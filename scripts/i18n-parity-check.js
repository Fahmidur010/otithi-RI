/**
 * Temporary / progressive check: EN↔BN key parity + HTML data-i18n coverage.
 * Invoked by npm run check once wired (home-about step 4).
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const i18nPath = path.join(root, "assets", "js", "i18n.js");
const src = fs.readFileSync(i18nPath, "utf8");
const sandbox = {};
new Function("window", src)(sandbox);
const i18n = sandbox.OtithiI18n;
if (!i18n || !i18n.strings) {
  console.error("i18n-parity: OtithiI18n missing");
  process.exit(1);
}

const en = Object.keys(i18n.strings.en).sort();
const bn = Object.keys(i18n.strings.bn).sort();
const onlyEn = en.filter((k) => !Object.prototype.hasOwnProperty.call(i18n.strings.bn, k));
const onlyBn = bn.filter((k) => !Object.prototype.hasOwnProperty.call(i18n.strings.en, k));
const empty = en.filter(
  (k) => !String(i18n.strings.en[k] || "").trim() || !String(i18n.strings.bn[k] || "").trim()
);

const htmlFiles = ["index.html", "about.html"];
const htmlKeys = new Set();
for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  for (const m of html.matchAll(/data-i18n="([^"]+)"/g)) {
    htmlKeys.add(m[1]);
  }
}
const missingInDict = [...htmlKeys].filter((k) => !en.includes(k));

let failed = false;
if (onlyEn.length || onlyBn.length) {
  console.error("i18n-parity: EN/BN key mismatch", { onlyEn, onlyBn });
  failed = true;
}
if (empty.length) {
  console.error("i18n-parity: empty strings", empty);
  failed = true;
}
if (missingInDict.length) {
  console.error("i18n-parity: HTML keys missing in EN dict", missingInDict);
  failed = true;
}

if (failed) process.exit(1);
console.log(
  `i18n-parity ok (${en.length} keys, ${htmlKeys.size} HTML hooks on Home/About)`
);
