import { renderToString } from "react-dom/server";
import App from "./App";

/** Käytetään vain buildin yhteydessä (scripts/prerender.mjs). */
export function render(): string {
  return renderToString(<App />);
}
