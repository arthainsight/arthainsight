# MailerLite: jatkosarja

Kolme viestiä, jotka lähtevät raportin jälkeen. Nämä eivät ole Apps Scriptissä —
ne rakennetaan MailerLiten automaatioon, joka hoitaa myös viiveet, peruutuksen
ja tilastot.

Tekstit ovat tässä siksi, että ne pysyvät versionhallinnassa ja luettavissa
ilman kirjautumista. **MailerLite on silti se paikka, jossa niitä muokataan** —
jos muutat tekstiä siellä, päivitä se myös tänne, muutoin nämä eriytyvät.

## Automaation rakentaminen

1. **Luo kenttä.** Subscribers → Fields → uusi tekstikenttä nimeltä `jarru`.
   Apps Script kirjoittaa siihen jarrun nimen luettavassa muodossa, esimerkiksi
   "Tarjous" tai "Luottamus ja todisteet".
2. **Luo ryhmä**, esimerkiksi *Myynnin kuusi jarrua*. Ota ryhmän tunniste
   talteen osoiterivistä — se menee Apps Scriptin asetuksiin.
3. **Luo automaatio.** Trigger: *When subscriber joins a group* → valitsemasi
   ryhmä. Sen jälkeen vuorottele viive ja viesti alla olevan taulukon mukaan.
4. **Käytä personointia** `{$jarru}` niissä kohdissa, jotka on merkitty alle.
   Aseta sille oletusarvo, esimerkiksi "myyntisi jarru", siltä varalta että
   kenttä on tyhjä.

| Vaihe | Viive | Viesti |
|---|---|---|
| 1 | 2 päivää ryhmään liittymisestä | Viesti 2 |
| 2 | 3 päivää edellisestä | Viesti 3 |
| 3 | 4 päivää edellisestä | Viesti 4 |

Kokonaisrytmi on silloin sama kuin alkuperäisessä suunnitelmassa: raportti heti,
ja jatkoviestit 2, 5 ja 9 päivän kohdalla.

## Lähettäjä ja asetukset

- **Lähettäjän nimi:** Riku Forsell · **osoite:** info@arthainsight.com
- Vahvista arthainsight.com-verkkotunnus MailerLitessä (SPF/DKIM), jotta viestit
  eivät lähde heidän jaetusta osoitteestaan. Tämä on se kohta, joka ratkaisee
  perillemenon.
- Kirjoita viestit pelkkänä tekstinä ilman uutiskirjepohjaa, kuvia ja
  värejä. Ne on kirjoitettu henkilökohtaisiksi kirjeiksi, ja uutiskirjeen
  ulkoasu tekisi niistä mainoksen.

---

## Viesti 2 — 2 päivää ryhmään liittymisestä

**Aihe:** Miksi yhden jarrun korjaaminen riittää

```
Hei,

lähetin muutama päivä sitten raportin jarrusta "{$jarru}". Tässä lyhyt viesti siitä, miksi kannattaa korjata vain se.

Myynti on ketju. Kohderyhmä, tarjous, viesti, luottamus, asiakashankinta ja myyntiprosessi ovat peräkkäisiä lenkkejä, ja heikoin niistä määrää lopputuloksen. Jos kohderyhmä on väärä, maailman paras myyntiprosessi ei auta. Jos keskusteluja on kaksi kuukaudessa, viestin hiominen ei tuota mitään mitattavaa.

Tästä seuraa kaksi asiaa.

Ensimmäinen: kaiken korjaaminen kerralla on tehotonta. Jos muutat samalla viikolla kohderyhmän, tarjouksen ja viestin, et tiedä kuukauden päästä, mikä muutos vaikutti mihinkin. Menetät ainoan oppimismahdollisuuden, jonka muutos tarjoaa.

Toinen: väärän lenkin korjaaminen ei näy missään. Se on tavallisin syy siihen, miksi yrittäjä kokee tehneensä paljon ilman tulosta. Työtä on tehty — se on vain kohdistunut lenkkiin, joka ei ollut heikoin.

Siksi testi antaa vain yhden jarrun eikä listaa kuudesta kehityskohteesta. Yksi kerrallaan, mitattavasti.

Yksi kysymys sinulle: mitä teit viimeisen kolmen kuukauden aikana myynnin eteen, mikä ei näkynyt tuloksessa? Voit vastata tähän viestiin suoraan — luen jokaisen vastauksen itse.

Riku Forsell
Artha Insight
```

---

## Viesti 3 — 3 päivää edellisestä

**Aihe:** Kolme lukua, jotka kertovat enemmän kuin testi

```
Hei,

testi, jonka teit, on itsearvio. Se on hyödyllinen hypoteesin muodostamiseen ja huono todisteeksi. Syy on yksinkertainen: arvioit myyntiäsi siitä, miltä se näyttää sisältä. Ostaja näkee vain sen, mitä ulospäin tapahtuu.

Kerää tämän viikon aikana kolme lukua viimeiseltä 90 päivältä:

1. Kuinka monta relevanttia myyntikeskustelua kävit?
2. Kuinka monelle heistä esitit tarjouksen?
3. Kuinka moni tarjous johti kauppaan?

Kolme lukua kertovat jo, missä siirtymässä ihmiset putoavat pois. Jos keskusteluja on vähän, ongelma on ketjun alkupäässä — kohderyhmässä tai asiakashankinnassa. Jos keskusteluja on mutta tarjouksia vähän, ongelma on tarjouksessa tai tarpeen selvittämisessä. Jos tarjouksia on mutta kauppoja vähän, ongelma on luottamuksessa tai myyntiprosessissa.

Huomaa, että tämä voi olla eri jarru kuin testin antama. Silloin luvut ovat oikeassa, ei testi.

Jos luvut ovat pieniä, älä huolestu niistä. Pieni aineisto on tavallinen asiantuntijayrityksessä, ja se tarkoittaa vain, että päättely vaatii tarkempaa katsomista — ei sitä, ettei päätelmiä voisi tehdä.

Viimeisessä viestissä kerron, mitä diagnoosi tekee näille luvuille ja milloin se kannattaa.

Riku Forsell
Artha Insight
```

---

## Viesti 4 — 4 päivää edellisestä

**Aihe:** Mitä diagnoosi tekee — ja milloin se kannattaa

```
Hei,

tämä on viimeinen viesti sarjasta. Kerron suoraan, mitä myyn, jotta voit päättää itse.

Testi, jonka teit, antoi hypoteesin: "{$jarru}". Pullonkauladiagnoosi todentaa hypoteesin tai kumoaa sen. Käymme läpi samat kuusi jarrua, mutta emme itsearviona vaan toteutuneiden lukujen, todellisten myyntikeskustelujesi ja sen perusteella, mitä ostaja oikeasti näkee ja kuulee sinusta.

Saat lopputuloksena:

- mikä jarru on todellinen ja mihin havaintoon se perustuu
- mitä näyttöä sitä vastaan puhuu — myös se kerrotaan
- mitä teet ensimmäisenä, toisena ja kolmantena
- mistä tiedät kuukauden päästä, toimiko korjaus

Diagnoosi on maksullinen toimeksianto. Hinnan ja laajuuden kerron avoimesti keskustelussa ennen kuin päätät mitään — sen ei kuulu olla asia, joka paljastuu vasta puhelimessa.

Sitä ennen on maksuton 30 minuutin keskustelu. Siinä käydään läpi sinun testituloksesi ja katsotaan, onko diagnoosi sinulle oikea asia juuri nyt. Jos ei ole, sanon sen. Se on molempien etu.

Varaa aika: https://calendar.app.google/YF82nyAij819wJJT6

Jos et halua varata aikaa, se on täysin ok. Voit myös vastata tähän viestiin ja kertoa tilanteestasi — vastaan itse.

Kiitos, että luit.

Riku Forsell
Artha Insight
info@arthainsight.com
```

---

## Peruutus

MailerLite lisää peruutuslinkin automaattisesti, joten `apps-script/Viestit.gs`:n
peruutusohjetta ei tarvitse toistaa näissä viesteissä. Raportissa ohje on yhä
mukana, koska sen lähettää Apps Script.

MailerLite estää myös itse kerran perunutta palaamasta listalle rajapinnan
kautta. Jos tilauksen perunut haluaa takaisin, hänen on liityttävä uudelleen
lomakkeen kautta — Apps Scriptin kutsu ei häntä palauta.
