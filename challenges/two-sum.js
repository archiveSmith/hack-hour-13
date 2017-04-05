/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  arr.sort();
  // find the sum of the first element and the last element
  // have two pointers, at the beginning and the end of the array
  // if the sum before is greater than the target element, then move the last pointer backwards by one
  // if the sum is less than the target element, then move the first pointer forwards by one
  var L = arr.length - 1;
  var sum;
  var pointerA = 0;
  var pointerB = L;
  for (var i = 0; i < L; i += 1) {
    sum = arr[pointerA] + arr[pointerB];
    if (sum === n) {
      return true;
    } else if (sum > n) {
      pointerB -= 1;
    } else if (sum < n) {
      pointerA += 1;
    }
    if (pointerA === pointerB) return false;
  }
}

var testArr = [1, 2, 7, 8];
console.log(twoSum(testArr, 7));

module.exports = twoSum;
