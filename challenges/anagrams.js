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
  const arr = string.split('');

  function recurse(letters) {
    let results = [];

    if (letters.length <= 1) return results.concat(letters);

    for (let i = 0; i < letters.length; i++) {
      const front = letters[i];
      const restOfLetters = letters.slice(0, i).concat(letters.slice(i + 1));
      results = results.concat(recurse(restOfLetters).map(str => front + str));
    }

    return result;
  }

  return recurse(arr);
}

module.exports = anagrams;
