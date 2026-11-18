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

/** Tapaamisen vaiheet suhteessa kestoon: kapea, saavutettava (piilotettu) palkki. */
function StageBar({ minutes }: { minutes: number[] }) {
  const longest = Math.max(...minutes);
  return (
    <div aria-hidden="true" className="mt-6 flex h-2.5 gap-1">
      {minutes.map((m, i) => (
        <span
          key={i}
          className="rounded-[1px] bg-gold"
          style={{ flexGrow: m, flexBasis: 0, opacity: 0.35 + 0.65 * (m / longest) }}
        />
      ))}
    </div>
  );
}

export function Coaching() {
  const c = useContent();
  const coaching = c.coaching;
  const booking = getBooking(c.ids.contact);
  const lang = c.lang as "fi" | "en";
  const duration = site.coaching.duration[lang];
  const price = site.coaching.price[lang];

  return (
    <section
      id={c.ids.coaching}
      aria-labelledby="coaching-title"
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
              <Eyebrow tone="dark">{coaching.eyebrow}</Eyebrow>
              <h2 id="coaching-title" className="mt-7 text-[2.6rem] text-paper sm:text-5xl lg:text-[3.6rem]">
                {coaching.name}
              </h2>
              <p className="mt-4 font-serif text-[1.45rem] italic text-gold-soft">{coaching.subtitle}</p>
              <p className="mt-9 font-serif text-[1.75rem] leading-[1.25] text-paper">{coaching.leadQuestion}</p>
              <div className="mt-7 space-y-4 leading-relaxed text-paper/85">
                {coaching.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-8">
                <a
                  href={`#${c.ids.philosophy}`}
                  className="text-[0.95rem] text-gold-soft underline decoration-gold-soft/50 underline-offset-[6px] transition-colors hover:text-paper"
                >
                  {coaching.philosophyLink} →
                </a>
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={140}>
              <div className="rounded-[3px] bg-paper p-6 text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] sm:p-8 md:p-12">
                <h3 className="text-[0.78rem] font-medium uppercase tracking-[0.28em] text-gold-deep">
                  {coaching.stagesTitle}
                </h3>
                <StageBar minutes={coaching.stages.map((s) => s.minutes)} />

                <ol className="mt-4">
                  {coaching.stages.map((stage) => (
                    <li
                      key={stage.name}
                      className="grid grid-cols-[3.75rem_1fr] gap-x-4 border-b border-forest/12 py-5 last:border-b-0 sm:grid-cols-[4.5rem_1fr] sm:gap-x-6"
                    >
                      <p className="font-serif text-[1.7rem] leading-none text-gold-deep">
                        {stage.minutes}
                        <span className="ml-1 font-sans text-[0.72rem] uppercase tracking-[0.16em] text-ink-soft">
                          {coaching.minutesUnit}
                        </span>
                      </p>
                      <div>
                        <h4 className="font-serif text-[1.3rem] leading-snug text-forest md:text-[1.45rem]">
                          {stage.name}
                        </h4>
                        <p className="mt-1.5 text-[0.98rem] leading-relaxed text-ink-soft">{stage.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <p className="mt-8 text-ink">{coaching.standalone}</p>

                <dl className="mt-9 grid gap-6 border-t border-forest/12 pt-8 sm:grid-cols-3">
                  <div>
                    <dt className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-ink-soft">
                      {coaching.detailLabels.duration}
                    </dt>
                    <dd>
                      <DetailValue value={duration} placeholder={coaching.placeholderDuration} />
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-ink-soft">
                      {coaching.detailLabels.price}
                    </dt>
                    <dd>
                      <DetailValue value={price} placeholder={coaching.placeholderPrice} />
                      {price && <span className="mt-1 block text-[0.82rem] text-ink-soft">{coaching.priceNote}</span>}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-ink-soft">
                      {coaching.detailLabels.format}
                    </dt>
                    <dd className="text-[0.98rem] leading-snug text-forest">{coaching.formatValue}</dd>
                  </div>
                </dl>

                <div className="mt-10">
                  <Button href={booking.href} variant="primary" external={booking.external}>
                    {coaching.cta}
                  </Button>
                </div>
                <p className="mt-6 text-[0.85rem] text-ink-soft">{coaching.note}</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Kenelle sopii ja kenelle ei */}
        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h3 className="text-[1.7rem] text-paper">{coaching.suitableTitle}</h3>
            <ul className="mt-6 space-y-4">
              {coaching.suitable.map((item) => (
                <li key={item} className="flex gap-4 text-paper/88">
                  <span aria-hidden="true" className="mt-[0.8em] h-px w-4 shrink-0 bg-gold-soft" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="text-[1.7rem] text-paper">{coaching.notSuitableTitle}</h3>
            <ul className="mt-6 space-y-4">
              {coaching.notSuitable.map((item) => (
                <li key={item} className="flex gap-4 text-paper/80">
                  <span aria-hidden="true" className="mt-[0.8em] h-px w-4 shrink-0 bg-paper/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
