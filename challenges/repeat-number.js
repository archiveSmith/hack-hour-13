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
  var maxVal = array[array.length - 1];
  var sum1 = 0;
  var sum2 = 0;
  for (i = 1; i <= maxVal; i += 1) {
    sum1 += i;
  }
  // console.log(sum1);
  var sum = array.reduce((sum2, element) => {
    return sum2 + element;
  }, 0);
  // console.log(sum);
  var repeatNo = sum - sum1;
  return repeatNo;
}

// var testArr = [1,2,2,3,4];
// console.log(repeatNumbers(testArr));

module.exports = repeatNumbers;
