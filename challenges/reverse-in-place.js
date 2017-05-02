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
    // move pointer to first and last index
    // switch the variables
    // don't move the middle variable
    for(var i = 0; i < array.length/2; i++){
        console.log("debug 1",i);
        var n = array.length-1;
        var tempStartVar = array[i];
        var tempEndVar = array[n-i];
        console.log("**start is, end is**",tempStartVar,tempEndVar);
        array[i] = tempEndVar;
        array[n-i] = tempStartVar;
    }
    return array;
}

console.log(reverseInPlace(['a','b','c','d','e','f','g']));

module.exports = reverseInPlace;
