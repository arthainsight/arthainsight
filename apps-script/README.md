# Sähköpostien keruu ja lähetys — asennusohje

Tämä kansio sisältää Google Apps Script -koodin, joka ottaa vastaan
osoitteesta `arthainsight.com/diagnoosi/` lähetetyt tiedot, tallentaa ne
Google Sheets -taulukkoon ja lähettää sähköpostisarjan.

Koodi ei ole osa julkaistavaa sivustoa. Se liitetään käsin Google-tilille
kerran, minkä jälkeen se toimii itsekseen.

## Mitä tallennetaan minne

| Välilehti | Sisältö | Henkilötietoja |
|---|---|---|
| `Vastaukset` | Testin pisteet ja vastaukset, aikaleima | Ei |
| `Liidit` | Sähköposti, ensisijainen jarru, suostumus, lähetyslokit | Kyllä |

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

6. **Käynnistä jatkoviestit.** Valitse skriptieditorissa funktio
   `asennaAjastin` ja aja se kerran. Se luo päivittäisen ajastimen, joka
   lähettää viestit 2–4 aikataulun mukaan (2, 5 ja 9 päivää raportista).

## Tarkistus

- Avaa `/exec`-osoite selaimessa. Vastaukseksi pitäisi tulla
  `{"ok":true,"palvelu":"Myynnin kuusi jarrua"}`.
- Tee testi sivulla loppuun asti ja katso, ilmestyikö rivi `Vastaukset`-
  välilehdelle.
- Pyydä raportti omalla osoitteellasi ja tarkista, että viesti saapuu ja
  rivi ilmestyy `Liidit`-välilehdelle.

Jos selaimen konsoli valittaa CORS-virheestä, käyttöönoton asetus
"Kenellä on käyttöoikeus" ei ole *Kuka tahansa*. Muutos vaatii **uuden**
käyttöönoton, ei pelkkää asetuksen muuttamista.

## Rajat ja ylläpito

- Tavallisen Gmail-tilin lähetysraja on noin 100 viestiä vuorokaudessa,
  Workspace-tilin 1 500. Raportti + kolme jatkoviestiä = neljä viestiä per
  liidi.
- Peruutus hoidetaan käsin: kun joku vastaa "lopeta", kirjoita
  `Liidit`-välilehden sarakkeeseen **Peruttu** mikä tahansa merkintä. Rivi
  jää taulukkoon, mutta viestejä ei enää lähde.
- Sähköpostien tekstit ovat tiedostossa `Viestit.gs`. Niitä voi muokata
  koskematta `Code.gs`-logiikkaan. Jos muutat raporttien sisältöä, päivitä
  myös `diagnoosi/app.js`-tiedoston `reportPoints`-luettelot, jotta sivun
  lupaus vastaa lähetettävää raporttia.
