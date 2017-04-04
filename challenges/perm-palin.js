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
	// track the number of each char inside of string
	const charTable = str.reduce((a, c) => {
		if (!a.hasOwnProperty(c)) {
			a.c = 1;
		} else {
			a.c = a.c += 1;
		}
	}, {});
	return charTable;
}

module.exports = permPalin;
