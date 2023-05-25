const { run } = require("./db");

async function initStruct() {
  await run(`CREATE TABLE IF NOT EXISTS previsione (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    previsione STRING,
    temperatura REAL,
    umidita REAL,
    uv REAL,
    data STRING,
    fascia_oraria STRING,
    provincia STRING
  )`);
  await run(`CREATE TABLE IF NOT EXISTS allerta (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descrizione STRING,
    data_inizio STRING,
    data_fine STRING
  )`);
  await run(`CREATE TABLE IF NOT EXISTS lettura (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    previsione STRING,
    dataora STRING,
    provincia STRING
  )`);
}

initStruct()