/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let placeHolder = {};

  for (let i = 0; i < array.length; i++) {
    if (placeHolder[array[i]] === undefined) {
      placeHolder[array[i]] = array[i];
    }
    else {
      return placeHolder[array[i]];
    }
  }
}

console.log(repeatNumbers([1, 2, 7, 7, 3, 4, 5, 6]));
module.exports = repeatNumbers;
