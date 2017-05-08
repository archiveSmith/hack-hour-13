// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  if (array.constructor !== Array) {
    return false;
  }

  let counter = 0;
  // iterate through the array and rotate the biggest number to the back each time
  while (counter !== array.length) {
    let k = 0;
    for (let j = k + 1; j < array.length - counter; j += 1, k += 1) {
      if (array[j] < array[k]) {
        let temp = array[k];
        array[k] = array[j];
        array[j] = temp;
      }
    }
    counter++;
  }
  return array;
}

// console.log(bubbleSort([5, 4, 3, 2, 1]))
// console.log(bubbleSort([127, 35, 48, 60]))

module.exports = bubbleSort;
