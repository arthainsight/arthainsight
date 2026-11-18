import { useContent } from "../i18n";
import { PurusharthaIcon, type PurusharthaKey } from "./art/PurusharthaIcon";
import { Reveal } from "./ui/Reveal";

/** Neljä paneelia kulkee pimeästä valoon: syvä metsä, metsä, sammal, hiekka. */
const panelStyles: Record<PurusharthaKey, { bg: string; text: string; sub: string; accent: string; dark: boolean }> = {
  dharma: { bg: "bg-[#14271f]", text: "text-paper", sub: "text-paper/78", accent: "text-gold-soft", dark: true },
  artha: { bg: "bg-[#244433]", text: "text-paper", sub: "text-paper/80", accent: "text-lotus-soft", dark: true },
  kama: { bg: "bg-[#4a5d41]", text: "text-paper", sub: "text-paper/90", accent: "text-[#ffd09a]", dark: true },
  moksha: { bg: "bg-[#d9cba9]", text: "text-forest-deep", sub: "text-ink", accent: "text-lotus-deep", dark: false },
};

/**
 * Bhagavan Shanmukhan tulkinnan neljä Puruṣārthaa.
 * compact: tiivis versio etusivulle (nimi, otsikko ja yksi lause), muuten koko kuvaus Filosofia-sivulla.
 */
export function PurusharthaPanels({ compact = false }: { compact?: boolean }) {
  const c = useContent();
  const Heading = compact ? "h3" : "h4";
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4">
      {c.purusharthaItems.map((item, i) => {
        const s = panelStyles[item.key as PurusharthaKey];
        return (
          <Reveal
            as="article"
            key={item.key}
            delay={i * 110}
            className={`${s.bg} ${s.text} ${s.dark ? "on-dark" : ""} group relative flex flex-col justify-between overflow-hidden p-8 md:p-10 ${
              compact ? "min-h-[20rem] lg:min-h-[23rem]" : "min-h-[24rem] lg:min-h-[32rem]"
            }`}
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

            <div className="mt-12">
              <Heading className="text-[2.1rem] uppercase tracking-[0.14em] md:text-[2.3rem]">{item.name}</Heading>
              <p className={`mt-3 font-sans text-[0.72rem] font-medium uppercase tracking-[0.2em] ${s.accent}`}>
                {item.title}
              </p>
              <p className={`mt-5 font-serif text-[1.3rem] italic leading-snug ${s.accent}`}>{item.line}</p>
              {!compact && (
                <div className={`mt-5 space-y-3 text-[0.95rem] leading-relaxed ${s.sub}`}>
                  {item.paragraphs.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
