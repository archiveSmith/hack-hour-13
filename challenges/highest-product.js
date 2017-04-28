/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct (array) {
    if (array.length < 3 || !Array.isArray(array)) {
        return 0;
    }

    array = array.sort(function (a, b) {
        return a - b;
    });

    let first = array[0] * array[1] * array[array.length - 1];
    let second = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];

    return Math.max(first, second);
}

module.exports = highestProduct;
