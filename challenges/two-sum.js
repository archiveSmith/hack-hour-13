/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */
// Input: an array of numbers and target number.
// Output: return true if two numbers in input array sum up to target number || reutrn false.
// Egde Cases:
  // Check if input array is an array, if not return false.
  // Check length of arr, if zero return false.
  // check if target number is a number, if not return false.
// Loop through input array twice
  // first loop length will be length of arr - 1
  // second loop will start at index 1
  // Add index 0 with index 1 and set equal to sum variable.
  // If arr[i] + arr[j] equals target number return true.
  // Otherwise return false.

// const array = [1, 4, 5, 7, 3, 5];
// const n = 9;


function twoSum(arr, n) {
  if (!Array.isArray(arr)) return false;
  if (!Number(n)) return false;

  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === n) return true;
    }
  }
  return false;
}

module.exports = twoSum;
