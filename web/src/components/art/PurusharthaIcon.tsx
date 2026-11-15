/**
 * Neljä ohutviivaista kuvaketta puruṣārthoille. Tarkoituksella abstrakteja:
 * ei perinteisiä symboleja, vaan yksinkertainen kuva jokaisen päämäärän ytimestä.
 */
export type PurusharthaKey = "dharma" | "artha" | "kama" | "moksha";

interface IconProps {
  name: PurusharthaKey;
  className?: string;
}

export function PurusharthaIcon({ name, className }: IconProps) {
  const common = {
    width: 96,
    height: 96,
    viewBox: "0 0 84 84",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
    focusable: false,
  };

  switch (name) {
    case "dharma":
      // Oma polku: yksi kiemurteleva viiva kohti pistettä
      return (
        <svg {...common}>
          <path d="M42 78 C42 62 22 58 28 43 C34 29 52 31 44 17" />
          <circle cx="43" cy="9" r="4.5" />
        </svg>
      );
    case "artha":
      // Taimi: alku ja kasvu
      return (
        <svg {...common}>
          <path d="M42 78 V40" />
          <path d="M42 54 C26 54 19 44 19 33 C32 33 42 41 42 54Z" />
          <path d="M42 44 C57 44 65 35 65 24 C52 24 42 31 42 44Z" />
          <path d="M26 78 H58" />
        </svg>
      );
    case "kama":
      // Täyteys: sisäkkäiset kehät, joiden ulompi on avoin
      return (
        <svg {...common}>
          <circle cx="42" cy="42" r="10" />
          <circle cx="42" cy="42" r="21" />
          <path d="M42 8 A34 34 0 0 1 76 42" />
          <path d="M42 76 A34 34 0 0 1 8 42" />
        </svg>
      );
    case "moksha":
      // Vapautuminen: rengas, josta on avautunut aukko, ja pisteitä aukon läpi
      return (
        <svg {...common}>
          <path d="M54 17.5 A29 29 0 1 1 30 17.5" />
          <circle cx="42" cy="8" r="3" />
          <circle cx="53" cy="3.5" r="1.6" />
          <circle cx="31" cy="3.5" r="1.6" />
        </svg>
      );
  }
}
