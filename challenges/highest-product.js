/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   return array.sort((a, b) => { return b - a; })[1] + Math.max(...array);
 }

module.exports = highestProduct;
