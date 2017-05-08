// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let unsorted;
  if (array.length === 1) return array;
  for (let i = 1; i < array.length; i += 1) {
    if (i === 1) unsorted = false
    if (array[i] < array[i-1]) {
      [array[i], array[i-1]] = [array[i-1], array[i]]
      unsorted = true;
    }
    // console.log(array, i);
    if (i === array.length-1 && unsorted === true) i = 0;
  }
  return array;
}

module.exports = bubbleSort;
