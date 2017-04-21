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
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === array[i + 1]) return array[i];
  }
}

// function repeatNumbers(array) {
//   let result = 0;
//   array.sort((a, b) => {
//     if (a === b) result = a;
//   });
//   return result;
// }

module.exports = repeatNumbers;
