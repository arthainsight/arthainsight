import { en } from "./en";
import { fi, type Content } from "./fi";

export type Lang = "fi" | "en";
export type { Content };

export const contents: Record<Lang, Content> = { fi, en };

export function getContent(lang: Lang): Content {
  return contents[lang];
}
