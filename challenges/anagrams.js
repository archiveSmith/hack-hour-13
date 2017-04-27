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

  const anagrams = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let remaining = string.slice(0, i) + string.slice(i + 1);
    console.log(string.slice(i, i + 1), 'slice 0 i');
    console.log(string.slice(i + 1, string.length), 'i + 1, str length');

    for (let items in remaining) {
      anagrams.push(char + remaining);
    }
  }
  return anagrams;
}

module.exports = anagrams;
