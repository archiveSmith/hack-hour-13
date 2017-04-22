
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

//O(n) time; O(n) space
function repeatNumbers2(array) {
  const cache = {};

  for (let i = 0; i < array.length; i += 1) {
    if (cache[array[i]]) return array[i];
    cache[array[i]] = true;
  }
}

//triangular numbers sum formula (sum of the ranges)
function repeatNumbers3(array) {
  const expected = (array.length * (array.length -1)) / 2
  let actual = 0;

  for (let i = 0; i < array.length; i += 1) {
    actual += array[i];
  }
  return actual - expected
}
////////////////TESTING//////////////////////////////

console.log( repeatNumbers2([3,4,3,5,8,0,99,-8,]) )

/*
make object holding all the values
when one is not already in object, return it
*/













module.exports = repeatNumbers;
