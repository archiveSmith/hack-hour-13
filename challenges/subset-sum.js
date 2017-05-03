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
  // const subsets = [[]];
  // for (let i = 0; i < array.length; i += 1) {
  //   for (let j = 0, len = subsets.length; j < len; j += 1) {
  //     const subset = array[i].concat(subset[j]);
  //     if (subset.reduce((a, b) => a + b) === target) {
  //       return true;
  //     }
  //     subsets.push(subset);
  //   }
  // }
  // return false;


  // for (let i = 0; i < array.length; i += 1) {
  //   if (target === array[i]) return true;
  //   if (array[i] < target) {
  //     const newArr = array.slice(i + 1);
  //     const newTarget = target - array[i];
  //     if (subsetSum(newArr, newTarget)) {
  //       return true;
  //     }
  //   }
  // }
  // return false;


  if (!target) return true;
  if (!array.length) return false;
  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);
}

module.exports = subsetSum;
