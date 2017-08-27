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
	// The answers are bellow
}

function hasPalindrome(array) {
	let reversedWord;
	for(let word of array) {
		reversedWord = word.split('').reverse().join('');
		if(word === reversedWord) return true;
	}
	return false;
}

function permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0,i) + string.slice(i+1,string.length);

        for (let subPermutation of permut(remainingString)){
            permutations.push(char + subPermutation);
        }

    }
    return permutations;
}

module.exports = permPalin;