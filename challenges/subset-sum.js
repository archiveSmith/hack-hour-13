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
  // if array contains nothing, return error msg
  if (array.length === 0) return [];
  if (arguments.length < 2) return 'Please input array and target value';
  if (typeof target !== 'number') return false;
  // sum array
  array.sort((a, b) => b - a);
  let total = array.reduce((a, b) => a + b);
  // subtract from largest to smallest
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === target) return true;
    total -= array[i];
    if (total < target) {
      total += array[i];
    }
    if (total === target) return true;
  }
  // as long as result is smaller than target, keep subtracting until no more
  return false;
}

module.exports = subsetSum;
