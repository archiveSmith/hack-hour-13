/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (arr.constructor !== Array) {
    return false;
  }

  let maxSum = 0;
  let currSum = 0;

  // at any point where the values added up to that point are not negative, is a positive case
  for (let i = 0; i < arr.length; i += 1) {
    currSum += arr[i];
    if (currSum < 0) {
      currSum = 0;
    }
    if (maxSum < currSum) {
      maxSum = currSum;
    }
  }

  return maxSum;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
console.log(maxSubarray([15,20,-5,10]));
console.log(maxSubarray([5,5,-9,5,6]));

module.exports = maxSubarray;
