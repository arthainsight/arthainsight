import type { CSSProperties } from "react";
import { useContent } from "../i18n";
import { getBooking } from "../config/site";
import { Horizon } from "../components/art/Horizon";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  const c = useContent();
  const hero = c.hero;
  const booking = getBooking(c.ids.contact);
  return (
    <section
      id={c.ids.home}
      aria-labelledby="hero-title"
      className="on-dark relative isolate flex min-h-[max(100svh,44rem)] items-start overflow-hidden bg-[#14291f] text-paper"
    >
      <Horizon
        variant="lake"
        idPrefix="hero"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-auto w-full min-w-[1000px] -translate-x-1/2"
      />

      <Container className="relative z-10 pb-[18rem] pt-36 md:pb-[21rem] md:pt-44 lg:pt-48">
        <p
          className="hero-in text-[0.78rem] font-medium uppercase tracking-[0.32em] text-gold-soft"
          style={delay(60)}
        >
          {hero.eyebrow}
        </p>

        <h1
          id="hero-title"
          className="hero-in mt-5 max-w-4xl text-[2.35rem] sm:text-5xl lg:text-[3.8rem]"
          style={delay(140)}
        >
          {hero.title}
        </h1>

        <p
          className="hero-in mt-8 max-w-xl text-[1.08rem] leading-relaxed text-paper/88 md:text-lg"
          style={delay(300)}
        >
          {hero.lead}
        </p>
        <p
          className="hero-in mt-4 max-w-xl font-serif text-[1.45rem] italic leading-snug text-gold-soft"
          style={delay(400)}
        >
          {hero.support}
        </p>

        <div
          className="hero-in mt-10 flex flex-col gap-4 sm:flex-row"
          style={delay(520)}
        >
          <Button href={booking.href} variant="light" external={booking.external}>
            {hero.primaryCta}
          </Button>
          <Button href={`#${c.ids.coaching}`} variant="outline-light">
            {hero.secondaryCta}
          </Button>
        </div>
        <p className="hero-in mt-6 text-[0.9rem] tracking-wide text-paper/75" style={delay(620)}>
          {hero.meta}
        </p>
      </Container>
    </section>
  );
}
