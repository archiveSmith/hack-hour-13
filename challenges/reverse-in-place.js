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


//joel notes:
//we have to override, store
/*
if input is not an array, tell users

loop through first half of array only as all elements swapped by then

store element in temporary variable

overwrite current element with element that is equidistant from end of array

overwrite end element with temporary

return end element with temp

return modified in place*/
function reverseInPlace(array) {
  
}

//start middle pop off, unshift

console.log(reverseInPlace([1,2,3,4,5]));


module.exports = reverseInPlace;
