// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    let temp;

    if (!array || array === []) return [];

    for (let i = 0; i < array.length; i += 1) {
        if (array[i + 1] < array[i]) {
            temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
    return array;
}

console.log(bubbleSort([1, 2, 3, 3, 9, 1, 2]));

module.exports = bubbleSort;
