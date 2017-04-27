/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 * [1, -5, 10, -10, 8, -12]
 *  1, -4, 6,  -4,  4, -8
 * --> arr.slice((1+1), 2) = [10]
 * 
 * [1, -2, 3, 10, -4, -10, 7, 2, -5]
 *  1, -1, 2, 12, 8,  -2,  5, 7,  2
 *  -1 -> 12 or -2 -> 7
 * 13 or 9
 * --> arr.slice((1+1, 3)) = [3,10]
 * 
 * [15,20,-36,36]
 *  (0)15,35,-1,35
 * --> arr.slice()
 */

function maxSubarray(arr) {
  /**
   * I want to find the sequence of nums within arr that add up to the highest positive sum.
   * --> get max subarray length after any occurrences of negative sum
   */

  let
    // current overall sum
    currSum = 0,
    // current maximum subarray sum
    currMaxSum = -Infinity;

  arr.forEach((num) => {
    currSum += num;
    
    // replace maxSum with highest sum - lowest sum so far
    currMaxSum = Math.max(currMaxSum, currSum);
    
    // if sum becomes negative, check for a new subarray after it
    if (currSum < 0) currSum = 0;
  });

  return currMaxSum;
}

module.exports = maxSubarray;
