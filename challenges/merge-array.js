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

  const merge = [];
  let j = 0, k = 0;
  const length = arr1.length + arr2.length;
  for (let i = 0; i < length; i += 1) {
  //OR while (merge.length < length) {
      //if not at the end of arr1 && arr1 item is smaller OR if nothing left to merge in arr2
      if (k <= arr1.length && (arr1[k] < arr2[j] || j >= arr2.length)) {
        merge.push(arr1[k]);
        k++;
      //else take from arr2
      } else {
          merge.push(arr2[j]);
          j++;
      }
  }
  return merge;
}

module.exports = mergeArrays;

//console.log(mergeArrays([3,8,12,14], [4,5,13,15,16]));
