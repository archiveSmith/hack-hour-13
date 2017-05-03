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
function uniqueNumber(array) {
  if (!array || array.length === 0) return null;
  
  const cache = {};

  for (let i = 0; i < array.length; i += 1) {
    if (!cache[array[i]] && !cache.hasOwnProperty(array[i])) {
      cache[array[i]] = true;
    } else {
      cache[array[i]] = false;
    }
  }

  for (let key in cache) {
    if (cache[key]) return key;
  }
}

module.exports = uniqueNumber;
