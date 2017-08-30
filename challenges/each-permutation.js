/*
Write a function that takes two arguments, an array and a callback. The callback
will be called once for each permutation of the elements of the array, where the
permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem,
assume each permutation must include every element from the array. Permutations must
NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function logPerm(perm) {
  console.log(perm);
}

// Parameters:
// arr (given array to find permutations of),
// built (array being built up)
// perms (storage object that will be passed to successive recursive calls by reference)

// inefficient because it must make two new arrays for each function call
function eachPermutation(arr, callback) {

  const indexesUsed = [];

   // can't repeat elements, so keep track of the indexes of the elements we've already used

  for (let i = 0; i < arr.length; i++) {
    indexesUsed.push(false);
  }

  permUtil([], indexesUsed);

  function permUtil(path, indexesUsed) {
    // base case. done building up path
    if (path.length === arr.length) {
      return callback(path);
    }

    for (let i = 0; i < arr.length; i++) {
      let indexesUsedClone;
      if (indexesUsed[i] === false) {
        indexesUsedClone = indexesUsed.slice();
        indexesUsedClone[i] = true;
    // the concat method creates a new array, rather than pushing to the existing array
        permUtil(path.concat(arr[i]), indexesUsedClone);
      }
    }
  }
}

console.log(eachPermutation([1, 2, 3], logPerm));
module.exports = eachPermutation;
