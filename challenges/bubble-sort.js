// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

// let array = [5, 1, 4, 2, 8];


function bubbleSort(array) {
  for (let i = 0; i < array.length; i += 1) { // Number of passes
    for (let j = 0; j < array.length - i - 1; j += 1) { // Notice that j < (array.length - i - 1)
      // Compare the adjacent positions
      if (array[j] > array[j + 1]) {
        // Swap the numbers
        let temp = array[j];  // Temporary variable to hold the current number
        array[j] = array[j + 1]; // Replace current number with adjacent number
        array[j + 1] = temp; // Replace adjacent number with current number
      }
    }
  }
  return array;
}

// console.log(bubbleSort(array));

module.exports = bubbleSort;
