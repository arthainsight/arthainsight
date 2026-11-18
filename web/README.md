# Artha Insight – verkkosivusto

Yhden sivun sivusto kahdella kielellä: suomi (`/`) ja englanti (`/en/`). React, TypeScript ja Tailwind CSS (Vite).
Molemmat kieliversiot esirenderöidään buildissa staattiseksi HTML:ksi, joten sivut latautuvat nopeasti ja
hakukoneet näkevät sisällön heti. Kielten välillä on kielenvaihtolinkki ja hreflang-merkinnät.

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
| Suomenkieliset tekstit | `src/content/fi.ts` |
| Englanninkieliset tekstit | `src/content/en.ts` (sama rakenne kuin fi.ts) |
| Hinta, kesto, ajanvarauslinkki, sähköposti, somelinkit, Minusta-kuva ja -nimi | `src/config/site.ts` |
| Värit ja fontit | `src/index.css` (`@theme`-lohko) |
| Logo | `public/logo.png` (koko logo) ja `public/logo-mark.png` (pelkkä lootus) |
| Maisemakuvitus | `src/components/art/Horizon.tsx` |
| Sivun otsikko, kuvaus ja Open Graph | `index.html` (suomi) ja `en/index.html` (englanti) |

### Asetukset, jotka kannattaa tarkistaa (`src/config/site.ts`)

- **Hinta**: `coaching.price` kielittäin. Nyt pilottihinta 125 € (fi) ja €125 (en). Alv-merkintää ei ole lisätty, koska sitä ei ole määritelty.
- **Ajanvarauslinkki**: `bookingUrl` on olemassa oleva Google Kalenterin ajanvarauspage (`calendar.app.google/...`). Sitä on aiemmin käytetty 30 minuutin keskusteluun, joten varmista Google Kalenterissa, että sillä tarjotaan 90 minuutin aikoja ja Google Meet -linkki. Kun kenttä on tyhjä, "Varaa"-painikkeet vievät yhteydenottolomakkeelle. Maksulinkki lähetetään erikseen varauksen vahvistamisen jälkeen, eikä sivustolla ole maksuintegraatiota.
- **Kuva ja nimi (Minusta)**: `founder.image` (`public/riku.jpg`, alkuperäiseltä sivulta) ja `founder.name`.
- **Minusta-teksti**: `about.paragraphs` tiedostoissa `src/content/fi.ts` ja `en.ts`. Ensimmäinen kappale on sinun oma tarinasi. Lisää tarvittaessa omaa taustaasi, mutta vain todellista.

## Yhteydenottolomake

Lomakkeella ei ole palvelinpuolta. Lähetys avaa käyttäjän sähköpostiohjelman valmiiksi täytetyllä
viestillä (`mailto:`), eikä sivu väitä lähettävänsä mitään. Jos haluat oikean lähetyksen, korvaa
`handleSubmit` tiedostossa `src/sections/Contact.tsx` lomakepalvelun (esim. Formspree) kutsulla.

## Ennen julkaisua

1. Tarkista yllä olevat asetukset (hinta, ajanvarauslinkki, Minusta-teksti).
2. Poista `<meta name="robots" content="noindex" />` tiedostoista `index.html` ja `en/index.html`. Se estää nyt hakukoneita indeksoimasta keskeneräistä sivua.
3. `public/sitemap.xml` ja `public/robots.txt` kopioituvat buildin mukana ja korvaavat juuren vanhat tiedostot. Tarkista osoitteet ja päivämäärät.
4. `public/tietosuoja.html` (suomi) ja `public/privacy.html` (englanti) ovat kopiot juuren tietosuojasivuista. Pidä ne ajan tasalla.
5. Open Graph -kuvat ovat `public/og.png` (suomi) ja `public/og-en.png` (englanti). Päivitä ne, jos pääotsikko muuttuu.

## Julkaisu

`npm run build` tuottaa valmiin sivuston kansioon `dist/` (`index.html` ja `en/index.html`). Koska `base` on `./`, sen voi viedä
mihin tahansa: domainin juureen tai alikansioon. Nykyisessä GitHub Pages -asetuksessa (julkaisu
juuresta) kopioi `dist/`-kansion sisältö repon juureen, tai ota käyttöön GitHub Actions
-julkaisu, joka ajaa buildin ja julkaisee `web/dist`.

## Rakenne

```
src/
  App.tsx              sivun kokoaminen
  content/fi.ts, en.ts tekstit kielittäin, content/index.ts valitsee kielen
  i18n.tsx             kielikonteksti (useContent)
  config/site.ts       vaihdettavat asetukset
  sections/            Hero, Questions, Coaching, Philosophy, Obstacles, About, ClosingCta, Contact
  components/          Header, Footer, Wordmark, ui/ (Button, Reveal, ...), art/ (Horizon, PurusharthaIcon)
  hooks/               useActiveSection, useScrolled
scripts/prerender.mjs  esirenderöinti buildin jälkeen
```

## Uuden kielen lisääminen

1. Kopioi `src/content/en.ts` uudeksi tiedostoksi ja käännä tekstit.
2. Lisää kieli tiedostoon `src/content/index.ts` ja `Lang`-tyyppiin.
3. Kopioi `en/index.html` uuteen kansioon ja lisää se `vite.config.ts`:n `input`-listaan ja `scripts/prerender.mjs`:n `pages`-listaan.

## Saavutettavuus

Ohituslinkki, selkeä otsikkohierarkia, maamerkit (`header`, `main`, `footer`), näppäimistökäyttö ja
fokusrenkaat, mobiilivalikko jossa Esc ja fokuksen pito, ja `prefers-reduced-motion` poistaa animaatiot.
Sivu on tarkistettu axe-coren WCAG 2.1 AA -säännöillä (0 havaintoa).
