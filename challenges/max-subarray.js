/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  function sumArray(arr) {
    return arr.reduce((acc, cur) => { return acc + cur }, 0);
  }
  let start = 0;
  let end = 0;
  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (sumArray(arr.slice(start, end)) >= result && sumArray(arr.slice(end, arr.length - 1)) > 0) {
      result = sumArray(arr.slice(start, end));
      end += 1;
    }
    if (sumArray(arr.slice(start, end)) < result && sumArray(arr.slice(end, arr.length)) > 0) {
      start += 1;
      end += 1;
    }
    if (sumArray(arr.slice(end, arr.length)) <= 0 || (end += 1) === arr.length) {
      end += 1;
      return sumArray(arr.slice(start, end));
    }
  }
}

module.exports = maxSubarray;
