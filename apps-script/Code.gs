/**
 * Myynnin kuusi jarrua — vastaanotto, tallennus ja sähköpostisarja.
 *
 * Kaksi välilehteä:
 *   Vastaukset — nimettömät testivastaukset markkinatietona (ei sähköpostia)
 *   Liidit     — sähköpostiosoitteet, jotka pyysivät laajemman raportin
 *
 * Asennus: katso README.md samassa kansiossa.
 */

const VASTAUKSET_SHEET = "Vastaukset";
const LIIDIT_SHEET = "Liidit";
const LAHETTAJAN_NIMI = "Riku Forsell / Artha Insight";

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
  "Viesti 2",
  "Viesti 3",
  "Viesti 4",
  "Peruttu",
];

const JARRU_JARJESTYS = ["market", "offer", "message", "trust", "acquisition", "sales"];

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return vastaa({ ok: false, virhe: "Tyhjä pyyntö" });
    }
    const data = JSON.parse(e.postData.contents);

    if (data.tyyppi === "vastaus") {
      tallennaVastaus_(data);
      return vastaa({ ok: true });
    }

    if (data.tyyppi === "liidi") {
      const email = String(data.sahkoposti || "").trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        return vastaa({ ok: false, virhe: "Virheellinen sähköpostiosoite" });
      }
      tallennaLiidi_(data, email);
      lahetaRaportti_(email, data.ensisijainen);
      return vastaa({ ok: true });
    }

    return vastaa({ ok: false, virhe: "Tuntematon tyyppi" });
  } catch (error) {
    console.error(error);
    return vastaa({ ok: false, virhe: String(error) });
  }
}

/** GET-pyyntö on vain terveystarkistus, jotta asennuksen voi todeta selaimesta. */
function doGet() {
  return vastaa({ ok: true, palvelu: "Myynnin kuusi jarrua" });
}

function vastaa(objekti) {
  return ContentService.createTextOutput(JSON.stringify(objekti)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function haeTaulukko_(nimi, otsikot) {
  const kirja = SpreadsheetApp.getActiveSpreadsheet();
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

/** Sama osoite ei saa kahta riviä: vanha rivi päivitetään uusimmalla tuloksella. */
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
    "",
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

/**
 * Päivittäinen ajastin: lähettää jatkoviestit 2–4 sen mukaan, montako päivää
 * liidin ensimmäisestä viestistä on kulunut. Luo ajastin funktiolla
 * asennaAjastin().
 */
function lahetaJatkoviestit() {
  const taulukko = haeTaulukko_(LIIDIT_SHEET, LIIDIT_OTSIKOT);
  const viimeinen = taulukko.getLastRow();
  if (viimeinen < 2) return;

  const rivit = taulukko.getRange(2, 1, viimeinen - 1, LIIDIT_OTSIKOT.length).getValues();
  const aikataulu = [
    { paivia: 2, sarake: 7, numero: 2 },
    { paivia: 5, sarake: 8, numero: 3 },
    { paivia: 9, sarake: 9, numero: 4 },
  ];

  rivit.forEach(function (rivi, index) {
    const email = String(rivi[1]).trim();
    const jarru = rivi[2];
    const raporttiLahetetty = rivi[5];
    const peruttu = String(rivi[9]).trim();
    if (!email || !raporttiLahetetty || peruttu) return;

    const aloitus = new Date(raporttiLahetetty);
    const paivia = Math.floor((Date.now() - aloitus.getTime()) / 86400000);

    for (const vaihe of aikataulu) {
      const joLahetetty = rivi[vaihe.sarake - 1];
      if (joLahetetty || paivia < vaihe.paivia) continue;
      const viesti = jatkoviesti_(vaihe.numero, jarru);
      MailApp.sendEmail({
        to: email,
        subject: viesti.aihe,
        body: viesti.teksti + peruutusOhje_(),
        name: LAHETTAJAN_NIMI,
        replyTo: "info@arthainsight.com",
      });
      taulukko.getRange(index + 2, vaihe.sarake).setValue(new Date().toISOString());
      break; // Enintään yksi viesti per liidi per päivä.
    }
  });
}

function peruutusOhje_() {
  return (
    "\n\n—\nSait tämän viestin, koska pyysit raportin osoitteessa arthainsight.com/diagnoosi.\n" +
    "Jos et halua jatkoviestejä, vastaa tähän viestiin sanalla \"lopeta\", niin poistan osoitteesi.\n" +
    "Tietosuojaseloste: https://arthainsight.com/tietosuoja.html\n" +
    "Tmi Riku Forsell — info@arthainsight.com"
  );
}

/** Aja kerran käsin: luo päivittäisen ajastimen jatkoviesteille. */
function asennaAjastin() {
  ScriptApp.getProjectTriggers().forEach(function (ajastin) {
    if (ajastin.getHandlerFunction() === "lahetaJatkoviestit") {
      ScriptApp.deleteTrigger(ajastin);
    }
  });
  ScriptApp.newTrigger("lahetaJatkoviestit").timeBased().atHour(8).everyDays(1).create();
}
