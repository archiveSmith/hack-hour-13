/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */

 //O(log n);
 //does not work for neg nunbers!!
function findInOrderedSet(arr, target) {
  function searchHalf(start, end) {
    
    let mid = Math.floor((start + end) / 2); //can't use array.length here b/c mid must adjust either down or up as we look at smaller pieces of array.
    if (arr[mid] === target) return true;
    if (end === start) return false; 
    
    if (target < arr[mid]) {
      return searchHalf(start, mid - 1);
    } else {
        return searchHalf(mid + 1, end);
    }
  }
  return searchHalf(-1, arr.length); 
}

module.exports = findInOrderedSet;

// // return arr.indexOf(target) !== -1 // O(n)

//still O(n) because worst case, you still have to search through each half.
//   if (arr.slice(0, Math.ceil(arr.length/2)).indexOf(target) !== -1) {
//     return true;
//   } else if (arr.slice(Math.ceil(arr.length/2)).indexOf(target) !== -1) {
//     return true;
//   } else return false;
  