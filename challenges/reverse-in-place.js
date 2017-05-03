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
  // do not create any new variables

  // create a for loop that will change the last memory space of the array
  // to the first memory space of the array.
  // then the second to last memory space of the array to the second memory
  // space of the array, and so on

  for(let i = 0; i < Math.floor(array.length/2); i += 1) {
    // reassign the ith to last element to the ith element
    let temp = array[i]
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
  return array;
}

module.exports = reverseInPlace;
