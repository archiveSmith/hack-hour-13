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
  //If input is not an array, tell user to insert array
  // if (!Array.isArray(array)) return 'Please insert array';
  //
  // // loop through fist half of array only as all elements swapped by then
  // for (let i = 0; i < array.length / 2; i += 1) {
  //   // store element in temporary variable
  //   const temp = array[i];
  //
  //   // overwrite current element with element that is equidistant from end of array
  //   array[i] = array[array.length - 1 - i];
  //
  //   // overwrite end element with temporary
  //   array[array.length - 1 - i] = temp;
  // }
  //
  // //Return array
  // return array;


  // start from center, decrement, swap position on both side
  // if array is even, use half of the array at a time
  // if array is not even, keep the middle, start from both sides
  let frontStart = Math.floor(array.length/2)-1;
  let backStart = array.length % 2 === 0 ? frontStart +1 : frontStart + 2;
  
  for (let i = frontStart; i > -1; i -= 1) {
    [array[i], array[backStart]] = [array[backStart], array[i]];
    backStart += 1;
  }
  return array;
}

module.exports = reverseInPlace;
