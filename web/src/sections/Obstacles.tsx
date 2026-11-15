import { obstacles } from "../content/copy";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/SectionHeading";

export function Obstacles() {
  return (
    <section id="esteet" aria-labelledby="obstacles-title" className="bg-paper-deep py-24 md:py-36">
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow>{obstacles.eyebrow}</Eyebrow>
          <h2 id="obstacles-title" className="mt-7 text-[2rem] text-forest sm:text-4xl lg:text-[3.1rem]">
            {obstacles.title}
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {obstacles.items.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={(i % 3) * 100} className="h-full border-t border-forest/25 pt-6">
                <span aria-hidden="true" className="font-serif text-lg tracking-[0.18em] text-gold-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[1.55rem] leading-tight text-forest">{item.title}</h3>
                <p className="mt-4 text-ink-soft">{item.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mx-auto mt-20 max-w-3xl text-center md:mt-28">
          <p className="font-serif text-[1.55rem] italic leading-[1.4] text-forest md:text-[2rem]">
            {obstacles.closing}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
