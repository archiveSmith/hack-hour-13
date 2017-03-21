/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

    return Array.isArray(array) && array.length > 3 ? array.sort((a, b) => b - a).slice(0, 3).reduce((all, item) => { all *= item; return all; }) : 'Please provide a valid array';
}

module.exports = highestProduct;
