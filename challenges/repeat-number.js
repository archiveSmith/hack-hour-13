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
  const max = array.length - 1;
  let theoreticalTotal = (max * max + max) / 2;
  let actualTotal = array.reduce((acc, curr) => acc += curr, 0);
  return actualTotal - theoreticalTotal;
}

module.exports = repeatNumbers;
