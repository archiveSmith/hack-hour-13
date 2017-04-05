/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // Invalid input
  if (!arr || isNaN(n) || !Array.isArray(arr) || !arr.length) return false;

  // map num to their complement (target - num) in obj
  var complements = {};
  arr.forEach(num => complements[n-num] = num);

  // check each num to see if they have their complement in obj
  // using isNaN for cases where complement is 0
  return arr.some(num => !isNaN(complements[num]));
}

// var nums = [2, 3, 4, 10, -1];
// var res = twoSum(nums, 1);
// console.log(res);

module.exports = twoSum;
