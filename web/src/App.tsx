import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./sections/About";
import { ClosingCta } from "./sections/ClosingCta";
import { Consultation } from "./sections/Consultation";
import { Contact } from "./sections/Contact";
import { Crossroads } from "./sections/Crossroads";
import { Hero } from "./sections/Hero";
import { Obstacles } from "./sections/Obstacles";
import { Philosophy } from "./sections/Philosophy";

export default function App() {
  return (
    <>
      <a href="#sisalto" className="skip-link">
        Siirry sisältöön
      </a>
      <Header />
      <main id="sisalto" tabIndex={-1} className="outline-none">
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
