/**
 * Sivuston asetukset – tänne kootut kohdat on tarkoitettu vaihdettaviksi.
 *
 * Tyhjä arvo ("") tarkoittaa, että tieto puuttuu. Sivusto näyttää silloin selvästi
 * merkityn paikkamerkin eikä keksi tietoa.
 */
export const site = {
  name: "Artha Insight",

  /** Yhteyssähköposti. Lomake avaa viestin tähän osoitteeseen. */
  email: "riku.forsell@gmail.com",

  /**
   * Ajanvarauslinkki. Tämä on alkuperäiseltä verkkosivulta peräisin oleva Calendly-profiili.
   * Varmista, että Calendlyssä on 90 minuutin Dharma Coaching -tapahtuma (tai vaihda tähän suoraan
   * sen tapahtuman linkki). Kun tämä on tyhjä, kaikki "Varaa"-painikkeet vievät yhteydenottolomakkeelle.
   */
  bookingUrl: "https://calendly.com/riku-forsell",

  coaching: {
    /** Kesto kielittäin. Palvelun nimi ja kuvaus ovat kielitiedostoissa (src/content). */
    duration: { fi: "90 minuuttia", en: "90 minutes" },
    /** Pilottihinta kielittäin. Tyhjänä näytetään paikkamerkki. */
    price: { fi: "125 €", en: "€125" },
  },

  founder: {
    /** Näytettävä nimi. */
    name: "Riku Forsell",
    /**
     * Kuva perustajasta. Lisää kuva kansioon public/ ja kirjoita tähän tiedostonimi,
     * esim. "riku.jpg". Tyhjänä näytetään kuvan paikkamerkki.
     */
    image: "riku.jpg",
    /** Kuvan vaihtoehtoinen teksti, kun kuva on lisätty. */
    imageAlt: "Riku Forsell",
  },

  /** Somekanavat. Vaihda tai poista rivejä tarpeen mukaan. */
  social: [
    { key: "instagram", label: "Instagram", handle: "@arthainsight", url: "https://www.instagram.com/arthainsight/" },
    { key: "tiktok", label: "TikTok", handle: "@arthainsight", url: "https://www.tiktok.com/@arthainsight" },
    { key: "youtube", label: "YouTube", handle: "@artha.insight", url: "https://www.youtube.com/@artha.insight" },
    { key: "facebook", label: "Facebook", handle: "Artha Insight", url: "https://www.facebook.com/profile.php?id=61593970195695" },
    { key: "linkedin", label: "LinkedIn", handle: "Artha Insight", url: "https://www.linkedin.com/company/arthainsight" },
  ],

  legal: {
    business: "Tmi Riku Forsell",
    businessId: "3015497-5",
  },
} as const;

/** Varauspainikkeiden kohde: oma varauslinkki tai, jos sitä ei ole, yhteydenottolomake. */
export function getBooking(contactId: string): { href: string; external: boolean } {
  return site.bookingUrl ? { href: site.bookingUrl, external: true } : { href: `#${contactId}`, external: false };
}
