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

/*
Input
  array

Output
  input array reversed ("in place")
  no new objects are created in memory

Edge Cases
  if the input is not an array return "Invalid input"

###### Temporary swaphalf solution ######

Initialize left and right variables setting them eqaul to null
Initialize a length variable set equal to input array.length
Use a for loop to iterate through the array (half of length)
and swap left and right elements of the array
Each iteration initialize a variable temp to hold the array[left] element value

###### Push and Splice solution ######
loop through the input array
Set i equal to array.length - 2 (second to the last element in the array)
Loop until iterator (i) is greater than or equal to 0
Each iteration decrement i by one
Each iteration push array[i] on to input array
Each iteration splice element at index i
return array

###### Array destructuring solution ######
*/

let array = [1, 2, 3, 4, 5, 6];

function reverseInPlace(array) {
  if (!Array.isArray(array)) return 'invalid input';

}

module.exports = reverseInPlace;
