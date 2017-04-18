/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

 function twoSum(arr, n) {
   if (!arr || !n) return false;
   for (let i = 0 ; i < arr.length; i += 1) {
     const curr = arr[i];
     const newArr = arr.slice(i + 1);
     for (let j = 0; j < newArr.length; j += 1) {
       if ((curr + newArr[j]) === n) return true;
     }
   }
   return false;
 }

module.exports = twoSum;
