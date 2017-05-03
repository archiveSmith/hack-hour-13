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

//O(n) time
function uniqueNumber(array) {
  const cache = {};
  for (let i = 0; i < array.length; i += 1) {
    if (cache[array[i]]) delete cache[array[i]];
    else cache[array[i]] = true;
  }
  return Object.keys(cache)[0];
}

//O(1) space
// function uniqueNumber(array) {
//   for (let i = 0; i < array.length - 1; i += 1) {
//     if (!array.slice(i + 1).includes(array[i])) return array[i];
//   }
// }

module.exports = uniqueNumber;