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
   let twoTimes;
   array.reduce((acc, curr) => {
     if (acc[+curr]) {
       acc[curr] = acc[curr] + 1;
       if (acc[curr] === 2) twoTimes = curr;
       if (twoTimes === curr && acc[curr] > 2) twoTimes = null;
     } else {
       acc[curr] = 1;
     }
     return acc;
   }, {});
   return twoTimes;
 }

module.exports = repeatNumbers;
