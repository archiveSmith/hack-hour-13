/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array = array.sort().slice(array.length - 3, array.length);;
  return product = array.reduce(function (acc, val) {
    return acc * val;
  }, 1);
}

console.log(highestProduct([1, 2, 5, 3, 8, 6, 5, 7, 9]));
console.log(highestProduct([-1, -2, -5, -3, -8, -6, -5, -7, -9]));
console.log(highestProduct([1, 2, 5, 3, -8, 6, 5, -7, -9]));
module.exports = highestProduct;
