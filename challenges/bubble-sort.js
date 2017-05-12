// Done

// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
    return true;
  }
}

function swap(array, i1, i2) {
  [array[i1], array[i2]] = [array[i2], array[i1]];
}

function bubbleSort(array) {
  // write helper function to swap values
  // set variable equal to input array
  // start two variables at oppostite ends of array (0 and array.length-1)
  // check adjacent vales, if out of order, swap
  // set a check to moniter for swapping, if no swap, exit loop
  // return sorted array
  const newArray = Array.from(array);
  var i = array.length - 1;
  let changed = true;

  while (i > 0 && changed) {
    changed = false;
    let j = 0;
    while (j < i) {
      if (newArray[j] > newArray[j + 1]) {
        swap(newArray, j, j + 1);
        // swap elements in the array
        changed = true;
      }
      j += 1;
    }
    i -= 1;
  }
  return newArray;
}

var testArr = [4, 2, 3, 5, 1];
console.log(bubbleSort(testArr));

module.exports = bubbleSort;
