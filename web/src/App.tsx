import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import type { Lang } from "./content";
import { ContentProvider, useContent } from "./i18n";
import { About } from "./sections/About";
import { ClosingCta } from "./sections/ClosingCta";
import { Consultation } from "./sections/Consultation";
import { Contact } from "./sections/Contact";
import { Crossroads } from "./sections/Crossroads";
import { Hero } from "./sections/Hero";
import { Obstacles } from "./sections/Obstacles";
import { Philosophy } from "./sections/Philosophy";

function Page() {
  const c = useContent();
  return (
    <>
      <a href={`#${c.ids.main}`} className="skip-link">
        {c.a11y.skip}
      </a>
      <Header />
      <main id={c.ids.main} tabIndex={-1} className="outline-none">
        <Hero />
        <Crossroads />
        <Consultation />
        <Philosophy />
        <Obstacles />
        <About />
        <ClosingCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App({ lang }: { lang: Lang }) {
  return (
    <ContentProvider lang={lang}>
      <Page />
    </ContentProvider>
  );
}
