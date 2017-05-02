'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
<<<<<<< HEAD
	for (let i = 0; i < Math.floor(array.length / 2); i += 1) {
		const val = array[i];
		array[i] = array[array.length - i - 1];
		array[array.length - i - 1] = val;
	}
	return array;
=======

>>>>>>> 7ae73ed04afdae654b22fcfcfd347cca47f22134
}

module.exports = reverseInPlace;
