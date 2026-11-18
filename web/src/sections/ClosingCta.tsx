import { useContent } from "../i18n";
import { getBooking } from "../config/site";
import { Horizon } from "../components/art/Horizon";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";

export function ClosingCta() {
  const c = useContent();
  const closing = c.closing;
  const booking = getBooking(c.ids.contact);
  return (
    <section
      id={c.ids.closing}
      aria-labelledby="closing-title"
      className="on-dark relative isolate flex min-h-[max(92svh,42rem)] items-start overflow-hidden bg-[#14291f] text-paper"
    >
      <Horizon
        variant="path"
        idPrefix="closing"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-auto w-full min-w-[1000px] -translate-x-1/2"
      />

      <Container className="relative z-10 pb-[19rem] pt-24 text-center md:pb-[22rem] md:pt-32">
        <Reveal>
          <h2 id="closing-title" className="mx-auto max-w-4xl text-[2.2rem] sm:text-5xl lg:text-[4rem]">
            {closing.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[1.08rem] leading-relaxed text-paper/88 md:text-lg">{closing.text}</p>
          <div className="mt-10 flex justify-center">
            <Button href={booking.href} variant="light" external={booking.external}>
              {closing.cta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
