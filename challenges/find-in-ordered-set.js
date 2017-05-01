/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */


function findInOrderedSet(arr, target) {
  if (arr[0] === target) return true;
  const arrL = arr.slice(0, arr.length / 2);
  const arrR = arr.slice(arr.length / 2);
  if (arrR[0] > target) findInOrderedSet(arrL, target);
  else findInOrderedSet(arrR, target);
  return false;
}


module.exports = findInOrderedSet;