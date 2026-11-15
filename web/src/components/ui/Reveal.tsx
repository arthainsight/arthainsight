import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

/**
 * Elementti, joka ilmestyy hillitysti näkyviin vierittäessä.
 * CSS:ssä animaatio on päällä vain, kun JavaScript on käytössä ja käyttäjä
 * ei ole pyytänyt vähennettyä liikettä.
 */

let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            sharedObserver?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
  }
  return sharedObserver;
}

interface RevealProps {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}

export function Reveal({ as: Tag = "div", delay = 0, className = "", children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }
    const observer = getObserver();
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
