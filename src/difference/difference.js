/* eslint-disable max-len */
/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]); //  [1]
 *
 * @example
 *
 * difference([1, 2, 1], [2, 3]); //  [1]
 */
// const difference = (array=[], values=[]) => {
// const newArr = array.filter((element, index) => {
//   values.indexOf(element) === index;
// });
// return newArr;
// }
// console.log (difference([1, 2, 1], [2, 3]));

const difference = (array = [], values = []) => {
  const newArray = array.filter((item) => !values.includes(item));
  return newArray;
};

module.exports = difference;
