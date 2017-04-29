function permutations(str) {
  const arr = str.split('');


}


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

//--------------------------------------


  function recurse(letters) {
    let results = [];

    for (let i = 0; i < letters.length; i += 1) {
      const front = letters[i];
      const restOfLetters = letters.slice(0, i).concat(letters.slice(i + 1));
      console.log(restOfLetters); 
      results = results.concat(restOfLetters.map(str => front + str));
    }
    return results;
  }


console.log(recurse(['a', 'b', 'c'])); 











