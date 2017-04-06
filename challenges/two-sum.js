/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr.indexOf(n - arr[i]) !== -1) {
      if (arr[i] * 2 === n && i === arr.lenght-1) return false;
      if (arr[i] * 2 === n && arr[i] !== arr[i+1]) {
        return false;
      } else {
        return true;
      }
    }
  }
  return false;
}

module.exports = twoSum;
