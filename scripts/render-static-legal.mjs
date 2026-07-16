import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const pages = ["impressum", "datenschutz", "tos", "projektvertrag", "wartung"];

function renderDocument(path, content, title) {
	const canonical = `https://hire.higan.studio/${path}/`;
	return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} | Higan Studio</title>
  <meta name="description" content="${title} von Higan Studio.">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="${canonical}">
  <meta property="og:title" content="${title} | Higan Studio">
  <meta property="og:description" content="${title} von Higan Studio.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta name="twitter:card" content="summary">
  <style>
    :root { color-scheme: dark; font-family: Inter, system-ui, sans-serif; }
    * { box-sizing: border-box; } body { margin: 0; background: #0a0a0a; color: #f4f2f7; line-height: 1.7; }
    a { color: #d9c6ee; } .wrap { width: min(760px, calc(100% - 40px)); margin: auto; }
    header, footer { border-color: rgba(255,255,255,.12); border-style: solid; border-width: 0 0 1px; }
    header { padding: 20px 0; } header .wrap, footer .wrap { display: flex; gap: 18px; flex-wrap: wrap; align-items: center; justify-content: space-between; }
    nav { display: flex; flex-wrap: wrap; gap: 14px; font-size: .92rem; } main { padding: 90px 0 70px; }
    h1, h2, h3 { font-family: Georgia, serif; line-height: 1.15; color: #c3a6e0; } h1 { font-size: clamp(2.4rem, 7vw, 4.3rem); margin: 0 0 2.5rem; }
    h2 { margin-top: 3rem; } p, li { color: #ded9e4; } footer { border-width: 1px 0 0; padding: 30px 0 50px; color: #c9c3cf; }
    .page-label { font-size: .75rem; letter-spacing: .14em; text-transform: uppercase; color: #c3a6e0; }
    .btn-download { display: inline-block; padding: 12px 18px; border: 1px solid #c3a6e0; border-radius: 8px; text-decoration: none; }
    .highlight-box { border: 1px solid rgba(195,166,224,.35); border-radius: 12px; padding: 18px 22px; } .divider { height: 1px; background: rgba(255,255,255,.15); margin: 42px 0; }
  </style>
</head>
<body>
  <header><div class="wrap"><a href="/" aria-label="Higan Studio Startseite">Higan Studio</a><nav aria-label="Hauptnavigation"><a href="/#services">Leistungen</a><a href="/#about">Über uns</a><a href="/#contact">Kontakt</a></nav></div></header>
  <main class="wrap">${content}</main>
  <footer><div class="wrap"><p>Higan Studio · Digitale Produkte, Design &amp; Automatisierung</p><nav aria-label="Rechtliches"><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a><a href="/tos/">AGB</a><a href="/projektvertrag/">Projektvertrag</a><a href="/wartung/">Wartung</a></nav></div></footer>
</body>
</html>`;
}

for (const path of pages) {
	const file = resolve(import.meta.dirname, "..", path, "index.html");
	const source = readFileSync(file, "utf8");
	const match = source.match(/<sc-if value="\{\{ isDe \}\}">([\s\S]*?)<\/sc-if>/);
	if (!match) throw new Error(`German legal content was not found for ${path}`);
	const content = match[1].trim();
	const title = content.match(/<h1>([\s\S]*?)<\/h1>/)?.[1].replace(/<[^>]+>/g, "").trim();
	if (!title) throw new Error(`H1 was not found for ${path}`);
	writeFileSync(file, renderDocument(path, content, title));
}

console.log("Rendered static Hire Higan legal pages.");
