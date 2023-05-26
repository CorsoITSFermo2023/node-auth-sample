const { insert, update, remove, all } = require("./db")

/**
 * 
 * @param {string} table 
 * @param {Record<string, any>} params 
 * @returns {Promise<number | undefined>}
 */
const smartInsert = async (table, params) => {
  const sql = `INSERT INTO \`${table}\` (${Object.keys(params).join(', ')})
  VALUES (${Object.keys(params).map(one => '?').join(', ')})`;
  return await insert(sql, Object.values(params))
}

/**
 * 
 * @param {string} table 
 * @param {Record<string, any>} params 
 * @param {Record<string, any>} where 
 * @returns {Promise<number>}
 */
const smartUpdate = async (table, params, where) => {
  const sql = `UPDATE \`${table}\`
  SET ${Object.keys(params).map((key) => `${key} = ?`).join(', ')}
  WHERE ${Object.keys(where).map((key) => `${key} = ?`).join(' AND ')} `;
  console.log(sql);
  return update(sql, [ ...Object.values(params), ...Object.values(where) ])
}

/**
 * 
 * @param {string} table 
 * @param {Record<string, any>} where 
 * @returns {Promise<number>}
 */
const smartDelete = async (table, where) => {
  const sql = `DELETE FROM \`${table}\`
  WHERE ${Object.keys(where).map((key) => `${key} = ?`).join(' AND ')}`;
  return remove(sql, Object.values(where))
}

/**
 * 
 * @param {string} table 
 * @param {Record<string, any>} where 
 * @returns {Promise<number>}
 */
const smartSelect = async (table, where) => {
  const sql = `SELECT * FROM \`${table}\`
  WHERE ${Object.keys(where).map((key) => `${key} = ?`).join(' AND ')}`;
  return all(sql, Object.values(where))
}

module.exports = {
  smartSelect,
  smartDelete,
  smartUpdate,
  smartInsert,
}