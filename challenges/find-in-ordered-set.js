/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */

// O(log(n)) time complexity
function findInOrderedSet(arr, target, start = 0, end = arr.length) {
  // find the location in the array where index is half
  let halfIndex = Math.floor(((end - start)/2) + start);

  // if the array value at half is the same as target, return true
  // else if the array is only the length of 1 and we still cannot find the value, return false
  if (arr[halfIndex] === target) {
    return true;
  } else if (end - start === 1) {
    return false;
  }

  // check to see whether the value is in the first half or the second half and then reset the params
  if (target < arr[halfIndex]) {
    start = 0;
    end = halfIndex;
  } else {
    start = halfIndex;
    end = arr.length;
  }

  // return a recursive solution with the start and end params
  return findInOrderedSet(arr, target, start, end);
}


module.exports = findInOrderedSet;