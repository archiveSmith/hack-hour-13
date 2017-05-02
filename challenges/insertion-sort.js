// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array, delimiter = 1) {
  if (delimiter === array.length) return array;
  const target = array.splice(delimiter, 1)[0];
  for (let i = 0; i < delimiter; i += 1) {
    if (target < array[i]) {
      array.splice(i, 0, target);
      return insertionSort(array, delimiter + 1);
    }
  }
  array.splice(delimiter, 0, target);
  return insertionSort(array, delimiter + 1);
}

module.exports = insertionSort;