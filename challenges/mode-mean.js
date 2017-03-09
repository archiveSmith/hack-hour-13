/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	let mode;
	let maxFreq = 0;
	let currFreq = 0;
	for (let i = 0; i < array.length; i += 1) {
		if (array[i] === array[i + 1]) {
			currFreq += 1;
		} else {
			currFreq = 0;
		}
		if (currFreq > maxFreq) {
			mode = array[i];
			maxFreq = currFreq;
		}
	}
	let mean = Math.floor(array.reduce((a, b) => a + b) / array.length);
	return mean === mode;
}

module.exports = modemean;
