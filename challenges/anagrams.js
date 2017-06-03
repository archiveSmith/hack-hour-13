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


 

//------heaps permutation algorithm------------------

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function anagram(str) {
  let arr = str.split('');
  let perms = [];

  function heaps(arr, n) {
    if (n === 1) perms.push(arr.join(''))

    for (let i = 1; i <= n; i += 1) {
      heaps(arr, n - 1); 

      if (n % 2 !== 0){
        var j = 1;
      } else {
        var j = i;
      }
      swap(arr, j - 1, n - 1);
    }
  }
  heaps(arr, arr.length);
  return perms;
}


//------codesmith way (a little slower)--------------------------------

function anagrams2(str) {
  const arr = str.split('');

  function recurse(letters) {
    let results = [];
    if (letters.length < 2) {
      return results.concat(letters)
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

console.log(anagrams2('abc')); 











module.exports = anagrams;
