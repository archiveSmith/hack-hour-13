/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

//Cache Solution O(n) time, O(n) space
// function uniqueNumber(array) {
//   const cache = {};

//   for (let i = 0; i < array.length; i += 1) {
//     cache[array[i]] ? cache[array[i]] += 1 : cache[array[i]] = 1;
//   }

//   for (let key in cache) {
//     // console.log(key);
//     if (cache[key] === 1) return Number(key);
//   }
// }

// O(n log n) time O(1) space using sort
// function uniqueNumber(array) {
//   array = array.sort((a, b) => {
//     return a - b;
//   })
  
//   // console.log(array);

//   for (let i = 0; i < array.length; i+= 2) {
//     if (array[i] !== array[i + 1]) return array[i];
//   }
  
//   return array[array.length - 1];
// }



// Bitwise Operator Solution -- O(n) time, O(1) space
function uniqueNumber(array) {
  return array.reduce((acc, curr) => acc ^ curr);
}

module.exports = uniqueNumber;
