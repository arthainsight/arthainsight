/**
 * Sivuston tekstit. Muokkaa tekstejä täältä – komponentteihin ei tarvitse koskea.
 */

export const nav = [
  { id: "etusivu", label: "Etusivu", href: "#etusivu" },
  { id: "filosofia", label: "Filosofia", href: "#filosofia" },
  { id: "konsultaatio", label: "Konsultaatio", href: "#konsultaatio" },
  { id: "minusta", label: "Minusta", href: "#minusta" },
  { id: "ota-yhteytta", label: "Ota yhteyttä", href: "#ota-yhteytta" },
] as const;

export const hero = {
  title: "Elätkö omaa elämääsi – vai elämää, jonka olet oppinut uskomaan omaksesi?",
  lead:
    "Sinulla on oma luontosi, omat arvosi ja potentiaalisi. Mutta pelot, uskomukset ja muiden odotukset voivat ohjata sinua suuntaan, joka ei tunnu omalta.",
  support: "Artha Insight auttaa sinua pysähtymään, näkemään syvemmin ja löytämään oman suuntasi.",
  primaryCta: "Tutustu konsultaatioon",
  secondaryCta: "Tutustu filosofiaan",
};

export const crossroads = {
  eyebrow: "Kun elämä on risteyskohdassa",
  title: "Joskus tiedät, ettei nykyinen suunta ole enää oikea. Mutta et vielä tiedä, mikä on sinun suuntasi.",
  intro: "Ehkä tunnistat jotain näistä:",
  points: [
    "Nykyinen työ ei tunnu omalta.",
    "Elämä näyttää ulkoisesti hyvältä, mutta sisältä puuttuu merkitys.",
    "Haluat muutosta, mutta pelkäät sen seurauksia.",
    "Et tiedä, mikä on oma halusi ja mikä muiden odotusta.",
    "Kaipaat selkeyttä ennen seuraavaa suurta päätöstä.",
  ],
  situations:
    "Risteyskohta näyttää jokaiselle erilaiselta. Se voi olla ura- tai ammatinvaihdon pohdintaa, työ joka on ristiriidassa arvojesi kanssa, suuri elämänmuutos tai kysymys parisuhteesta ja ihmissuhteista. Joskus tiedät vain, ettei nykyinen tilanne voi jatkua, vaikka et vielä tiedä, mitä pitäisi tehdä.",
  closing:
    "Ehkä sinun ei tarvitse löytää uutta vastausta heti. Ehkä sinun täytyy ensin nähdä selkeämmin, mistä käsin olet tähän asti elänyt.",
};

export const consultation = {
  eyebrow: "Konsultaatio",
  subtitle: "90 minuutin henkilökohtainen konsultaatio",
  intro:
    "Kun olet elämäsi risteyskohdassa, voi olla vaikea erottaa, mitä todella haluat ja mitä olet oppinut haluamaan.",
  body:
    "Konsultaatiossa tutkimme yhdessä elämäntilannettasi, arvojasi, luontaista olemustasi, potentiaaliasi ja niitä sisäisiä tekijöitä, jotka vaikuttavat valintoihisi.",
  topicsTitle: "Käsittelemme",
  topics: [
    "Nykyistä elämäntilannettasi ja risteyskohtaasi.",
    "Omia arvojasi ja todellisia halujasi.",
    "Identiteettiäsi, uskomuksiasi ja pelkojasi.",
    "Luontaista potentiaaliasi ja omaa suuntaasi.",
    "Seuraavaa konkreettista askelta.",
  ],
  noAnswersNeeded: "Sinun ei tarvitse tulla tapaamiseen valmiiden vastausten kanssa.",
  summary:
    "Konsultaation jälkeen saat henkilökohtaisen kirjallisen yhteenvedon keskeisistä oivalluksista ja seuraavista askelista.",
  cta: "Varaa oma konsultaatiosi",
  note: "Konsultaatio ei ole terapiaa eikä korvaa lääketieteellistä hoitoa.",
  detailLabels: {
    duration: "Kesto",
    price: "Hinta",
    summary: "Mukana",
  },
  summaryDetail: "Henkilökohtainen kirjallinen yhteenveto",
};

export const philosophy = {
  eyebrow: "Filosofia",
  title: "Elämä ei ole vain selviytymistä. Se on oman luonnon ja potentiaalin toteuttamista.",
  intro:
    "Artha Insightin perustana on intialaisen ajattelun neljä puruṣārthaa, elämän neljä päämäärää. Ne eivät ole vaiheita, jotka suoritetaan järjestyksessä, vaan neljä näkökulmaa samaan elämään.",
  quote: "Oma dharma on parempi kuin toisen dharma.",
  quoteSource: "Bhagavadgītā 3.35",
  dharmaNote:
    "Dharma ei tarkoita helpointa tietä. Se tarkoittaa omaa tietä.",
  items: [
    {
      key: "dharma",
      numeral: "I",
      name: "Dharma",
      line: "Tunnista oma luontosi.",
      text: "Oman todellisen luonnon ja elämänsuunnan tunnistaminen. Ei sitä, mitä sinulta odotetaan, vaan sitä, mikä sinussa on jo.",
    },
    {
      key: "artha",
      numeral: "II",
      name: "Artha",
      line: "Toteuta potentiaalisi.",
      text: "Oman potentiaalin toteuttaminen ja sen edellytysten rakentaminen: työ, resurssit ja arki, jotka kantavat omaa suuntaasi.",
    },
    {
      key: "kama",
      numeral: "III",
      name: "Kāma",
      line: "Elä elämän täyteyttä ja luontaista autuutta.",
      text: "Luontainen ilo ja elämän täyteys. Se, mikä liikuttaa sinua sisäpuolelta, ei vain velvollisuudesta.",
    },
    {
      key: "moksha",
      numeral: "IV",
      name: "Mokṣa",
      line: "Vapaudu siitä, mikä rajoittaa olemistasi.",
      text: "Vapautuminen sisäisistä rajoitteista ja karmallisista sidonnaisuuksista.",
    },
  ],
  freedom:
    "Ihmisen ei tarvitse paeta elämää löytääkseen vapautumisen. Hän voi toteuttaa omaa luontoaan, potentiaaliaan ja elämäänsä kokonaisvaltaisesti.",
  stance:
    "Artha Insight ei kerro sinulle, mikä on sinun dharmasi. Se on sinun omasi. Autamme sinua tutkimaan, elätkö oman luontosi mukaisesti vai ohjaavatko elämääsi pelot, uskomukset, muiden odotukset ja omaksuttu identiteetti, ja löytämään omat vastauksesi.",
};

export const obstacles = {
  eyebrow: "Mikä estää sinua elämästä omaa elämääsi?",
  title: "Et välttämättä ole se, joksi olet oppinut itsesi määrittelemään.",
  items: [
    {
      title: "Omaksuttu identiteetti",
      text: "Roolit, titteli ja tarina, jonka olet oppinut kertomaan itsestäsi, voivat tuntua omilta, vaikka ne on opittu.",
    },
    {
      title: "Tiedostamattomat uskomukset",
      text: "Oletukset siitä, mitä saa haluta ja mikä on mahdollista, ohjaavat valintoja ilman että huomaat niitä.",
    },
    {
      title: "Pelko ja turvallisuuden tarve",
      text: "Tuttu tuntuu turvalliselta, vaikka se ei enää kantaisi. Pelko voi pukeutua järkevyyden asuun.",
    },
    {
      title: "Muiden odotukset",
      text: "Perheen, työyhteisön ja ympäristön odotukset sekoittuvat helposti omaan haluun.",
    },
    {
      title: "Rajoittavat käsitykset omista mahdollisuuksista",
      text: "Käsitys siitä, mihin pystyt tai mitä ansaitset, on usein opittu, ei totuus.",
    },
    {
      title: "Samaistuminen ajatuksiin ja tarinoihin itsestä",
      text: "Ajatus ”minä olen tällainen” tuntuu faktalta, vaikka se on tarina, jota voi tutkia.",
    },
  ],
  closing:
    "Kun alat tutkia omia käsityksiäsi, voi avautua uusi näkökulma omaan elämääsi. Se, minkä luulit olevan rajasi, voi osoittautua opituksi tavaksi katsoa.",
};

export const about = {
  eyebrow: "Minusta",
  title: "Artha Insightin tausta",
  placeholderTitle: "Tähän tulee oma tarinasi",
  placeholderHint:
    "Tämä on muokattava tekstipaikka. Kirjoita tähän omin sanoin, mikä on sinun filosofiasi, mitä olet elämässäsi kokenut ja miksi haluat auttaa ihmisiä löytämään oman suuntansa. Lisää tekstit tiedostoon src/config/site.ts (founder.paragraphs) ja kuva kansioon public/.",
  imagePlaceholder: "Kuvan paikka",
};

export const closing = {
  title: "Oma dharmasi ei välttämättä ole helpoin tie. Mutta se on sinun tiesi.",
  text: "Jos tunnet olevasi elämäsi risteyskohdassa, ehkä nyt on oikea hetki pysähtyä tutkimaan, mikä on sinulle todella omaa.",
  cta: "Ota askel kohti omaa suuntaasi",
};

export const contact = {
  eyebrow: "Ota yhteyttä",
  title: "Kirjoita, mitä sinulle on nyt ajankohtaista.",
  text: "Voit kysyä konsultaatiosta, kuvata lyhyesti tilannettasi tai sopia ajan. Valmiita vastauksia ei tarvita.",
  labels: {
    name: "Nimi",
    email: "Sähköpostiosoitteesi",
    message: "Viesti",
  },
  submit: "Avaa viesti sähköpostissa",
  notice:
    "Lomake ei lähetä viestiä palvelimelle. Painike avaa sähköpostiohjelmasi valmiiksi täytetyllä viestillä, jonka lähetät itse.",
  alt: "Voit myös kirjoittaa suoraan osoitteeseen",
  bookingLead: "Tai varaa aika suoraan:",
  privacy: "Tietosuoja",
};

export const footer = {
  tagline: "Oma suunta, oma luonto, oma tie.",
};
