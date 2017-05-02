/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */


function findInOrderedSet(arr, target) {
  return arr.some(item => item === target)   //O(n) time 
}

function findInOrderedSet2(arr, target) {
  let regex = new RegExp(target);
  let str = arr.join(',');  //has to loop to do this?
  return regex.test(str); 
}

function findInOrderedSet3(arr, target) {
  let halfIndex = Math.floor(arr.length / 2)
  let halfValue = arr[halfIndex];
  if (target === halfValue) {return true}
  if (arr.length < 2) {return false} 
  return target < halfValue ? 
    findInOrderedSet3(arr.slice(0, halfIndex), target) :
    findInOrderedSet3(arr.slice(halfIndex), target) 
}
///////////////////////////////////////////////////
console.log( findInOrderedSet3([1, 4, 7, 9, 13, 21], 13) )
// console.log( findInOrderedSet('4 he', 4) )



/*
sorted so...
  1. check if target is greater than middle item, then slice
  repeat with recursion (but this is slow)
  2. regex? regex.test(str); does test/split use a loop? 
  3. 
*/



module.exports = findInOrderedSet;