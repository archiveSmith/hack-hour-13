/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */


function findInOrderedSet(arr, target) {
  if (!arr || arr.length === 0) return false;
  let middle = Math.floor(arr.length / 2);
  if (target === arr[middle]) return true;
  if (arr.length === 1) return false;
  if (target > arr[middle]) return findInOrderedSet(arr.slice(middle + 1, arr.length), target)
  if (target < arr[middle]) return findInOrderedSet(arr.slice(0, middle), target);
}


module.exports = findInOrderedSet;