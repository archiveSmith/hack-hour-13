// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  // iterate through the array, and move the smallest number in the array to
  // the very beginning of the array
  // do this for as many times of the array length
  let smallNum = array[0];
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i; j < array.length; j += 1) {
      if (smallNum > array[j]) {
        smallNum = array[j];
        array.splice(j, 1);
        array.splice(i, 0, smallNum);
      }
    }
    smallNum = Infinity;
  }
  return array;
}

// insertionSort([5,1,2,3,4,2, -3, -Infinity, 1000]);

module.exports = insertionSort;
