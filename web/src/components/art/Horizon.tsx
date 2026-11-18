/**
 * Horizon – sivuston oma, piirretty maisemakuvitus (inline SVG).
 *
 * Kaksi varianttia:
 *  - "lake": hämärtyvä metsäjärvi, aurinko matalalla, hahmo pysähtyneenä rinteellä
 *  - "path": aamun valo ja polku, joka kulkee kukkulan yli kohti horisonttia
 *
 * Kuva on tehty tarkoituksella rauhalliseksi ja abstraktiksi. Sen voi myöhemmin
 * korvata valokuvalla vaihtamalla tämän komponentin käyttö <img>-elementtiin.
 * Kaikki värit tulevat tämän tiedoston vakioista.
 */

type Variant = "lake" | "path";

interface HorizonProps {
  variant: Variant;
  /** Uniikki etuliite SVG:n sisäisille id:ille (sivulla voi olla useita kuvia). */
  idPrefix: string;
  className?: string;
}

type Pt = [number, number];

/** Deterministinen satunnaisluku, jotta palvelin- ja selainrender täsmäävät. */
function rng(seed: number): () => number {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const f = (n: number) => Math.round(n * 10) / 10;

/** Catmull-Rom -käyrä pisteiden läpi (pehmeä harjanne). */
function smooth(points: Pt[]): string {
  let d = `M${f(points[0][0])},${f(points[0][1])}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${f(c1x)},${f(c1y)} ${f(c2x)},${f(c2y)} ${f(p2[0])},${f(p2[1])}`;
  }
  return d;
}

/** Suljettu muoto harjanteesta alas kuvan reunaan. */
function ridge(points: Pt[], bottom = 960): string {
  const first = points[0];
  const last = points[points.length - 1];
  return `${smooth(points)} L${last[0]},${bottom} L${first[0]},${bottom} Z`;
}


/**
 * Perspektiivipolku: kapenee horisonttia kohti ja mutkittelee.
 * Palauttaa suljetun polun (vasen reuna alas, oikea reuna ylös).
 */
function trailPath(horizonY: number, bottomY: number, centerX: number): string {
  const steps = 16;
  const left: Pt[] = [];
  const right: Pt[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps; // 0 = horisontti, 1 = lähin kohta
    const y = horizonY + (bottomY - horizonY) * Math.pow(t, 1.75);
    const half = 3 + 138 * Math.pow(t, 1.45);
    const sway = Math.sin(t * Math.PI * 2.1 + 0.6) * 74 * Math.pow(t, 1.1);
    const cx = centerX + sway;
    left.push([cx - half, y]);
    right.push([cx + half, y]);
  }
  return `${smooth(left)} L${f(right[steps][0])},${f(right[steps][1])} ${smooth(right.slice().reverse()).replace(/^M[^ ]+ /, "")} Z`;
}

/** Kuusiryhmä kuvan reunaan; jokainen kuusi on pinottuja kolmioita. */
function pines(
  seed: number,
  xMin: number,
  xMax: number,
  count: number,
  baseY: number,
  hMin: number,
  hMax: number,
): string {
  const r = rng(seed);
  let d = "";
  for (let i = 0; i < count; i++) {
    const x = xMin + r() * (xMax - xMin);
    const h = hMin + r() * (hMax - hMin);
    const tiers = 6;
    const hw = h * 0.15;
    for (let t = 0; t < tiers; t++) {
      const top = baseY - h + t * h * 0.15;
      const bottom = top + h * 0.3;
      const half = hw * (0.4 + t * 0.26);
      d += `M${f(x)},${f(top)} L${f(x + half)},${f(bottom)} L${f(x - half)},${f(bottom)} Z `;
    }
  }
  return d;
}

/** Hahmo selin kameraan, katsomassa horisonttiin. Jalat ovat pisteessä (0, 0). */
const FIGURE =
  "M0,-58 C-4.6,-58 -6.4,-54.4 -6.4,-51 C-6.4,-47.6 -4.6,-45 -2.4,-44 L-3,-41 C-9,-40 -12,-35 -12.5,-26 L-14,-4 L-11,0 L11,0 L14,-4 L12.5,-26 C12,-35 9,-40 3,-41 L2.4,-44 C4.6,-45 6.4,-47.6 6.4,-51 C6.4,-54.4 4.6,-58 0,-58 Z";

const COLORS = {
  lake: {
    far: "#46644f",
    mid: "#34523f",
    near: "#223f31",
    front: "#142a20",
  },
  path: {
    far: "#53705a",
    mid: "#3a5944",
    near: "#264535",
    front: "#142a20",
  },
};

export function Horizon({ variant, idPrefix, className }: HorizonProps) {
  const id = (name: string) => `${idPrefix}-${name}`;
  const ref = (name: string) => `url(#${id(name)})`;
  const isLake = variant === "lake";
  const c = COLORS[variant];

  // Aurinko ja sen paikka
  const sun = isLake ? { x: 842, y: 556, r: 30 } : { x: 720, y: 592, r: 52 };
  // Rajattu näkymä: ylhäältä ja alhaalta pois turha, jotta kuva on matala ja teksti mahtuu sen päälle.
  const view = isLake ? { y: 170, h: 640 } : { y: 230, h: 640 };
  const viewBottom = view.y + view.h;

  const far: Pt[] = isLake
    ? [[-40, 520], [150, 476], [320, 500], [470, 438], [610, 486], [720, 512], [842, 574], [950, 484], [1080, 436], [1210, 492], [1340, 466], [1490, 510]]
    : [[-40, 548], [140, 508], [330, 530], [480, 486], [620, 540], [720, 560], [830, 536], [960, 490], [1110, 524], [1260, 492], [1380, 520], [1490, 548]];
  const mid: Pt[] = isLake
    ? [[-40, 566], [130, 528], [300, 552], [450, 512], [620, 552], [790, 584], [910, 566], [1060, 526], [1200, 560], [1340, 538], [1490, 572]]
    : [[-40, 600], [160, 568], [360, 592], [540, 566], [720, 600], [900, 570], [1090, 592], [1280, 560], [1490, 596]];
  const nearRidge: Pt[] = isLake
    ? [[-40, 736], [200, 716], [420, 706], [680, 716], [840, 712], [950, 690], [1110, 714], [1300, 742], [1490, 764]]
    : [[-40, 690], [200, 664], [430, 646], [620, 640], [720, 644], [830, 640], [1030, 652], [1250, 672], [1490, 704]];
  const front: Pt[] = [[-40, 800], [300, 778], [700, 808], [1100, 788], [1490, 814]];

  const lakeLine = 604;

  // Polku (vain "path"-variantti): kapenee kohti auringonnousua kukkulan harjalla
  const trailShape = trailPath(646, viewBottom + 20, 720);

  return (
    <svg
      className={className}
      viewBox={`0 ${view.y} 1440 ${view.h}`}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Taivas: läpinäkyvä ylhäältä, jotta se sulautuu elementin taustaväriin */}
        <linearGradient id={id("sky")} gradientUnits="userSpaceOnUse" x1="0" y1={view.y} x2="0" y2={lakeLine + 18}>
          <stop offset="0" stopColor="#14291f" stopOpacity="0" />
          <stop offset="0.2" stopColor="#163029" stopOpacity="1" />
          <stop offset="0.46" stopColor={isLake ? "#1f4a50" : "#25555a"} />
          <stop offset="0.66" stopColor={isLake ? "#3f7580" : "#4b8590"} />
          <stop offset="0.8" stopColor={isLake ? "#9aa27c" : "#a9b08a"} />
          <stop offset="0.92" stopColor={isLake ? "#e0b66a" : "#e8c27a"} />
          <stop offset="1" stopColor="#f3cf7a" />
        </linearGradient>

        <radialGradient id={id("glow")} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffd9a0" stopOpacity="0.95" />
          <stop offset="0.22" stopColor="#f6a45f" stopOpacity="0.55" />
          <stop offset="0.55" stopColor="#f1cf62" stopOpacity="0.14" />
          <stop offset="1" stopColor="#f1cf62" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id("sun")} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffe3b0" />
          <stop offset="0.7" stopColor="#f9a24a" />
          <stop offset="1" stopColor="#f77b19" />
        </radialGradient>

        <linearGradient id={id("mist")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#efe6d0" stopOpacity="0" />
          <stop offset="0.55" stopColor="#efe6d0" stopOpacity="0.2" />
          <stop offset="1" stopColor="#efe6d0" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={id("water")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#efc277" />
          <stop offset="0.035" stopColor="#b3a46a" />
          <stop offset="0.12" stopColor="#3b6e78" />
          <stop offset="0.4" stopColor="#224a4a" />
          <stop offset="1" stopColor="#163029" />
        </linearGradient>

        <linearGradient id={id("reflect")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffc47a" stopOpacity="0.8" />
          <stop offset="1" stopColor="#f6a45f" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={id("trail")} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#d8c79a" stopOpacity="0.14" />
          <stop offset="0.6" stopColor="#e3d2a2" stopOpacity="0.5" />
          <stop offset="1" stopColor="#f2e3b6" stopOpacity="0.95" />
        </linearGradient>

        <clipPath id={id("lakeClip")}>
          <rect x="0" y={lakeLine} width="1440" height={viewBottom - lakeLine} />
        </clipPath>
        <path id={id("midShape")} d={ridge(mid, lakeLine)} />
      </defs>

      {/* Taivas */}
      <rect x="0" y={view.y} width="1440" height={view.h} fill={ref("sky")} />

      {/* Auringon hehku ja kiekko */}
      <circle cx={sun.x} cy={sun.y} r={isLake ? 300 : 340} fill={ref("glow")} />
      <circle cx={sun.x} cy={sun.y} r={sun.r} fill={ref("sun")} />

      {/* Kaukaiset harjut */}
      <path d={ridge(far)} fill={c.far} />
      <g className="mist-drift">
        <rect x="-240" y={isLake ? 448 : 470} width="1920" height="150" fill={ref("mist")} />
      </g>
      <path d={ridge(mid, isLake ? lakeLine : 960)} fill={c.mid} />

      {isLake && (
        <>
          {/* Järvi */}
          <rect x="0" y={lakeLine} width="1440" height={viewBottom - lakeLine} fill={ref("water")} />
          <g clipPath={`url(#${id("lakeClip")})`}>
            <use
              href={`#${id("midShape")}`}
              transform={`matrix(1 0 0 -1 0 ${lakeLine * 2})`}
              opacity="0.34"
            />
            {/* Auringon heijastus */}
            <rect x={sun.x - 34} y={lakeLine} width="68" height="190" fill={ref("reflect")} />
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <rect
                key={i}
                x={sun.x - 120 + (i % 3) * 14}
                y={lakeLine + 10 + i * 20}
                width={240 - (i % 3) * 28 - i * 10}
                height="1.6"
                fill="#ffd29a"
                opacity={0.42 - i * 0.04}
              />
            ))}
          </g>
          <g className="mist-drift mist-drift-slow">
            <rect x="-240" y={lakeLine - 34} width="1920" height="104" fill={ref("mist")} />
          </g>
        </>
      )}

      {/* Lähempi rinne */}
      <path d={ridge(nearRidge)} fill={c.near} />

      {!isLake && <path d={trailShape} fill={ref("trail")} />}

      {isLake && (
        <g transform="translate(950 690)">
          <path d={FIGURE} fill="#0f1f17" />
        </g>
      )}

      {/* Etualan tummin rinne ja reunametsä */}
      {isLake && <path d={ridge(front)} fill={c.front} />}
      <path d={pines(11, -30, 250, 11, viewBottom + 30, 240, 400)} fill={c.front} />
      <path d={pines(23, 1190, 1470, 11, viewBottom + 30, 230, 390)} fill={c.front} />
      <path d={pines(5, -20, 150, 5, viewBottom + 30, 170, 280)} fill="#0e1f17" />
      <path d={pines(7, 1290, 1460, 5, viewBottom + 30, 160, 270)} fill="#0e1f17" />
    </svg>
  );
}
