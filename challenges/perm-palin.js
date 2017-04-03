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
    if (typeof str !== 'string' || str.length === 0) return false;
    if (str.length === 1) return true;

    for (let i = 1; i < str.length; i += 1) {
        if (str[i - 1] === str[i]) return true;
        if (str[i + 1] && str[i + 1] === str[i - 1]) return true;
    }

    return false;
}

module.exports = permPalin;