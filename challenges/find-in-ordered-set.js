/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */


function findInOrderedSet(arr, target) {
  let n = Math.floor((arr.length) / 2);
  const end = arr.length;
  while (n > -1 || n < end) {
    if (target > arr[n]) {
      n = Math.floor((end - n) / 2) + n;
    } else if (target < arr[n]) {
      n = Math.floor(n / 2);
    } else {
      return true;
    }
    if (n === 0 && arr[n] !== target) return false;
  }
  return false;
}

module.exports = findInOrderedSet;
