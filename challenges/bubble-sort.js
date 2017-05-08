// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for(let i = 0; i < array.length; i++){
    for(let j = i +1; j < array.length; j ++){
      if(array[i] > array[j]) [array[i], array[j]] = [array[j], array[i]]
    }
  }
 return array;
}

console.log(bubbleSort([4,5,61,324,7,1,123,0]))
module.exports = bubbleSort;
