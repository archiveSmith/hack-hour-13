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
  let counterObj = {};
  let numOfOdds = 0;
  
  for (let i = 0; i < str.length; i += 1) {
    if (!counterObj.hasOwnProperty(str.charAt(i))) {
      counterObj[str.charAt(i)] = 1;
    }
    else if (counterObj.hasOwnProperty(str.charAt(i))) {
      counterObj[str.charAt(i)] += 1;
    }
  }
  
  for (let x in counterObj) {
    if (counterObj[x] % 2 !== 0) {
      numOfOdds += 1;
    }
  }
  
  return numOfOdds <= 1;
}

module.exports = permPalin;