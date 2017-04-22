/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

 function mergeRanges(array) {
   return array.sort((a, b) => a[0] - b[0]).reduce((a, b) => {
     if (b[0] > a[a.length-1][0] && b[0] <= a[a.length-1][1]) {
       a[a.length-1] = [a[a.length-1][0], b[1]];
     } else {
       if (a[a.length-1] !== b) {
         a.push(b);
       }
     }
     return a;
   }, [array[0]]);
 }

module.exports = mergeRanges;
