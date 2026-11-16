import { useContent } from "../i18n";
import { site } from "../config/site";
import { Container } from "./ui/Container";
import { SocialIcon, type SocialKey } from "./ui/SocialIcon";

export function Footer() {
  const c = useContent();
  const nav = c.nav.map((item) => ({ ...item, id: c.ids[item.key as keyof typeof c.ids] }));
  return (
    <footer className="on-dark bg-forest-deep py-16 text-paper/75">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.8fr_1.1fr_1.1fr]">
          <div>
            <img
              src={`${c.root}logo.png`}
              alt={c.a11y.logoAlt}
              width={818}
              height={700}
              loading="lazy"
              decoding="async"
              className="h-28 w-auto"
            />
            <p className="mt-5 max-w-xs font-serif text-xl italic leading-snug text-paper/70">{c.footer.tagline}</p>
          </div>

          <nav aria-label={c.a11y.footerNav}>
            <p className="mb-4 text-[0.75rem] font-medium uppercase tracking-[0.26em] text-gold-soft">{c.footer.siteHeading}</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-[0.95rem] text-paper/75 transition-colors hover:text-paper">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-[0.75rem] font-medium uppercase tracking-[0.26em] text-gold-soft">{c.footer.followHeading}</p>
            <ul className="space-y-2.5 text-[0.95rem]">
              {site.social.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label} ${item.handle} ${c.a11y.newTab}`}
                    className="inline-flex items-center gap-3 text-paper/75 transition-colors hover:text-paper"
                  >
                    <SocialIcon name={item.key as SocialKey} />
                    <span>{item.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[0.75rem] font-medium uppercase tracking-[0.26em] text-gold-soft">{c.footer.contactHeading}</p>
            <ul className="space-y-2.5 text-[0.95rem]">
              <li>
                <a href={`mailto:${site.email}`} className="text-paper/75 transition-colors hover:text-paper">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={c.footer.privacyUrl} className="text-paper/75 transition-colors hover:text-paper">
                  {c.footer.privacy}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-paper/12 pt-6 text-[0.82rem] text-paper/55">
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {site.legal.business} · Y-tunnus {site.legal.businessId}
        </p>
      </Container>
    </footer>
  );
}
