/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (n === 0) return true;
  if (!arr.length) return false;
  return twoSum(arr.slice(1), n) || arr.slice(1).includes(n - arr[0]);
}

module.exports = twoSum;
