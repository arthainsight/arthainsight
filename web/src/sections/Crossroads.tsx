import { useContent } from "../i18n";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/SectionHeading";

export function Crossroads() {
  const c = useContent();
  const crossroads = c.crossroads;
  return (
    <section id={c.ids.crossroads} aria-labelledby="crossroads-title" className="bg-paper py-24 md:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{crossroads.eyebrow}</Eyebrow>
              <h2 id="crossroads-title" className="mt-7 text-[2rem] text-forest sm:text-4xl lg:text-[2.85rem]">
                {crossroads.title}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-3">
            <Reveal delay={120}>
              <p className="text-ink-soft">{crossroads.intro}</p>
              <ul className="mt-6 border-t border-forest/15">
                {crossroads.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-5 border-b border-forest/15 py-5 font-serif text-[1.4rem] leading-snug text-forest md:text-[1.6rem]"
                  >
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-5 shrink-0 bg-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-9 max-w-xl text-ink-soft">{crossroads.situations}</p>
            </Reveal>
          </div>
        </div>

        <Reveal className="mx-auto mt-20 max-w-3xl text-center md:mt-28">
          <span aria-hidden="true" className="mx-auto mb-8 block h-12 w-px bg-gold" />
          <p className="font-serif text-[1.65rem] italic leading-[1.35] text-forest md:text-[2.15rem]">
            {crossroads.closing}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
