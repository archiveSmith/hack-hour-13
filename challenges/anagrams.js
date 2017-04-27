/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  const strings = [];

  if (!string || typeof string !== 'string') {
    return 'Invalid input!';
  }

  function helper(prefix, str) {
    if (str.length === 1) {
      if (strings.indexOf(prefix + str) < 0) {
        strings.push(prefix + str);
      }
    } else {
      str.split('').forEach((letter, index) => {
        const substr = str.slice(0, index) + str.slice(index + 1);
        helper(prefix + letter, substr);
      });
    }
  }

  helper('', string);
  return strings;
}

module.exports = anagrams;
