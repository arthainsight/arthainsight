import type { ReactNode } from "react";
import { useContent } from "../../i18n";

export type ButtonVariant = "primary" | "light" | "outline-dark" | "outline-light";

const base =
  "group inline-flex items-center justify-center gap-3 rounded-[2px] px-6 py-3.5 sm:px-7 text-[0.95rem] font-medium tracking-[0.03em] transition-colors duration-300 focus-visible:outline-offset-4";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-forest text-paper hover:bg-forest-deep",
  light: "bg-gold-soft text-forest-deep hover:bg-paper",
  "outline-dark": "border border-forest/45 text-forest hover:border-forest hover:bg-forest hover:text-paper",
  "outline-light": "border border-paper/45 text-paper hover:border-paper hover:bg-paper/10",
};

export function buttonClass(variant: ButtonVariant, extra = ""): string {
  return `${base} ${variants[variant]} ${extra}`.trim();
}

function Arrow() {
  return (
    <svg
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M0 5h16M12 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  children: ReactNode;
}

/** Linkki, joka näyttää painikkeelta. Sisäiset ankkurit vierittävät sujuvasti kohteeseen. */
export function Button({ href, variant = "primary", external = false, className = "", children }: ButtonProps) {
  const c = useContent();
  return (
    <a
      href={href}
      className={buttonClass(variant, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="text-center">{children}</span>
      <Arrow />
      {external && <span className="sr-only"> {c.a11y.newTab}</span>}
    </a>
  );
}
