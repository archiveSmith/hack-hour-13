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
    if (target === 0) return true; 
    if (!array.length) return false; 
    return subsetSum(array.slice(1), target) || subsetSum(array.slice(1), target - array[0]); 
}

console.log(subsetSum([3, 7, 4, 2], 5))  //true
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) //true
console.log(subsetSum([8, 2, 4, 12], 13)) // false
console.log(subsetSum([8, -2, 1, -3], 6)) //true


/*
break into single values
match all values with all possible combinations 
match 1 value with 1 value (2 value matching)
match 3 values, etc.  

reduce recursion? 
create every possible subset array and add those values up in each array; if one returns equal to target then true 
*/








module.exports = subsetSum;
