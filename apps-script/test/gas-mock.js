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
  ctx.ScriptApp = { getProjectTriggers: () => [], newTrigger: () => ({ timeBased: () => ({ atHour: () => ({ everyDays: () => ({ create: () => {} }) }) }) }) };
  ctx.console = console;
  return { sheets, sent };
}
module.exports = { install };
