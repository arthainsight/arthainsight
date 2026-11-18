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
    <section id={c.ids.about} aria-labelledby="about-title" className="bg-paper-deep py-24 md:py-36">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            {image ? (
              <img
                src={c.url(`/${image}`)}
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

            <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink md:text-lg">
              {about.paragraphs.map((para, i) => {
                const last = about.paragraphs.length - 1;
                if (i === 0)
                  return (
                    <p key={para} className="font-serif text-[1.55rem] leading-snug text-forest md:text-[1.8rem]">
                      {para}
                    </p>
                  );
                if (i === last)
                  return (
                    <p key={para} className="pt-4 font-serif text-[1.45rem] italic leading-snug text-forest md:text-[1.65rem]">
                      {para}
                    </p>
                  );
                return <p key={para}>{para}</p>;
              })}
            </div>

            <p className="mt-6">
              <a
                href={c.url(c.paths.philosophy)}
                className="text-[0.95rem] text-forest underline decoration-gold decoration-1 underline-offset-[6px] transition-colors hover:text-gold-deep"
              >
                {about.philosophyLink} →
              </a>
            </p>

          </Reveal>
        </div>
      </Container>
    </section>
  );
}
