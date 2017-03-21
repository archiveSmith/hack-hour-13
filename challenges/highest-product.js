/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if (array.length < 3) {
    return 0;
  }

  array = array.sort(function(a, b) {
    return a - b;
  });
  
  let firstProduct = array[0] * array[1] * array[array.length - 1];
  let secondProduct = array[array.length - 1] * array[array.length - 2] * array[array.length -3];
  
  return Math.max(firstProduct, secondProduct);
}


module.exports = highestProduct;
