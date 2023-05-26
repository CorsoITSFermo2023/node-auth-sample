const { smartSelect, smartInsert, smartUpdate, smartDelete } = require("./db-smart");

const table = 'lettura';

/**
 * 
 * @param {Record<string, any>} where 
 * @returns Promise<Record[]>
 */
const listLetture = (where) => smartSelect(table, where);

/**
 * 
 * @param {Record<string, any>} where 
 * @returns Promise<Record>
 */
const getLettura = async (where) => {
  const [res] = await smartSelect(table, where);
  return res;
}

/**
 * 
 * @param {Record<string, any>} set 
 * @param {Record<string, any>} where 
 * @returns Promise<number>
 */
const updateLettura = (set, where) => smartUpdate(table, set, where);

/**
 * 
 * @param {Record<string, any>} where 
 * @returns Promise<number>
 */
const deleteLettura = (where) => smartDelete(table, where);

/**
 * 
 * @param {Record<string, any>} params 
 * @returns Promise<number>
 */
const insertLettura = (params) => smartInsert(table, params);

module.exports = {
  insertLettura,
  listLetture,
  getLettura,
  updateLettura,
  deleteLettura
}