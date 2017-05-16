// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let temp;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (array[j] < array[j - 1]) {
        temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
       // console.log(array, 'array', i);
      }
    }
  }
  return array;
}

// console.log(insertionSort([1, 2, 3, 48, 21, 12, 19, 14]));

module.exports = insertionSort;