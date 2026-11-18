import { createContext, useContext, useMemo, type ReactNode } from "react";
import { getContent, relUrl, sitePaths, type Content, type Lang, type PageKey } from "./content";

export type SiteContext = Content & {
  /** Nykyinen sivu: etusivu tai Filosofia-sivu. */
  page: PageKey;
  lang: Lang;
  /** Tämän kielen sivujen osoitteet sivuston juuresta. */
  paths: (typeof sitePaths)[Lang];
  /** Muodostaa suhteellisen osoitteen nykyiseltä sivulta annettuun sivuston osoitteeseen (esim. "/logo.png"). */
  url: (to: string) => string;
};

const ContentContext = createContext<SiteContext | null>(null);

export function ContentProvider({ lang, page, children }: { lang: Lang; page: PageKey; children: ReactNode }) {
  const value = useMemo<SiteContext>(() => {
    const paths = sitePaths[lang];
    const here = paths[page];
    return { ...getContent(lang), lang, page, paths, url: (to: string) => relUrl(here, to) };
  }, [lang, page]);
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

/** Palauttaa sivun kielen mukaiset tekstit ja osoitteiden apufunktiot. */
export function useContent(): SiteContext {
  const value = useContext(ContentContext);
  if (!value) throw new Error("useContent: ContentProvider puuttuu.");
  return value;
}
