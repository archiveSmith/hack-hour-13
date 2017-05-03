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
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]] === undefined) {
      obj[array[i]] = 1;
    } else {
     obj[array[i]]++; 
    }
  }
  let keys = Object.keys(obj);
  for (let j = 0; j < keys.length; j++) {
    if (obj[keys[j]] === 1) {
      return keys[j];
    }
  }
}

module.exports = uniqueNumber;
