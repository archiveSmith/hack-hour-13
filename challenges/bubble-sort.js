
// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array, n = 0) {
  if (array.length - 1 === n) {return array}
  for (let i = 0; i < array.length - n; i += 1) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]]; 
    }
  }
  return bubbleSort(array, n + 1);
}

//--------------------O(n^2)------------------
function bubbleSort2(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]; 
      }
    }
  }
  return array;
}

console.log( bubbleSort2([4, 3, 9, 1, 99, 45, 1, 88]) );

/*
loop thru array: 
  if (i + 1 > i) switch their places
  keep doing this til end;
next time you loop, only go thru array.length - 1 (recursion);
*/


module.exports = bubbleSort;
