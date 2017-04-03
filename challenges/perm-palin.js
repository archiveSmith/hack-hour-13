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
  if (typeof str !== "string" || str.length === 0) return false;
  let singles = 0;
  let array = str.split('');
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === ' ') continue;
    if (array[i] !== array[i + 1]) {
      singles += 1;
    }
    if (singles > 1) return false;
    if (array[i] === array[i + 1]) {
      i += 1;
    }
  }
  return true;
}

module.exports = permPalin;