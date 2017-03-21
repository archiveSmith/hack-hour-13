/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length === 0) {
      return 0;
    }
    if (array.length === 1) {
      return array[0];
    }
    if (array.length === 2) {
      return array[0] * array[1];
    }
    let arr = array.sort(function(a, b) {
      return a - b;
    });

    let x = arr.pop();
    let y = arr.pop();
    let z = arr.pop();
    
    return x * y * z;
}


module.exports = highestProduct;
