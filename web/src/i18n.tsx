import { createContext, useContext, type ReactNode } from "react";
import { getContent, type Content, type Lang } from "./content";

const ContentContext = createContext<Content | null>(null);

export function ContentProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <ContentContext.Provider value={getContent(lang)}>{children}</ContentContext.Provider>;
}

/** Palauttaa sivun kielen mukaiset tekstit. */
export function useContent(): Content {
  const value = useContext(ContentContext);
  if (!value) throw new Error("useContent: ContentProvider puuttuu.");
  return value;
}
