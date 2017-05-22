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

'use strict';

function mergeArrays(arr1, arr2) {

  const merged = [];
  if (!arr1.length) return arr2;
  else if (!arr2.length) return arr1;

  // will go thru arr1 or arr2 till one has been completely read
  let i1 = 0, i2 = 0;
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      merged.push(arr1[i1]);
      i1 += 1;
    } else {
      merged.push(arr2[i2]);
      i2 += 1;
    }
  }

  // will push whatever's left on the one that hasn't been completely read thru
  merged.push(
    ...(i1 < arr1.length) ? arr1.slice(i1) : arr2.slice(i2)
  );

  return merged;
}

var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];
var res = mergeArrays(my_array, another_array);

console.log(res);

module.exports = mergeArrays;
