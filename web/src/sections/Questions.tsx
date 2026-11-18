import { useContent } from "../i18n";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/SectionHeading";

export function Questions() {
  const c = useContent();
  const q = c.questions;
  return (
    <section id={c.ids.questions} aria-labelledby="questions-title" className="bg-paper py-24 md:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{q.eyebrow}</Eyebrow>
              <h2 id="questions-title" className="mt-7 text-[2rem] text-forest sm:text-4xl lg:text-[2.85rem]">
                {q.title}
              </h2>
              <p className="mt-8 max-w-md text-ink-soft">{q.situations}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-3">
            <Reveal delay={120}>
              <ul className="border-t border-forest/15">
                {q.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-5 border-b border-forest/15 py-5 font-serif text-[1.4rem] leading-snug text-forest md:text-[1.65rem]"
                  >
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-5 shrink-0 bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal className="mx-auto mt-20 max-w-3xl text-center md:mt-28">
          <span aria-hidden="true" className="mx-auto mb-8 block h-12 w-px bg-gold" />
          <p className="font-serif text-[1.65rem] italic leading-[1.35] text-forest md:text-[2.15rem]">{q.closing}</p>
        </Reveal>
      </Container>
    </section>
  );
}
