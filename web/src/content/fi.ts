/**
 * Suomenkieliset tekstit. Muokkaa tekstejä täältä – komponentteihin ei tarvitse koskea.
 * Englanninkieliset tekstit ovat tiedostossa en.ts, ja niillä on sama rakenne.
 */

export const fi = {
  lang: "fi",
  /** Polku juureen sivun sijainnista katsottuna (kuvat ja tiedostot). */
  root: "./",

  /** Osioiden ankkuri-id:t. */
  ids: {
    home: "etusivu",
    questions: "kysymykset",
    coaching: "dharma-coaching",
    philosophy: "filosofia",
    obstacles: "ehdollistuminen",
    about: "minusta",
    closing: "loppukutsu",
    contact: "ota-yhteytta",
    main: "sisalto",
  },

  nav: [
    { key: "home", label: "Etusivu" },
    { key: "coaching", label: "Dharma Coaching" },
    { key: "philosophy", label: "Filosofia" },
    { key: "about", label: "Minusta" },
    { key: "contact", label: "Ota yhteyttä" },
  ],

  /** Kielenvaihto: linkki toiseen kieliversioon. */
  switchLang: { label: "EN", title: "In English", href: "./en/", hreflang: "en" },

  a11y: {
    skip: "Siirry sisältöön",
    logoAlt: "Artha Insight",
    homeLink: "Artha Insight, etusivun alkuun",
    mainNav: "Päävalikko",
    mobileNav: "Mobiilivalikko",
    footerNav: "Alatunnisteen valikko",
    openMenu: "Avaa valikko",
    closeMenu: "Sulje valikko",
    newTab: "(avautuu uuteen välilehteen)",
  },

  footer: {
    tagline: "Ehdollistumisesta vapauteen.",
    siteHeading: "Sivusto",
    followHeading: "Seuraa",
    contactHeading: "Yhteys",
    privacy: "Tietosuojaseloste",
    privacyUrl: "./tietosuoja.html",
  },

  hero: {
    eyebrow: "Ehdollistumisesta vapauteen",
    title: "Kuka sinä olet kaiken sen alla, minkä uskot itsestäsi olevasi?",
    lead:
      "Tutki ehdollistunutta identiteettiäsi, pura rajoittavia uskomuksia ja löydä oma yksilöllinen luontosi, potentiaalisi ja suuntasi elämässä.",
    support: "Löydä todellinen luontosi. Vapauta potentiaalisi. Elä vapaasti.",
    meta: "Dharma Coaching · 90 minuuttia · pilottihinta 125 € (sis. alv)",
    primaryCta: "Varaa 90 minuutin tapaaminen",
    secondaryCta: "Tutustu Dharma Coachingiin",
  },

  questions: {
    eyebrow: "Kysymyksiä itsellesi",
    title: "Mitä jos kysyisit ensin näitä?",
    items: [
      "Kuka sinä olet ilman uskomuksiasi?",
      "Elätkö omaa elämääsi vai muiden odotuksia?",
      "Entä jos identiteetti, jota puolustat, onkin jotain, minkä olet oppinut uskomaan?",
      "Kertovatko ajatuksesi sinulle totuuden?",
      "Mikä muuttuisi, jos lakkaisit samaistumasta kaikkeen, mitä ajattelet ja tunnet?",
      "Oletko tulossa siksi, mikä todella olet, vai yritätkö tulla siksi, minkä uskot sinun pitäisi olla?",
    ],
    situations:
      "Moni hakeutuu itsetutkiskeluun elämän risteyskohdassa: työ ei tunnu omalta, elämä näyttää päältä hyvältä mutta sisältä puuttuu merkitys, tai haluat muutosta mutta pelkäät sen seurauksia. Taustalla on usein kysymys, jota ei ole vielä esitetty: kuka olen, kun en ole kaikki nämä käsitykset?",
    closing:
      "Tavoite ei ole rakentaa parempaa persoonallisuutta tai myönteisempää minäkuvaa. Tavoite on tutkia, mitä identiteetti oikeastaan on ja mikä sinussa on sen alla.",
  },

  coaching: {
    eyebrow: "Dharma Coaching",
    name: "Dharma Coaching",
    subtitle: "90 minuutin henkilökohtainen tapaaminen",
    leadQuestion: "Kuka sinä olet ilman kaikkia uskomuksiasi?",
    paragraphs: [
      "Olemme elämämme aikana omaksuneet lukemattomia käsityksiä siitä, keitä olemme, millaisia meidän pitäisi olla ja mitä voimme elämässämme saavuttaa.",
      "Osa näistä käsityksistä voi rajoittaa elämäämme huomaamattamme. Ne vaikuttavat siihen, miten näemme itsemme, miten käyttäydymme ja millaisia valintoja teemme.",
      "Dharma Coaching on henkilökohtainen ohjaustapaaminen, jossa tutkimme näitä käsityksiä ja niiden vaikutusta elämääsi.",
      "Tapaamisessa keskitymme yhteen sinulle merkitykselliseen kysymykseen tai haasteeseen. Tutkimme sen taustalla olevia uskomuksia, pelkoja ja samaistumisia sekä kyseenalaistamme niitä yhdessä.",
      "Työskentelyn filosofisena perustana ovat Vedanta, joogafilosofia ja Bhagavan Shanmukhan näkemys neljästä Puruṣārthasta: Dharmasta, Arthasta, Kāmasta ja Mokṣasta.",
      "Tavoitteena on syventää ymmärrystä itsestäsi, tunnistaa omaa elämääsi rajoittavia käsityksiä ja löytää uusia näkökulmia siihen, miten voisit elää enemmän oman luontosi mukaisesti.",
    ],
    philosophyLink: "Lue lisää filosofisesta perustasta",
    stagesTitle: "Tapaamisen viisi vaihetta",
    minutesUnit: "min",
    stages: [
      {
        name: "Alkukartoitus",
        minutes: 10,
        text: "Selvitämme nykyisen tilanteesi, haasteesi ja kysymyksen, jota haluat tutkia.",
      },
      {
        name: "Identiteetin tutkiminen",
        minutes: 20,
        text: "Tutkimme minäkuvaasi, oletuksiasi ja uskomuksiasi sekä sitä, miten ne vaikuttavat tunteisiisi, päätöksiisi ja käyttäytymiseesi.",
      },
      {
        name: "Rajoittavien uskomusten purkaminen",
        minutes: 30,
        text: "Perehdymme yhteen keskeiseen rajoittavaan uskomukseen. Kyseenalaistamme sen paikkansapitävyyden, alkuperän ja seuraukset sekä siihen liittyvän samaistumisen.",
      },
      {
        name: "Oman luonnon, dharman ja potentiaalin tutkiminen",
        minutes: 20,
        text: "Tutkimme, mitkä ovat luontaisia ominaisuuksiasi, taipumuksiasi, kiinnostuksen kohteitasi ja vahvuuksiasi. Millainen toiminta tuntuu omalta? Mitä potentiaalia haluaisit ilmaista? Millainen voisi olla sinun tapasi osallistua maailmaan ja toteuttaa omaa tarkoitustasi?",
      },
      {
        name: "Yhteenveto ja integrointi",
        minutes: 10,
        text: "Kokoamme oivallukset yhteen ja tunnistamme käytännön kysymyksiä tai askelia jatkotutkiskelua varten.",
      },
    ],
    suitableTitle: "Kenelle tämä sopii",
    suitable: [
      "Haluat tutkia yhtä sinulle merkityksellistä kysymystä tai haastetta, joka liittyy esimerkiksi työhön, valintoihin tai omaan identiteettiisi.",
      "Olet valmis kyseenalaistamaan omia oletuksiasi, vaikka se tuntuisi epämukavalta.",
      "Kaipaat kysymyksiä ja uusia näkökulmia etkä valmista vastausta.",
      "Et tarvitse aiempaa tietoa Vedantasta tai sanskritista.",
    ],
    notSuitableTitle: "Kenelle tämä ei sovi",
    notSuitable: [
      "Tarvitset psykoterapiaa, hoitoa tai kriisiapua. Dharma Coaching ei korvaa niitä.",
      "Odotat yhdeltä tapaamiselta nopeaa ratkaisua, paranemista tai pysyvää muutosta.",
      "Haluat kohentaa minäkuvaasi myönteisemmäksi tai opetella positiivista ajattelua.",
    ],
    standalone:
      "Yksi tapaaminen on itsenäinen ja merkityksellinen kokonaisuus. Se ei paljasta koko Dharmaasi, poista rajoittavia uskomuksia pysyvästi, paranna traumoja eikä tuota pysyvää vapautta, mutta se antaa kysymyksiä ja näkökulmia, joiden tutkimista voit jatkaa itse.",
    note: "Dharma Coaching on ohjausta ja itsetutkiskelua. Se ei ole psykoterapiaa, hoitoa tai lääketieteellistä apua.",
    cta: "Varaa 90 minuutin tapaaminen",
    bookingTitle: "Näin varaat tapaamisen",
    bookingSteps: [
      "Valitse sinulle sopiva vapaa aika Google Kalenterin ajanvarauksesta.",
      "Saat vahvistuksen varauksestasi.",
      "Saat maksulinkin varauksen vahvistamisen jälkeen.",
      "Saat Google Meet -linkin, jonka kautta tapaamme sovittuna ajankohtana.",
    ],
    bookingNote: "Maksua ei oteta varauksen yhteydessä. Maksulinkki lähetetään erikseen, kun varaus on vastaanotettu ja vahvistettu.",
    /** {price} ja {duration} korvataan arvoilla. */
    priceLine: "Hinta: {price} (sis. alv 25,5 %) · {duration}",
    detailLabels: {
      duration: "Kesto",
      price: "Hinta",
      format: "Muoto",
    },
    formatValue: "Yksilötapaaminen verkossa (Google Meet)",
    priceNote: "Pilottihinta, sis. alv 25,5 %",
    placeholderDuration: "[Kesto]",
    placeholderPrice: "[Lisää hinta]",
  },

  philosophy: {
    eyebrow: "Filosofinen perusta",
    title: "Mihin Dharma Coaching perustuu?",
    intro:
      "Dharma Coaching on henkilökohtaisen ohjauksen ja itsetutkiskelun lähestymistapa. Se alkaa ehdollistuneen identiteetin purkamisesta ja etenee kohti oman luonnon, tarkoituksen ja potentiaalin ilmaisemista sekä vapautta. Pohjana on kolme lähdettä, joita ei tarvitse tuntea etukäteen.",
    sources: [
      {
        key: "vedanta",
        title: "Vedanta ja Advaita",
        text: "Advaita Vedanta tutkii todellisen Itsen, Atmanin, luonnetta. Siinä Atman erotetaan siitä, mihin ihminen tavallisesti samaistuu: kehoon, ajatuksiin, rooleihin ja minäkuvaan. Itsetutkiskelussa ei kysytä, millainen minun pitäisi olla, vaan mikä on se ”minä”, jota pidän itsenäni.",
      },
      {
        key: "yoga",
        title: "Joogafilosofia",
        text: "Joogafilosofia tutkii ehdollistumista, samaistumista ja rakenteita, jotka ylläpitävät kärsimystä. Patañjalin Joogasūtrat kuvaavat, että avidyā on tietämättömyys omasta todellisesta luonnosta ja asmitā samaistuminen minuuteen: ”minä olen tämä”. Yhdessä kiintymyksen, vastenmielisyyden ja menetyksen pelon kanssa ne ovat joogafilosofian kleśat.",
      },
      {
        key: "purusharthas",
        title: "Neljä Puruṣārthaa",
        text: "Bhagavan Shanmukhan tulkinta neljästä Puruṣārthasta antaa jäsennyksen yksilölliselle luonnolle, potentiaalille, autuudelle ja vapaudelle: Dharma, Artha, Kāma ja Mokṣa.",
      },
    ],
    progression: {
      title: "Dharma Coachingin eteneminen",
      intro:
        "Työskentely alkaa ehdollistuneen identiteetin purkamisesta. Sen jälkeen siirrytään kohti oman luonnon ymmärtämistä ja ilmaisemista sekä vapautta.",
      steps: [
        {
          title: "Pura ehdollistunut identiteetti",
          text: "Tunnista ja kyseenalaista rajoittavia uskomuksia, pelkoja, samaistumisia ja opittuja oletuksia.",
        },
        {
          title: "Löydä yksilöllinen luontosi",
          text: "Ymmärrä omat ominaisuutesi, taipumuksesi ja luontaiset piirteesi.",
        },
        {
          title: "Ymmärrä Dharmasi",
          text: "Tunnista oma luontosi, tarkoituksesi ja vastuusi osana laajempaa kokonaisuutta.",
        },
        {
          title: "Löydä Arthasi",
          text: "Tunnista ja ilmaise luontoosi sisältyvä potentiaali.",
        },
        {
          title: "Ilmaise Kāmaa",
          text: "Koe ja ilmaise luontaista autuutta, iloa ja täyttymystä.",
        },
        {
          title: "Ymmärrä Mokṣa",
          text: "Vapaus rajalliseen ja ehdollistuneeseen käsitykseen itsestä ja olemassaolosta.",
        },
      ],
      note:
        "Svabhāva tarkoittaa yksilön omaa luontoa ja svadharma omaa Dharmaa, eli tehtävää ja tarkoitusta, joka seuraa tämän luonnon ilmaisemisesta. Ne ovat tässä selittäviä käsitteitä, eivät Bhagavan Shanmukhan sanatarkkoja lainauksia.",
    },
    distinction: {
      title: "Identiteetti, Atman ja Dharma",
      leftTitle: "Psykologinen identiteetti",
      leftText:
        "Minäkuva, roolit, uskomukset, historia ja tarinat siitä, kuka olen. Se rakentuu elämän aikana, ja sitä voi tutkia, kyseenalaistaa ja muuttaa.",
      rightTitle: "Atman, todellinen Itse (Advaita Vedantan näkökulma)",
      rightText:
        "Advaita Vedantan mukaan Atman ei ole persoonallisuus, tunne tai minäkuva, eikä sitä voi parantaa tai rakentaa. Se on se, mikä tietää kaikki kokemukset ja pysyy samana, vaikka käsitykset itsestä vaihtuvat.",
      relationTitle: "Atman ja Dharma eivät ole sama asia",
      relationText:
        "Atman liittyy syvempään filosofiseen kysymykseen todellisesta Itsestä, jota Advaita Vedanta tutkii. Dharma koskee sitä, miten yksilön oma luonto, tarkoitus ja potentiaali ilmenevät elämässä osana laajempaa kokonaisuutta. Käsitteet liittyvät toisiinsa, mutta Dharma Coaching ei samasta niitä keskenään.",
      closing:
        "Siksi Dharma Coaching ei rakenna parempaa persoonallisuutta eikä myönteisempää minäkuvaa. Se alkaa identiteetin tutkimisesta ja etenee kohti oman luonnon ilmaisemista arjessa.",
    },
    purusharthasTitle: "Neljä Puruṣārthaa",
    purusharthasIntro: "Bhagavan Shanmukhan tulkinnassa elämän neljä päämäärää ovat:",
    items: [
      {
        key: "dharma",
        numeral: "I",
        name: "Dharma",
        title: "Todellinen luontosi, tarkoituksesi ja tehtäväsi",
        line: "Ihmisen yksilöllinen todellinen luonto ja sen mukainen tehtävä ja tarkoitus.",
        paragraphs: [
          "Dharma tarkoittaa oman luonnon tunnistamista ja sen täysipainoista ilmaisemista. Se liittyy siihen, millaisia ominaisuuksia, taipumuksia ja mahdollisuuksia ihmisessä on sekä siihen, mikä on hänen ainutlaatuinen tarkoituksensa osana laajempaa kokonaisuutta.",
          "Kyse ei ole vain ulkoisesta velvollisuudesta, vaan oman luonnon mukaisesta tavasta elää ja toimia.",
        ],
      },
      {
        key: "artha",
        numeral: "II",
        name: "Artha",
        title: "Potentiaalisi ja resurssisi",
        line: "Oman luonnon sisältämä potentiaali ja sen ilmaisemiseen tarvittavat resurssit.",
        paragraphs: [
          "Artha käsittää ihmisen kyvyt, taidot, mahdollisuudet ja käytännön edellytykset, joiden avulla hän voi toteuttaa omaa luontoaan elämässään.",
        ],
      },
      {
        key: "kama",
        numeral: "III",
        name: "Kāma",
        title: "Luontainen autuutesi",
        line: "Luontainen ilo, autuus ja täyttymys.",
        paragraphs: [
          "Bhagavan Shanmukhan tulkinnassa Kāma ei tarkoita pelkästään aistinautintoja tai halujen tyydyttämistä, vaan ihmisen luontaista oikeutta autuuteen. Se liittyy oman luonnon ja potentiaalin täysipainoiseen ilmaisemiseen.",
        ],
      },
      {
        key: "moksha",
        numeral: "IV",
        name: "Mokṣa",
        title: "Vapaus",
        line: "Vapaus rajalliseen ja ehdollistuneeseen käsitykseen itsestä ja olemassaolosta.",
        paragraphs: [
          "Dharma, Artha ja Kāma liittyvät Bhagavan Shanmukhan näkemyksessä olennaisesti Mokṣan toteutumiseen.",
        ],
      },
    ],
    natureTitle: "Oman luonnon löytäminen ei tarkoita kaikkien halujen seuraamista.",
    natureText:
      "Oman luonnon tunnistaminen ei tarkoita jokaisen halun seuraamista tai epämukavuuden välttämistä. Se tarkoittaa oman yksilöllisen luonnon, kykyjen, taipumusten ja tarkoituksen ymmärtämistä sekä niiden mukaista vastuullista elämistä osana laajempaa kokonaisuutta.",
    freedom:
      "Vapaus ei vaadi elämästä pakenemista. Tavoite ei ole paeta arkea vaan elää sitä vapaammin ja ilmaista omaa potentiaaliasi täydemmin.",
    stance:
      "Dharma Coaching ei kerro sinulle, kuka olet. Tutkiminen tapahtuu sinun omassa kokemuksessasi: ohjaus antaa kysymykset ja näkökulmat, mutta vastaukset löydät itse.",
  },

  obstacles: {
    eyebrow: "Miten ehdollistuminen näkyy arjessa?",
    title: "Et välttämättä ole se, joksi olet oppinut itsesi määrittelemään.",
    items: [
      {
        title: "Omaksuttu identiteetti",
        text: "Roolit, titteli ja tarina, jonka olet oppinut kertomaan itsestäsi, voivat tuntua omilta, vaikka ne on opittu.",
      },
      {
        title: "Tiedostamattomat uskomukset",
        text: "Oletukset siitä, mitä saa haluta ja mikä on mahdollista, ohjaavat valintojasi, vaikka et edes huomaa niitä.",
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
      {
        title: "Oman luonnon ja potentiaalin jääminen ilmaisematta",
        text: "Ehdollistunut minäkuva ei vaikuta ainoastaan siihen, miten näet itsesi. Se voi myös estää sinua tunnistamasta omia kykyjäsi, taipumuksiasi, kiinnostuksen kohteitasi ja mahdollisuuksiasi. Saatat jättää toteuttamatta asioita, jotka ovat sinulle luontaisia, koska olet oppinut uskomaan, etteivät ne ole mahdollisia tai hyväksyttäviä.",
      },
    ],
    closing:
      "Kun alat tutkia omia käsityksiäsi, voi avautua uusi näkökulma omaan elämääsi. Se, minkä luulit olevan rajasi, voi osoittautua opituksi tavaksi katsoa.",
  },

  about: {
    eyebrow: "Minusta",
    title: "Dharma Coachingin taustalla",
    paragraphs: [
      "Olen ollut itse hukassa ja jumissa. Yritin käynnistää yritystä, joka ei tuntunut lainkaan omalta jutulta. Onneksi se ei lähtenyt käyntiin.",
      "Minua kiinnostavat itsetutkiskelu ja kysymys siitä, mitä identiteetti oikeastaan on. Dharma Coaching nojaa Advaita Vedantaan, joogafilosofiaan ja Bhagavan Shanmukhan tulkintaan neljästä Puruṣārthasta. Vedanta ja joogafilosofia auttavat tutkimaan identiteettiä ja ehdollistumista, ja Puruṣārthat jäsentävät sitä, miten oma luonto, potentiaali, ilo ja vapaus voivat ilmetä elämässä.",
      "Dharma Coachingin käytännön tarkoitus on auttaa sinua purkamaan rajoittavia käsityksiä ja löytämään oma luontosi, potentiaalisi ja tapasi ilmaista niitä arjessa. Työtapa on kysyvä: en anna valmiita vastauksia siihen, kuka olet tai mikä on sinun suuntasi. Tutkimme kysymyksiä yhdessä, ja vastaukset löydät itse.",
    ],
    notTitle: "Mitä Dharma Coaching ei ole",
    not: [
      "Psykoterapiaa, hoitoa tai kriisiapua.",
      "Valmiiden vastausten antamista siihen, kuka olet.",
      "Persoonallisuuden tai minäkuvan kohentamista.",
      "Lupausta pysyvästä muutoksesta tai vapaudesta yhdessä tapaamisessa.",
    ],
    philosophyLink: "Lue filosofisesta perustasta",
  },

  closing: {
    title: "Oletko tulossa siksi, mikä todella olet – vai yritätkö tulla siksi, minkä uskot sinun pitäisi olla?",
    text: "Varaa 90 minuutin Dharma Coaching -tapaaminen ja tutki rauhassa yhtä sinulle merkityksellistä kysymystä.",
    cta: "Varaa 90 minuutin tapaaminen",
  },

  contact: {
    eyebrow: "Ota yhteyttä",
    title: "Kysy tai sovi tapaaminen.",
    text: "Voit kysyä, sopiiko Dharma Coaching sinulle, kuvata lyhyesti kysymystä, jota haluaisit tutkia, tai sopia ajan. Valmista kysymystä ei tarvita.",
    labels: {
      name: "Nimi",
      email: "Sähköpostiosoitteesi",
      message: "Viesti",
    },
    submit: "Avaa viesti sähköpostissa",
    notice:
      "Lomake ei lähetä viestiä palvelimelle. Painike avaa sähköpostiohjelmasi valmiiksi täytetyllä viestillä, jonka lähetät itse.",
    privacy: "Tietosuoja",
    alt: "Voit myös kirjoittaa suoraan osoitteeseen",
    bookingLead: "Tai varaa aika suoraan Google Kalenterista:",
    /** {email} korvataan sähköpostiosoitteella. */
    opened: "Sähköpostiohjelmasi pitäisi avautua. Jos näin ei käy, kirjoita osoitteeseen {email}.",
    mailSubject: "Yhteydenotto: Dharma Coaching",
    mailName: "Nimi",
    mailEmail: "Sähköposti",
  },
};

export type Content = typeof fi;
