import { useContent } from "../i18n";

export interface NavItem {
  key: string;
  label: string;
  href: string;
  /** Etusivun osion id (scroll-spy), tai null jos kohde on toinen sivu. */
  sectionId: string | null;
  /** Tosi, kun linkki osoittaa sivuun, jolla ollaan. */
  current: boolean;
}

/** Valikon kohteet: etusivulla ankkurit, Filosofia-sivulla linkit takaisin etusivun osioihin. */
export function useNavItems(): NavItem[] {
  const c = useContent();
  return c.nav.map((item) => {
    if (item.key === "philosophy") {
      return {
        key: item.key,
        label: item.label,
        href: c.page === "philosophy" ? "#sisalto-alku" : c.url(c.paths.philosophy),
        sectionId: null,
        current: c.page === "philosophy",
      };
    }
    const id = c.ids[item.key as keyof typeof c.ids];
    const href = c.page === "home" ? `#${id}` : c.url(`${c.paths.home}#${id}`);
    return { key: item.key, label: item.label, href, sectionId: id, current: false };
  });
}
