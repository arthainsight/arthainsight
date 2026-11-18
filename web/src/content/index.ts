import { en } from "./en";
import { fi, type Content } from "./fi";

export type Lang = "fi" | "en";
export type PageKey = "home" | "philosophy";
export type { Content };

export const contents: Record<Lang, Content> = { fi, en };

export function getContent(lang: Lang): Content {
  return contents[lang];
}

/** Sivujen ja tiedostojen osoitteet sivuston juuresta katsottuna. */
export const sitePaths = {
  fi: { home: "/", philosophy: "/filosofia/", privacy: "/tietosuoja.html" },
  en: { home: "/en/", philosophy: "/en/philosophy/", privacy: "/privacy.html" },
} as const;

/**
 * Suhteellinen osoite sivusta (`from`, esim. "/en/philosophy/") toiseen osoitteeseen (`to`, esim. "/#minusta").
 * Suhteelliset osoitteet pitävät buildin siirrettävänä: sivusto toimii domainin juuressa ja alikansiossa.
 */
export function relUrl(from: string, to: string): string {
  const [toPath, hash = ""] = to.split("#");
  const fromDirs = from.split("/").filter(Boolean);
  const toIsDir = toPath === "" || toPath.endsWith("/");
  const toSegs = toPath.split("/").filter(Boolean);
  const toDirs = toIsDir ? toSegs : toSegs.slice(0, -1);
  let i = 0;
  while (i < fromDirs.length && i < toDirs.length && fromDirs[i] === toDirs[i]) i++;
  const ups = fromDirs.length - i;
  const rest = toSegs.slice(i).join("/") + (toIsDir && toSegs.slice(i).length > 0 ? "/" : "");
  const base = (ups > 0 ? "../".repeat(ups) : "./") + rest;
  return hash ? `${base}#${hash}` : base;
}
