# Myynnin kuusi jarrua

Yksi kehys, kaksi tuotetta. Sama kuuden kohdan lista on käytössä sekä
maksuttomassa testissä että maksullisessa diagnoosissa. Testi antaa
hypoteesin, diagnoosi todentaa sen. Ostaja näkee jatkumon eikä kahta eri
asiaa.

## Kuusi jarrua

| # | Jarru | Kysymys, johon se vastaa |
|---|---|---|
| 1 | Kohderyhmä ja tarve | Ratkaisetko tärkeää ongelmaa ihmiselle, joka on valmis toimimaan juuri nyt? |
| 2 | Tarjous | Onko osaaminen muutettu kokonaisuudeksi, jonka asiakas voi ostaa? |
| 3 | Viesti | Ymmärtääkö oikea asiakas nopeasti, mitä myyt ja miksi sillä on väliä? |
| 4 | Luottamus ja todisteet | Näkeekö ostaja riittävästi syitä uskoa lupaukseesi? |
| 5 | Asiakashankinta | Kohtaako tarjous riittävän monta kohderyhmään sopivaa ihmistä? |
| 6 | Myyntiprosessi | Eteneekö kiinnostus järjestelmällisesti päätökseen? |

Lista on ketju. Heikoin lenkki määrää lopputuloksen, joten kerrallaan
korjataan yksi.

## Jatkumo

| Vaihe | Tuote | Mitä ostaja saa | Mitä minä saan |
|---|---|---|---|
| 1 | Testi (maksuton) | Hypoteesi todennäköisimmästä jarrusta | Nimetön markkinadata |
| 2 | Jarrukohtainen raportti (maksuton, sähköpostiin) | Konkreettinen ensimmäinen korjausliike | Sähköpostiosoite ja tieto jarrusta |
| 3 | Sähköpostisarja, 3 viestiä | Kehyksen logiikka ja luvut, joilla hypoteesi testataan | Luottamus ja itsevalikoituminen |
| 4 | Maksuton 30 min keskustelu | Keskustelu omasta tuloksesta ja sopivuudesta | Kelpuutettu liidi |
| 5 | Pullonkauladiagnoosi (maksullinen) | Todennettu jarru ja korjausjärjestys | Toimeksianto |

Puhelu on keskustelu tuloksesta ja sopivuudesta. Sen sisältö kerrotaan
etukäteen sekä tulossivulla että sarjan viimeisessä viestissä, jotta se ei
ole myyntipuhelu, jonka sisältö paljastuu vasta linjoilla.

## Missä kehys näkyy

| Paikka | Tiedosto |
|---|---|
| Testin logiikka ja tekstit | `diagnoosi/app.js` |
| Tulossivun jatkumo ja hinnan mainita | `diagnoosi/index.html` |
| Jarrukohtaiset raportit | `apps-script/Viestit.gs` |
| Kolmen viestin jatkosarja | `sisalto/mailerlite-sarja.md` (rakennetaan MailerLiteen) |
| Yhteydenottoviestit | `sisalto/prospektiviestit.md` |

Jos kehyksen sanamuoto muuttuu, se on muutettava kaikissa viidessä — ja
jatkosarjan osalta myös MailerLitessä, joka on niiden viestien varsinainen
sijainti. Jarrujen
nimiä ei kannata muuttaa kevyesti — ne ovat sama sanasto testistä laskuun asti.

## Nimettömän datan käyttö

Testivastaukset tallentuvat ilman sähköpostiosoitetta tai muuta tunnistetta
`Vastaukset`-välilehdelle. Kun rivejä on riittävästi, aineisto kertoo, mikä
jarru on asiantuntijayrittäjillä yleisin ja mitkä jarrut esiintyvät yhdessä.
Se on itsessään julkaisukelpoista sisältöä ("X vastaajasta Y:llä ensisijainen
jarru oli tarjous") ja samalla peruste sille, että diagnoosi perustuu
aineistoon eikä mielipiteeseen.

Julkaise luvut vasta, kun vastauksia on niin monta, ettei yksittäistä
vastaajaa voi tunnistaa tuloksesta.
