import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

/** Pieni, harvennettu otsikkoa edeltävä teksti ja ohut viiva. */
export function Eyebrow({ children, tone = "light", className = "" }: EyebrowProps) {
  const color = tone === "dark" ? "text-gold-soft" : "text-gold-deep";
  const line = tone === "dark" ? "bg-gold-soft/70" : "bg-gold-deep/60";
  return (
    <p className={`flex items-center gap-4 text-[0.78rem] font-medium uppercase tracking-[0.28em] ${color} ${className}`}>
      <span className={`h-px w-10 ${line}`} aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
