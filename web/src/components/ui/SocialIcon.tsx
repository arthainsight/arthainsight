/** Somekanavien yksinkertaiset kuvakkeet. Väri tulee ympäröivästä tekstin väristä (currentColor). */
export type SocialKey = "instagram" | "tiktok" | "youtube" | "facebook" | "linkedin";

export function SocialIcon({ name, className = "h-5 w-5" }: { name: SocialKey; className?: string }) {
  const common = { viewBox: "0 0 24 24", className, "aria-hidden": true, focusable: false } as const;

  switch (name) {
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
          <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
          <path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 3.5v11.2a3.7 3.7 0 1 1-3.7-3.7" />
          <path d="M14 3.5c.3 2.4 1.9 4.1 4.5 4.3" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <path d="M13.2 20.5v-7h2.3l.4-2.7h-2.7V9.1c0-.8.3-1.3 1.4-1.3h1.4V5.4c-.3 0-1.1-.1-2-.1-2.1 0-3.4 1.2-3.4 3.4v2.1H8.3v2.7h2.3v7" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
          <path d="M8 10.8v5.7M11.6 16.5v-5.7M11.6 13.2c0-1.4.9-2.4 2.3-2.4s2.2 1 2.2 2.4v3.3" />
          <circle cx="8" cy="7.9" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
