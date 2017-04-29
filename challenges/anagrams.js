/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * let result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

// function anagrams(str) {
//   if (str.length === 1) {
//     return str;
//   }

//   let permut = [];

//   for (let i = 0; i < str.length; i++) {
//     let s = str[0];
//     let _new = anagrams(str.slice(1, str.length));
//     for (let j = 0; j < _new.length; j++) {
//       permut.push(s + _new[j]);
//     }
//     str = str.substr(1, str.length - 1) + s;
//   }
//   return permut;
// }

function anagrams(str) {
  const arr = string.split('');

  function recurse(letters) {
    let results = [];

    if (letters.length === 1) {
      return results.concat(letters);
    }

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
