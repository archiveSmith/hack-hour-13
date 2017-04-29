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

//heaps permutation algorithm
function anagrams(str) {
  var arr = str.split('');
  let permutations = [];   

  function swap(a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }

  function generate(n) {
    if (n === 1) {
      permutations.push(arr.join(',').replace(/,/g, ''));
    } else {
      for (var i = 0; i < n; i += 1) {
        generate(n - 1);
        //if odd, first # in swap is 0, otherwise it is i;  
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }

  generate(arr.length);
  return permutations;
}    

//-------------------------


function swap(a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

function heapsPermute (array, output, n) {
  n = n || array.length; // set n default to array.length
  if (n === 1) {
    output(array);
  } else {
    for (var i = 1; i <= n; i += 1) {
      heapsPermute(array, output, n - 1);
      if (n % 2) {
        var j = 1;
      } else {
        var j = i;
      }
      swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
    }
  }
};

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
