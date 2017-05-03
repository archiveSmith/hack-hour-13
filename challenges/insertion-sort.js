// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let j = 0; j < array.length; j += 1) {
    for (let i = j + 1; array[i] < array[i - 1]; i -= 1) {
      [array[i], array[i - 1]] = [array[i - 1], array[i]];
    }
  }
  return array;
}

module.exports = insertionSort;
