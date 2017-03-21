/**
 * Given an array of integers, find the highest product
 you can get from three of the integers.
 */

function highestProduct(array) {
  var sorted = [];
  sorted = array.sort();

  var prod = 1;
  prod = (sorted[sorted.length-1] * sorted[sorted.length-2] * sorted[sorted.length -3])
  return prod;
}


module.exports = highestProduct;
