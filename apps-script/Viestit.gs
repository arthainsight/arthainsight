/**
 * Sähköpostien sisällöt. Tätä tiedostoa voi muokata vapaasti ilman, että
 * Code.gs:n logiikkaan tarvitsee koskea.
 *
 * Viesti 1 = jarrukohtainen raportti (lähtee heti).
 * Viestit 2–4 = jatkoviestit, jotka johtavat diagnoosiin.
 */

const JARRUN_NIMET = {
  market: "Kohderyhmä ja tarve",
  offer: "Tarjous",
  message: "Viesti",
  trust: "Luottamus ja todisteet",
  acquisition: "Asiakashankinta",
  sales: "Myyntiprosessi",
  ei_selvaa: "Ei selvää pääjarrua",
};

const VARAUSLINKKI = "https://calendar.app.google/YF82nyAij819wJJT6";

function jarrunNimi_(avain) {
  return JARRUN_NIMET[avain] || "Myynnin jarru";
}

function raportti_(jarru) {
  const avain = JARRUN_NIMET[jarru] ? jarru : "ei_selvaa";
  const sisalto = RAPORTIT[avain];
  return {
    aihe: `Raporttisi: ${jarrunNimi_(avain)}`,
    teksti: sisalto,
  };
}

function jatkoviesti_(numero, jarru) {
  const nimi = jarrunNimi_(JARRUN_NIMET[jarru] ? jarru : "ei_selvaa");
  const viesti = JATKOVIESTIT[numero];
  return {
    aihe: viesti.aihe.replace("{jarru}", nimi),
    teksti: viesti.teksti.replace(/\{jarru\}/g, nimi),
  };
}

const RAPORTIT = {
  market: `Hei,

teit testin Myynnin kuusi jarrua, ja vastaustesi perusteella todennäköisin jarru on kohderyhmä ja tarve. Tässä laajempi raportti juuri siitä.

MISTÄ TÄSSÄ ON KYSE

Kohderyhmäjarru ei tarkoita, että palvelusi olisi huono tai että et tietäisi kenelle myyt. Se tarkoittaa, että myyntisi kohdistuu joukkoon, jossa ongelma on kiinnostava mutta ei kiireellinen. Kiinnostunut ihminen lukee, kiittää ja jatkaa entiseen tapaan. Vasta ihminen, jolla ongelma on jo näkyvä ja häiritsevä, tekee päätöksen.

1. KOLME KYSYMYSTÄ, JOILLA EROTAT AKUUTIN ONGELMAN KIINNOSTAVASTA

Kysy itseltäsi jokaisesta asiakastyypistä:

a) Mitä asiakas menettää joka kuukausi, jos hän ei tee mitään? Jos et osaa vastata numerona tai konkreettisena seurauksena, ongelma ei ole vielä akuutti.

b) Onko asiakas jo yrittänyt ratkaista tätä itse? Ihminen, joka on kokeillut jotain ja epäonnistunut, ostaa. Ihminen, joka ei ole vielä kokeillut mitään, ei yleensä osta — hän kerää tietoa.

c) Kuka herättää asian hänen kalenterissaan? Jos kukaan ei kysy häneltä tästä, asia ei nouse prioriteetiksi.

2. RAJAUSMALLI: YKSI ASIAKAS, YKSI TILANNE

Kirjoita yksi rivi tässä muodossa:

"Myyn [tarkka rooli tai yritystyyppi] -asiakkaalle, joka on juuri [laukaiseva tilanne], ja jonka ongelma on [havaittava seuraus]."

Esimerkki: "Myyn 5–15 hengen insinööritoimiston omistajalle, joka on juuri menettänyt suurimman asiakkaansa, ja jonka laskutus putoaa kolmessa kuukaudessa alle kiinteiden kulujen."

Huomaa, että laukaiseva tilanne on rajauksen tärkein osa. Toimiala ja koko ovat helppoja mutta heikkoja rajauksia. Tilanne kertoo, milloin ostetaan.

3. HAASTATTELURUNKO KOLMELLE ASIAKKAALLE

Soita kolmelle ihmiselle, jotka sopivat rajaukseesi. Älä myy. Kysy:

1. Kerro, mitä tapahtui ennen kuin aloit etsiä ratkaisua tähän.
2. Mitä kokeilit ensin? Miksi se ei riittänyt?
3. Kuka muu yrityksessä oli asiasta huolissaan?
4. Mikä oli se hetki, jolloin päätit, että tälle on tehtävä jotain?
5. Mitä tämä maksoi sinulle, ennen kuin se ratkesi?
6. Mistä lähdit etsimään apua?
7. Mikä sai sinut epäröimään ostamista?

Kirjoita vastaukset muistiin sanatarkasti. Asiakkaiden omat sanamuodot ovat myyntiviestisi raaka-aine — ne toimivat paremmin kuin mikään itse keksitty muotoilu.

4. MERKIT SIITÄ, ETTÄ KOHDERYHMÄ ON LIIAN LAAJA

- Kuvaat asiakastasi sanoilla "kasvuhakuinen", "kunnianhimoinen" tai "pk-yritys".
- Jokainen myyntikeskustelu alkaa alusta, koska tilanteet ovat niin erilaisia.
- Saat kehuja mutta et tarjouspyyntöjä.
- Et osaa sanoa, kuka EI ole asiakkaasi.

MITÄ TEET SEURAAVAKSI

Tee vain yksi asia: kirjoita rajauslause ja soita kolme puhelua. Älä muuta sivujasi, hintojasi tai palvelukuvaustasi ennen kuin olet kuullut, miten nämä kolme ihmistä puhuvat ongelmastaan.

Lähetän muutaman päivän päästä viestin siitä, miksi yhden jarrun korjaaminen yleensä riittää — ja miksi kaiken korjaaminen kerralla ei toimi.

Riku Forsell
Artha Insight`,

  offer: `Hei,

teit testin Myynnin kuusi jarrua, ja vastaustesi perusteella todennäköisin jarru on tarjous. Tässä laajempi raportti juuri siitä.

MISTÄ TÄSSÄ ON KYSE

Tarjousjarru tarkoittaa, että osaamisesi on olemassa mutta sitä ei ole vielä muutettu asiaksi, jonka voi ostaa. Asiakas ymmärtää, että osaat. Hän ei ymmärrä, mitä hän saa, mitä se maksaa ja mitä hän tekee seuraavaksi. Epävarmuus ei tuota "ei" -vastausta, vaan "palataan asiaan" -vastauksen. Se on kalliimpi.

1. PÄÄTARJOUKSEN RAKENNE

Täydennä nämä kuusi kohtaa yhdelle sivulle:

- Kenelle: tarkka asiakas ja tilanne.
- Mikä ongelma: asiakkaan sanoin, ei sinun ammattikielelläsi.
- Mikä lopputulos: mikä on toisin, kun työ on valmis.
- Mitä tehdään: 3–5 vaihetta, ei enempää.
- Missä ajassa: konkreettinen kesto tai aikataulu.
- Mitä se maksaa tai mikä on seuraava askel: hinta, hintahaarukka tai nimetty ensiaskel.

Jos jokin kohta on tyhjä, asiakas joutuu täyttämään sen arvauksella. Useimmat eivät vaivaudu.

2. KOLME TAPAA TEHDÄ OSTAMISESTA YKSINKERTAISTA LASKEMATTA HINTAA

a) Rajaa laajuus, älä hintaa. "Kuusi viikkoa, kolme työpajaa, yksi kirjallinen suunnitelma" on helpompi ostaa kuin "tuen teitä tarpeen mukaan".

b) Tee pieni ensimmäinen askel, joka on oikeasti valmis tuote. Ei ilmainen kartoitus vaan rajattu, maksullinen työ, jolla on oma lopputulos. Ilmainen työ viestii, ettei siitä synny arvoa.

c) Nimeä tarjous. Nimetty kokonaisuus on esine, jonka voi ostaa. Nimeämätön osaaminen on palvelu, josta pitää neuvotella.

3. TARKISTUSLISTA: MITÄ ASIAKKAAN ON TIEDETTÄVÄ ENNEN KYLLÄ-VASTAUSTA

- Mikä minun ongelmani on tämän jälkeen toisin?
- Paljonko aikaani tämä vie?
- Kuka tekee mitä?
- Mitä tapahtuu, jos se ei toimi?
- Mitä tämä maksaa suunnilleen?
- Mitä teen juuri nyt, jos haluan edetä?

Käy oma myyntisivusi tai tarjousmallisi läpi tällä listalla. Jokainen puuttuva vastaus on kohta, jossa päätös lykkääntyy.

4. MITEN RAJAAT RÄÄTÄLÖINNIN POIS ENSIMMÄISESTÄ KESKUSTELUSTA

Räätälöinti on hyvä asia toimituksessa ja huono asia myynnissä. Pidä ensimmäisessä keskustelussa yksi vakiotarjous, jolla on vakiolaajuus ja vakiohinta. Kerro, että yksityiskohdat sovitetaan aloituksessa. Näin keskustelu on päätös kyllä vai ei, ei suunnittelukokous, josta et laskuta.

MITÄ TEET SEURAAVAKSI

Kirjoita päätarjous yhdelle sivulle kuuden kohdan mukaan. Lähetä se kahdelle ihmiselle, jotka eivät tunne alaasi, ja pyydä heitä kertomaan omin sanoin, mitä myyt ja mitä se maksaa. Jos he eivät osaa, tarjous ei ole vielä valmis.

Lähetän muutaman päivän päästä viestin siitä, miksi yhden jarrun korjaaminen yleensä riittää.

Riku Forsell
Artha Insight`,

  message: `Hei,

teit testin Myynnin kuusi jarrua, ja vastaustesi perusteella todennäköisin jarru on viesti. Tässä laajempi raportti juuri siitä.

MISTÄ TÄSSÄ ON KYSE

Viestijarru on petollinen, koska se ei näy mistään. Sivusi toimii, tekstit ovat huolellisia eikä kukaan sano niistä mitään pahaa. Silti oikea asiakas ei tunnista itseään riittävän nopeasti. Ostaja ei tee tulkintatyötä sinun puolestasi — hän siirtyy eteenpäin.

1. YHDEN LAUSEEN MALLI

Autan [asiakasta] ratkaisemaan [ongelman], jotta [havaittava hyöty], palvelulla [mitä ostetaan].

Kolme esimerkkiä:

- "Autan 5–20 hengen tilitoimistoja saamaan kuukausiraportit ulos viikossa eikä kolmessa, jotta asiakkaat eivät soita perään, prosessiauditoinnilla."
- "Autan teknologiayritysten myyntijohtajia saamaan uudet myyjät tuottaviksi kolmessa kuukaudessa kuuden sijaan, perehdytysohjelmalla."
- "Autan asiantuntijayrittäjiä näkemään, mikä heidän myynnissään oikeasti jarruttaa, pullonkauladiagnoosilla."

Huomaa, että hyöty on havaittava: joku voi todeta sen tapahtuneen. "Parempi", "tehokkaampi" ja "selkeämpi" eivät ole havaittavia.

2. 30 SEKUNNIN TESTI ULKOPUOLISELLA

Näytä sivusi tai profiilisi ihmiselle, joka ei tunne alaasi. Anna 30 sekuntia. Sulje sivu ja kysy:

1. Kenelle tämä on tarkoitettu?
2. Mitä ongelmaa se ratkaisee?
3. Mitä se konkreettisesti on — mitä ostaja saa?
4. Mitä sinun pitäisi tehdä seuraavaksi?

Jos kaksi neljästä vastauksesta menee pieleen, ongelma ei ole lukijassa. Tee testi kolmella ihmisellä; kolmas kerta kertoo, onko kyse sattumasta.

3. YLEISIMMÄT SUDENKUOPAT ASIANTUNTIJAN SIVULLA

- Aloitat menetelmästä ("systeeminen lähestymistapa") etkä asiakkaan tilanteesta.
- Puhut arvoista ja filosofiasta ennen kuin kerrot, mitä myyt.
- Luettelet kaiken, mitä osaat, koska et halua rajata ketään pois. Tämä rajaa kaikki pois.
- Käytät sanaa "kokonaisvaltainen". Se tarkoittaa lukijalle "en tiedä, mitä tämä maksaa".
- Otsikkosi kertoo sinusta, ei asiakkaasta.

4. MENETELMÄPUHEESTA HYÖTYYN

Ota jokainen menetelmäväite ja lisää perään "…mikä tarkoittaa sinulle, että…". Pidä vain loppuosa.

Ennen: "Käytän systeemistä analyysiä ja tiedolla johtamisen menetelmiä."
Jälkeen: "Näet yhdellä sivulla, missä kohtaa myyntisi pysähtyy ja mihin lukuun se perustuu."

MITÄ TEET SEURAAVAKSI

Kirjoita yksi lause. Vaihda sivusi otsikko siihen. Tee 30 sekunnin testi kolmella ihmisellä ennen ja jälkeen. Tämä on halvin korjaus koko listalla — ja sen vaikutuksen näkee nopeimmin.

Lähetän muutaman päivän päästä viestin siitä, miksi yhden jarrun korjaaminen yleensä riittää.

Riku Forsell
Artha Insight`,

  trust: `Hei,

teit testin Myynnin kuusi jarrua, ja vastaustesi perusteella todennäköisin jarru on luottamus ja todisteet. Tässä laajempi raportti juuri siitä.

MISTÄ TÄSSÄ ON KYSE

Luottamusjarru ilmenee harvoin sanoilla "en usko sinuun". Se ilmenee hitautena: asiakas kiinnostuu, pyytää lisätietoja, lupaa palata ja katoaa. Hän ei epäile rehellisyyttäsi vaan sitä, tuottaako tämä hänen tilanteessaan sen, mitä lupaat. Riski on hänen, ei sinun — ja hän kantaa sen yksin.

1. ASIAKASESIMERKIN RAKENNE

Kolme kappaletta, korkeintaan 150 sanaa:

- Lähtötilanne: kuka, mikä tilanne, mikä ongelma, mieluiten numerona.
- Mitä teitte: 2–4 konkreettista tekoa. Ei menetelmän nimeä vaan tekoja.
- Mikä muuttui: mitattava tai havaittava muutos ja aika, jossa se tapahtui.

Yksi lähellä ostajan omaa tilannetta oleva esimerkki vakuuttaa enemmän kuin kymmenen logoa eri toimialoilta. Samankaltaisuus on tärkeämpää kuin asiakkaan koko tai maine.

2. KUN TULOKSIA EI VIELÄ OLE: RAJATUN PILOTIN MALLI

Valitse yksi asiakas, joka sopii rajaukseesi. Tarjoa rajattua työtä normaalia pienemmällä laajuudella. Sovi etukäteen kirjallisesti:

- mitä mitataan ja mistä luvusta lähdetään
- mitä tehdään ja missä ajassa
- että saat käyttää tulokset referenssinä, jos työ onnistuu

Älä tee sitä ilmaiseksi. Pieni hinta pitää työn arvossa ja tekee asiakkaasta sitoutuneen. Ilmainen työ tuottaa ilmaisen asiakkaan ja harvoin käyttökelpoisen referenssin.

3. KOLME TODISTETYYPPIÄ, JOTKA TOIMIVAT ILMAN REFERENSSILISTAA

a) Näytä työtä, älä kerro siitä. Julkaise rajattu analyysi, tarkistuslista tai puretaan-tapaus-kirjoitus. Ostaja päättelee osaamisesi työstä, ei väitteestä.

b) Kerro, milloin et sovi. "Tämä ei sovi, jos etsit jatkuvaa tukea tai jos et halua katsoa lukuja." Rajaus on luottamuksen halvin muoto, koska se maksaa sinulle jotain.

c) Tee prosessi näkyväksi. Kerro tarkasti, mitä ensimmäisessä, toisessa ja kolmannessa vaiheessa tapahtuu. Tunnettu prosessi tuntuu pienemmältä riskiltä kuin tuntematon lopputulos.

4. MITEN TEET ERON NÄKYVÄKSI

Kirjoita yksi lause: "Toisin kuin [tavanomainen vaihtoehto], minä [mitä teet toisin], koska [miksi se on asiakkaalle tärkeää]." Jos et pysty nimeämään vaihtoehtoa, jota vastaan kilpailet, ostajakaan ei tiedä, miksi valitsisi sinut.

MITÄ TEET SEURAAVAKSI

Kirjoita yksi asiakasesimerkki kolmen kappaleen rakenteella ja laita se myyntisivullesi tarjouksen viereen. Jos esimerkkiä ei ole, hanki pilottiasiakas tällä viikolla.

Lähetän muutaman päivän päästä viestin siitä, miksi yhden jarrun korjaaminen yleensä riittää.

Riku Forsell
Artha Insight`,

  acquisition: `Hei,

teit testin Myynnin kuusi jarrua, ja vastaustesi perusteella todennäköisin jarru on asiakashankinta. Tässä laajempi raportti juuri siitä.

MISTÄ TÄSSÄ ON KYSE

Asiakashankintajarru on ainoa jarru, joka piilottaa kaikki muut. Jos et puhu riittävän monen oikean ihmisen kanssa, et voi tietää, toimiiko tarjouksesi, viestisi tai hinnoittelusi. Neljä keskustelua kuukaudessa ei kerro mitään — kahdenkymmenen jälkeen näet kuvion.

1. YHDEN PÄÄKANAVAN VALINTA

Valitse yksi kanava neljäksi kuukaudeksi. Kolme kriteeriä:

a) Ovatko kohderyhmäsi ihmiset siellä tunnistettavasti ja tavoitettavasti?
b) Pystytkö toimimaan siellä viikoittain ilman, että se vie koko viikkoa?
c) Näetkö tuloksen viikoissa etkä vuosissa?

Kaksi kanavaa puolella teholla tuottaa vähemmän kuin yksi täydellä. Suoralla yhteydenotolla, verkostolla ja sisällöllä on eri nopeus: suora yhteydenotto vastaa viikoissa, sisältö kuukausissa.

2. VIIKKOTAVOITE JA NELJÄN VIIKON SEURANTA

Aseta yksi luku, joka on sinun hallinnassasi. Esimerkiksi: 15 uutta relevanttia avausta viikossa. Kirjaa neljän viikon ajan taulukkoon neljä saraketta:

- avaukset (kuinka monta yhteydenottoa lähti)
- vastaukset (kuinka moni vastasi mitään)
- keskustelut (kuinka moni johti oikeaan keskusteluun)
- tarjoukset (kuinka monelle esitit tarjouksen)

Neljän viikon jälkeen näet, onko ongelma määrä vai muuntuma. Jos avauksia on vähän, ongelma on tekemisen määrä. Jos avauksia on paljon mutta vastauksia vähän, ongelma on viesti tai kohdennus — ei kanava.

3. AVAUSVIESTIN RUNKO, JOKA EI OLE MYYNTIPUHE

Neljä riviä:

1. Mistä tiedän sinut ja miksi otan yhteyttä juuri sinuun (todellinen, yksilöllinen havainto).
2. Hypoteesi hänen tilanteestaan, esitettynä hypoteesina eikä totuutena.
3. Yksi konkreettinen asia, jonka annat ilman vastapalvelusta.
4. Pieni kysymys, johon on helppo vastata kyllä tai ei.

Älä pyydä ensimmäisessä viestissä tapaamista. Pyydä lupa lähettää jotain hyödyllistä. Vastausprosentti on moninkertainen.

4. MILLOIN ONGELMA ON KANAVA JA MILLOIN MÄÄRÄ

Ongelma on määrä, jos teet alle kymmenen relevanttia avausta viikossa. Silloin mikään päätelmä kanavasta ei ole vielä mahdollinen. Ongelma on kanava vasta, kun olet tehnyt neljä viikkoa riittävää määrää, viesti on kunnossa ja vastauksia tulee silti alle kaksi prosenttia.

MITÄ TEET SEURAAVAKSI

Valitse kanava, aseta viikkotavoite ja avaa taulukko. Aloita tällä viikolla, vaikka viestisi ei olisi täydellinen — data korjaa viestin nopeammin kuin miettiminen.

Lähetän muutaman päivän päästä viestin siitä, miksi yhden jarrun korjaaminen yleensä riittää.

Riku Forsell
Artha Insight`,

  sales: `Hei,

teit testin Myynnin kuusi jarrua, ja vastaustesi perusteella todennäköisin jarru on myyntiprosessi. Tässä laajempi raportti juuri siitä.

MISTÄ TÄSSÄ ON KYSE

Myyntiprosessijarru on kallein kaikista, koska se hukkaa työn, joka on jo tehty. Kiinnostus on syntynyt, keskustelu on käyty ja aika on käytetty — mutta päätös jää syntymättä, koska seuraavaa askelta ei sovittu tai seuranta katkesi. Näitä kauppoja ei menetetä kilpailijalle vaan hiljaisuudelle.

1. MYYNTIKESKUSTELUN RUNKO

Neljä osaa, aina samassa järjestyksessä:

- Tarve: mikä tilanne on nyt ja mitä on jo kokeiltu.
- Vaikutus: mitä tämä maksaa, jos mikään ei muutu kolmessa kuukaudessa. Kysy tämä ääneen. Ilman vaikutusta ei ole kiirettä, ja ilman kiirettä ei ole päätöstä.
- Päätöksenteko: kuka päättää, kenen kanssa hän keskustelee, mikä on budjettiraami ja mitä on tapahduttava ennen päätöstä.
- Seuraava askel: sovi se kalenteriin keskustelun aikana, ei sen jälkeen.

Viimeinen kohta on tärkein. "Palataan asiaan" ei ole seuraava askel. "Torstaina klo 10 käydään läpi tarjous" on.

2. SEURANTAMALLI, JOKA EI TUNNU PAINOSTUKSELTA

Jokaisessa yhteydenotossa on oltava jotain uutta: esimerkki, luku, kysymys tai rajattu havainto hänen tilanteestaan. "Halusin vain kysellä kuulumisia" siirtää työn asiakkaalle, ja siksi siihen ei vastata.

Rytmi, joka toimii: 3 päivää, 7 päivää, 14 päivää, sitten kerran kuussa. Neljännessä viestissä kysy suoraan: "Onko tämä nyt ajankohtainen vai palataanko keväällä?" Selkeä ei on halvempi kuin pitkä ehkä.

3. PUTKEN VAIHEET JA MITÄ KIRJAAT

Riittää taulukko, jossa on viisi saraketta jokaiselle liidille:

- nimi ja mistä tuli
- vaihe (keskustelu / tarjous / päätös / pidossa)
- päätöksentekijä
- seuraava sovittu askel ja päivämäärä
- viimeisin kontakti

Ilman tätä et muista, kenelle olet luvannut mitä, ja seuranta katkeaa ensimmäisen kiireisen viikon kohdalla. CRM-järjestelmä on hyödyllinen vasta, kun taulukko on täynnä.

4. KOLME YLEISINTÄ PYSÄHDYSKOHTAA

a) Tarjouksen jälkeen ei tapahdu mitään. Syy: tarjous lähetettiin ilman sovittua läpikäyntiä. Korjaus: sovi tarjouksen esittelyaika ennen kuin lähetät sen.

b) Asiakas haluaa keskustella kollegan kanssa ja katoaa. Syy: et tiennyt päätöksentekijää. Korjaus: kysy toisessa keskustelussa, kuka muu on mukana päätöksessä, ja pyydä hänet mukaan.

c) Hinta tulee esiin vasta lopussa. Syy: hintaa ei mainittu ajoissa. Korjaus: anna hintahaarukka ensimmäisessä keskustelussa. Se säästää molempien ajan.

MITÄ TEET SEURAAVAKSI

Avaa taulukko ja kirjaa jokainen avoin liidi viidellä sarakkeella. Katso, kenellä ei ole seuraavaa sovittua askelta, ja sovi se tällä viikolla. Tämä tuottaa yleensä kauppaa nopeammin kuin mikään uusi markkinointitoimenpide.

Lähetän muutaman päivän päästä viestin siitä, miksi yhden jarrun korjaaminen yleensä riittää.

Riku Forsell
Artha Insight`,

  ei_selvaa: `Hei,

teit testin Myynnin kuusi jarrua, eivätkä vastauksesi osoittaneet yhtä selvää pääjarrua. Se on tavallinen tulos silloin, kun perusasiat ovat kunnossa. Se tarkoittaa myös, ettei itsearvio vie enää pidemmälle. Tässä raportti siitä, miten etenet.

MIKSI ITSEARVIO EI RIITÄ TÄSSÄ KOHDASSA

Arvioit omaa myyntiäsi siitä, miltä se näyttää sisältä: mitä teet, mitä olet suunnitellut ja mitä aiot. Ostaja näkee vain sen, mitä ulospäin tapahtuu. Kun kaikki kuusi jarrua näyttävät kohtuullisilta, ero löytyy vain toteutuneista luvuista.

1. MITEN KERÄÄT 90 PÄIVÄN LUVUT

Ota kalenteri, sähköposti ja laskutus viimeiseltä 90 päivältä. Laske viisi lukua:

- Kuinka monta relevanttia kontaktia avasit tai sait?
- Kuinka moni näistä johti oikeaan myyntikeskusteluun?
- Kuinka monelle esitit tarjouksen?
- Kuinka moni tarjous johti kauppaan?
- Kuinka kauan meni ensimmäisestä kontaktista päätökseen?

Älä arvioi lukuja muistista. Laske ne. Ero muistikuvan ja todellisuuden välillä on tässä kohdassa yleensä suurin yksittäinen oivallus.

2. MITÄ PIDETÄÄN NORMAALINA

Karkeat suuntaviivat asiantuntijapalvelussa, jossa myydään suoraan:

- Relevanteista kontakteista keskusteluun: 10–25 %
- Keskusteluista tarjoukseen: 40–60 %
- Tarjouksista kauppaan: 25–50 %

Nämä eivät ole tavoitteita vaan hälytysrajoja. Jos jokin luku on selvästi alle, pullonkaula on juuri siinä siirtymässä. Jos kaikki ovat haarukassa mutta kauppaa on liian vähän, ongelma on määrä — eli asiakashankinta.

3. MISTÄ ALOITAT

Etsi se siirtymä, jossa suhteellisesti suurin osa putoaa pois, ja tutki vain sitä. Katso viisi viimeisintä tapausta, jotka pysähtyivät juuri siinä, ja kirjoita jokaisesta yksi lause siitä, mitä viimeksi tapahtui. Kuvio näkyy yleensä viidennen tapauksen kohdalla.

4. MILLOIN ULKOPUOLISTA SILMÄÄ KANNATTAA KÄYTTÄÄ

Kun luvut ovat kasassa mutta et osaa sanoa, miksi ne ovat sellaisia. Silloin kyse ei ole tiedon puutteesta vaan siitä, että omaa myyntiä on vaikea katsoa ulkoa. Se on koko diagnoosin idea.

MITÄ TEET SEURAAVAKSI

Kerää viisi lukua tältä viikolta. Ne riittävät pohjaksi mille tahansa seuraavalle päätökselle.

Lähetän muutaman päivän päästä viestin siitä, miksi yhden jarrun korjaaminen yleensä riittää.

Riku Forsell
Artha Insight`,
};

const JATKOVIESTIT = {
  2: {
    aihe: "Miksi yhden jarrun korjaaminen riittää",
    teksti: `Hei,

lähetin muutama päivä sitten raportin jarrusta "{jarru}". Tässä lyhyt viesti siitä, miksi kannattaa korjata vain se.

Myynti on ketju. Kohderyhmä, tarjous, viesti, luottamus, asiakashankinta ja myyntiprosessi ovat peräkkäisiä lenkkejä, ja heikoin niistä määrää lopputuloksen. Jos kohderyhmä on väärä, maailman paras myyntiprosessi ei auta. Jos keskusteluja on kaksi kuukaudessa, viestin hiominen ei tuota mitään mitattavaa.

Tästä seuraa kaksi asiaa.

Ensimmäinen: kaiken korjaaminen kerralla on tehotonta. Jos muutat samalla viikolla kohderyhmän, tarjouksen ja viestin, et tiedä kuukauden päästä, mikä muutos vaikutti mihinkin. Menetät ainoan oppimismahdollisuuden, jonka muutos tarjoaa.

Toinen: väärän lenkin korjaaminen ei näy missään. Se on tavallisin syy siihen, miksi yrittäjä kokee tehneensä paljon ilman tulosta. Työtä on tehty — se on vain kohdistunut lenkkiin, joka ei ollut heikoin.

Siksi testi antaa vain yhden jarrun eikä listaa kuudesta kehityskohteesta. Yksi kerrallaan, mitattavasti.

Yksi kysymys sinulle: mitä teit viimeisen kolmen kuukauden aikana myynnin eteen, mikä ei näkynyt tuloksessa? Voit vastata tähän viestiin suoraan — luen jokaisen vastauksen itse.

Riku Forsell
Artha Insight`,
  },
  3: {
    aihe: "Kolme lukua, jotka kertovat enemmän kuin testi",
    teksti: `Hei,

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
Artha Insight`,
  },
  4: {
    aihe: "Mitä diagnoosi tekee — ja milloin se kannattaa",
    teksti: `Hei,

tämä on viimeinen viesti sarjasta. Kerron suoraan, mitä myyn, jotta voit päättää itse.

Testi, jonka teit, antoi hypoteesin: "{jarru}". Pullonkauladiagnoosi todentaa hypoteesin tai kumoaa sen. Käymme läpi samat kuusi jarrua, mutta emme itsearviona vaan toteutuneiden lukujen, todellisten myyntikeskustelujesi ja sen perusteella, mitä ostaja oikeasti näkee ja kuulee sinusta.

Saat lopputuloksena:

- mikä jarru on todellinen ja mihin havaintoon se perustuu
- mitä näyttöä sitä vastaan puhuu — myös se kerrotaan
- mitä teet ensimmäisenä, toisena ja kolmantena
- mistä tiedät kuukauden päästä, toimiko korjaus

Diagnoosi on maksullinen toimeksianto. Hinnan ja laajuuden kerron avoimesti keskustelussa ennen kuin päätät mitään — sen ei kuulu olla asia, joka paljastuu vasta puhelimessa.

Sitä ennen on maksuton 30 minuutin keskustelu. Siinä käydään läpi sinun testituloksesi ja katsotaan, onko diagnoosi sinulle oikea asia juuri nyt. Jos ei ole, sanon sen. Se on molempien etu.

Varaa aika: ${VARAUSLINKKI}

Jos et halua varata aikaa, se on täysin ok. Voit myös vastata tähän viestiin ja kertoa tilanteestasi — vastaan itse.

Kiitos, että luit.

Riku Forsell
Artha Insight
info@arthainsight.com`,
  },
};
