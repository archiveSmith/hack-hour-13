/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// input -> an array of integers both pos and neg.
// output -> the max sum of all subarrays
// have a result variable to hold max
// loop through input array
// nested loop that will sum current index with all other indexes to get value
  // store curr max as result
  // if curr max is greater than result overwrite

function maxSubarray(arr) {
  if (!Array.isArray(arr)) return 'Input is not an array';
  let maxSum = 0;
  let currSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    currSum = currSum + arr[i];
    if (currSum < 0) {
      currSum = 0;
    }
    if (maxSum < currSum) {
      maxSum = currSum;
    }
  }
  return maxSum;
}

module.exports = maxSubarray;
