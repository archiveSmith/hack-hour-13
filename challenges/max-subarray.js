/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let sum = 0;
  let subArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j <= arr.length; j += 1) {
      subArr.push(arr.slice(i,j))
    }
  }
  const result = subArr.reduce((a, b) => {
    sum = 0;
    b.forEach((value) => {
      sum += value;
    })
    if (sum > a) return sum
    else return a
  }, 0);
  return result;
}

module.exports = maxSubarray;


