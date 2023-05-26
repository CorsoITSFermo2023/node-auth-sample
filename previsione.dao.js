const { smartSelect, smartUpdate, smartDelete, smartInsert } = require("./db-smart");


const table = 'previsione';

/**
 * 
 * @param {Record<string, any>} where 
 * @returns Promise<Record[]>
 */
const listPrevisioni = (where) => smartSelect(table, where);

/**
 * 
 * @param {Record<string, any>} where 
 * @returns Promise<Record>
 */
const getPrevisione = async (where) => {
  const [res] = await smartSelect(table, where);
  return res;
}

/**
 * 
 * @param {Record<string, any>} set 
 * @param {Record<string, any>} where 
 * @returns Promise<number>
 */
const updatePrevisione = (set, where) => smartUpdate(table, set, where);

/**
 * 
 * @param {Record<string, any>} where 
 * @returns Promise<number>
 */
const deletePrevisione = (where) => smartDelete(table, where);

/**
 * 
 * @param {Record<string, any>} params 
 * @returns Promise<number>
 */
const insertPrevisione = (params) => smartInsert(table, params);

module.exports = {
  insertPrevisione,
  listPrevisioni,
  getPrevisione,
  updatePrevisione,
  deletePrevisione
}