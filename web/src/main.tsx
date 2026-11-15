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

const container = document.getElementById("root");
if (!container) throw new Error("Juurielementtiä #root ei löytynyt.");

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Tuotannossa sivu on esirenderöity HTML:ksi (hakukoneille ja nopeaan ensinäkymään),
// jolloin React vain "herättää" sen eloon. Kehityspalvelimella render tehdään tyhjästä.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
