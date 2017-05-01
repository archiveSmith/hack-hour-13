/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */

function findInOrderedSet(arr, target) {
 // return arr.indexOf(target) !== -1 // O(n)
  if (arr.slice(0, Math.ceil(arr.length/2)).indexOf(target) !== -1) {
    return true;
  } else if (arr.slice(Math.ceil(arr.length/2)).indexOf(target) !== -1) {
    return true;
  } else return false;
  
}

module.exports = findInOrderedSet;

