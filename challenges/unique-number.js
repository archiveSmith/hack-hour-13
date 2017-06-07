// DONE - Angela

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
  // create an object to store nom of occurences of an integer
  var cache = {};
  // add the integers to the store
  // if the key that represents the integer already exists, add 1 to the value
  // if the key that represents the integer doesn't exist, add the key with the value of 1
  for (let i = 0; i < array.length; i++) {
    // if value does not exist
    if (cache[array[i]]) {
      // if value has already been added
      cache[array[i]] = cache[array[i]] += 1;
    } else {
      cache[array[i]] = 1;
    }
  }
  for (var integer in cache) {
    if (cache.hasOwnProperty(integer)) {
      if (cache[integer] === 1) {
        return integer;
      }
    }
  }
}
console.log(uniqueNumber([1, 2, 1, 3, 3]));
module.exports = uniqueNumber;
