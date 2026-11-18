import { useContent } from "../i18n";
import { PurusharthaPanels } from "../components/PurusharthaPanels";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/SectionHeading";

/** Lyhyt esittely filosofisesta perustasta etusivulla. Syvällinen käsittely on Filosofia-sivulla. */
export function Basis() {
  const c = useContent();
  const b = c.basis;
  return (
    <section id={c.ids.basis} aria-labelledby="basis-title" className="bg-paper">
      <Container className="pb-12 pt-24 md:pb-16 md:pt-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <Eyebrow>{b.eyebrow}</Eyebrow>
            <h2 id="basis-title" className="mt-7 text-[2rem] text-forest sm:text-4xl lg:text-[3rem]">
              {b.title}
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:pt-3">
            <p className="text-ink-soft">{b.text}</p>
            <div className="mt-7">
              <Button href={c.url(c.paths.philosophy)} variant="outline-dark">
                {b.link}
              </Button>
            </div>
          </Reveal>
        </div>
        <p className="mt-14 text-[0.95rem] text-ink-soft">{b.panelsIntro}</p>
      </Container>
      <PurusharthaPanels compact />
      <div className="h-20 md:h-28" aria-hidden="true" />
    </section>
  );
}
