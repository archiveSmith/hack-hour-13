/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
let countObj = {};

    for (let i = 0; i < array.length; i += 1) {
        if(!countObj[array[i]]) {
            countObj[array[i]] = 1;
        } else {
            return array[i];
        }
    }
    return 'No repeating numbers';
}

console.log(repeatNumbers([1,2,3]));

module.exports = repeatNumbers;
