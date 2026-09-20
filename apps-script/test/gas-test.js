const fs = require('fs');
const vm = require('vm');
const { install } = require('./gas-mock.js');

const R = require('path').join(__dirname, '..') + '/';
let pass = 0, fail = 0;
function check(name, cond, extra) {
  if (cond) { pass++; console.log('  OK   ' + name); }
  else { fail++; console.log('  FAIL ' + name + (extra ? '  → ' + JSON.stringify(extra) : '')); }
}

function boot() {
  const ctx = {};
  const env = install(ctx);
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(R + 'Viestit.gs', 'utf8'), ctx);
  vm.runInContext(fs.readFileSync(R + 'Code.gs', 'utf8'), ctx);
  return { ctx, env };
}
const post = (ctx, obj) => JSON.parse(ctx.doPost({ postData: { contents: JSON.stringify(obj) } }).getContent());

console.log('\n1. Nimetön vastaus');
{
  const { ctx, env } = boot();
  const r = post(ctx, { tyyppi: 'vastaus', aikaleima: '2026-09-20T10:00:00Z', ensisijainen: 'offer',
    toissijainen: '', pisteet: { market: 0, offer: 6, message: 1, trust: 1, acquisition: 1, sales: 1 },
    vastaukset: [0,3,0,1,0,1,0,3,1,0,1,0] });
  const s = env.sheets['Vastaukset'];
  check('vastaus hyväksytään', r.ok === true, r);
  check('otsikkorivi + datarivi', s.rows.length === 2, s.rows.length);
  check('pisteet oikeissa sarakkeissa', s.rows[1][4] === 6 && s.rows[1][3] === 0, s.rows[1]);
  check('vastaukset talletettu', s.rows[1][9] === '0,3,0,1,0,1,0,3,1,0,1,0', s.rows[1][9]);
  check('EI sähköpostia rivillä', !JSON.stringify(s.rows).includes('@'), s.rows[1]);
  check('ei lähetettyjä viestejä', env.sent.length === 0);
  check('Liidit-välilehteä ei luotu', !env.sheets['Liidit']);
}

console.log('\n2. Liidi + raportti');
{
  const { ctx, env } = boot();
  const r = post(ctx, { tyyppi: 'liidi', aikaleima: '2026-09-20T10:00:00Z', sahkoposti: 'asiakas@yritys.fi',
    ensisijainen: 'trust', toissijainen: 'offer', suostumus: true, pisteet: {} });
  const s = env.sheets['Liidit'];
  check('liidi hyväksytään', r.ok === true, r);
  check('rivi tallennettu', s.rows.length === 2 && s.rows[1][1] === 'asiakas@yritys.fi', s.rows[1]);
  check('suostumus kirjattu', s.rows[1][4] === 'kyllä', s.rows[1][4]);
  check('raportti lähetetty -leima asetettu', !!s.rows[1][5], s.rows[1][5]);
  check('yksi sähköposti lähti', env.sent.length === 1, env.sent.length);
  check('oikea vastaanottaja', env.sent[0]?.to === 'asiakas@yritys.fi');
  check('aihe vastaa jarrua', env.sent[0]?.subject === 'Raporttisi: Luottamus ja todisteet', env.sent[0]?.subject);
  check('runko on luottamusraportti', /luottamus ja todisteet/i.test(env.sent[0]?.body || ''));
  check('peruutusohje mukana', /lopeta/.test(env.sent[0]?.body || ''));
  check('tietosuojalinkki mukana', /tietosuoja\.html/.test(env.sent[0]?.body || ''));
  check('Vastaukset-välilehteä ei luotu', !env.sheets['Vastaukset']);
}

console.log('\n3. Virheellinen sähköposti');
{
  const { ctx, env } = boot();
  const r = post(ctx, { tyyppi: 'liidi', sahkoposti: 'ei-email', ensisijainen: 'offer', suostumus: true });
  check('hylätään', r.ok === false, r);
  check('ei riviä', !env.sheets['Liidit'], Object.keys(env.sheets));
  check('ei sähköpostia', env.sent.length === 0);
}

console.log('\n4. Sama osoite kahdesti');
{
  const { ctx, env } = boot();
  post(ctx, { tyyppi: 'liidi', sahkoposti: 'sama@yritys.fi', ensisijainen: 'offer', suostumus: true });
  post(ctx, { tyyppi: 'liidi', sahkoposti: 'SAMA@yritys.fi', ensisijainen: 'sales', suostumus: true });
  const s = env.sheets['Liidit'];
  check('vain yksi datarivi', s.rows.length === 2, s.rows.length);
  check('jarru päivittyi uusimpaan', s.rows[1][2] === 'sales', s.rows[1][2]);
  check('kaksi raporttia lähti', env.sent.length === 2, env.sent.length);
}

console.log('\n5. Jatkoviestien ajoitus');
{
  const days = n => new Date(Date.now() - n * 86400000).toISOString();
  for (const [päiviä, odotettu] of [[0, null], [2, 'Miksi yhden jarrun korjaaminen riittää'],
                                    [5, 'Miksi yhden jarrun korjaaminen riittää']]) {
    const { ctx, env } = boot();
    post(ctx, { tyyppi: 'liidi', sahkoposti: 'a@b.fi', ensisijainen: 'offer', suostumus: true });
    env.sheets['Liidit'].rows[1][5] = days(päiviä);
    env.sent.length = 0;
    ctx.lahetaJatkoviestit();
    const got = env.sent[0]?.subject ?? null;
    check(`päivä ${päiviä} → ${odotettu ?? 'ei viestiä'}`, got === odotettu, got);
  }
  // Koko sarja peräkkäisinä ajoina
  const { ctx, env } = boot();
  post(ctx, { tyyppi: 'liidi', sahkoposti: 'a@b.fi', ensisijainen: 'offer', suostumus: true });
  env.sent.length = 0;
  const aiheet = [];
  for (const d of [2, 5, 9, 10]) {
    env.sheets['Liidit'].rows[1][5] = days(d);
    ctx.lahetaJatkoviestit();
    aiheet.push(env.sent.map(m => m.subject).pop() ?? null);
  }
  check('sarja etenee 2→3→4 eikä toistu', env.sent.length === 3, aiheet);
  check('viimeinen on diagnoosikutsu', /Mitä diagnoosi tekee/.test(env.sent[2]?.subject || ''), env.sent[2]?.subject);
  check('varauslinkki viimeisessä', /calendar\.app\.google/.test(env.sent[2]?.body || ''));
  check('jarrun nimi personoitu', /Tarjous/.test(env.sent[2]?.body || ''));
}

console.log('\n6. Peruttu');
{
  const { ctx, env } = boot();
  post(ctx, { tyyppi: 'liidi', sahkoposti: 'a@b.fi', ensisijainen: 'offer', suostumus: true });
  env.sheets['Liidit'].rows[1][5] = new Date(Date.now() - 5 * 86400000).toISOString();
  env.sheets['Liidit'].rows[1][9] = 'lopeta 21.9.';
  env.sent.length = 0;
  ctx.lahetaJatkoviestit();
  check('ei viestejä perutulle', env.sent.length === 0, env.sent.map(m => m.subject));

  // Perunut täyttää lomakkeen uudelleen
  post(ctx, { tyyppi: 'liidi', sahkoposti: 'a@b.fi', ensisijainen: 'sales', suostumus: true });
  check('peruutusmerkintä säilyy uudelleentilauksessa',
    env.sheets['Liidit'].rows[1][9] === 'lopeta 21.9.', env.sheets['Liidit'].rows[1][9]);
}

console.log('\n7. Tuntematon jarru');
{
  const { ctx, env } = boot();
  post(ctx, { tyyppi: 'liidi', sahkoposti: 'a@b.fi', ensisijainen: 'ei_selvaa', suostumus: true });
  check('ei_selvaa saa oman raportin', env.sent[0]?.subject === 'Raporttisi: Ei selvää pääjarrua', env.sent[0]?.subject);
  const { ctx: c2, env: e2 } = boot();
  post(c2, { tyyppi: 'liidi', sahkoposti: 'a@b.fi', ensisijainen: 'roskaa', suostumus: true });
  check('roskasyöte ei kaada', e2.sent.length === 1, e2.sent[0]?.subject);
}

console.log('\n8. Rikkinäinen pyyntö');
{
  const { ctx } = boot();
  check('tyhjä pyyntö', ctx.doPost(null).getContent().includes('false'));
  check('rikkinäinen JSON', JSON.parse(ctx.doPost({ postData: { contents: '{ rikki' } }).getContent()).ok === false);
  check('tuntematon tyyppi', post(ctx, { tyyppi: 'outo' }).ok === false);
  check('doGet vastaa', JSON.parse(ctx.doGet().getContent()).ok === true);
}

console.log(`\n=== ${pass} OK, ${fail} FAIL ===`);
process.exit(fail ? 1 : 0);
