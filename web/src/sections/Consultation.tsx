import { useContent } from "../i18n";
import { getBooking, site } from "../config/site";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/SectionHeading";

/** Näyttää arvon tai, jos se puuttuu, selvästi merkityn muokattavan paikkamerkin. */
function DetailValue({ value, placeholder }: { value: string; placeholder: string }) {
  if (value) return <span className="font-serif text-[1.5rem] leading-tight text-forest">{value}</span>;
  return (
    <span className="inline-block rounded-[2px] border border-dashed border-gold-deep/60 px-2.5 py-1 text-[0.9rem] text-gold-deep">
      {placeholder}
    </span>
  );
}

export function Consultation() {
  const c = useContent();
  const consultation = c.consultation;
  const booking = getBooking(c.ids.contact);
  const duration = site.consultation.duration[c.lang as "fi" | "en"];
  const price = site.consultation.price[c.lang as "fi" | "en"];

  return (
    <section
      id={c.ids.consultation}
      aria-labelledby="consultation-title"
      className="on-dark relative overflow-hidden bg-forest py-24 text-paper md:py-36"
    >
      {/* Hienovarainen valon hehku taustalla */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[42rem] w-[42rem] rounded-full opacity-60"
        style={{ background: "radial-gradient(closest-side, rgba(56,182,255,0.16), rgba(56,182,255,0))" }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 h-[36rem] w-[36rem] rounded-full opacity-70"
        style={{ background: "radial-gradient(closest-side, rgba(247,123,25,0.14), rgba(247,123,25,0))" }}
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <Reveal>
              <Eyebrow tone="dark">{consultation.eyebrow}</Eyebrow>
              <h2 id="consultation-title" className="mt-7 text-[2.6rem] text-paper sm:text-5xl lg:text-[3.6rem]">
                {consultation.name}
              </h2>
              <p className="mt-4 font-serif text-[1.45rem] italic text-gold-soft">{consultation.subtitle}</p>
              <p className="mt-9 text-lg leading-relaxed text-paper">{consultation.intro}</p>
              <p className="mt-5 leading-relaxed text-paper/80">{consultation.body}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={140}>
              <div className="rounded-[3px] bg-paper p-6 text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] sm:p-8 md:p-12">
                <h3 className="text-[0.78rem] font-medium uppercase tracking-[0.28em] text-gold-deep">
                  {consultation.topicsTitle}
                </h3>

                <ol className="mt-6">
                  {consultation.topics.map((topic, i) => (
                    <li key={topic} className="flex items-baseline gap-5 border-b border-forest/12 py-4 last:border-b-0">
                      <span aria-hidden="true" className="w-8 shrink-0 font-serif text-[1.7rem] leading-none text-gold">
                        {i + 1}
                      </span>
                      <span className="font-serif text-[1.3rem] leading-snug text-forest md:text-[1.45rem]">{topic}</span>
                    </li>
                  ))}
                </ol>

                <p className="mt-8 text-ink-soft">{consultation.noAnswersNeeded}</p>
                <p className="mt-3 text-ink">{consultation.summary}</p>

                <dl className="mt-9 grid gap-6 border-t border-forest/12 pt-8 sm:grid-cols-3">
                  <div>
                    <dt className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-ink-soft">
                      {consultation.detailLabels.duration}
                    </dt>
                    <dd>
                      <DetailValue value={duration} placeholder={consultation.placeholderDuration} />
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-ink-soft">
                      {consultation.detailLabels.price}
                    </dt>
                    <dd>
                      <DetailValue value={price} placeholder={consultation.placeholderPrice} />
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-ink-soft">
                      {consultation.detailLabels.summary}
                    </dt>
                    <dd className="text-[0.98rem] leading-snug text-forest">{consultation.summaryDetail}</dd>
                  </div>
                </dl>

                <div className="mt-10">
                  <Button href={booking.href} variant="primary" external={booking.external}>
                    {consultation.cta}
                  </Button>
                </div>
                <p className="mt-6 text-[0.85rem] text-ink-soft">{consultation.note}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
