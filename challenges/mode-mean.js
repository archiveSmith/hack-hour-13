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
"use strict";

function modemean(array) {
	// If empty or not an array
	if (!array.length || !Array.isArray(array)) {
		throw new Error('Not a valid array');
	} 

	// Determine avg
	let sum = array.reduce( (lastAvg, num) => lastAvg + num );
	let avg = Math.floor( sum/(array.length) );

	// Determine mode(s)
	let highestOccur = 0;
	let numOccur = array.reduce( (accumObj, num) => {
		if (accumObj[num] === undefined) {
			accumObj[num] = 1;
		} else {
			accumObj[num]++;
		}
		highestOccur = Math.max(accumObj[num], highestOccur);
		return accumObj;
	}, {});
	let modes = Object.keys(numOccur).reduce( (accumArr, num) => {
		let occur = numOccur[num];
		if (occur === highestOccur) {
			accumArr.push(+num); // reconvert key back to number
		}
		return accumArr;
	}, []);

	console.log(avg, modes);
	// Determine if avg equal to (one of) mode(s)
	return modes.indexOf(avg) !== -1;
}

let results = [
	modemean([1,50,100,100]),
	modemean([1,1,2,2,3,3]),
	modemean([70,5,5,5,-60]),
];
console.log(...results)

module.exports = modemean;
