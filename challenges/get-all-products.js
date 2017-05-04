/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  const result = [];
    for (let j = 0; j < array.length; j++) {
      const combos = [];
      for (let i = 0; i < array.length; i++) {
        //push each element into array EXCEPT for j
        if (i !== j) {
          combos.push(array[i]);
        }
      }
      //multiply contents of combos before pushing;
      const product = combos.reduce((a, b) => (a * b));
      result.push(product);
    }
  return result;
}

module.exports = getAllProducts;
