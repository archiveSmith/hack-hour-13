// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let i, j , temp;
  for (let i = 1; i < array.length; i++) {
    for (let j = i; array[j] < array[j - 1]; j--) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
    }
  }
  return array;
}

module.exports = insertionSort;