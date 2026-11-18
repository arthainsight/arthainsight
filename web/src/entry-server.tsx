import { renderToString } from "react-dom/server";
import App from "./App";
import type { Lang, PageKey } from "./content";

/** Käytetään vain buildin yhteydessä (scripts/prerender.mjs). */
export function render(lang: Lang, page: PageKey = "home"): string {
  return renderToString(<App lang={lang} page={page} />);
}
