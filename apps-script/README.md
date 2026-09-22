# Sähköpostien keruu ja lähetys — asennusohje

Tämä kansio sisältää Google Apps Script -koodin, joka ottaa vastaan
osoitteesta `arthainsight.com/diagnoosi/` lähetetyt tiedot, tallentaa ne
Google Sheets -taulukkoon, lähettää jarrukohtaisen raportin ja siirtää
tilaajan MailerLiteen.

## Työnjako

| Osa | Kuka hoitaa |
|---|---|
| Nimetön testidata | Apps Script → Sheets |
| Suostumusloki | Apps Script → Sheets |
| Jarrukohtainen raportti (7 versiota) | Apps Script → Gmail |
| Tilaajalista | MailerLite |
| Kolmen viestin jatkosarja | MailerLite (`sisalto/mailerlite-sarja.md`) |
| Peruutus ja tilastot | MailerLite |

Raportti lähtee Apps Scriptistä, koska sitä on seitsemän erilaista eikä
MailerLiten ilmaistason kolme automaatiota riitä niihin. Jos siirryt
maksulliselle tasolle, raportinkin voi siirtää MailerLiteen ja Gmail jää
kokonaan pois.

Koodi ei ole osa julkaistavaa sivustoa. Se liitetään käsin Google-tilille
kerran, minkä jälkeen se toimii itsekseen.

## Mitä tallennetaan minne

| Välilehti | Sisältö | Henkilötietoja |
|---|---|---|
| `Vastaukset` | Testin pisteet ja vastaukset, aikaleima | Ei |
| `Liidit` | Sähköposti, ensisijainen jarru, suostumus, lähetyslokit | Kyllä |

`Liidit` on suostumusloki, ei postituslista: se todentaa kuka antoi luvan ja
milloin. Varsinainen lista on MailerLitessä.

Vastaukset ja liidit kirjataan erillisinä riveinä eri välilehdille, eikä
niiden välillä ole yhdistävää tunnistetta. Testivastauksista ei siis voi
jäljittää yksittäistä vastaajaa.

## Asennus

1. **Luo taulukko.** Mene osoitteeseen [sheets.new](https://sheets.new) ja
   nimeä taulukko esimerkiksi `Myynnin kuusi jarrua`. Välilehdet syntyvät
   automaattisesti ensimmäisestä lähetyksestä.

2. **Avaa skriptieditori.** Taulukossa: *Laajennukset → Apps Script*.

3. **Lisää koodi.** Korvaa `Koodi.gs`-tiedoston sisältö tämän kansion
   `Code.gs`-tiedostolla. Lisää sitten uusi tiedosto (`+` → *Skripti*),
   nimeä se `Viestit` ja liitä siihen `Viestit.gs`-tiedoston sisältö.

4. **Julkaise web-sovelluksena.** *Ota käyttöön → Uusi käyttöönotto →
   tyyppi: Web-sovellus*.
   - Suorita sovelluksena: **Minä**
   - Kenellä on käyttöoikeus: **Kuka tahansa**

   Hyväksy käyttöoikeudet (Google varoittaa varmentamattomasta
   sovelluksesta — se on oma skriptisi, joten *Lisäasetukset → Siirry
   projektiin*). Kopioi lopuksi käyttöönottourl, joka päättyy `/exec`.

5. **Liitä osoite sivulle.** Avaa `diagnoosi/app.js` ja aseta osoite:

   ```js
   const ENDPOINT = "https://script.google.com/macros/s/.../exec";
   ```

   Niin kauan kuin `ENDPOINT` on tyhjä, lomakkeen tilalla näkyy
   sähköpostilinkki eikä mitään lähetetä mihinkään. Sivun voi siis julkaista
   turvallisesti ennen tämän vaiheen tekemistä.

6. **Yhdistä MailerLite.** Luo MailerLitessä tekstikenttä `jarru` ja ryhmä
   tilaajille, ja ota talteen ryhmän tunniste. Luo sitten API-tunnus
   (Integrations → API). Tallenna molemmat Apps Scriptissä kohtaan
   *Projektin asetukset → Skriptin ominaisuudet*:

   | Nimi | Arvo |
   |---|---|
   | `MAILERLITE_TOKEN` | API-tunnus |
   | `MAILERLITE_GROUP` | ryhmän tunniste |

   **Älä kirjoita tunnusta koodiin äläkä vie sitä versionhallintaan.**
   Skriptin ominaisuudet eivät näy repossa eivätkä lähde mukaan, kun koodi
   kopioidaan. Jos tunnus vuotaa, mitätöi se MailerLitessä ja luo uusi.

   Niin kauan kuin ominaisuuksia ei ole asetettu, raportti lähtee normaalisti
   ja `Liidit`-välilehden MailerLite-sarakkeeseen tulee merkintä
   "ei asetettu". Mitään ei siis rikkoudu, jos teet tämän vaiheen myöhemmin.

7. **Rakenna jatkosarja.** Ohjeet ja valmiit tekstit ovat tiedostossa
   `sisalto/mailerlite-sarja.md`.

## Vaihtoehto: clasp (ei käsin liittämistä)

Googlen komentorivityökalu vie tämän kansion tiedostot suoraan Apps Scriptiin,
jolloin leikepöytä ei ole missään vaiheessa mukana eikä pitkä tiedosto voi
katketa kesken. Asetukset ovat valmiina (`.clasp.json`, `.claspignore`).

Aja omalla koneellasi, repon juuresta:

```
npm i -g @google/clasp
clasp login                    # avaa selaimen, kirjaudu omalla tililläsi
cd apps-script
clasp push                     # vie Code.gs ja Viestit.gs projektiin
```

`clasp login` tallentaa tunnisteet kotihakemistoosi (`~/.clasprc.json`).
Ne ovat henkilökohtaisia: älä vie niitä versionhallintaan äläkä jaa niitä.

**`clasp push` ei julkaise mitään.** Se päivittää editorissa olevan koodin.
Julkaisu on erillinen vaihe, joko käyttöliittymästä tai komennolla:

```
clasp deployments              # listaa käyttöönotot ja niiden tunnisteet
clasp deploy -i <tunniste> -d "kuvaus"
```

Käytä olemassa olevan käyttöönoton tunnistetta, jolloin `/exec`-osoite pysyy
samana. Ilman `-i`-valitsinta syntyy uusi käyttöönotto ja uusi osoite, jolloin
`diagnoosi/app.js`:n `ENDPOINT` pitäisi vaihtaa.

`.claspignore` pitää `test/`-kansion poissa: testit ajetaan Nodessa eivätkä
toimisi Apps Scriptissä.

## Tarkistus

- Avaa `/exec`-osoite **yksityisessä ikkunassa** (kirjautumatta). Vastaukseksi
  pitäisi tulla `{"ok":true,"palvelu":"Myynnin kuusi jarrua"}`.
  - `Ohjelmatoimintoa ei löydy: doGet` → koodi ei ole julkaistussa versiossa.
    Julkaise uusi versio; pelkkä tallennus editorissa ei riitä.
  - Kirjautumissivu → käyttöönoton oikeus ei ole *Kuka tahansa*.
- Tee testi sivulla loppuun asti ja katso, ilmestyikö rivi `Vastaukset`-
  välilehdelle.
- Pyydä raportti omalla osoitteellasi ja tarkista, että viesti saapuu ja
  rivi ilmestyy `Liidit`-välilehdelle.

Jos selaimen konsoli valittaa CORS-virheestä, käyttöönoton asetus
"Kenellä on käyttöoikeus" ei ole *Kuka tahansa*. Muutos vaatii **uuden**
käyttöönoton, ei pelkkää asetuksen muuttamista.

## Testit

Skriptin logiikan voi ajaa koneella ilman Google-tiliä:

```
node apps-script/test/gas-test.js
```

Testi jäljittelee Sheetsin ja MailAppin toiminnan muistissa ja tarkistaa
muun muassa, että nimettömälle riville ei päädy sähköpostiosoitetta, että
sama osoite ei saa kahta riviä, että jatkoviestit lähtevät oikeassa
järjestyksessä eivätkä toistu, ja että perutulle ei lähde mitään. Aja se
aina, kun olet muokannut `Viestit.gs`- tai `Code.gs`-tiedostoa.

## Rajat ja ylläpito

- Gmailista lähtee enää yksi viesti per liidi (raportti), joten tavallisen
  tilin noin 100 viestin vuorokausiraja riittää pitkälle.
- MailerLiten ilmaistaso: 250 tilaajaa ja 2 500 viestiä kuukaudessa. Kolme
  jatkoviestiä per tilaaja tarkoittaa, että raja tulee vastaan noin 800
  tilaajan vuosivauhdilla — käytännössä siis tilaajaraja tulee ensin.
- Peruutuksen hoitaa MailerLite automaattisesti. Se myös estää kerran
  perunutta palaamasta listalle rajapinnan kautta, joten Apps Scriptin kutsu
  ei voi tilata häntä takaisin.
- Jos `Liidit`-välilehden MailerLite-sarakkeessa lukee muuta kuin "ok",
  tilaaja on saanut raportin mutta ei ole listalla. Lisää hänet käsin tai
  selvitä virhe ennen kuin jatkat.
- Sähköpostien tekstit ovat tiedostossa `Viestit.gs`. Niitä voi muokata
  koskematta `Code.gs`-logiikkaan. Jos muutat raporttien sisältöä, päivitä
  myös `diagnoosi/app.js`-tiedoston `reportPoints`-luettelot, jotta sivun
  lupaus vastaa lähetettävää raporttia.
