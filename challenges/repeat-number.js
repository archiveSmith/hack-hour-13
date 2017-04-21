/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time --- linear?
 * Do this in O(1) space-- only use one variable?
 *
 */

function repeatNumbers(array) {
  let cache = array.reduce((obj, curr) => {
    obj[curr] ? obj[curr]++ : obj[curr] = 1;
    return obj;
  }, {});

  let duplicate;
  Object.keys(cache).forEach(key => {
    if (cache[key] > 1) {
      duplicate = key;
    }
  })
  return duplicate;
}

////////////////TESTING//////////////////////////////

console.log( repeatNumbers([3,4,3,5,8,0,99,-8,]) )

/*
make object holding all the values
when one is not already in object, return it
*/













module.exports = repeatNumbers;
