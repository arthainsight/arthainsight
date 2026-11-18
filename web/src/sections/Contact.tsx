import { useState, type FormEvent } from "react";
import { useContent } from "../i18n";
import { getBooking, site } from "../config/site";
import { buttonClass } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/SectionHeading";
import { SocialIcon, type SocialKey } from "../components/ui/SocialIcon";

const fieldClass =
  "mt-2 block w-full rounded-[2px] border border-forest/25 bg-white/60 px-4 py-3 text-[1rem] text-ink placeholder:text-ink-soft/60 transition-colors focus:border-forest focus:bg-white";

/**
 * Yhteydenottolomake.
 *
 * HUOM: Lomakkeella ei ole palvelinpuolta. Lähetys avaa käyttäjän sähköpostiohjelman
 * valmiiksi täytetyllä viestillä (mailto:), eikä sivusto väitä lähettävänsä mitään.
 * Kun haluat oikean lähetyksen, korvaa handleSubmit esimerkiksi lomakepalvelun
 * (Formspree, Netlify Forms tms.) kutsulla.
 */
export function Contact() {
  const c = useContent();
  const contact = c.contact;
  const booking = getBooking(c.ids.contact);
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `${contact.mailSubject}${name ? ` / ${name}` : ""}`;
    const body = `${contact.mailName}: ${name}\n${contact.mailEmail}: ${email}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  }

  return (
    <section id={c.ids.contact} aria-labelledby="contact-title" className="bg-paper py-24 md:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <Eyebrow>{contact.eyebrow}</Eyebrow>
            <h2 id="contact-title" className="mt-7 text-[2rem] text-forest sm:text-4xl lg:text-[2.9rem]">
              {contact.title}
            </h2>
            <p className="mt-6 text-ink-soft">{contact.text}</p>

            <p className="mt-10 text-sm text-ink-soft">{contact.alt}</p>
            <p className="mt-1">
              <a
                href={`mailto:${site.email}`}
                className="font-serif text-[1.5rem] text-forest underline decoration-gold decoration-1 underline-offset-[6px] hover:decoration-forest"
              >
                {site.email}
              </a>
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[0.95rem]">
              {site.social.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label} ${item.handle} ${c.a11y.newTab}`}
                    className="inline-flex items-center gap-2.5 text-forest transition-colors hover:text-gold-deep"
                  >
                    <SocialIcon name={item.key as SocialKey} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {site.bookingUrl && (
              <p className="mt-8 text-sm text-ink-soft">
                {contact.bookingLead}{" "}
                <a
                  href={booking.href}
                  {...(booking.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-forest underline decoration-gold underline-offset-4"
                >
                  {c.coaching.name}
                </a>
              </p>
            )}
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className="text-[0.85rem] font-medium tracking-wide text-forest">
                    {contact.labels.name}
                  </label>
                  <input id="cf-name" name="name" type="text" autoComplete="name" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="cf-email" className="text-[0.85rem] font-medium tracking-wide text-forest">
                    {contact.labels.email}
                  </label>
                  <input id="cf-email" name="email" type="email" autoComplete="email" required className={fieldClass} />
                </div>
              </div>

              <div>
                <label htmlFor="cf-message" className="text-[0.85rem] font-medium tracking-wide text-forest">
                  {contact.labels.message}
                </label>
                <textarea id="cf-message" name="message" rows={6} required className={`${fieldClass} resize-y`} />
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <button type="submit" className={buttonClass("primary", "cursor-pointer")}>
                  {contact.submit}
                </button>
              </div>

              <p className="text-[0.85rem] leading-relaxed text-ink-soft">
                {contact.notice}{" "}
                <a href={c.url(c.paths.privacy)} className="underline decoration-gold underline-offset-4">
                  {contact.privacy}
                </a>
              </p>

              <p role="status" aria-live="polite" className="min-h-[1.5rem] text-[0.92rem] text-forest">
                {status === "opened" &&
                  contact.opened.replace("{email}", site.email)}
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
