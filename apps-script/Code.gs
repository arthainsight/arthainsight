/**
 * Myynnin kuusi jarrua — vastaanotto, tallennus ja raportin lähetys.
 *
 * Työnjako:
 *   Tämä skripti  — nimetön testidata, suostumusloki ja jarrukohtainen raportti
 *   MailerLite    — tilaajalista, kolmen viestin jatkosarja, peruutus, tilastot
 *
 * Kaksi välilehteä:
 *   Vastaukset — nimettömät testivastaukset markkinatietona (ei sähköpostia)
 *   Liidit     — suostumusloki: kuka pyysi raportin, milloin ja mihin jarruun
 *
 * Asennus: katso README.md samassa kansiossa.
 */

const VASTAUKSET_SHEET = "Vastaukset";
const LIIDIT_SHEET = "Liidit";
const LAHETTAJAN_NIMI = "Riku Forsell / Artha Insight";

/*
 * MailerLiten tunnus ja ryhmä luetaan skriptin ominaisuuksista, eivät koodista.
 * Aseta ne kerran: Apps Script → Projektin asetukset → Skriptin ominaisuudet
 *   MAILERLITE_TOKEN → API-tunnus
 *   MAILERLITE_GROUP → ryhmän tunniste (numerosarja)
 * Älä kirjoita tunnusta tähän tiedostoon äläkä vie sitä versionhallintaan.
 */
const MAILERLITE_API = "https://connect.mailerlite.com/api/subscribers";

const VASTAUKSET_OTSIKOT = [
  "Aikaleima",
  "Ensisijainen jarru",
  "Toissijainen jarru",
  "Kohderyhmä",
  "Tarjous",
  "Viesti",
  "Luottamus",
  "Asiakashankinta",
  "Myyntiprosessi",
  "Vastaukset (1-12)",
];

const LIIDIT_OTSIKOT = [
  "Aikaleima",
  "Sähköposti",
  "Ensisijainen jarru",
  "Toissijainen jarru",
  "Suostumus",
  "Raportti lähetetty",
  "MailerLite",
];

const JARRU_JARJESTYS = ["market", "offer", "message", "trust", "acquisition", "sales"];

function doPost(e) {
  const runko = e && e.postData && e.postData.contents;
  if (!runko) return vastaa({ ok: false, virhe: "Tyhjä pyyntö" });
  return kasittele_(runko, null);
}

/**
 * GET palvelee kahta tarkoitusta: ilman parametreja se on terveystarkistus,
 * ja data-parametrin kanssa se ottaa vastaan lomakkeen lähetyksen JSONP:nä.
 */
function doGet(e) {
  const callback = e && e.parameter ? e.parameter.callback : null;
  const data = e && e.parameter ? e.parameter.data : null;
  if (!data) {
    return vastaa({ ok: true, palvelu: "Myynnin kuusi jarrua" }, callback);
  }
  return kasittele_(data, callback);
}

function kasittele_(runko, callback) {
  try {
    const data = JSON.parse(runko);

    if (data.tyyppi === "vastaus") {
      tallennaVastaus_(data);
      return vastaa({ ok: true }, callback);
    }

    if (data.tyyppi === "liidi") {
      const email = String(data.sahkoposti || "").trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        return vastaa({ ok: false, virhe: "Virheellinen sähköpostiosoite" }, callback);
      }
      tallennaLiidi_(data, email);
      lahetaRaportti_(email, data.ensisijainen);
      lisaaMailerLiteen_(email, data.ensisijainen);
      return vastaa({ ok: true }, callback);
    }

    return vastaa({ ok: false, virhe: "Tuntematon tyyppi" }, callback);
  } catch (error) {
    console.error(error);
    return vastaa({ ok: false, virhe: String(error) }, callback);
  }
}

/**
 * Palauttaa JSON-vastauksen, tai JSONP-kääreen jos callback on annettu.
 *
 * JSONP on tässä välttämätön: Apps Script ei palauta CORS-otsakkeita, joten
 * selain ei anna lukea tavallisen fetch-pyynnön vastausta toiselta sivustolta.
 * Script-elementillä ladattu vastaus ei ole CORS-rajoitusten alainen, joten
 * lähetyksen onnistuminen voidaan yhä varmistaa sisällöstä eikä vain toivoa.
 */
function vastaa(objekti, callback) {
  const runko = JSON.stringify(objekti);
  if (callback && /^[A-Za-z0-9_]{1,64}$/.test(callback)) {
    return ContentService.createTextOutput(callback + "(" + runko + ");").setMimeType(
      ContentService.MimeType.JAVASCRIPT
    );
  }
  return ContentService.createTextOutput(runko).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Avaa taulukon. Jos skripti on luotu erikseen eikä Sheetsin sisältä,
 * getActiveSpreadsheet() palauttaa null ja jokainen kirjoitus kaatuisi.
 * Silloin tunniste luetaan skriptin ominaisuudesta SHEET_ID.
 */
function haeKirja_() {
  const tunniste = PropertiesService.getScriptProperties().getProperty("SHEET_ID");
  if (tunniste) return SpreadsheetApp.openById(tunniste);

  const kirja = SpreadsheetApp.getActiveSpreadsheet();
  if (!kirja) {
    throw new Error(
      "Taulukkoa ei löydy. Skripti ei ole sidottu Sheetsiin — lisää skriptin " +
        "ominaisuus SHEET_ID, jonka arvo on taulukon tunniste osoiterivistä."
    );
  }
  return kirja;
}

function haeTaulukko_(nimi, otsikot) {
  const kirja = haeKirja_();
  let taulukko = kirja.getSheetByName(nimi);
  if (!taulukko) {
    taulukko = kirja.insertSheet(nimi);
    taulukko.appendRow(otsikot);
    taulukko.setFrozenRows(1);
    taulukko.getRange(1, 1, 1, otsikot.length).setFontWeight("bold");
  }
  return taulukko;
}

/**
 * Vastaukset tallennetaan ilman sähköpostiosoitetta, IP-osoitetta tai muuta
 * tunnistetta. Rivistä ei voi jäljittää yksittäistä vastaajaa.
 */
function tallennaVastaus_(data) {
  const taulukko = haeTaulukko_(VASTAUKSET_SHEET, VASTAUKSET_OTSIKOT);
  const pisteet = data.pisteet || {};
  taulukko.appendRow([
    data.aikaleima || new Date().toISOString(),
    data.ensisijainen || "",
    data.toissijainen || "",
    pisteet.market ?? "",
    pisteet.offer ?? "",
    pisteet.message ?? "",
    pisteet.trust ?? "",
    pisteet.acquisition ?? "",
    pisteet.sales ?? "",
    (data.vastaukset || []).join(","),
  ]);
}

/**
 * Sama osoite ei saa kahta riviä: vanha rivi päivitetään uusimmalla tuloksella.
 *
 * Tämä on suostumusloki, ei postituslista. Varsinaisen listan ja peruutukset
 * hoitaa MailerLite, joka myös estää kerran perunutta palaamasta listalle
 * rajapinnan kautta.
 */
function tallennaLiidi_(data, email) {
  const taulukko = haeTaulukko_(LIIDIT_SHEET, LIIDIT_OTSIKOT);
  const rivi = etsiLiidinRivi_(taulukko, email);
  const arvot = [
    data.aikaleima || new Date().toISOString(),
    email,
    data.ensisijainen || "",
    data.toissijainen || "",
    data.suostumus ? "kyllä" : "ei",
    "",
    "",
  ];
  if (rivi > 0) {
    taulukko.getRange(rivi, 1, 1, arvot.length).setValues([arvot]);
  } else {
    taulukko.appendRow(arvot);
  }
}

function etsiLiidinRivi_(taulukko, email) {
  const viimeinen = taulukko.getLastRow();
  if (viimeinen < 2) return 0;
  const osoitteet = taulukko.getRange(2, 2, viimeinen - 1, 1).getValues();
  for (let i = 0; i < osoitteet.length; i++) {
    if (String(osoitteet[i][0]).trim().toLowerCase() === email.toLowerCase()) {
      return i + 2;
    }
  }
  return 0;
}

function merkitseLahetetyksi_(email, sarake) {
  const taulukko = haeTaulukko_(LIIDIT_SHEET, LIIDIT_OTSIKOT);
  const rivi = etsiLiidinRivi_(taulukko, email);
  if (rivi > 0) {
    taulukko.getRange(rivi, sarake).setValue(new Date().toISOString());
  }
}

function lahetaRaportti_(email, jarru) {
  const viesti = raportti_(jarru);
  MailApp.sendEmail({
    to: email,
    subject: viesti.aihe,
    body: viesti.teksti + peruutusOhje_(),
    name: LAHETTAJAN_NIMI,
    replyTo: "info@arthainsight.com",
  });
  merkitseLahetetyksi_(email, 6);
}

function peruutusOhje_() {
  return (
    "\n\n—\nSait tämän viestin, koska pyysit raportin osoitteessa arthainsight.com/diagnoosi.\n" +
    "Jos et halua jatkoviestejä, vastaa tähän viestiin sanalla \"lopeta\", niin poistan osoitteesi.\n" +
    "Tietosuojaseloste: https://arthainsight.com/tietosuoja.html\n" +
    "Tmi Riku Forsell — info@arthainsight.com"
  );
}

/**
 * Lisää tilaajan MailerLiteen ja merkitsee jarrun kenttään, jota jatkosarjan
 * automaatio käyttää viestien personointiin.
 *
 * Jos kutsu epäonnistuu, se ei kaada pyyntöä: tilaaja on jo saanut pyytämänsä
 * raportin, ja virhe kirjataan Liidit-välilehdelle käsin korjattavaksi.
 */
function lisaaMailerLiteen_(email, jarru) {
  const asetukset = PropertiesService.getScriptProperties();
  const tunnus = asetukset.getProperty("MAILERLITE_TOKEN");
  const ryhma = asetukset.getProperty("MAILERLITE_GROUP");

  if (!tunnus || !ryhma) {
    merkitseMailerLite_(email, "ei asetettu");
    return;
  }

  const runko = {
    email: email,
    fields: { jarru: jarrunNimi_(jarru) },
    groups: [String(ryhma)],
  };

  try {
    const vastaus = UrlFetchApp.fetch(MAILERLITE_API, {
      method: "post",
      contentType: "application/json",
      headers: { Authorization: "Bearer " + tunnus, Accept: "application/json" },
      payload: JSON.stringify(runko),
      muteHttpExceptions: true,
    });
    const koodi = vastaus.getResponseCode();
    merkitseMailerLite_(email, koodi >= 200 && koodi < 300 ? "ok" : "virhe " + koodi);
  } catch (error) {
    console.error(error);
    merkitseMailerLite_(email, "virhe: " + String(error));
  }
}

function merkitseMailerLite_(email, tila) {
  const taulukko = haeTaulukko_(LIIDIT_SHEET, LIIDIT_OTSIKOT);
  const rivi = etsiLiidinRivi_(taulukko, email);
  if (rivi > 0) {
    taulukko.getRange(rivi, 7).setValue(tila);
  }
}

/**
 * Aja tämä kerran editorista asennuksen jälkeen.
 *
 * Kaksi tehtävää: se pyytää käyttöoikeudet, joita doPost tarvitsee, ja kertoo
 * kerralla mikä osa asennuksesta toimii. doGet ei koske Sheetsiin, Gmailiin
 * eikä verkkoon, joten sen ajaminen ei pyydä mitään lupia — siksi ensimmäinen
 * oikea lähetys voi kaatua vaikka /exec näyttäisi toimivan.
 *
 * Tulokset näkyvät suorituslokissa (Näytä → Loki).
 */
function testaaAsennus() {
  const tulokset = [];

  // 1. Sheets: kirjoitetaan rivi ja poistetaan se heti.
  try {
    const taulukko = haeTaulukko_(VASTAUKSET_SHEET, VASTAUKSET_OTSIKOT);
    taulukko.appendRow(["TESTI", "", "", "", "", "", "", "", "", ""]);
    SpreadsheetApp.flush();
    taulukko.deleteRow(taulukko.getLastRow());
    tulokset.push("Sheets: OK");
  } catch (error) {
    tulokset.push("Sheets: VIRHE — " + error);
  }

  // 2. Asetukset.
  const asetukset = PropertiesService.getScriptProperties();
  const tunnus = asetukset.getProperty("MAILERLITE_TOKEN");
  const ryhma = asetukset.getProperty("MAILERLITE_GROUP");
  tulokset.push("MAILERLITE_TOKEN: " + (tunnus ? "asetettu" : "PUUTTUU"));
  tulokset.push("MAILERLITE_GROUP: " + (ryhma ? ryhma : "PUUTTUU"));

  // 3. MailerLite: vain luku, ei lisätä ketään listalle.
  if (tunnus) {
    try {
      const vastaus = UrlFetchApp.fetch("https://connect.mailerlite.com/api/groups", {
        method: "get",
        headers: { Authorization: "Bearer " + tunnus, Accept: "application/json" },
        muteHttpExceptions: true,
      });
      const koodi = vastaus.getResponseCode();
      tulokset.push("MailerLite-yhteys: " + (koodi === 200 ? "OK" : "VIRHE " + koodi));
      if (koodi === 200 && ryhma) {
        const ryhmat = JSON.parse(vastaus.getContentText()).data || [];
        const osuma = ryhmat.filter(function (g) {
          return String(g.id) === String(ryhma);
        });
        tulokset.push(
          osuma.length
            ? 'Ryhmä löytyi: "' + osuma[0].name + '"'
            : "Ryhmää " + ryhma + " EI löydy tililtä — tarkista tunniste"
        );
      }
    } catch (error) {
      tulokset.push("MailerLite-yhteys: VIRHE — " + error);
    }
  }

  // 4. Gmail: lähetetään koeviesti omistajalle.
  try {
    MailApp.sendEmail({
      to: Session.getEffectiveUser().getEmail(),
      subject: "Myynnin kuusi jarrua — asennustesti",
      body: tulokset.join("\n"),
      name: LAHETTAJAN_NIMI,
    });
    tulokset.push("Gmail: OK (koeviesti lähetetty)");
  } catch (error) {
    tulokset.push("Gmail: VIRHE — " + error);
  }

  const yhteenveto = tulokset.join("\n");
  console.log(yhteenveto);
  return yhteenveto;
}
