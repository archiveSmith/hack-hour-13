/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!Array.isArray(arr) || typeof n !== 'number') return false
  for (let j = 0; j < arr.length; j++) {
    for (let i = j + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) return true;
    }
  }
  return false
}

module.exports = twoSum;
let array = [2, 7, 11, 15]
let target = 9;

twoSum(array, target)
twoSum([3, 5, 2, -4, 8, 11], "stilly")