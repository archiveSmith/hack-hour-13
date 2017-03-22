/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    
    if (array.length < 3 || !Array.isArray(array)) {
      return 0;
    }
    
    array.sort((a, b) => { return a - b });
    let neg = array[0] * array[1] * array[array.length - 1];
    
    array.sort((a, b) => { return b - a });
    let pos = array[0] * array[1] * array[2];

    if (neg > pos) {
      return neg;
    } else {
      return pos;
    }
}


module.exports = highestProduct;
