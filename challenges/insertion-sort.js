
// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(arr) {
  if (!arr || arr.length === 0) {return 'please provide array'}
  for (let i = 1; i < arr.length; i += 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (arr[j + 1] < arr[j] ) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];       
      }
    }
  }
  return arr;
}

function insertionSort2(arr) {
  for (let sorted = 0; sorted < arr.length; sorted += 1) {
    for (let swap = sorted + 1; array[swap] < array[swap - 1]; swap -= 1) {
      [array[swap - 1], array[swap]] = [array[swap], array[swap - 1]];
    }
  }
}

////////////////////////////////////////////
console.log( insertionSort([44,5,6,3,9,1,13,11,0]) )

/*
loop array
then loop backwards from the target number to the beginning to see if target is < #s before it. 
  if it is (move it to that position)
*/


module.exports = insertionSort;
