/*
 * Myynnin kuusi jarrua — maksuton esiversio Artha Insightin myynnin
 * pullonkauladiagnoosista.
 *
 * Sama kuuden jarrun lista on käytössä testissä ja maksullisessa diagnoosissa.
 * Testi antaa hypoteesin, diagnoosi todentaa sen.
 */

const FRAMEWORK_NAME = "Myynnin kuusi jarrua";

/*
 * Google Apps Script -web-sovelluksen osoite. Asennusohje: apps-script/README.md.
 * Niin kauan kuin osoite on tyhjä, lomakkeen tilalla näkyy sähköpostilinkki
 * eikä mitään lähetetä mihinkään.
 */
const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbznuw-lhBUZsAc6OsRvOatuPG46Qoi1ispxUYNFwjsgTXaws4g2jvu3Ll4A3TBnZmQA/exec";

const categories = {
  market: {
    label: "Kohderyhmä ja tarve",
    title: "Ratkaiset ehkä oikeaa ongelmaa liian laajalle tai liian myöhään reagoivalle joukolle.",
    summary:
      "Palvelu voi olla hyvä, mutta kauppa jää vaikeaksi, jos ensisijainen ostaja tai hänen akuutti ostotilanteensa ei ole riittävän tarkka.",
    reason:
      "Vastauksesi viittaavat siihen, ettei kohderyhmä tai ongelman ajankohtaisuus vielä ohjaa myyntiäsi riittävästi. Kiinnostava ongelma ei aina ole ongelma, josta asiakas on valmis maksamaan juuri nyt.",
    action:
      "Valitse yksi ensisijainen asiakas ja yksi tilanne, jossa ongelma on jo näkyvä, tärkeä ja päätöstä vaativa. Haastattele kolmea tällaista ihmistä ennen kuin muutat muuta myyntiä.",
    reportPoints: [
      "Kolme kysymystä, joilla erotat akuutin ongelman vain kiinnostavasta",
      "Rajausmalli: yksi ensisijainen asiakas ja yksi ostotilanne",
      "Haastattelurunko kolmelle asiakkaalle",
      "Merkit siitä, että kohderyhmä on liian laaja myytäväksi",
    ],
  },
  offer: {
    label: "Tarjous",
    title: "Osaamisesi ei ole vielä muuttunut helposti ymmärrettäväksi ja ostettavaksi tarjoukseksi.",
    summary:
      "Asiakas voi kiinnostua osaamisestasi, mutta kokonaisuus, lopputulos tai vastine rahalle jää liian avoimeksi.",
    reason:
      "Vastauksesi kertovat, että palvelun rajaus, tulos, sisältö tai ostamisen askel vaatii liikaa selvittämistä. Silloin kiinnostus ei muutu helposti päätökseksi.",
    action:
      "Rakenna yksi päätarjous: kenelle, mikä ongelma, mikä lopputulos, mitä tehdään, missä ajassa, millä hinnalla tai millä seuraavalla askeleella.",
    reportPoints: [
      "Päätarjouksen rakenne: kenelle, mikä tulos, mitä tehdään, missä ajassa",
      "Kolme tapaa tehdä ostamisesta yksinkertaista laskematta hintaa",
      "Tarkistuslista: mitä asiakkaan on tiedettävä ennen kuin hän voi sanoa kyllä",
      "Miten rajaat räätälöinnin pois ensimmäisestä myyntikeskustelusta",
    ],
  },
  message: {
    label: "Viesti",
    title: "Oikea asiakas ei ymmärrä tarpeeksi nopeasti, miksi palvelusi on hänelle tärkeä.",
    summary:
      "Tarjous voi olla kunnossa, mutta sen arvo hukkuu yleisyyteen, ammattikieleen tai liian moneen viestiin.",
    reason:
      "Vastauksesi viittaavat siihen, että ostajan täytyy itse yhdistää kenelle palvelu on, mitä se ratkaisee ja mitä hyötyä siitä saa. Jokainen ylimääräinen tulkinta heikentää toimintaa.",
    action:
      "Kirjoita palvelustasi yksi lause: autan [asiakasta] ratkaisemaan [ongelman], jotta [havaittava hyöty], palvelulla [mitä ostetaan]. Testaa lause ulkopuolisella.",
    reportPoints: [
      "Yhden lauseen malli ja kolme esimerkkiä asiantuntijapalveluista",
      "30 sekunnin testi ulkopuolisella: mitä kysyt ja mitä vastauksista päättelet",
      "Yleisimmät ammattikielen sudenkuopat asiantuntijan sivulla",
      "Miten muutat menetelmäpuheen asiakkaan havaittavaksi hyödyksi",
    ],
  },
  trust: {
    label: "Luottamus ja todisteet",
    title: "Asiakas voi ymmärtää tarjouksesi, mutta hänellä ei ole vielä riittävästi syitä uskoa siihen.",
    summary:
      "Lupaus voi olla kiinnostava, mutta ilman näyttöä, relevantteja esimerkkejä tai selkeää eroa ostamisen riski jää liian suureksi.",
    reason:
      "Vastauksesi kertovat, ettei asiakas näe riittävästi todisteita siitä, että ymmärrät juuri hänen tilanteensa ja pystyt tuottamaan lupaamasi muutoksen.",
    action:
      "Lisää yksi mahdollisimman samankaltainen asiakasesimerkki: lähtötilanne, mitä teitte ja mikä muuttui. Jos tuloksia ei vielä ole, hanki rajattu pilottiasiakas.",
    reportPoints: [
      "Asiakasesimerkin rakenne: lähtötilanne, teot, muutos",
      "Mitä teet, kun tuloksia ei vielä ole — rajatun pilotin malli",
      "Kolme todistetyyppiä, jotka toimivat ilman referenssilistaa",
      "Miten teet eron kilpailijaan näkyväksi ostajalle",
    ],
  },
  acquisition: {
    label: "Asiakashankinta",
    title: "Tarjouksesi ei kohtaa riittävän monta oikeaa ostajaa.",
    summary:
      "Muut osat voivat toimia, mutta ilman tasaista määrää relevantteja kontakteja ja keskusteluja myynti jää satunnaiseksi.",
    reason:
      "Vastauksesi viittaavat siihen, ettei sinulla ole vielä riittävää tai toistettavaa tapaa saada oikeita ihmisiä tarjouksesi äärelle. Silloin et saa myöskään tarpeeksi dataa muun myyntipolun arviointiin.",
    action:
      "Valitse yksi pääkanava ja viikoittainen tavoite relevanteille avauksille tai yhteydenotoille. Seuraa neljän viikon ajan kontakteja, keskusteluja ja sovittuja tapaamisia.",
    reportPoints: [
      "Yhden pääkanavan valinta: kolme kriteeriä",
      "Viikkotavoite ja neljän viikon seurantataulukko",
      "Avausviestin runko, joka ei ole myyntipuhe",
      "Milloin ongelma on kanava ja milloin pelkkä määrä",
    ],
  },
  sales: {
    label: "Myyntiprosessi",
    title: "Kiinnostusta syntyy, mutta se ei etene järjestelmällisesti päätökseksi.",
    summary:
      "Liidejä tai keskusteluja voi olla, mutta tarpeen selvittäminen, tarjous, seuraava askel tai seuranta katkeaa ennen kauppaa.",
    reason:
      "Vastauksesi kertovat, ettei myyntikeskusteluista tarjouksiin ja päätöksiin johtava polku ole vielä riittävän selkeä tai seurattu.",
    action:
      "Kirjaa jokaiselle liidille nykyinen vaihe, päätöksentekijä ja seuraava sovittu askel. Käytä samaa keskustelurunkoa ja seuraa, missä vaiheessa eteneminen useimmin pysähtyy.",
    reportPoints: [
      "Myyntikeskustelun runko: tarve, vaikutus, päätöksenteko, seuraava askel",
      "Seurantamalli, joka ei tunnu painostukselta",
      "Putken vaiheet ja mitä kirjaat jokaisesta liidistä",
      "Kolme yleisintä kohtaa, joissa kauppa pysähtyy — ja mitä kussakin tehdään",
    ],
  },
};

const clearResult = {
  label: "Ei selvää pääjarrua",
  title: "Vastauksesi eivät osoita yhtä selvää myynnin pääjarrua.",
  summary:
    "Kohderyhmä, tarjous, viesti, luottamus, asiakashankinta ja myyntiprosessi vaikuttavat omien vastaustesi perusteella kohtuullisen toimivilta.",
  reason:
    "Itsearvio ei kuitenkaan voi todistaa, missä myynti pysähtyy. Seuraava vastaus löytyy toteutuneista luvuista: kuinka moni oikea kontakti etenee keskusteluun, tarjoukseen ja kauppaan.",
  action:
    "Kerää viimeisen 90 päivän luvut vaiheittain. Tutki ensin kohtaa, jossa suhteellisesti suurin osa potentiaalisista asiakkaista putoaa pois.",
  reportPoints: [
    "Miten keräät 90 päivän luvut vaiheittain",
    "Mitä lukuja kannattaa pitää normaalina asiantuntijapalvelussa",
    "Mistä aloitat, kun kaikki kuusi jarrua näyttävät kohtuullisilta",
    "Milloin itsearvio ei enää riitä ja mitä tilalle",
  ],
};

const questions = [
  {
    category: "market",
    text: "Pystyn nimeämään yhden ensisijaisen asiakasryhmän ja tilanteen, jossa he hakevat aktiivisesti ratkaisua.",
  },
  {
    category: "offer",
    text: "Minulla on yksi selkeä päätarjous, jonka tulos, sisältö, kesto ja ostamisen seuraava askel on määritelty.",
  },
  {
    category: "message",
    text: "Ulkopuolinen ymmärtää sivultani tai profiilistani alle 30 sekunnissa, mitä myyn, kenelle ja mihin ongelmaan.",
  },
  {
    category: "trust",
    text: "Voin näyttää relevantteja asiakastuloksia, referenssejä tai muita todisteita lupaukseni tueksi.",
  },
  {
    category: "acquisition",
    text: "Minulla on viikoittainen tapa tavoittaa uusia, kohderyhmään sopivia ihmisiä.",
  },
  {
    category: "sales",
    text: "Myyntikeskustelussa selvitän tarpeen, ongelman vaikutukset, päätöksenteon ja seuraavan askeleen.",
  },
  {
    category: "market",
    text: "Potentiaaliset asiakkaani pitävät ratkaisemaani ongelmaa tärkeänä ja ajankohtaisena, eivät vain kiinnostavana.",
  },
  {
    category: "offer",
    text: "Asiakkaat ymmärtävät, mitä he saavat vastineeksi rahalleen ilman pitkää räätälöintikeskustelua.",
  },
  {
    category: "message",
    text: "Sisältöni ja myyntiviestini tuovat esiin asiakkaan saaman konkreettisen hyödyn, eivät vain osaamistani tai menetelmääni.",
  },
  {
    category: "trust",
    text: "Ostaja näkee, miksi juuri minuun ja tapaani ratkaista ongelma kannattaa luottaa.",
  },
  {
    category: "acquisition",
    text: "Saan riittävästi relevantteja yhteydenottoja tai myyntikeskusteluja, jotta voin arvioida tarjoukseni toimivuutta.",
  },
  {
    category: "sales",
    text: "Teen tarjoukset ja seurannan järjestelmällisesti ja tiedän, missä vaiheessa kaupat tavallisesti pysähtyvät.",
  },
];

const answerOptions = [
  { label: "Pitää täysin paikkansa", score: 0 },
  { label: "Pitää enimmäkseen paikkansa", score: 1 },
  { label: "Pitää vain vähän paikkansa", score: 2 },
  { label: "Ei pidä paikkansa tai en tiedä", score: 3 },
];

const categoryOrder = ["market", "offer", "message", "trust", "acquisition", "sales"];

const introPanel = document.querySelector("#intro-panel");
const quizPanel = document.querySelector("#quiz-panel");
const resultPanel = document.querySelector("#result-panel");
const startButton = document.querySelector("#start-button");
const backButton = document.querySelector("#back-button");
const restartButton = document.querySelector("#restart-button");
const progressLabel = document.querySelector("#progress-label");
const progressPercent = document.querySelector("#progress-percent");
const progressBar = document.querySelector("#progress-bar");
const questionText = document.querySelector("#question-text");
const answerList = document.querySelector("#answer-list");

const leadGate = document.querySelector("#lead-gate");
const leadForm = document.querySelector("#lead-form");
const leadEmail = document.querySelector("#lead-email");
const leadConsent = document.querySelector("#lead-consent");
const leadSubmit = document.querySelector("#lead-submit");
const leadStatus = document.querySelector("#lead-status");
const leadPoints = document.querySelector("#lead-points");
const leadTitle = document.querySelector("#lead-title");
const leadFallback = document.querySelector("#lead-fallback");
const leadDone = document.querySelector("#lead-done");
const nextMove = document.querySelector("#next-move");
const nextMoveLocked = document.querySelector("#next-move-locked");

let currentQuestion = 0;
let answers = [];
let currentResult = null;

function showOnly(panel) {
  [introPanel, quizPanel, resultPanel].forEach((item) => {
    item.hidden = item !== panel;
  });
}

function beginQuiz() {
  currentQuestion = 0;
  answers = [];
  currentResult = null;
  showOnly(quizPanel);
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const humanIndex = currentQuestion + 1;
  const percent = Math.round((humanIndex / questions.length) * 100);

  progressLabel.textContent = `Kysymys ${humanIndex} / ${questions.length}`;
  progressPercent.textContent = `${percent} %`;
  progressBar.style.width = `${percent}%`;
  questionText.textContent = question.text;
  backButton.disabled = currentQuestion === 0;
  answerList.replaceChildren();

  answerOptions.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.innerHTML = `<span class="answer-key">${index + 1}</span><span>${option.label}</span>`;
    button.addEventListener("click", () => selectAnswer(option.score));
    answerList.append(button);
  });

  requestAnimationFrame(() => {
    answerList.querySelector("button")?.focus({ preventScroll: true });
  });
}

function selectAnswer(score) {
  answers[currentQuestion] = score;
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    return;
  }
  renderResult();
}

function calculateScores() {
  const scores = Object.fromEntries(categoryOrder.map((key) => [key, 0]));
  questions.forEach((question, index) => {
    scores[question.category] += answers[index] ?? 0;
  });
  return scores;
}

function renderResult() {
  const scores = calculateScores();
  const sorted = [...categoryOrder].sort((a, b) => {
    const scoreDifference = scores[b] - scores[a];
    return scoreDifference || categoryOrder.indexOf(a) - categoryOrder.indexOf(b);
  });
  const highestScore = scores[sorted[0]];
  const primaryKey = highestScore <= 2 ? null : sorted[0];
  const primary = primaryKey ? categories[primaryKey] : clearResult;
  const secondaryKey = sorted[1];
  const closeSecondary =
    primaryKey && scores[secondaryKey] >= scores[primaryKey] - 1 && scores[secondaryKey] > 0;

  currentResult = { scores, primaryKey, secondaryKey: closeSecondary ? secondaryKey : null };

  document.querySelector("#result-badge").textContent = primary.label;
  document.querySelector("#result-title").textContent = primary.title;
  document.querySelector("#result-summary").textContent = primary.summary;
  document.querySelector("#result-reason").textContent = closeSecondary
    ? `${primary.reason} Myös ${categories[secondaryKey].label.toLowerCase()} näyttää vastauksissasi lähes yhtä vahvalta jarrulta.`
    : primary.reason;
  document.querySelector("#result-action").textContent = primary.action;

  const scoreBars = document.querySelector("#score-bars");
  scoreBars.replaceChildren();
  categoryOrder.forEach((key) => {
    const row = document.createElement("div");
    row.className = `score-row${key === primaryKey ? " is-primary" : ""}`;
    row.innerHTML = `
      <div class="score-label">
        <span>${categories[key].label}</span>
        <span>${scores[key]} / 6</span>
      </div>
      <div class="score-track" aria-hidden="true">
        <div class="score-fill" style="width: ${(scores[key] / 6) * 100}%"></div>
      </div>`;
    scoreBars.append(row);
  });

  prepareLeadGate(primary);
  storeAnonymousResponse();

  showOnly(resultPanel);
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  document.querySelector("#result-title").focus?.({ preventScroll: true });
}

/* --- Laajempi raportti sähköpostiin --- */

function prepareLeadGate(primary) {
  leadTitle.textContent = `Haluatko koko raportin jarrusta "${primary.label}"?`;
  leadPoints.replaceChildren();
  primary.reportPoints.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    leadPoints.append(item);
  });

  leadGate.classList.remove("is-sent");
  leadDone.hidden = true;
  leadStatus.textContent = "";
  leadStatus.className = "lead-status";
  nextMove.hidden = true;
  nextMoveLocked.hidden = false;
  leadSubmit.disabled = false;

  if (ENDPOINT) {
    leadForm.hidden = false;
    leadFallback.hidden = true;
  } else {
    leadForm.hidden = true;
    leadFallback.hidden = false;
    leadFallback.querySelector("a").href = `mailto:info@arthainsight.com?subject=${encodeURIComponent(
      `Raportti: ${primary.label}`,
    )}&body=${encodeURIComponent(
      `Tein testin "${FRAMEWORK_NAME}" ja sain tulokseksi: ${primary.label}. Lähetätkö minulle laajemman raportin?`,
    )}`;
  }
}

function unlockNextMove() {
  nextMoveLocked.hidden = true;
  nextMove.hidden = false;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

/*
 * Apps Script -web-sovellus ei tue esitarkistuspyyntöjä (preflight), joten
 * runko lähetetään text/plain-tyyppisenä. Silloin selain tekee yksinkertaisen
 * pyynnön ilman OPTIONS-kierrosta.
 *
 * Vastauksesta tarkistetaan sisältö, ei pelkkää tilakoodia. Jos web-sovellus
 * on julkaistu väärillä oikeuksilla, Google vastaa kirjautumissivulla tilalla
 * 200 — pelkkä tilakoodin katsominen näyttäisi silloin onnistumista, vaikka
 * mitään ei tallennu. Se on pahin mahdollinen vikatila, koska liidi katoaisi
 * huomaamatta.
 */
async function postToEndpoint(payload) {
  if (!ENDPOINT) return false;
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`Palvelin vastasi: ${response.status}`);

  const teksti = await response.text();
  let tulos;
  try {
    tulos = JSON.parse(teksti);
  } catch (error) {
    throw new Error("Palvelin ei vastannut odotetusti. Tarkista käyttöönoton oikeudet.");
  }
  if (!tulos || tulos.ok !== true) {
    throw new Error(tulos && tulos.virhe ? tulos.virhe : "Palvelin hylkäsi pyynnön.");
  }
  return true;
}

/*
 * Vastaukset tallennetaan ilman sähköpostiosoitetta tai muuta tunnistetta.
 * Niitä käytetään vain koostettuna markkinatietona siitä, mihin kohtaan
 * myyntipolkua asiantuntijayrittäjät useimmin jäävät kiinni.
 */
function storeAnonymousResponse() {
  if (!ENDPOINT || !currentResult) return;
  const payload = {
    tyyppi: "vastaus",
    aikaleima: new Date().toISOString(),
    kehys: FRAMEWORK_NAME,
    ensisijainen: currentResult.primaryKey ?? "ei_selvaa",
    toissijainen: currentResult.secondaryKey ?? "",
    pisteet: currentResult.scores,
    vastaukset: answers.slice(),
  };
  postToEndpoint(payload).catch(() => {
    /* Nimetön tilasto ei saa häiritä käyttäjää, jos lähetys ei onnistu. */
  });
}

async function submitLead(event) {
  event.preventDefault();
  if (!currentResult) return;

  const email = leadEmail.value.trim();
  if (!isValidEmail(email)) {
    leadStatus.className = "lead-status is-error";
    leadStatus.textContent = "Tarkista sähköpostiosoite.";
    leadEmail.focus();
    return;
  }
  if (!leadConsent.checked) {
    leadStatus.className = "lead-status is-error";
    leadStatus.textContent = "Tarvitsen luvan lähettää raportin ja jatkoviestit.";
    leadConsent.focus();
    return;
  }

  leadSubmit.disabled = true;
  leadStatus.className = "lead-status";
  leadStatus.textContent = "Lähetetään…";

  try {
    await postToEndpoint({
      tyyppi: "liidi",
      aikaleima: new Date().toISOString(),
      kehys: FRAMEWORK_NAME,
      sahkoposti: email,
      ensisijainen: currentResult.primaryKey ?? "ei_selvaa",
      toissijainen: currentResult.secondaryKey ?? "",
      pisteet: currentResult.scores,
      suostumus: true,
    });
    leadGate.classList.add("is-sent");
    leadForm.hidden = true;
    leadDone.hidden = false;
    unlockNextMove();
  } catch (error) {
    // Tarkka syy konsoliin, jotta vian voi selvittää ilman palvelimen lokeja.
    console.error("Raportin tilaus epäonnistui:", error);
    leadSubmit.disabled = false;
    leadStatus.className = "lead-status is-error";
    leadStatus.textContent =
      "Lähetys ei onnistunut. Kokeile uudelleen tai laita viesti osoitteeseen info@arthainsight.com.";
  }
}

startButton.addEventListener("click", beginQuiz);
restartButton.addEventListener("click", beginQuiz);
leadForm.addEventListener("submit", submitLead);
backButton.addEventListener("click", () => {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  renderQuestion();
});

document.addEventListener("keydown", (event) => {
  if (quizPanel.hidden) return;
  const optionIndex = Number(event.key) - 1;
  if (optionIndex >= 0 && optionIndex < answerOptions.length) {
    selectAnswer(answerOptions[optionIndex].score);
  }
});
