import { about } from "../content/copy";
import { site } from "../config/site";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/SectionHeading";

export function About() {
  const { name, image, imageAlt, paragraphs } = site.founder;

  return (
    <section id="minusta" aria-labelledby="about-title" className="bg-paper py-24 md:py-36">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Kuva tai kuvan paikkamerkki */}
          <Reveal className="lg:col-span-5">
            {image ? (
              <img
                src={image}
                alt={imageAlt}
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full max-w-md rounded-[3px] object-cover"
              />
            ) : (
              <div
                role="img"
                aria-label={about.imagePlaceholder}
                className="relative flex aspect-[4/5] w-full max-w-md items-end overflow-hidden rounded-[3px] border border-dashed border-gold-deep/55 bg-gradient-to-b from-paper-deep to-sand/60"
              >
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest/15 to-transparent" />
                <p className="relative p-5 text-[0.8rem] uppercase tracking-[0.24em] text-gold-deep">
                  {about.imagePlaceholder}
                </p>
              </div>
            )}
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7 lg:pt-6">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 id="about-title" className="mt-7 text-[2rem] text-forest sm:text-4xl lg:text-[3rem]">
              {about.title}
            </h2>
            <p className="mt-4 text-[0.82rem] uppercase tracking-[0.26em] text-ink-soft">{name}</p>

            {paragraphs.length > 0 ? (
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink">
                {paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-[3px] border border-dashed border-gold-deep/55 p-7 md:p-9">
                <p className="font-serif text-[1.6rem] text-forest">{about.placeholderTitle}</p>
                <p className="mt-4 leading-relaxed text-ink-soft">{about.placeholderHint}</p>
              </div>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
