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

//------not O(n) space b/c made a cache ---------------------
function uniqueNumber(array) {
  let cache = array.reduce((obj, curr) => {
    obj[curr] ? obj[curr]++ : obj[curr] = 1;
    return obj;
  }, {})
  return Object.keys(cache).filter(key => {
    return cache[key] === 1;
  })
}

//-----O(n) space-------sort/filter still O(n) time? yes
function uniqueNumber2(array) {
  return array.sort((a,b) => a - b)
    .filter((n, i, arr) =>
      n !== arr[i + 1] && n !== arr[i - 1] 
    )
}

//-----double for loop (would have O(n) space but not O(n) time 
function uniqueNumber3(array) {

}

////////////////TESTING/////////////////////
console.log( uniqueNumber2([9,7,9,6,6]) )



module.exports = uniqueNumber;
