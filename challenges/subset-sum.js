/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

//brute force method (slow); 
function subsetSum1(array, target) {
    const subsets = [[]];  //array[0] === 3  [[], [3]]
    for (let i = 0; i < array.length; i +=1) {
        for (let j = 0, len = subsets.length; j < len; j+= 1) {
            const subset = array[i].concat(subset[j]); 
            if (subset.reduce((a,b) => a + b) === target) {
                return true;
            } 
            subsets.push(subset); 
        }
    }
    return false; 
}


//decrement target until reaches zero, if it reaches 0, then return true;
//also array has to become smaller and smaller
//but doesn't account for negative numbers 
function subsetSum2(array, target) {
    for (let i = 0; i < array.length; i +=1) {
        if (array[i] === target) return true;
        if (array[i] < target) {
            const newArr = array.slice(i + 1);
            const newTarget = target - array[i];
            if (subsetSum2(newArr, newTarget)) {
                return true;
            }
        }
    }
    return false; 
}

//subsets include number or don't include number; just need to test for 2 cases 
function subsetSum(array, target) {
    if (target === 0) return true; 
    if (!array.length) return false; 
    return subsetSum(array.slice(1), target - array[0]) 
        || subsetSum(array.slice(1), target); 
}

console.log(subsetSum([3, 7, 4, 2], 5))  //true
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) //true
console.log(subsetSum([8, 2, 4, 12], 13)) // false
console.log(subsetSum([8, -2, 1, -3], 6)) //true



/*
//every level branches out 2 ways b/c each level has an OR 
[3,7,4,2] 5

[7,4,2], 2                                      ||   [7,4,2] 5
[4,2] , -5    ||       [4,2]  2
                  [2] -2  ||  [2], 2
                [] 0 || []








*/







module.exports = subsetSum;
