// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

// Input
  // array

// Output
  // input array sorted using the insertion sort algorithm

// Iterate through array starting at index 1 (i = 1)
// Initialize variable currIndex and set equal array[i] (current index)
// create another for loop
  // Set j = i - 1
  // Condition: if j is greater than or equal to 0 && value at array of j is greater than currIndex
  // Decrement j by 1 until above condition isn't met
// If for loop condition isn't met set array of j + 1 equal to currIndex
// return array

const input = [3, 5, 7, 8, 4, 2];

function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let currIndex = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > currIndex; j -= 1) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currIndex;
  }
  return array;
}

console.log(insertionSort(input));

module.exports = insertionSort;
