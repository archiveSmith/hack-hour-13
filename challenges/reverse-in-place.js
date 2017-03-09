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
  //Create a first and last variable to keep reference to the index of array;
  //While loop as long as the last is greater than the first;
  //Store a temp to keep a copy of the array value at each index and set the last value to the first
  //Increment the first with each iteration and decrement the last until it breaks the while condition
  //Return the array
  var first = 0;
  var last = array.length - 1;

  while (first < last) {
    var temp = array[first];
    array[first] = array[last];
    array[last] = temp;

    first++;
    last--;
  }
return array;

}

//reverseInPlace([1,2,3,4,5,6,7]) => [7,6,5,4,3,2,1];

module.exports = reverseInPlace;
