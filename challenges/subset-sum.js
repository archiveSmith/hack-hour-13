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
//1. find all possible combinations of array
//2. find sum of thoose combinations
//3. if sum === target return true, else return false
  function x(index, sum) {
    if (sum == target) {
      return true;
    } else if (index >= array.length) {
      return false;
    } else {
      return x(index + 1, sum) || x(index + 1, sum + array[index]);
    }
  }

  return x(0, 0);
}

module.exports = subsetSum;
