import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import type { Lang, PageKey } from "./content";
import { ContentProvider, useContent } from "./i18n";
import { About } from "./sections/About";
import { Basis } from "./sections/Basis";
import { ClosingCta } from "./sections/ClosingCta";
import { Coaching } from "./sections/Coaching";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { PhilosophyPage } from "./sections/PhilosophyPage";
import { Questions } from "./sections/Questions";

function Page() {
  const c = useContent();
  return (
    <>
      <a href={`#${c.ids.main}`} className="skip-link">
        {c.a11y.skip}
      </a>
      <Header />
      <main id={c.ids.main} tabIndex={-1} className="outline-none">
        {c.page === "philosophy" ? (
          <PhilosophyPage />
        ) : (
          <>
            {/* 1 Hero · 2 Kysymykset · 3–6 Palvelu (esittely, vaiheet, kenelle, hinta ja varaus) · 7 Filosofinen perusta
                · 8 Minusta · 9 Yhteydenotto ja loppukutsu */}
            <Hero />
            <Questions />
            <Coaching />
            <Basis />
            <About />
            <Contact />
            <ClosingCta />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default function App({ lang, page = "home" }: { lang: Lang; page?: PageKey }) {
  return (
    <ContentProvider lang={lang} page={page}>
      <Page />
    </ContentProvider>
  );
}
