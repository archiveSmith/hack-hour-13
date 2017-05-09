// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
 let sorted = true;
  while (sorted) {
    sorted = false;
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = true;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
