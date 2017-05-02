// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    let k = i;
    for (let j = i - 1; j >= 0; j -= 1) {
      if (array[j] > array[k]) {
        let temp = array[j];
        array[j] = array[k];
        array[k] = temp;
        k -= 1;
      } else {
        break;
      }
    }
  }
  return array;
}

module.exports = insertionSort;