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
    var finalArray = [];
    var arr1Count = 0;
    var arr2Count = 0;
    
    while (arr1Count < arr1.length && arr2Count < arr2.length) {
        if (arr1[arr1Count] < arr2[arr2Count]) { 
            finalArray.push(arr1[arr1Count]);
            arr1Count++;
        } else {
            finalArray.push(arr2[arr2Count]);
            arr2Count++;
        }
    }
    
    while(arr1Count < arr1.length){
        finalArray.push(arr1[arr1Count]); 
        arr1Count ++; 
    }
    return finalArray;
}

module.exports = mergeArrays;
