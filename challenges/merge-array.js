/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 ->
 *
 * BONUS:
 * Complete in O(n) time and O(n) space
 *
 */

function mergeArrays(arr1, arr2) {
  const merged = [];
  while (arr1.length && arr2.length) {
    arr1[0] < arr2[0] ? merged.push(arr1.shift()) : merged.push(arr2.shift());
  }
  return merged.concat(arr1).concat(arr2);
}

 //[1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

module.exports = mergeArrays;
