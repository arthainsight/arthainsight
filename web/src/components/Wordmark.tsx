/**
 * Artha Insightin logo sellaisenaan: lootus, oranssi aurinko ja keltainen nimi.
 * Tiedosto on public/logo.png (läpinäkyvä tausta, suunniteltu tummalle taustalle).
 * Vaihda logo korvaamalla tiedosto samalla nimellä.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <img
      src="./logo.png"
      alt="Artha Insight"
      width={818}
      height={700}
      decoding="async"
      className={`w-auto ${className}`}
    />
  );
}
