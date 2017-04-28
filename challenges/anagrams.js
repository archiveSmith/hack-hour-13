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

function ToggleLetters(string, index1, index2) {
  if (index1 !== index2) {
    let temp = string[index1];
    string[index1] = string[index2];
    string[index2] = temp;
  }
  return string.join('');
}

function anagrams(string, index, buffer) {
  if (typeof string === "string") {
    string = string.split('');
  }

  if (typeof index === "undefined") {
    index = 0;
  }

  if (typeof buffer === "undefined") {
    buffer = [];
  }

  if (index >= string.length) {
    return buffer;
  }

  for (let i = index; i < string.length; i++) {
    buffer.push(ToggleLetters(string, index, i));
  }
  return anagrams(string, index + 1, buffer);
}

module.exports = anagrams;
