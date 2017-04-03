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
    let letterCount = {};

    for (let i = 0; i < str.length; i += 1) {
        if(!letterCount[str[i]]) letterCount[str[i]] = 1;
        else letterCount[str[i]] += 1;
    }
    let oddCount = 0;

    for(key in letterCount) {
        if( letterCount[key] % 2 !== 0) oddCount += 1;
        if(oddCount > 1) return false;
    }
    return true;
}

module.exports = permPalin;