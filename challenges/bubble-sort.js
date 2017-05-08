// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (!array) return [];
  let swap = true; // check if elements are being swapped
  while(swap) {
    swap = false;
    for(let i = 1; i < array.length; i += 1) {
      if (array[i] < array[i-1]) {
        [array[i], array[i-1]] = [array[i-1], array[i]];
        swap = true;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
