// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

let array = [5, 1, 4, 2, 8];


function bubbleSort(array) {
  for (let j = 0; j < array.length; j += 1) {
    for (let i = 1; i < array.length; i += 1) {
      let curr = array[j];
      let next = array[i];
      if (curr > next) {
        array[i] = curr;
        array[j] = next;
      }
    }
  }
  return array;
}

console.log(bubbleSort(array));

module.exports = bubbleSort;
