// Esirenderöi molemmat kieliversiot HTML:ksi buildin jälkeen.
// Ajetaan komennolla `npm run build` (ks. package.json).
import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const ssrDir = path.join(root, "dist-ssr");
const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const pages = [
  { lang: "fi", file: path.join(root, "dist", "index.html") },
  { lang: "en", file: path.join(root, "dist", "en", "index.html") },
];

const marker = '<div id="root"></div>';
for (const { lang, file } of pages) {
  const html = await readFile(file, "utf8");
  if (!html.includes(marker)) {
    throw new Error(`Esirenderöinti: merkkiä ${marker} ei löytynyt tiedostosta ${file}.`);
  }
  await writeFile(file, html.replace(marker, `<div id="root">${render(lang)}</div>`));
  console.log(`Esirenderöity (${lang}): ${path.relative(root, file)}`);
}

await rm(ssrDir, { recursive: true, force: true });
