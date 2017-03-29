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
  let combo = arr1.concat(arr2);
  return combo.sort((a,b) => a - b);
}

//-----------O(n of n)---------------------
function mergeArrays2(arr1, arr2) {
  let combo = arr1.concat(arr2);
  
  function mergeSort(array) {
    if (array.length < 2) {
      return array;
    } else {
      var half = Math.floor(array.length / 2);
      var firstHalf = mergeSort(array.slice(0, half));
      var secondHalf = mergeSort(array.slice(half)); 
      var result = [];
      while (firstHalf.length && secondHalf.length) {
        if (firstHalf[0] < secondHalf[0]) {
          result.push(firstHalf.shift());
        } else {
          result.push(secondHalf.shift()); 
        }
      }
      firstHalf.length ? result.push(...firstHalf) : result.push(...secondHalf);
      return result; 
    }
  }

  return mergeSort(combo);
  
}



//==========================TESTING========================

var arr1 = [3,4,6,10,11,15,21];
let arr2 = [1,5,8,12,14,19];

console.log( mergeArrays(arr1, arr2) );
console.log( mergeArrays2(arr1, arr2) );






module.exports = mergeArrays;
