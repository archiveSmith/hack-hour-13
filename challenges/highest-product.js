/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // array length >= 3
  if (!array.length) return 0;
  
  // arrow function for getting product of array
  var toProd = (prod, num) => prod * num;
  if (array.length <= 3) return array.reduce(toProd);

  // sort by value
  var sorted = array.sort((a, b) => a - b);

  // variable for potential product of two highest negatives
  var negProd;
  // if two negative values at beginning...
  if (sorted[0] < 0 && sorted[1] < 0) {
    // set product of two highest negatives
    negProd = sorted[0] * sorted[1];
  }

  // product of three last items
  var threeLastProd = array.slice(-3).reduce(toProd);
  return (negProd === undefined) ?
    threeLastProd :
    Math.max(threeLastProd, negProd * sorted[sorted.length - 1]);
}

// var my = require('./myLibrary');

// // edge cases
// my.testCase(highestProduct([]), 0);
// my.testCase(highestProduct([4]), 4);
// my.testCase(highestProduct([4,4]), 16);
// my.testCase(highestProduct([4,4,4]), 64);

// // only nonnegative
// my.testCase(highestProduct([2,3,0,1,6]), 36);
// my.testCase(highestProduct([2,30,0,1,50,10,45]), 67500);

// // with negatives
// my.testCase(highestProduct([-1,0,1]), 0);
// my.testCase(highestProduct([-5,0,2,3]), 0);

// // threeLastProd > negProd * highest pos 
// my.testCase(highestProduct([4,8,9,13,11,-15,-2,0]), 1287);

// // threeLastProd < negProd * highest pos 
// my.testCase(highestProduct([4,-13,-11,-15,2,1]), 780);

// // all negatives
// my.testCase(highestProduct([-1,-4,-5,-9]), -20);

module.exports = highestProduct;
