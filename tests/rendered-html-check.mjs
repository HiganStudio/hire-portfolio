import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const html = readFileSync(resolve(import.meta.dirname, "../index.html"), "utf8");
const required = [
	"<title>Higan Studio",
	"<meta name=\"description\"",
	"<link rel=\"canonical\" href=\"https://hire.higan.studio/\"",
	"<h1>",
	"Wir entwickeln",
	"Strategie, Design und Entwicklung aus einer Hand.",
];

for (const value of required) {
	if (!html.includes(value)) throw new Error(`Missing crawler-visible HTML: ${value}`);
}
if (/\{\{[^}]+\}\}/.test(html)) throw new Error("Unresolved template placeholder found in rendered HTML");

console.log("Hire Higan rendered HTML SEO regression check passed.");
