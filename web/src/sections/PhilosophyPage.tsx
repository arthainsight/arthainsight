import type { CSSProperties, ReactNode } from "react";
import { useContent } from "../i18n";
import { getBooking } from "../config/site";
import { Horizon } from "../components/art/Horizon";
import { PurusharthaPanels } from "../components/PurusharthaPanels";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";

const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as CSSProperties;

/** Otsikko vasemmalla, sisältö oikealla. */
function SplitSection({
  id,
  titleId,
  title,
  tone = "paper",
  children,
}: {
  id: string;
  titleId: string;
  title: string;
  tone?: "paper" | "deep";
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={titleId} className={tone === "deep" ? "bg-paper-deep" : "bg-paper"}>
      <Container className="py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 id={titleId} className="text-[2rem] text-forest sm:text-4xl lg:text-[2.7rem]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7 lg:pt-2">
            {children}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

const smallLabel = "font-sans text-[0.78rem] font-medium uppercase leading-relaxed tracking-[0.26em]";

/** Filosofia-sivu: filosofinen syvyys. Etusivulla on vain lyhyt esittely. */
export function PhilosophyPage() {
  const c = useContent();
  const p = c.philosophyPage;
  const ids = p.ids;
  const booking = getBooking(c.ids.contact);

  return (
    <>
      {/* Yläosa */}
      <section
        id="sisalto-alku"
        aria-labelledby="phil-title"
        className="on-dark relative isolate flex min-h-[30rem] items-start overflow-hidden bg-[#14291f] text-paper md:min-h-[34rem]"
      >
        <Horizon
          variant="path"
          idPrefix="phil"
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-auto w-full min-w-[1000px] -translate-x-1/2"
        />
        <Container className="relative z-10 pb-[13rem] pt-36 md:pb-[15rem] md:pt-44">
          <p className="hero-in text-[0.78rem] font-medium uppercase tracking-[0.32em] text-gold-soft" style={delay(60)}>
            {p.hero.eyebrow}
          </p>
          <h1 id="phil-title" className="hero-in mt-5 max-w-3xl text-[2.35rem] sm:text-5xl lg:text-[3.5rem]" style={delay(140)}>
            {p.hero.title}
          </h1>
          <p className="hero-in mt-6 max-w-xl text-[1.08rem] leading-relaxed text-paper/88 md:text-lg" style={delay(300)}>
            {p.hero.lead}
          </p>
        </Container>
      </section>

      {/* Sisältö ja kolme tasoa */}
      <section id={ids.levels} aria-labelledby="levels-title" className="bg-paper">
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <nav aria-label={c.a11y.toc}>
                <p className={`${smallLabel} text-gold-deep`}>{p.tocTitle}</p>
                <ul className="mt-5 space-y-3">
                  {p.toc.map((item) => (
                    <li key={item.key}>
                      <a
                        href={`#${ids[item.key as keyof typeof ids]}`}
                        className="font-serif text-[1.25rem] leading-snug text-forest underline decoration-gold/60 decoration-1 underline-offset-[6px] transition-colors hover:decoration-forest"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>
            <div className="lg:col-span-8">
              <Reveal delay={120}>
                <h2 id="levels-title" className="text-[1.9rem] text-forest md:text-[2.3rem]">
                  {p.levels.title}
                </h2>
                <p className="mt-3 text-ink-soft">{p.levels.intro}</p>
              </Reveal>
              <ul className="mt-8 grid gap-8 md:grid-cols-3">
                {p.levels.items.map((item, i) => (
                  <li key={item.label}>
                    <Reveal delay={i * 100} className="h-full border-t border-forest/25 pt-5">
                      <h3 className={`${smallLabel} text-gold-deep`}>{item.label}</h3>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{item.text}</p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Vedanta */}
      <SplitSection id={ids.vedanta} titleId="vedanta-title" title={p.vedanta.title} tone="deep">
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink">
          {p.vedanta.paragraphs.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </SplitSection>

      {/* Joogafilosofia ja ehdollistuminen */}
      <section id={ids.yoga} aria-labelledby="yoga-title" className="bg-paper">
        <Container className="py-20 md:py-28">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <h2 id="yoga-title" className="text-[2rem] text-forest sm:text-4xl lg:text-[2.7rem]">
                {p.yoga.title}
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-7 lg:pt-2">
              <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink">
                {p.yoga.paragraphs.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-16">
            <h3 className="text-[1.5rem] text-forest md:text-[1.8rem]">{p.yoga.examplesTitle}</h3>
          </Reveal>
          <ul className="mt-8 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {p.yoga.examples.map((item, i) => (
              <li
                key={item.title}
                className={i === p.yoga.examples.length - 1 && p.yoga.examples.length % 3 === 1 ? "sm:col-span-2 lg:col-span-3" : ""}
              >
                <Reveal delay={(i % 3) * 100} className="h-full border-t border-forest/25 pt-5">
                  <span aria-hidden="true" className="font-serif text-lg tracking-[0.18em] text-gold-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-2 text-[1.35rem] leading-tight text-forest">{item.title}</h4>
                  <p className="mt-3 max-w-3xl text-[0.98rem] text-ink-soft">{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Neljä Puruṣārthaa */}
      <section id={ids.purusharthas} aria-labelledby="purusharthas-title" className="bg-paper-deep">
        <Container className="pb-12 pt-20 md:pb-16 md:pt-28">
          <Reveal>
            <h2 id="purusharthas-title" className="text-[2rem] text-forest sm:text-4xl lg:text-[2.7rem]">
              {p.purusharthas.title}
            </h2>
          </Reveal>
          <div className="mt-12 space-y-10">
            {[p.purusharthas.classical, p.purusharthas.shanmukha].map((block) => (
              <Reveal key={block.label} className="grid gap-4 border-t border-forest/20 pt-6 lg:grid-cols-12 lg:gap-16">
                <h3 className={`${smallLabel} text-gold-deep lg:col-span-4`}>{block.label}</h3>
                <p className="text-[1.05rem] leading-relaxed text-ink lg:col-span-8">{block.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
        <PurusharthaPanels />
        <Container className="pb-20 pt-12 md:pb-28 md:pt-16">
          <Reveal className="grid gap-4 border-t border-forest/20 pt-6 lg:grid-cols-12 lg:gap-16">
            <h3 className={`${smallLabel} text-gold-deep lg:col-span-4`}>{p.purusharthas.application.label}</h3>
            <p className="text-[1.05rem] leading-relaxed text-ink lg:col-span-8">{p.purusharthas.application.text}</p>
          </Reveal>
        </Container>
      </section>

      {/* Svabhāva ja Svadharma */}
      <SplitSection id={ids.svabhava} titleId="svabhava-title" title={p.svabhava.title}>
        <p className="border-l border-gold pl-6 text-[1.05rem] leading-relaxed text-ink">{p.svabhava.text}</p>
      </SplitSection>

      {/* Identiteetti, Atman ja Dharma */}
      <section id={ids.identity} aria-labelledby="identity-title" className="bg-paper-deep">
        <Container className="py-20 md:py-28">
          <Reveal>
            <h2 id="identity-title" className="max-w-2xl text-[2rem] text-forest sm:text-4xl lg:text-[2.7rem]">
              {p.identity.title}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0">
            <Reveal className="md:border-r md:border-forest/20 md:pr-12">
              <h3 className={`${smallLabel} text-ink-soft md:min-h-[2.8rem]`}>{p.identity.leftTitle}</h3>
              <p className="mt-5 font-serif text-[1.45rem] leading-snug text-forest md:text-[1.6rem]">{p.identity.leftText}</p>
            </Reveal>
            <Reveal delay={120} className="md:pl-12">
              <h3 className={`${smallLabel} text-gold-deep md:min-h-[2.8rem]`}>{p.identity.rightTitle}</h3>
              <p className="mt-5 font-serif text-[1.45rem] leading-snug text-forest md:text-[1.6rem]">{p.identity.rightText}</p>
            </Reveal>
          </div>
          <Reveal className="mt-14 max-w-3xl border-l border-gold pl-6">
            <h3 className={`${smallLabel} text-gold-deep`}>{p.identity.relationTitle}</h3>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink">{p.identity.relationText}</p>
          </Reveal>
        </Container>
      </section>

      {/* Oman luonnon löytäminen */}
      <section id={ids.nature} aria-labelledby="nature-title" className="bg-paper">
        <Container className="py-20 md:py-28">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <h2 id="nature-title" className="text-[1.9rem] leading-tight text-forest md:text-[2.4rem]">
                {p.nature.title}
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-6 lg:pt-3">
              <p className="text-[1.05rem] leading-relaxed text-ink">{p.nature.text}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Kuusi filosofista vaihetta */}
      <section id={ids.steps} aria-labelledby="steps-title" className="bg-paper-deep">
        <Container className="py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <h2 id="steps-title" className="text-[2rem] text-forest sm:text-4xl lg:text-[2.7rem]">
              {p.steps.title}
            </h2>
            <p className="mt-4 text-ink-soft">{p.steps.intro}</p>
          </Reveal>
          <ol className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {p.steps.items.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={(i % 3) * 100} className="h-full border-t border-forest/25 pt-6">
                  <span aria-hidden="true" className="font-serif text-lg tracking-[0.18em] text-gold-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[1.45rem] leading-tight text-forest">{step.title}</h3>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Lopetus */}
      <section aria-label={p.closing.cta} className="on-dark bg-forest py-20 text-paper md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <p className="font-serif text-[1.7rem] italic leading-[1.35] text-paper md:text-[2.1rem]">{p.closing.freedom}</p>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-6 lg:pt-3">
              <p className="border-l border-gold-soft pl-6 leading-relaxed text-paper/85">{p.closing.stance}</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href={booking.href} variant="light" external={booking.external}>
                  {p.closing.cta}
                </Button>
                <a
                  href={c.url(c.paths.home)}
                  className="text-[0.95rem] text-gold-soft underline decoration-gold-soft/50 underline-offset-[6px] transition-colors hover:text-paper"
                >
                  {p.closing.back}
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
