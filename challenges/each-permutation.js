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

// #### SOLUTION ONE ####
// function eachPermutation(arr, callback) {
//
// }

// #### SOLUTION TWO ####
function eachPermutation(arr, callback, built = [], perms = {}) {
  console.log('############################');
  console.log('Array', arr);
  console.log('Built', built);
  console.log('Perms', perms);
  // If arr is empty, then this particular array is complete. Save in object as key and perform callback.
  // Successive identical arrays will not result in performing the callback.
  // Slicing the input array which eventually will become an empty array.
  if (!arr.length && !(built in perms)) perms[built] = callback(built);

  // Else, give each remaining element a turn being in front of the rest.
  else arr.forEach((e, i) => eachPermutation(
      [...arr.slice(0, i), ...arr.slice(i + 1)], // use the spread operator and concat
      callback,
      [...built, e], // spreading the built array and adding the next element
      perms
    )
  );
}

console.log(eachPermutation([1, 2, 3], logPerm));
module.exports = eachPermutation;
