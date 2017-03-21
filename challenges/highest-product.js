/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (Array.isArray(array) || array.length < 3) return 0;
  let negnum = [];
  array.forEach(integer => {
    if (integer < 0) negnum.push(integer);
  });
  
  array.sort().reverse();
  
  if (negnum.length >= 2) {
    negnum.sort().reverse();
  } else {
    return array[0] * array[1] * array[2];
  }
  
  if (negnum[0] * negnum[1] * array[0] > array[0] * array[1] * array[2]) {
    return negnum[0] * negnum[1] * array[0];
  } else {
    return array[0] * array[1] * array[2];
  }
}


module.exports = highestProduct;
