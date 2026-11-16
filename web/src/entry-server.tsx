import { renderToString } from "react-dom/server";
import App from "./App";
import type { Lang } from "./content";

/** Käytetään vain buildin yhteydessä (scripts/prerender.mjs). */
export function render(lang: Lang): string {
  return renderToString(<App lang={lang} />);
}
