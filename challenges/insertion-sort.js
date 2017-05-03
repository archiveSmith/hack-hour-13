// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for(let i = 0; i < array.length-1; i += 1) {
    for (let j = i + 1; j >= 0; j -= 1) {
      if(array[j] < array[j-1]) {
        [ array[j-1], array[j] ] = [ array[j], array[j-1] ]
      }
    }
  }
  return array
}

module.exports = insertionSort;