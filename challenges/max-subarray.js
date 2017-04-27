/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let currSum = arr[0];
  let maxSum = currSum;

  for (let i = 1; i < arr.length; i += 1) {
    currSum += arr[i];
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    if (arr[i] > maxSum) {
      maxSum = arr[i];
      currSum = arr[i];
    }
  }
  return maxSum;

  // let currentMax = Number.NEGATIVE_INFINITY;
  // let finalMax = Number.NEGATIVE_INFINITY;

  // for (let i = 0; i < arr.length; i += 1) {
  //   currentMax = Math.max(arr[i], currentMax + arr[i]);
  //   finalMax = Math.max(finalMax, currentMax);
  // }
  // return finalMax;
}

module.exports = maxSubarray;
