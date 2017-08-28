/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */



function findInOrderedSet(arr, target) {
	return arr.includes(target);
}

//binary search is logaritmic so better than linear
function binSearch(arr, toSearch) {
  low = 0;
  high = arr.length - 1;
  while (low <= high) {
    med = Math.floor((low + high) / 2);
    if (arr[med] == toSearch) {
      return med; // or true
    } else if (arr[med] < toSearch) {
      low = med + 1; // your low point moves to the right
    } else {
      high = med - 1; // your high point moves to the left
    }
  }
  return -1; // or false
}


module.exports = findInOrderedSet;