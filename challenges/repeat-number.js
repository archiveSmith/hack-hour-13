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


//O(n) time, O(n) space
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


function repeatNumbers1(array) {
    const expected = (array.length * (array.length -1))/ 2;

    let actual = 0;
    
    for(let i =0; i< array.length; i += 1) {
        actual += array[i];
    }

    return actual - expected;
}


console.log(repeatNumbers([1,2,3]));

module.exports = repeatNumbers;
