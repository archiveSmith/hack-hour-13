// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let shouldLoop = true;
  while (shouldLoop) {
    shouldLoop = false;
    let i = array.length - 1;
    for (let j = 0; j < i; j += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        shouldLoop = true;
      }
    }
    i -= 1;
  }
  return array;
}

module.exports = bubbleSort;
