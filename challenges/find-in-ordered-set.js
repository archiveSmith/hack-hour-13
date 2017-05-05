/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
 */
var nums = [1, 4, 6, 7, 9, 17, 45]


// function findInOrderedSet(arr, target) {
//   return arr.includes(target);
// }


function findInOrderedSet(arr, target){
 //check for undefined or empty array
  if (arr.length < 1 || !arr) return false 
 // find middle index of array
 let mid = Math.floor(arr.length/2); 
 //if middle index has target return true
 if(arr[mid] === target) return true;
 // examine a slice of the array conditioned by target's comparison 
return arr[mid] > target ?findInOrderedSet(arr.slice(0, mid), target) : findInOrderedSet(arr.slice(mid +1), target)


}

console.log(findInOrderedSet(nums, 4));//  -> true
console.log(findInOrderedSet(nums, 2));  //-> false

module.exports = findInOrderedSet;