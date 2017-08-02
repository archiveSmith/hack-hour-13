/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */

 //O(log n);

function findInOrderedSet(arr, target) {
  function searchHalf(start, end) {
    
    let mid = Math.floor((start + end) / 2); //can't use array.length here b/c mid must adjust either down or up as we look at smaller pieces of array.
    if (arr[mid] === target) return true;
    if (start + 1 > end) return false; 
    
    if (target < arr[mid]) {
      return searchHalf(start, mid - 1);
    } else {
        return searchHalf(mid + 1, end);
    }
  }
  return searchHalf(0, arr.length - 1); 
}

module.exports = findInOrderedSet;

//iterative:
// function binarySearch(target, nums) {
//     // see if target appears in nums

//     var start = -1;
//     var end = nums.length;
    

//     // if there isn't at least 1 index between start and end,
//     // we've run out of guesses and the number must not be present
//     while (start + 1 < end) {

//         // find the index ~halfway between the start and end
//         // we have to round down, to avoid getting a "half index"
       
//         var mid = Math.floor((start + end) / 2);
//         console.log(mid);

//         if (nums[mid] === target) {
//             return true;
//         }

//         if (nums[mid] > target) {

//             // target is to the left, so move end to the left
//              end = mid;

//         } else {

//             // target is to the right, so move start to the right
//            start  = mid;
//         }
//     }

//     return false;
// }




// // return arr.indexOf(target) !== -1 // O(n)

//still O(n) because worst case, you still have to search through each half.
//   if (arr.slice(0, Math.ceil(arr.length/2)).indexOf(target) !== -1) {
//     return true;
//   } else if (arr.slice(Math.ceil(arr.length/2)).indexOf(target) !== -1) {
//     return true;
//   } else return false;
  