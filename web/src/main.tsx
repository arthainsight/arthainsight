import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

// Fontit omasta paketista: ei ulkoisia pyyntöjä, nopea ja yksityinen.
import "@fontsource-variable/inter";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/500-italic.css";

import "./index.css";
import App from "./App";
import type { Lang } from "./content";

const container = document.getElementById("root");
if (!container) throw new Error("Juurielementtiä #root ei löytynyt.");

// Kieli luetaan sivun <html lang="...">-määreestä: index.html on suomeksi, en/index.html englanniksi.
const lang: Lang = document.documentElement.lang === "en" ? "en" : "fi";

const app = (
  <StrictMode>
    <App lang={lang} />
  </StrictMode>
);

// Tuotannossa sivu on esirenderöity HTML:ksi (hakukoneille ja nopeaan ensinäkymään),
// jolloin React vain "herättää" sen eloon. Kehityspalvelimella render tehdään tyhjästä.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
