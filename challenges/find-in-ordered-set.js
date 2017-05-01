/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */


function findInOrderedSet(arr, target) {
  if (target === arr[0]) return true;
  if (arr.length === 1) return false;
  const arrSize = Math.floor(arr.length/2);
  if (target >= arr[arrSize]) return findInOrderedSet(arr.slice(arrSize), target)
  else return findInOrderedSet(arr.slice(0, arrSize), target)
}

module.exports = findInOrderedSet;