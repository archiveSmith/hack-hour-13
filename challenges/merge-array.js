/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 0;
  let newArr = [];
  let ind1 = 0
  let ind2 = 0
  while (ind1 <= arr1.length - 1 && ind2 <= arr2.length - 1) {
    if (arr1[ind1] < arr2[ind2]) {
      newArr.push(arr1[ind1])
      ind1 += 1;
    } else {
      newArr.push(arr2[ind2])
      ind2 += 1;
    }
  }
  if (ind1 === arr1.length - 1 && ind2 === arr2.length - 1) return newArr;
  else if (ind2 === arr2.length) return newArr.concat(arr1.slice(ind1));
  else if (ind1 === arr1.length) return newArr.concat(arr2.slice(ind2));
}

module.exports = mergeArrays;
