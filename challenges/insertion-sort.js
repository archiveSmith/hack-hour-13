// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
    if (array.length <= 1) return array;

    for (let i = 1; i < array.length; i += 1) {
        let temp = array[i];
        let j = i - 1;
        for (; j >= 0 && array[j] > temp; --j) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return array;
}

console.log(insertionSort([4, 1, 4, 1, 6, 7, 2]));

module.exports = insertionSort;