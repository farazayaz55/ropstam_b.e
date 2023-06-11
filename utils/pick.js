/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */
const pick = (object, keys) => {
    return keys.reduce((obj, key) => {
      if (object && Object.prototype.hasOwnProperty.call(object, key)) {
        // eslint-disable-next-line no-param-reassign
        obj[key] = object[key];
      }
      return obj;
    }, {});
  };
  
  module.exports = pick;
  
  //returns object with only the keys mentioned
  
  // const obj = {
  //   a: 1,
  //   b: 2
  // };
  
  // const key = 'a';
  
  // const pickedObj = pick(obj, [key]);
  
  // console.log(pickedObj); // Output: { a: 1 }
  