// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
    if (array.length <= 1) return array;

    for (let i = 1; i < array.length; i += 1) {
        let temp = array[i];
        for (let j = i - 1; j >= 0 && array[j] > temp; --j) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return array;
}


//solution
function insertionSort2(array) {
    for (let sorted = 0; sorted < array.length; sorted += 1) {
        for (let swap = sorted + 1; array[swap] < array[swap - 1]; swap -= 1) {
            [array[swap - 1], array[swap]] = [array[swap], array[swap - 1]];
        }
    }
    return array;
}

console.log(insertionSort2([4, 1, 4, 1, 6, 7, 2]));

module.exports = insertionSort;