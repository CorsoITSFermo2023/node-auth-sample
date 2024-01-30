const { run } = require("./db");

async function initStruct() {
  await run(`CREATE TABLE IF NOT EXISTS utente (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username STRING,
    password STRING
  )`);
  await run(`CREATE TABLE IF NOT EXISTS token (
    token STRING PRIMARY KEY,
    id_user INTEGER,
    exp STRING
  )`);
}
module.exports = initStruct
