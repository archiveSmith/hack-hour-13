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

const wordMix = (string, arr = []) => {
  if (arr.length === 0) arr = string.split('');
  if (string.length === arr[0].length) return arr;
  let result;
  let word = string.split('');
  const ana = [];
  for (let i = 0; i < word.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      result = word[i].concat(arr[j]);
      ana.push(result);
    }
  }
  return wordMix(string, ana);
}

function anagrams(string) {
  const arr = wordMix(string);
  let cache = {};
  let word = [];
  for (let i = 0; i < arr.length; i += 1) {
    word = arr[i].split('');
    for (let j = 0; j < word.length; j += 1) {
      if (cache[word[j]]) {
        arr.splice(i, 1);
        i -= 1;
        break;
      }
      cache[word[j]] = true;
    }
    cache = {};
  }
  return arr;
}

module.exports = anagrams;
