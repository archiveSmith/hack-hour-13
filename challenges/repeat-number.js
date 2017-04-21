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
  if (!Array.isArray(array)) return 'Invalid input';
  let output;
  array.reduce((acc, cur) => {
    if (acc === cur) output = cur;
    return cur;
  });
  return output;
}

module.exports = repeatNumbers;
