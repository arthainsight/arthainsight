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
   * Ajanvarauslinkki, esimerkiksi Calendlyn tai muun varauspalvelun osoite.
   * Kun tämä on tyhjä, kaikki "Varaa"-painikkeet vievät yhteydenottolomakkeelle.
   * Esim. "https://calendly.com/tahan-oma-linkki"
   */
  bookingUrl: "",

  consultation: {
    name: "Oman dharman äärelle",
    /** Kesto. */
    duration: "90 minuuttia",
    /** Hinta, esim. "290 € (sis. alv)". Tyhjänä näytetään paikkamerkki. */
    price: "",
  },

  founder: {
    /** Näytettävä nimi. */
    name: "Riku Forsell",
    /**
     * Kuva perustajasta. Lisää kuva kansioon public/ ja kirjoita tähän tiedostonimi,
     * esim. "riku.jpg". Tyhjänä näytetään kuvan paikkamerkki.
     */
    image: "",
    /** Kuvan vaihtoehtoinen teksti, kun kuva on lisätty. */
    imageAlt: "Riku Forsell",
    /**
     * Minusta-osion tekstikappaleet. Yksi merkkijono = yksi kappale.
     * Tyhjänä näytetään muokattava tekstipaikka.
     */
    paragraphs: [] as string[],
  },

  /** Somekanavat. Vaihda tai poista rivejä tarpeen mukaan. */
  social: [
    { key: "instagram", label: "Instagram", handle: "@arthainsight", url: "https://www.instagram.com/arthainsight/" },
    { key: "tiktok", label: "TikTok", handle: "@arthainsight", url: "https://www.tiktok.com/@arthainsight" },
    { key: "youtube", label: "YouTube", handle: "@artha.insight", url: "https://www.youtube.com/@artha.insight" },
  ],

  legal: {
    business: "Tmi Riku Forsell",
    businessId: "3015497-5",
    privacyUrl: "./tietosuoja.html",
  },
} as const;

/** Varauspainikkeiden kohde: oma varauslinkki tai, jos sitä ei ole, yhteydenottolomake. */
export const bookingHref: string = site.bookingUrl || "#ota-yhteytta";
export const bookingIsExternal: boolean = Boolean(site.bookingUrl);
