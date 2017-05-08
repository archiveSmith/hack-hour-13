// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let notSorted = true;
  while (notSorted) {
    notSorted = false;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        notSorted = true;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
