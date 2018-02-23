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

//Using an object:
// function permPalin(str) {
// 	if (!str) return false;
// 	const letters = {}
// 	for (let i = 0; i < str.length; i++) {
// 		letters[str[i]] ? delete letters[str[i]] : letters[str[i]] = 1;
// 	}
// 	return Object.keys(letters).length <= 1;
// }

function permPalin(str) {
	if (!str) return false;
	const letters = new Set();
	for (let i = 0; i < str.length; i++) {
		if (letters.has(str[i])) {
			letters.delete(str[i]);
		} else {
				letters.add(str[i]);
		}
	}
	return letters.size <= 1;
}

//console.log(permPalin('cbaba'));
module.exports = permPalin;