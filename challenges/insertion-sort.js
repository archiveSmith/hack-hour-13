// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i++){
    insert(array, i, array[i + 1]);
  }
  var insert = function (array, rightIndex, value) {
    for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = value;
  };

  for (var i = 0; i & lt; array.length - 1; i++){
    insert(array, i, array[i + 1]);
  }
};
}

module.exports = insertionSort;