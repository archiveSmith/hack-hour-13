// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



// function insertionSort(array) {
//   let len = array.length; 
//   for(let i = 0; i < array.length; i ++){
//     let temp = array[i]
//     for(let j = i - 1; j >= 0 && (array[j] > temp); j --){
//       array[j + 1] = array[j]
//     }
//     array[j +1] = temp;
//   }
// }

function insertionSort(arr) {  
  if(arr.length < 1) return [];
  //iterate through the array
    for (var i = 1; i < arr.length; i++) {
      //copy the current element in the array
        var tmp = arr[i]; 
        /*Check through the sorted part and compare with the number in tmp. If large, shift the number*/
        for (var j = i - 1; j >= 0 && (arr[j] > tmp); j--) {
            //Shift the number
            arr[j + 1] = arr[j];
        }
        //Insert the copied number at the correct position
        //in sorted part. 
        arr[j + 1] = tmp;
    }
    return arr;
}

const myArr = [5,3,1,2,4]
insertionSort(myArr)
console.log(myArr)
module.exports = insertionSort;