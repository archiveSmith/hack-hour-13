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

// This is O(n+1) space I think?

function mergeArrays(arr1, arr2) {
  var a = arr1.length - 1;
  var b = arr2.length - 1;
  var c = arr1.length + arr2.length - 1;

  if (arr1.length >= arr2.length) { // if arr1 >= arr 2
    while (b >= 0 && a >= 0) {
      if (arr1[a] >= arr2[b]) {
        arr1[c--] = arr1[a--];
      } else {
        arr1[c--] = arr2[b--];
      }
    }

    while (b >= 0) {
      arr1[c--] = arr2[b--];
    }
    return arr1;
  } else {  // if arr2 > arr1
    while (b >= 0 && a >= 0) {
      if (arr2[b] >= arr1[a]) {
        arr2[c--] = arr2[b--];
      } else {
        arr2[c--] = arr1[a--];
      }
    }

    while (a >= 0) {
      arr2[c--] = arr1[a--];
    }
    return arr2;
  }
}

//  var my_array = [3,4,6,10,11,15,21];
//  var another_array = [1,5,8,12,14,19];


// console.log(mergeArrays(another_array, my_array));


module.exports = mergeArrays;
