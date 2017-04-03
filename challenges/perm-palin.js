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
    if (str.split('').reverse().join('') === str) return true;
    if (str.length < 3) return true;

    if (str.length % 2 === 0) {
       str = str.split('');
    }

    else {

    }
}

module.exports = permPalin;