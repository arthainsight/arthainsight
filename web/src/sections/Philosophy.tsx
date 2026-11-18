import { useContent } from "../i18n";
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
  const c = useContent();
  const philosophy = c.philosophy;
  const d = philosophy.distinction;
  return (
    <section id={c.ids.philosophy} aria-labelledby="philosophy-title" className="bg-paper">
      {/* Johdanto */}
      <Container className="pb-16 pt-24 md:pb-20 md:pt-36">
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

      {/* Kolme lähdettä */}
      <Container className="pb-20 md:pb-28">
        <ul className="grid gap-x-12 gap-y-12 md:grid-cols-3">
          {philosophy.sources.map((source, i) => (
            <li key={source.key}>
              <Reveal delay={i * 100} className="h-full border-t border-forest/25 pt-6">
                <h3 className="text-[1.6rem] leading-tight text-forest">{source.title}</h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-soft">{source.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>

      {/* Identiteetti ja todellinen Itse */}
      <div className="bg-paper-deep">
        <Container className="py-20 md:py-28">
          <Reveal>
            <h3 className="max-w-2xl text-[1.9rem] text-forest md:text-[2.4rem]">{d.title}</h3>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0">
            <Reveal className="md:border-r md:border-forest/20 md:pr-12">
              <h4 className="font-sans text-[0.78rem] font-medium uppercase tracking-[0.26em] text-ink-soft">{d.leftTitle}</h4>
              <p className="mt-5 font-serif text-[1.45rem] leading-snug text-forest md:text-[1.6rem]">{d.leftText}</p>
            </Reveal>
            <Reveal delay={120} className="md:pl-12">
              <h4 className="font-sans text-[0.78rem] font-medium uppercase tracking-[0.26em] text-gold-deep">{d.rightTitle}</h4>
              <p className="mt-5 font-serif text-[1.45rem] leading-snug text-forest md:text-[1.6rem]">{d.rightText}</p>
            </Reveal>
          </div>
          <Reveal className="mt-14 max-w-3xl">
            <p className="border-l border-gold pl-6 leading-relaxed text-ink">{d.closing}</p>
          </Reveal>
        </Container>
      </div>

      {/* Neljä Puruṣārthaa */}
      <Container className="pb-10 pt-20 md:pt-28">
        <Reveal className="max-w-2xl">
          <h3 className="text-[1.9rem] text-forest md:text-[2.4rem]">{philosophy.purusharthasTitle}</h3>
          <p className="mt-4 text-ink-soft">{philosophy.purusharthasIntro}</p>
        </Reveal>
      </Container>

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
                <h4 className="text-[2.1rem] uppercase tracking-[0.14em] md:text-[2.3rem]">{item.name}</h4>
                <p className={`mt-4 font-serif text-[1.45rem] italic leading-snug ${s.accent}`}>{item.line}</p>
                <p className={`mt-6 text-[0.98rem] leading-relaxed ${s.sub}`}>{item.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Container className="py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="font-serif text-[1.7rem] italic leading-[1.35] text-forest md:text-[2.1rem]">
              {philosophy.freedom}
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:pt-3">
            <p className="border-l border-gold pl-6 leading-relaxed text-ink-soft">{philosophy.stance}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
