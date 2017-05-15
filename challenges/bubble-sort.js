// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
 let sorted = true;
  while (sorted) {
    sorted = false;
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = true;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;

//john's solution:
// function bubbleSort(array) {
//   function swap(arr, ind1, ind2) {
//     [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
//   }
//   const newArr = Array.from(array);
//   let i = array.length - 1;
//   let changed = true;

//   while (i > 0 && changed) {
//     changed = false;
//     let j = 0;
//     while (j < i) {
//       if (newArr[j] > newArr[j + 1]) {
//         swap(newArr, j, j + 1);
//         changed = true;
//       }
//       j += 1;
//     }
//     i -= 1;
//   }
//   return newArr;
// }
