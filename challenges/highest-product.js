/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let arr = array.sort((a, b) => {
    return b - a;
  })
  return Math.max((arr[0] * arr[1] * arr[2]), (arr[0] * arr[arr.length - 1] * arr[arr.length - 2]))
}
module.exports = highestProduct;
