// Done, time complexity problem so i can be done better

/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */

function findInOrderedSet(arr, target) {
  var a = 0;
  var z = arr.length;

  for (i = 0; i < arr.length / 2; i++) {
    if (arr[a] === target) {
      return true;
    } else if (arr[z] === target) {
      return true;
    }
    if (arr[a] < target) {
      a++;
    }
    if (arr[z] > target) {
      z--;
    }
  }
  return false;
}

function findInOrderedSet(arr, target) {
  if (!arr || arr.length === 0) {
    return false;
  }
  let mid = Math.floor(arr.length/2);

}

var nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4));
console.log(findInOrderedSet(nums, 2));

module.exports = findInOrderedSet;
