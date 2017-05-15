// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let check = true;
  let sorted, i;
  for (sorted = array.length - 1; sorted; sorted--) {
    check = false;
    for (i = 0; i < sorted; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        check = true;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
