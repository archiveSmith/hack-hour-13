/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  // EDGE
  if (typeof str !== 'string') return false;
  if (str === '') return false;

  // for each letter, check if there is one that matches it and take them both off array
  // if there are more than 2 different letters left, then not a palindrome
  let remainder = str.split('');
  let currentVal;
  let found = false;

  for (let i = 0; i < remainder.length; ) {
    currentVal = remainder.splice(i, 1);
    for (let j = 0; j < remainder.length; j += 1) {
      if (remainder[j] === currentVal[0]) {
        remainder.splice(j, 1);
        found = true;
        break;
      }
    }
    
    if (!found) {
      i += 1;
    } else {
      found = false;
    }

    // if there is only 1 letter remaining, return true
    if (remainder.length === 0) {
      return true;
    }
  }
  return false;
}

// console.log(permPalin('abab'));
// console.log(permPalin('cabab'));
// console.log(permPalin('bcab'));
// console.log(permPalin('a'));

module.exports = permPalin;