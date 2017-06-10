/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.
Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.
Permutations must NOT repeat any of the array elements.
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

function permuteSwap (arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function permute (arr, output, n) {
  if (n === 1) { 
    output(arr)
  } else {
    for (let i = 1; i <= n; i += 1) {
      permute(arr, output, n - 1);
      if (n % 2 !== 0) {
        let j = 1;
      } else {
        let j = i;
      }
      permuteSwap(arr, j - 1, n - 1); 
    }
  }
}



//-------------------------------------------------------------------------

var swap = function (array, pos1, pos2) {
  [array[pos1], array[pos2]] = [array[pos2], array[pos1]]
};

var heapsPermute = function (array, output, n) {
  n = n || array.length; // set n default to array.length
  if (n === 1) {
    output(array);
  } else {
    for (var i = 1; i <= n; i += 1) {
      heapsPermute(array, output, n - 1);
      if (n % 2 !== 0) {
        var j = 1; //if odd
      } else {
        var j = i;  //if even, b/c number will be zero (false);
      }
      swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
    }
  }
};

// For testing:
var print = function(input){
  console.log(input);
}

heapsPermute([1,2,3], print);








// module.exports = eachPermutation;