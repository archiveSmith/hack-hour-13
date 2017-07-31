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

// Input
  // array

// Output
  // input array reversed ("in place")
  // no new objects are created in memory

// Edge Cases
  // if the input is not an array return "Invalid input"

// Temporary swaphalf solution

// Initialize left and right variables setting them eqaul to null
// Initialize a length variable set equal to input array.length
// Use a for loop to iterate through the array (half of length)
// and swap left and right elements of the array
// Each iteration initialize a variable temp to hold the array[left] element value

// let array = [1, 2, 3, 4, 5, 6];

function reverseInPlace(array) {
  if (!Array.isArray(array)) return 'invalid input';

  let left = null;
  let right = null;
  const length = array.length;

  for (left = 0; left < length / 2; left += 1) {
    right = length - 1 - left;
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }
  return array;
}

module.exports = reverseInPlace;
