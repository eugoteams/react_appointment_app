/** @format */

/**
 * @param {*} sourceString
 * @param {*} subSring
 * @returns  true/false
 */
export const checkSubString = (sourceString, subSring) => {
  sourceString = String(sourceString).toLowerCase();
  subSring = String(subSring).toLowerCase();
  return sourceString.includes(subSring);
};
