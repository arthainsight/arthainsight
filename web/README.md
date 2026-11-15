# Artha Insight – verkkosivusto

Yhden sivun sivusto: React, TypeScript ja Tailwind CSS (Vite). Etusivu esirenderöidään buildissa
staattiseksi HTML:ksi, joten se latautuu nopeasti ja hakukoneet näkevät sisällön heti.

## Käyttö

```bash
cd web
npm install
npm run dev        # kehityspalvelin, päivittyy lennossa
npm run build      # tarkistaa tyypit ja tekee tuotantoversion kansioon dist/
npm run preview    # esikatselee tuotantoversiota
```

## Mistä mitäkin muokataan

| Mitä | Tiedosto |
| --- | --- |
| Kaikki sivun tekstit | `src/content/copy.ts` |
| Hinta, ajanvarauslinkki, sähköposti, somelinkit, Minusta-tekstit ja -kuva | `src/config/site.ts` |
| Värit ja fontit | `src/index.css` (`@theme`-lohko) |
| Logo | `public/logo.png` (koko logo) ja `public/logo-mark.png` (pelkkä lootus) |
| Maisemakuvitus | `src/components/art/Horizon.tsx` |
| Sivun otsikko, kuvaus ja Open Graph | `index.html` |

### Paikkamerkit, jotka pitää täyttää

Kun arvo on tyhjä, sivu näyttää selvästi merkityn katkoviivaisen paikkamerkin eikä keksi tietoa.

- **Hinta**: `site.consultation.price` (esim. `"290 € (sis. alv)"`).
- **Ajanvarauslinkki**: `site.bookingUrl`. Kun se on tyhjä, kaikki "Varaa"-painikkeet vievät yhteydenottolomakkeelle.
- **Minusta-teksti**: `site.founder.paragraphs` (yksi merkkijono = yksi kappale).
- **Kuva perustajasta**: lisää tiedosto kansioon `public/` ja kirjoita nimi kohtaan `site.founder.image`.

## Yhteydenottolomake

Lomakkeella ei ole palvelinpuolta. Lähetys avaa käyttäjän sähköpostiohjelman valmiiksi täytetyllä
viestillä (`mailto:`), eikä sivu väitä lähettävänsä mitään. Jos haluat oikean lähetyksen, korvaa
`handleSubmit` tiedostossa `src/sections/Contact.tsx` lomakepalvelun (esim. Formspree) kutsulla.

## Ennen julkaisua

1. Täytä yllä olevat paikkamerkit.
2. Poista `<meta name="robots" content="noindex" />` tiedostosta `index.html`. Se estää nyt hakukoneita indeksoimasta keskeneräistä sivua.
3. Lisää `sitemap.xml` ja `robots.txt` tarvittaessa.
4. `public/tietosuoja.html` ja `public/privacy.html` ovat kopiot juuren tietosuojasivuista. Pidä ne ajan tasalla.

## Julkaisu

`npm run build` tuottaa valmiin sivuston kansioon `dist/`. Koska `base` on `./`, sen voi viedä
mihin tahansa: domainin juureen tai alikansioon. Nykyisessä GitHub Pages -asetuksessa (julkaisu
juuresta) kopioi `dist/`-kansion sisältö repon juureen, tai ota käyttöön GitHub Actions
-julkaisu, joka ajaa buildin ja julkaisee `web/dist`.

## Rakenne

```
src/
  App.tsx              sivun kokoaminen
  content/copy.ts      tekstit
  config/site.ts       vaihdettavat asetukset
  sections/            Hero, Crossroads, Consultation, Philosophy, Obstacles, About, ClosingCta, Contact
  components/          Header, Footer, Wordmark, ui/ (Button, Reveal, ...), art/ (Horizon, PurusharthaIcon)
  hooks/               useActiveSection, useScrolled
scripts/prerender.mjs  esirenderöinti buildin jälkeen
```

## Saavutettavuus

Ohituslinkki, selkeä otsikkohierarkia, maamerkit (`header`, `main`, `footer`), näppäimistökäyttö ja
fokusrenkaat, mobiilivalikko jossa Esc ja fokuksen pito, ja `prefers-reduced-motion` poistaa animaatiot.
Sivu on tarkistettu axe-coren WCAG 2.1 AA -säännöillä (0 havaintoa).
