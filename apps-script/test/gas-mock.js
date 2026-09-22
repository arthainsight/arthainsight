/* Kevyt Apps Script -ympäristön jäljitelmä, jolla Code.gs:n logiikan voi ajaa Nodessa. */
function makeSheet(name) {
  const rows = [];
  const sheet = {
    name,
    rows,
    appendRow: r => rows.push([...r]),
    setFrozenRows: () => {},
    getLastRow: () => rows.length,
    getRange: (row, col, numRows = 1, numCols = 1) => ({
      setValues: vals => { for (let i = 0; i < vals.length; i++) rows[row - 1 + i] = [...vals[i]]; },
      getValues: () => {
        const out = [];
        for (let i = 0; i < numRows; i++) {
          const src = rows[row - 1 + i] || [];
          out.push(src.slice(col - 1, col - 1 + numCols));
        }
        return out;
      },
      setValue: v => { (rows[row - 1] = rows[row - 1] || [])[col - 1] = v; },
      setFontWeight: () => {},
    }),
  };
  return sheet;
}

function install(ctx) {
  const sheets = {};
  const sent = [];
  ctx.SpreadsheetApp = {
    getActiveSpreadsheet: () => ({
      getSheetByName: n => sheets[n] || null,
      insertSheet: n => (sheets[n] = makeSheet(n)),
    }),
  };
  ctx.MailApp = { sendEmail: o => sent.push(o) };
  ctx.ContentService = {
    MimeType: { JSON: 'json' },
    createTextOutput: t => ({ _t: t, setMimeType() { return this; }, getContent() { return this._t; } }),
  };
  const props = {};
  ctx.PropertiesService = {
    getScriptProperties: () => ({
      getProperty: k => (k in props ? props[k] : null),
      setProperty: (k, v) => { props[k] = v; },
    }),
  };
  const kutsut = [];
  let vastausKoodi = 200;
  ctx.UrlFetchApp = {
    fetch: (url, opts) => {
      kutsut.push({ url, opts, runko: JSON.parse(opts.payload) });
      if (vastausKoodi === 'heitto') throw new Error('verkkovirhe');
      return { getResponseCode: () => vastausKoodi, getContentText: () => '{}' };
    },
  };
  ctx.console = console;
  return { sheets, sent, props, kutsut, setKoodi: k => { vastausKoodi = k; } };
}
module.exports = { install };
