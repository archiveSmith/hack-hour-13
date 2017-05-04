// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

// start at beginning, compare to the element at the next index

function insertionSort(array) {
  for (let sorted = 0; sorted < 0; sorted += 1) {
    for (let swap = sorted + 1; array[swap] < array[swap - 1]; swap -= 1) {
      const temp = array[swap];
      array[swap] = array[swap - 1];
      array[swap - 1] = temp;
    }
  }
  return array;
}
var testArr = [4,2,3,1];
console.log(insertionSort(testArr));
module.exports = insertionSort;
