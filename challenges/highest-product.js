/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	const sortedArr = array.sort((a, b) => b - a);
	if (sortedArr[0] < 0) return sortedArr[0] * sortedArr[1] * sortedArr[2];
	const prod1 = sortedArr[1] * sortedArr[2];
	const prod2 = sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2];
	return sortedArr[0] * Math.max(prod1, prod2);
}


module.exports = highestProduct;
