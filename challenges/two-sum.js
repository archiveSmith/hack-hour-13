/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!Array.isArray(arr) || typeof n !== 'number') return 'Invalid input';
  let output = false;
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === n) output = true;
    }
  }
  return output;
}

module.exports = twoSum;
