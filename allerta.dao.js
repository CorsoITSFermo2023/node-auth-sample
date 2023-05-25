const { smartSelect, smartInsert, smartUpdate, smartDelete } = require("./db-smart");

const table = 'allerta';

/**
 * 
 * @param {Record<string, any>} where 
 * @returns Promise<Record[]>
 */
const listAllerte = (where) => smartSelect(table, where);

/**
 * 
 * @param {Record<string, any>} where 
 * @returns Promise<Record>
 */
const getAllerta = async (where) => {
  const [res] = await smartSelect(table, where);
  return res;
}

/**
 * 
 * @param {Record<string, any>} set 
 * @param {Record<string, any>} where 
 * @returns Promise<number>
 */
const updateAllerta = (set, where) => smartUpdate(table, set, where);

/**
 * 
 * @param {Record<string, any>} where 
 * @returns Promise<number>
 */
const deleteAllerta = (where) => smartDelete(table, where);

/**
 * 
 * @param {Record<string, any>} params 
 * @returns Promise<number>
 */
const insertAllerta = (params) => smartInsert(table, params);

module.exports = {
  insertAllerta,
  listAllerte,
  getAllerta,
  updateAllerta,
  deleteAllerta
}