/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let bool = false;
  arr.forEach((num, i) => {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === n) bool = true;
    }
  });
  return bool;
}

module.exports = twoSum;
