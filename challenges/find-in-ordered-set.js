/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */

// find num in O(log n) time by BST-like traversal of array
function findInOrderedSet(arr, target) {
  // base case: empty array, means unable to find target
  if (!arr.length) return false;
  
  // start from middle and search recursively
  const mid = Math.floor(arr.length/2);

  // check mid
  if (arr[mid] === target) return true;

  // o.w., search w/in correct half of array
  const half = (target < arr[mid]) ? arr.slice(0, mid) : arr.slice(mid + 1);
  return findInOrderedSet(half, target);
}

module.exports = findInOrderedSet;