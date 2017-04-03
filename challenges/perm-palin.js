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
  var counts = {};
  for (var i = 0; i < str.length; ++i) {
    counts[str[i]] = !counts[str[i]] ? 1 : counts[str[i]] + 1;
  }
  
  var countOdd = 0;
  for (var j in counts) {
    if (counts[j] % 2) {
      countOdd++;
    }
  }
  
  return countOdd <= 1;
}

module.exports = permPalin;