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

for (const path of ["impressum", "datenschutz", "tos", "projektvertrag", "wartung"]) {
	const legalHtml = readFileSync(resolve(import.meta.dirname, `../${path}/index.html`), "utf8");
	if (!legalHtml.includes("<h1>")) throw new Error(`Missing legal-page H1: ${path}`);
	if (!legalHtml.includes(`https://hire.higan.studio/${path}/`)) throw new Error(`Missing legal-page canonical: ${path}`);
	if (/\{\{[^}]+\}\}/.test(legalHtml)) throw new Error(`Unresolved template placeholder found in ${path}`);
	if (/name="robots" content="noindex/i.test(legalHtml)) throw new Error(`Unexpected noindex directive in ${path}`);
}

console.log("Hire Higan rendered HTML SEO regression check passed.");
