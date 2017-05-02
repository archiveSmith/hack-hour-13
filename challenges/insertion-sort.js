// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  return array.sort((a,b) => a - b);
}

module.exports = insertionSort;