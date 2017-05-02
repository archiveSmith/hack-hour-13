// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

// iterate through array starting at index 1
// initialize variable x to equal current index value
// initialize variable j to equal current index - 1
// if j is greater than or equal to 0 && value at array of j is greater than x
  // enter while loop and set array of j - 1 = to array of j
  // set j = j - 1
// if while loop condition isn't met set array of j + 1 = x
// return array

let input = [3, 5, 7, 8, 4, 5, 2];

function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let x = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > x) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = x
  }
  return array;
}

insertionSort(input);

module.exports = insertionSort;
