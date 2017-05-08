// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
  // copy to prevent mutation of orig
  let sorted = array.slice();

  // switch two numbers
  function switchTwo(i1, i2) {
    // using bitwise operations to avoid using temp variable
    // NOTE: only works with integers
    sorted[i1] = sorted[i1] ^ sorted[i2];
    sorted[i2] = sorted[i1] ^ sorted[i2];
    sorted[i1] = sorted[i1] ^ sorted[i2];
  }

  // num to compare up to, from last to third index
  for (let compareIdx = sorted.length - 1; compareIdx >= 1; compareIdx--) {
    // compare two nums up to given num (exclusive)
    for (let i1 = 0; i1 < compareIdx; i1++) {
      const i2 = i1 + 1;
      // switch nums if out of order
      if (sorted[i1] > sorted[i2]) switchTwo(i1, i2);
    }
  }
  return sorted;
}

module.exports = bubbleSort;
