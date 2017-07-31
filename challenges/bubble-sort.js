// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if(!Array.isArray(array)) return 'please provide a valid input';
  if(array.length <= 1) return array;
  
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i; j += 1) {
      if(array[j+1]) {
        if(array[j] > array[j+1]) {
          [array[j], array[j+1]] = [array[j+1], array[j]];
        }
      }
    }
  }
  return array;
}

console.log(bubbleSort([3,1,5,1,5,2]));

module.exports = bubbleSort;
