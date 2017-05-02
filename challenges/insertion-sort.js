// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let output = [];
  while (array.length) {
    const val = array.shift()
    if (!output.length) output.push(val);
    else {
      let inserted = false;
      for (let i = 0; i < output.length; i += 1) {
        if (val < output[i]) {
          output.splice(i, 0, val);
          inserted = true;
          break;
        }
      }
      if (!inserted) output.push(val);
    }
  }
}

module.exports = insertionSort;