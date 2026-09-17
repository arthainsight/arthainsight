const categories = {
  audience: {
    label: "Kenelle palvelu on",
    title: "Oikea asiakas ei tunnista riittävän nopeasti, että palvelu on hänelle.",
    summary:
      "Viestisi voi kuvailla osaamistasi hyvin, mutta ostajan on vaikea päätellä, puhutaanko juuri hänen tilanteestaan.",
    reason:
      "Vastauksesi viittaavat siihen, ettei kohderyhmä näy viestissäsi tarpeeksi tarkasti. Kun viestin täytyy sopia monelle, yksittäinen asiakas ei välttämättä koe sen osuvan itseensä.",
    action:
      "Nimeä yksi ensisijainen asiakas hänen tilanteensa kautta. Aloita viesti siitä, minkä hän tunnistaa omasta arjestaan — älä omasta ammattinimikkeestäsi.",
  },
  problem: {
    label: "Mihin ongelmaan",
    title: "Asiakas ei ymmärrä, missä tilanteessa hän tarvitsee palveluasi.",
    summary:
      "Palvelusi voi kuulostaa kiinnostavalta, mutta yhteys asiakkaan konkreettiseen ongelmaan tai ajankohtaiseen tilanteeseen jää epäselväksi.",
    reason:
      "Vastauksesi kertovat, että viestissäsi on enemmän yleisiä teemoja kuin asiakkaan tunnistettavaa ongelmaa. Ilman selvää käyttötilannetta palvelun tarve jää helposti myöhemmäksi.",
    action:
      "Kuvaa yksi hetki, jossa asiakas huomaa tarvitsevansa apua: mitä tapahtuu, mikä ei toimi ja mitä se hänelle maksaa, jos mikään ei muutu.",
  },
  value: {
    label: "Mitä hyötyä",
    title: "Asiakas näkee mitä teet, mutta ei vielä miksi se kannattaa ostaa.",
    summary:
      "Menetelmäsi, osaamisesi tai palvelun teemat voivat olla esillä, mutta asiakkaan saama muutos jää liian abstraktiksi.",
    reason:
      "Vastauksesi viittaavat siihen, että asiakkaan täytyy päätellä hyöty itse. Kiinnostava menetelmä ei vielä kerro, mitä asiakkaan elämässä tai liiketoiminnassa muuttuu.",
    action:
      "Korvaa yksi abstrakti hyöty havaittavalla muutoksella. Kerro, mitä asiakas pystyy tekemään, päättämään tai saavuttamaan palvelun jälkeen eri tavalla kuin ennen.",
  },
  buying: {
    label: "Mitä asiakas ostaa",
    title: "Asiakas voi kiinnostua, mutta ei hahmota mitä hän on ostamassa.",
    summary:
      "Palvelun aihe voi olla selkeä, mutta sisältö, toteutustapa tai seuraava askel vaatii asiakkaalta liikaa selvittämistä.",
    reason:
      "Vastauksesi kertovat, ettei kiinnostus muutu helposti toiminnaksi. Asiakas ei näe yhdellä silmäyksellä, mitä palveluun kuuluu tai miten hän pääsee etenemään.",
    action:
      "Nimeä yksi päätarjous ja kerro sen muoto, tärkeimmät vaiheet, kesto sekä yksi selkeä seuraava askel. Poista samasta näkymästä kilpailevat toimintakehotukset.",
  },
};

const clearResult = {
  label: "Viesti vaikuttaa selkeältä",
  title: "Palvelusi on omien vastaustesi perusteella helppo ymmärtää.",
  summary:
    "Kohderyhmä, ongelma, hyöty ja ostettava kokonaisuus näyttävät olevan viestissäsi pääosin ymmärrettäviä.",
  reason:
    "Tämä on silti itsearvio. Oma viesti tuntuu usein tekijälle selvemmältä kuin ulkopuoliselle, koska tunnet palvelusi ja taustaoletukset jo valmiiksi.",
  action:
    "Näytä etusivusi tai profiilisi henkilölle, joka ei tunne palveluasi. Pyydä häntä kertomaan omin sanoin kenelle palvelu on, mitä se ratkaisee, mitä hyötyä siitä saa ja mitä pitäisi tehdä seuraavaksi.",
};

const questions = [
  {
    category: "audience",
    text: "Verkkosivuni tai profiilini ensimmäisistä riveistä käy ilmi, kenelle palvelu on tarkoitettu.",
  },
  {
    category: "problem",
    text: "Asiakas tunnistaa viestistäni konkreettisen tilanteen tai ongelman, jossa palveluni auttaa.",
  },
  {
    category: "value",
    text: "Kerron asiakkaan saamasta havaittavasta muutoksesta enkä vain menetelmistäni tai osaamisalueistani.",
  },
  {
    category: "buying",
    text: "Asiakkaalle on selvää, mitä palvelu käytännössä sisältää ja missä muodossa se toteutetaan.",
  },
  {
    category: "audience",
    text: "Viestini on rajattu niin, ettei sen tarvitse tuntua sopivalta kaikille mahdollisille asiakkaille.",
  },
  {
    category: "problem",
    text: "Kuvaan ongelman asiakkaan omalla arkisella kielellä ilman, että hänen täytyy tuntea ammattisanastoa.",
  },
  {
    category: "value",
    text: "Ulkopuolinen osaisi viestini perusteella selittää omin sanoin, miksi palvelustani voisi olla hänelle hyötyä.",
  },
  {
    category: "buying",
    text: "Sivulta tai profiilista löytyy yksi selkeä seuraava askel yhteydenottoon tai ostamiseen.",
  },
];

const answerOptions = [
  { label: "Pitää täysin paikkansa", score: 0 },
  { label: "Pitää enimmäkseen paikkansa", score: 1 },
  { label: "Pitää vain vähän paikkansa", score: 2 },
  { label: "Ei pidä lainkaan paikkansa", score: 3 },
];

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

let currentQuestion = 0;
let answers = [];

function showOnly(panel) {
  [introPanel, quizPanel, resultPanel].forEach((item) => {
    item.hidden = item !== panel;
  });
}

function beginQuiz() {
  currentQuestion = 0;
  answers = [];
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
  const scores = Object.fromEntries(Object.keys(categories).map((key) => [key, 0]));
  questions.forEach((question, index) => {
    scores[question.category] += answers[index] ?? 0;
  });
  return scores;
}

function renderResult() {
  const scores = calculateScores();
  const tiePriority = ["audience", "problem", "value", "buying"];
  const sorted = Object.keys(scores).sort((a, b) => {
    const scoreDifference = scores[b] - scores[a];
    return scoreDifference || tiePriority.indexOf(a) - tiePriority.indexOf(b);
  });
  const highestScore = scores[sorted[0]];
  const primaryKey = highestScore <= 1 ? null : sorted[0];
  const primary = primaryKey ? categories[primaryKey] : clearResult;
  const secondaryKey = sorted[1];
  const closeSecondary =
    primaryKey && scores[secondaryKey] >= scores[primaryKey] - 1 && scores[secondaryKey] > 0;

  document.querySelector("#result-badge").textContent = primary.label;
  document.querySelector("#result-title").textContent = primary.title;
  document.querySelector("#result-summary").textContent = primary.summary;
  document.querySelector("#result-reason").textContent = closeSecondary
    ? `${primary.reason} Myös kohta ”${categories[secondaryKey].label.toLowerCase()}” on vastauksissasi lähes yhtä epäselvä.`
    : primary.reason;
  document.querySelector("#result-action").textContent = primary.action;

  const scoreBars = document.querySelector("#score-bars");
  scoreBars.replaceChildren();
  tiePriority.forEach((key) => {
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

  const scoreLines = tiePriority
    .map((key) => `${categories[key].label}: ${scores[key]}/6`)
    .join("\n");
  const subject = encodeURIComponent(`Selkeytestin tulokseni: ${primary.label}`);
  const body = encodeURIComponent(
    `Hei Riku,

Tein Artha Insightin palveluviestin selkeytestin.

Tulokseni: ${primary.label}
${scoreLines}

Sivuni tai profiilini: [liitä linkki tähän]

Voisitko katsoa, ymmärtääkö ulkopuolinen nopeasti, mitä myyn, kenelle ja miksi se kannattaa ostaa?

Terveisin,`
  );
  document.querySelector("#contact-link").href = `mailto:info@arthainsight.com?subject=${subject}&body=${body}`;

  showOnly(resultPanel);
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  document.querySelector("#result-title").focus?.({ preventScroll: true });
}

startButton.addEventListener("click", beginQuiz);
restartButton.addEventListener("click", beginQuiz);
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
