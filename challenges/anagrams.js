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
  const result = [];
  const chars = string.split('');
  const nextWord = [];
  (function findAnagrams(arr) {
    if (arr.length === 0) result.push(nextWord.join(''));
    for (let i = 0; i < arr.length; i += 1) {
      arr.push(arr.shift()); // rotate the characters
      nextWord.push(arr[0]); // use the first character
      findAnagrams(arr.slice(1)); // recurse arr less first character
      nextWord.pop(); // clear for next word
    }
  }(chars));
  return result;
}

module.exports = anagrams;
