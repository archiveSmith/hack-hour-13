/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length - 1; i+= 1) {
    if (arr.indexOf(n - arr[i]) != -1 && n - arr[i] != arr[i]) return true;
  }
  return false;
}  

module.exports = twoSum;

//more efficient than using indexOf:
// function twoSum (n, array) {
//   const obj = {};
//   for (let i = 0; i < array.length; i++) {
//     if (obj[array[i]] && (obj[array[i]] != array[i])) return true;
//     else {
//       obj[n - array[i]] = array[i];
//     }
//   }
//   return false;
// }

