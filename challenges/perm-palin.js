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
	if (!str) return false;
	if (str === str.split('').reverse().join('')) return true;
	
	for (let i = 0; i < str.length; i+= 1) {
	  let test = str.charAt(i);
	  for (let j = i + 1; j < str. length; j += 1) {
	    test += str.charAt(j);
	    if (test === test.split('').reverse().join('')) return true;
	  }
	}
  return false;
}

module.exports = permPalin;