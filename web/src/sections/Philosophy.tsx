import { philosophy } from "../content/copy";
import { PurusharthaIcon, type PurusharthaKey } from "../components/art/PurusharthaIcon";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/SectionHeading";

/** Neljä paneelia kulkee pimeästä valoon: syvä metsä, metsä, sammal, hiekka. */
const panelStyles: Record<PurusharthaKey, { bg: string; text: string; sub: string; accent: string; dark: boolean }> = {
  dharma: { bg: "bg-[#14271f]", text: "text-paper", sub: "text-paper/78", accent: "text-gold-soft", dark: true },
  artha: { bg: "bg-[#244433]", text: "text-paper", sub: "text-paper/80", accent: "text-lotus-soft", dark: true },
  kama: { bg: "bg-[#4a5d41]", text: "text-paper", sub: "text-paper/90", accent: "text-[#ffd09a]", dark: true },
  moksha: { bg: "bg-[#d9cba9]", text: "text-forest-deep", sub: "text-ink", accent: "text-lotus-deep", dark: false },
};

export function Philosophy() {
  return (
    <section id="filosofia" aria-labelledby="philosophy-title" className="bg-paper">
      <Container className="pb-20 pt-24 md:pb-28 md:pt-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{philosophy.eyebrow}</Eyebrow>
              <h2 id="philosophy-title" className="mt-7 text-[2rem] text-forest sm:text-4xl lg:text-[3.1rem]">
                {philosophy.title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <Reveal delay={120}>
              <p className="text-ink-soft">{philosophy.intro}</p>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Neljä päämäärää */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {philosophy.items.map((item, i) => {
          const s = panelStyles[item.key as PurusharthaKey];
          return (
            <Reveal
              as="article"
              key={item.key}
              delay={i * 110}
              className={`${s.bg} ${s.text} ${s.dark ? "on-dark" : ""} group relative flex min-h-[24rem] flex-col justify-between overflow-hidden p-8 md:p-10 lg:min-h-[32rem]`}
            >
              <div className="flex items-start justify-between">
                <PurusharthaIcon
                  name={item.key as PurusharthaKey}
                  className={`${s.accent} transition-transform duration-700 group-hover:-translate-y-1`}
                />
                <span aria-hidden="true" className={`font-serif text-lg tracking-[0.2em] ${s.accent}`}>
                  {item.numeral}
                </span>
              </div>

              <div className="mt-16">
                <h3 className="text-[2.1rem] uppercase tracking-[0.14em] md:text-[2.3rem]">{item.name}</h3>
                <p className={`mt-4 font-serif text-[1.45rem] italic leading-snug ${s.accent}`}>{item.line}</p>
                <p className={`mt-6 text-[0.98rem] leading-relaxed ${s.sub}`}>{item.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Container className="py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <figure>
              <blockquote>
                <p className="font-serif text-[1.9rem] italic leading-[1.3] text-forest md:text-[2.4rem]">
                  ”{philosophy.quote}”
                </p>
              </blockquote>
              <figcaption className="mt-5 text-[0.8rem] uppercase tracking-[0.24em] text-gold-deep">
                {philosophy.quoteSource}
              </figcaption>
            </figure>
            <p className="mt-8 max-w-md text-lg text-ink">{philosophy.dharmaNote}</p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6">
            <p className="text-lg leading-relaxed text-ink">{philosophy.freedom}</p>
            <p className="mt-6 border-l border-gold pl-6 leading-relaxed text-ink-soft">{philosophy.stance}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
