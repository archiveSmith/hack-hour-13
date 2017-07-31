/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * Permutations are a set of ordered objects. A way, especially one of several possible
 * variations, in which a set or number of things can be ordered or arranged.
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */
// Input is a string.
  // If input is not a string return false (or an error message).
  // If input string length is 0 return false
// Output is true if any permutation of input string is a palindrome (same forward and backword).
  // If string length is even every letter should occur an even amount of times.
  // If string length is odd one letter ocurrs odd amount of times while the rest follow suit as above.
// Output is false if there are no permutations of input string that are a palindrome.
  // check if the count is less than 2. If less than 2 return ture, else return fasle.


	function permPalin(str) {
		if (typeof str !== 'string') return false;
		if (str.length === 0) return false;

		const lettersHolder = {};
	  let letter;
	  let count = 0;

	  for (let i = 0; i < str.length; i += 1) {
	      letter = str[i];
	      // set letter value to zero
	      lettersHolder[letter] = lettersHolder[letter] || 0;
	      // increment letter number each time occurs
	      lettersHolder[letter] += 1;
	  }

	  for (let letters in lettersHolder) {
	      // setting count to each letters value / 2 remainder.
	      count += lettersHolder[letters] % 2;
	  }
	  return count < 2;
	}

module.exports = permPalin;
