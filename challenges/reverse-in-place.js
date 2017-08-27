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
 	if(array === undefined) return [];
 	if(array.length === 0) return [];
 	let arrayLength = array.length;
 	for(let i= arrayLength - 1; i >= 0; i -= 1){
 		array.push(array[i]);
 	}
 	 array.splice(0, arrayLength);
 	 return array;
}

// SECOND SOLUTION
function reverseInPlace(array) {
 if(!array || array.length === 0) return [];	
 let len = array.length-1;
 for(let start=0, end=len; end > start; start++, end--){
 	[array[start], array[end]] = [array[end], array[start]];
 }
 return array;
}

module.exports = reverseInPlace;
