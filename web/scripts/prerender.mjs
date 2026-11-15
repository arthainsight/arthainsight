// Esirenderöi etusivun HTML:ksi buildin jälkeen.
// Ajetaan komennolla `npm run build` (ks. package.json).
import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const distHtml = path.join(root, "dist", "index.html");
const ssrDir = path.join(root, "dist-ssr");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const html = await readFile(distHtml, "utf8");
const marker = '<div id="root"></div>';
if (!html.includes(marker)) {
  throw new Error(`Esirenderöinti: merkkiä ${marker} ei löytynyt dist/index.html-tiedostosta.`);
}

await writeFile(distHtml, html.replace(marker, `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });
console.log("Esirenderöinti valmis: dist/index.html");
