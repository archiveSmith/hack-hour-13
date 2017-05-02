// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  // iterate through the array, and move the smallest number in the array to
  // the very beginning of the array
  // do this for as many times of the array length
  let smallNum = Infinity;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i; j < array.length; j += 1) {
      if (smallNum > array[j]) {
        smallNum = array[j];
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    smallNum = Infinity;
  }
  return array;
}

module.exports = insertionSort;
