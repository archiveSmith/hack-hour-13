/**
 * Given an array of integers, find the highest product
 you can get from three of the integers.
 */

function highestProduct(array) {
  // if(array.length < 3){
  //   return 0;
  // }
  //
  // var sorted = [];
  // sorted = array.sort();
  //
  // var prod = 1;
  // prod = (sorted[sorted.length-1] * sorted[sorted.length-2] * sorted[sorted.length-3])
  // return prod;

  var prod = 0;

  for (var i=0; i < array.length-2; i++) {
    for (var j=i+1; j < array.length - 1; j++) {
      for (var k=j+1; k < array.length; k++) {
        var tempProd = array[i] * array[j] * array[k];

        if (tempProd > prod) {
          prod = tempProd;
        }
      }
    }
  }

  return prod;
}


module.exports = highestProduct;
