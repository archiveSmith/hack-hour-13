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
  // if (string.length === 0) return [''];
  // if (string.length === 1) return string;
  // let result = [];
  // for (let i = 0; i < string.length; i += 1) {
  //   let start = string[0];
  //   let holder = anagrams(string.substr(1));
  //   for (let j = 0; j < holder.length; j += 1) {
  //     result.push(holder[j] + start);
  //   }
  //   string = string.substr(1) + start;
  // }
  // return result;
  const arr = string.split('');
  function recurse(letters) {
    let results = [];
    if (letters.length <= 1) return results.concat(letters);
    for (let i = 0; i < letters.length; i += 1) {
      const front = letters[i];
      const restOfLetters = letters.slice(0, i).concat(letters.slice(i + 1));
      results = results.concat(recurse(restOfLetters).map(str => front + str));
    }
    return results;
  }
  return recurse(arr);
}

module.exports = anagrams;
