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
  // if str is even, each letter must occur an even number of times
	// if str is odd, one letter must occur an odd number of times, everything else even
  const arr = str.split('');
  const uniqueLetters = [];
  arr.forEach((letter) => {
    if (arr.indexOf(letter) === -1) uniqueLetters.push(letter)
  });

  if (str.length % 2) {

  } else {

  }
}

module.exports = permPalin;