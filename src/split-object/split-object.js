/**
 * Splits an object into multiple objects with one key/value pair each.
 * The new objects are returned in an array.
 * This function has no side-effects, the argument object is not modified.
 *
 * @param {object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 * @example
 * splitObject({ a: 1, b: 2, c: 3 });
 * // -> [{ a: 1 }, { b: 2 }, { c: 3 }]
 *
 * @example
 * splitObject({ name: 'robs', age: 25, tall: true, userName: 'sbor' });
 * // -> [{ name: 'robs }, { age: 25 }, { tall: true }, { userName: 'sbor' }]
 *
 * @example
 * splitObject({});
 * // -> []
 */

const splitObject = (toSeparate = {}) => {
  if (typeof toSeparate !== 'object') {
    throw new TypeError();
  } else {
    const result = Object.keys(toSeparate).map((element) => ({
      [element]: toSeparate[element],
    }));
    return result;
  }
};

module.exports = splitObject;
