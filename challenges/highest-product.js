/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  return array.sort((a,b) => b - a).slice(0, 3).reduce((acc, curr) => acc * curr, 1);
}
module.exports = highestProduct;
