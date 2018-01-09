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
  let expected = (array.length -1) * array.length / 2;
  let actual = 0;

  for (let i = 0; i < array.length; i += 1) {
    actual += array[i];
  }
  return actual - expected;
}


// first attempt:

// function repeatNumbers(array) {
//   let repeat = array.filter((item, index) => 
//     array.indexOf(item) !== index);
//   return repeat[0];
// }

module.exports = repeatNumbers;
