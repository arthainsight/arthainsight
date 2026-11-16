import { useContent } from "../i18n";

/**
 * Artha Insightin logo sellaisenaan: lootus, oranssi aurinko ja keltainen nimi.
 * Tiedosto on public/logo.png (läpinäkyvä tausta, suunniteltu tummalle taustalle).
 * Vaihda logo korvaamalla tiedosto samalla nimellä.
 */
export function Wordmark({ className = "", lazy = false }: { className?: string; lazy?: boolean }) {
  const c = useContent();
  return (
    <img
      src={`${c.root}logo.png`}
      alt={c.a11y.logoAlt}
      width={818}
      height={700}
      decoding="async"
      {...(lazy ? { loading: "lazy" as const } : {})}
      className={`w-auto ${className}`}
    />
  );
}
