import { useCallback, useEffect, useRef, useState } from "react";
import { useContent } from "../i18n";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolled } from "../hooks/useScrolled";
import { Wordmark } from "./Wordmark";

export function Header() {
  const c = useContent();
  const nav = c.nav.map((item) => ({ ...item, id: c.ids[item.key as keyof typeof c.ids], href: `#${c.ids[item.key as keyof typeof c.ids]}` }));
  const sectionIds = nav.map((item) => item.id);
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);
  const active = useActiveSection(sectionIds);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback((restoreFocus: boolean) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  // Valikko auki: lukitse taustan vieritys, kuuntele Esc ja pidä fokus valikossa.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
      );
    focusables()[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close(true);
        return;
      }
      if (event.key !== "Tab") return;
      const items = [toggleRef.current, ...focusables()].filter((el): el is HTMLElement => el !== null);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    // Jos ikkuna levenee työpöytäkokoon, sulje mobiilivalikko.
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open, close]);

  const solid = scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        solid
          ? "bg-forest-deep/92 shadow-[0_1px_0_0_rgba(246,241,231,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] w-full max-w-6xl md:h-[5.5rem] items-center justify-between px-6 md:px-10">
        <a
          href={`#${c.ids.home}`}
          aria-label={c.a11y.homeLink}
          className="on-dark relative z-[60] text-paper"
        >
          <Wordmark className="h-[3.75rem] md:h-[4.5rem]" />
        </a>

        {/* Työpöytävalikko */}
        <nav aria-label={c.a11y.mainNav} className="hidden md:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => {
              const isContact = item.key === "contact";
              const isActive = active === item.id;
              const tone = "text-paper/80 hover:text-paper";
              if (isContact) {
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className="on-dark rounded-[2px] border border-paper/50 px-5 py-2 text-[0.9rem] tracking-[0.03em] text-paper transition-colors duration-300 hover:bg-paper/12"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`on-dark relative py-1 text-[0.9rem] tracking-[0.03em] transition-colors duration-300 ${tone} ${
                      isActive ? "!text-paper" : ""
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-px bg-lotus transition-all duration-500 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={c.switchLang.href}
                hrefLang={c.switchLang.hreflang}
                lang={c.switchLang.hreflang}
                title={c.switchLang.title}
                aria-label={c.switchLang.title}
                className="on-dark inline-block rounded-[2px] px-2 py-1 text-[0.8rem] font-medium tracking-[0.18em] text-gold-soft transition-colors hover:text-paper"
              >
                {c.switchLang.label}
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobiilivalikon painike */}
        <button
          ref={toggleRef}
          type="button"
          className="on-dark relative z-[60] -mr-2 flex h-11 w-11 items-center justify-center text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? c.a11y.closeMenu : c.a11y.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 h-px w-6 bg-current transition-all duration-300 ${
                open ? "top-[7px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-6 bg-current transition-all duration-300 ${
                open ? "top-[7px] -rotate-45" : "top-[13px]"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobiilivalikko */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`on-dark fixed inset-0 z-[55] flex flex-col bg-forest-deep px-6 pb-10 pt-32 text-paper transition-[opacity,visibility] duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label={c.a11y.mobileNav}>
          <ul className="space-y-1">
            {nav.map((item, i) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => close(false)}
                  className="flex items-baseline gap-5 border-b border-paper/12 py-5 font-serif text-[2rem] leading-none text-paper"
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                >
                  <span className="w-7 shrink-0 font-sans text-xs tracking-[0.2em] text-gold-soft/80" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={c.switchLang.href}
            hrefLang={c.switchLang.hreflang}
            lang={c.switchLang.hreflang}
            onClick={() => close(false)}
            className="mt-8 inline-flex items-center gap-3 text-[0.9rem] tracking-[0.18em] text-gold-soft"
          >
            <span className="font-medium">{c.switchLang.label}</span>
            <span className="text-paper/70 tracking-normal">{c.switchLang.title}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
