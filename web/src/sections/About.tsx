import { useContent } from "../i18n";
import { site } from "../config/site";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/SectionHeading";

export function About() {
  const c = useContent();
  const about = c.about;
  const { name, image, imageAlt } = site.founder;

  return (
    <section id={c.ids.about} aria-labelledby="about-title" className="bg-paper py-24 md:py-36">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            {image ? (
              <img
                src={`${c.root}${image}`}
                alt={imageAlt}
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full max-w-md rounded-[3px] object-cover"
              />
            ) : null}
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7 lg:pt-6">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 id="about-title" className="mt-7 text-[2rem] text-forest sm:text-4xl lg:text-[3rem]">
              {about.title}
            </h2>
            <p className="mt-4 text-[0.82rem] uppercase tracking-[0.26em] text-ink-soft">{name}</p>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <p className="mt-6">
              <a
                href={`#${c.ids.philosophy}`}
                className="text-[0.95rem] text-forest underline decoration-gold decoration-1 underline-offset-[6px] transition-colors hover:text-gold-deep"
              >
                {about.philosophyLink} →
              </a>
            </p>

            <div className="mt-12 border-t border-forest/15 pt-8">
              <h3 className="text-[1.5rem] text-forest">{about.notTitle}</h3>
              <ul className="mt-5 space-y-3">
                {about.not.map((item) => (
                  <li key={item} className="flex gap-4 text-ink-soft">
                    <span aria-hidden="true" className="mt-[0.8em] h-px w-4 shrink-0 bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
