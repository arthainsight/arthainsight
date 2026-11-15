import { footer, nav } from "../content/copy";
import { site } from "../config/site";
import { Container } from "./ui/Container";
import { SocialIcon, type SocialKey } from "./ui/SocialIcon";

export function Footer() {
  return (
    <footer className="on-dark bg-forest-deep py-16 text-paper/75">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.8fr_1.1fr_1.1fr]">
          <div>
            <img
              src="./logo.png"
              alt="Artha Insight"
              width={818}
              height={700}
              loading="lazy"
              decoding="async"
              className="h-28 w-auto"
            />
            <p className="mt-5 max-w-xs font-serif text-xl italic leading-snug text-paper/70">{footer.tagline}</p>
          </div>

          <nav aria-label="Alatunnisteen valikko">
            <p className="mb-4 text-[0.75rem] font-medium uppercase tracking-[0.26em] text-gold-soft">Sivusto</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-[0.95rem] text-paper/75 transition-colors hover:text-paper">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-[0.75rem] font-medium uppercase tracking-[0.26em] text-gold-soft">Seuraa</p>
            <ul className="space-y-2.5 text-[0.95rem]">
              {site.social.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label} ${item.handle} (avautuu uuteen välilehteen)`}
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
            <p className="mb-4 text-[0.75rem] font-medium uppercase tracking-[0.26em] text-gold-soft">Yhteys</p>
            <ul className="space-y-2.5 text-[0.95rem]">
              <li>
                <a href={`mailto:${site.email}`} className="text-paper/75 transition-colors hover:text-paper">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.legal.privacyUrl} className="text-paper/75 transition-colors hover:text-paper">
                  Tietosuojaseloste
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
