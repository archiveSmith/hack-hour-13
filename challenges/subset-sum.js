/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  array = array.sort();
  console.log(array);
  var n = array.length;
  var pointerA = i;
  var pointerB = n - 1;
  for (var i = 0; i < array.length; i++) {
    sum = array[pointerA] + array[pointerB];
    if (sum < target) {
      pointerB--
    }else if(sum > target){
      pointerA++
    }else if(sum == target){
      return true;
    }else{
      return false;
    }
    console.log(sum);
  }
}

console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));
module.exports = subsetSum;
