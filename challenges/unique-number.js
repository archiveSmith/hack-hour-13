/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time (linear)
 * Complete the challenge in O(1) space (no new variables introduced that take up computer memory);
 *
 */

//------not O(n) space b/c made a cache but O(n) time---------------------
function uniqueNumber(array) {
  let cache = array.reduce((obj, curr) => {
    obj[curr] ? obj[curr]++ : obj[curr] = 1;
    return obj;
  }, {})
  return Object.keys(cache).filter(key => {
    return cache[key] === 1;
  })
}

//-----O(n) space------- O(n log n) time b/c had to use sort
function uniqueNumber2(array) {
  return array.sort((a,b) => a - b)
    .filter((n, i, arr) =>
      n !== arr[i + 1] && n !== arr[i - 1] 
    )
}

//-----bonus solution---------------bitwise (x or operator) exclusive OR (think dominos)
function uniqueNumber3(array) {
  var result = 0;
  for (let i = 0; i < array.length; i += 1) {
    result = result ^ array[i];
  }
  return result;
}

////////////////TESTING/////////////////////
console.log( uniqueNumber2([9,7,9,6,6]) )



module.exports = uniqueNumber;
