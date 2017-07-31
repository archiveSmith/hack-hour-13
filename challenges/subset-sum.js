/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    let sum = 0;

    if(array.length === 0 || !Array.isArray(array)) return false;
    if(array.length === 1 && array[0] !== target) return false;

    for(let i=0; i<array.length; i += 1){
        sum = array[i];
        for(let j=0; j<array.length; j+=1){
            if(j !== i){
                sum += array[j];
                if(sum === target) return true;
            }
        }
        for(let k=0; k<array.length; k += 1){
            if(k !== i){
                sum -= array[k];
                if(sum === target) return true;
            }
        }
        sum = 0;
    }
    return false;

}


// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));
module.exports = subsetSum;
