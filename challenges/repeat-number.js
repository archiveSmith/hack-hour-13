/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

 function repeatNumbers(array) {
   let min;
   const objOfNums = array.reduce((acc, curr) => {
     if (acc[+curr]) {
       acc[curr] = acc[curr] + 1;
     } else {
       min = curr;
       acc[curr] = 1;
     }
     return acc;
   }, {});
   return min;
 }

module.exports = repeatNumbers;
