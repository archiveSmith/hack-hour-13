// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let j = i - 1;
    let temp = array[i];
    while (j >= 0) {
      if (temp < array[j]) {
        array[j + 1] = array[j];
        array[j] = temp;
      }
      j -= 1;
    }
  }
  return array;
}

module.exports = insertionSort;