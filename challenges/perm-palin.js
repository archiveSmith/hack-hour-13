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
	const arr = str.split('');
  let counter = 0;
  while (arr.length) {
    const val = arr.shift();
    if (val.toLowerCase() === val.toUpperCase()) {
      arr.indexOf(val) === -1 ? counter += 1 : arr.splice(arr.indexOf(val), 1);
    }
  }
  return counter < 2;
}

module.exports = permPalin;


console.log(permPalin('abab'), true);
console.log(permPalin('cbaba'), true);
console.log(permPalin('cbac'), false);
console.log(permPalin('a'), true);