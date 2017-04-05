/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    if(!Array.isArray(arr) || arr.length <= 1) return false;

    for(let i = 0 ; i<arr.length; i += 1) {
        for(let j = 0; j<arr.length; j += 1) {
            if(j !== i) {
                if(arr[j] + arr[i] === n) return true;
            }
        }
    }
    return false;

}

module.exports = twoSum;
