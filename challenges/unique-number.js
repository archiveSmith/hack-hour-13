/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

//O(n) time, O(n) space
function uniqueNumber1(array) {
    let obj = {};
    for(let i = 0; i < array.length; i += 1) {
        if(!obj[array[i]]) obj[array[i]] = 1;
        else delete obj[array[i]];
    }
    return Number(Object.keys(obj).join(''));
}

// console.log(uniqueNumber([1,2,1,3,3]));

function uniqueNumber(array) {
    let result = 0;
    for (let i = 0; i < array.length; i += 1) {
        result = result ^ array[i];
    }
    return result;
}


module.exports = uniqueNumber;
