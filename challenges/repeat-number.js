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
  let num = {};
  for (let i = 0; i < array.length; i += 1) {
    if (num[array[i]]) return array[i];
    num[array[i]] = true;
  }
  return false;
}

module.exports = repeatNumbers;
