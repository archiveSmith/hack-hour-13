// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

// Input - array/list

// Output - sorted array using bubble sort algorithm

// Use for loop to iterate through input array from start to end
// Nested for loop to compare every adjacent pair
  // Swap their position if they are not in the right order
  // The latter one is less than the former one.
// After each iteration, reduce by 1 because we've found largest number up to that point
// until there are no more elements.

// Inner for loop that iterates at one less element per iteration
  // If condition to check whether elements need to be swapped.
    // Initialize temp variable to hold the current number
    // Replace current number with adjacent number
    // Replace adjacent number with current number
// Return array
// const numArray = [5, 1, 4, 2, 8];


function bubbleSort(array) {
  // Iterate through input array at array length
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

// console.log(bubbleSort(array));

module.exports = bubbleSort;
