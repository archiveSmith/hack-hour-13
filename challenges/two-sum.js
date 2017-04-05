/*  Given an array of numbers and a target number, 
return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  return arr.length && (arr.slice(1).includes(n - arr[0]) || twoSum(arr.slice(1), n));
}

module.exports = twoSum;
