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

    let mergedArr = [];
    let i=0, j = 0;

    while (arr1[i] && arr2[j]) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i += 1;
        } else {
            mergedArr.push(arr2[j]);
            j += 1;
        }
    }
    return arr1[i] ? mergedArr.concat(arr1.slice(i)) : mergedArr.concat(arr2.slice(j));
}


console.log(mergeArrays([1, 3, 4, 5], [1, 3, 6, 7, 14, 61]))

module.exports = mergeArrays;
