// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



// function bubbleSort(array) {

//   for(let i = 0; i < array.length; i++){
//     for(let j = i +1; j < array.length; j ++){
//       if(array[i] > array[j]) [array[i], array[j]] = [array[j], array[i]]
//     }
//   }
//  return array;
// }

// SOLUTION
function bubbleSort(array) {
  function swap(arr, ind1, ind2) {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
  }
  const newArr = array;
  let i = array.length - 1;
  let changed = true;
  while (i > 0 && changed) {
    changed = false;
    let j = 0;
    while (j < i) {
      if (newArr[j] > newArr[j + 1]) {
        swap(newArr, j, j + 1)
        changed = true;
      }
      j += 1;
    }
    i -= 1;
  }
  return newArr;
}


console.log(bubbleSort([4, 5, 61, 324, 7, 1, 123, 0]))
module.exports = bubbleSort;
