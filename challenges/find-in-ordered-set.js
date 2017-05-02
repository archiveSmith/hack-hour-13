/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */

// o(n)
// function findInOrderedSet(arr, target) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === target) return true;
//   }
//   return false;
// }

function findInOrderedSet(arr, target) {
  let floor = Math.floor(arr.length / 2);
  
  if (target === arr[floor]) return true;
  if (arr.length === 1) return false;
  
  
  if (target >= arr[floor]) return findInOrderedSet(arr.slice(floor), target);
  if (target < arr[floor]) return findInOrderedSet(arr.slice(0, floor), target);
}

// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 4));  // -> true
// console.log(findInOrderedSet(nums, 2));  // -> false

module.exports = findInOrderedSet;