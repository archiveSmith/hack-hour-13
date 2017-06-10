
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

//--------------------------------------
function bubbleSort2(array) {
  function swap(arr, in1, in2) {
    [arr[in1], arr[in2]] = [arr[in2], arr[in1]];
  }
  const newArr = Array.from(array);  //so don't alter original array;
  let i = array.length - 1;
  let changed = true;

  while(i > 0 && changed) {
    changed = false;
    let j = 0;
    while(j < i) {
      if (newArr[j] > newArr[j + 1]) {
        swap(newArr, j, j + 1);
        changed = true;
      }
      j += 1;
    }
    i -= 1;
  }
  return newArr;
}

console.log( bubbleSort2([4, 3, 9, 1, 99, 45, 1, 88]) );

/*
loop thru array: 
  if (i + 1 > i) switch their places
  keep doing this til end;
next time you loop, only go thru array.length - 1 (recursion);
*/


module.exports = bubbleSort;
