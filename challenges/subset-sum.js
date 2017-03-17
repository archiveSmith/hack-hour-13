/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */
//MY SOLUTION
function subsetSum(array, target) {
    if(typeof target !== 'number'){
        return "please give me a number"
    }
    function isNum(value){
        return typeof value === 'number';
    }
    if(array.length < 1){return false}
    let numArr = array.sort(function (a, b){
        return b - a;
    })
   // console.log(newArr)
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 1; j < numArr.length; j++) {
            let currentAdd = numArr[j] + numArr[i]
            //console.log(currentAdd)
            if (numArr[j] + numArr[i] === target) {
                return true;
            }
            while (currentAdd < target) {
                //console.log("before", currentAdd)
                j += 1;
                currentAdd += numArr[j]
                //console.log(currentAdd, numArr[j])
                if (currentAdd === target) {
                    return true;
                }else if (currentAdd > target){
                    break;
                }
            }
        }
    }
    return false; 
}
//BRUTE FORCE METHOD
// function subsetSum(array, target){
//     const subsets = [[]]; //array[0] === 3....[[]], [3]
//     for(let i = 0; i < array.length; i += 1){
//         for(let j = 0, len = subsets.length; j < len; j += 1){
//             const subset = array[i].concat(subset[j]);
//             if(subset.reduce((a, b) => a + b) == target{
//                 return true;
//             }
//             subsets.push(subset);
//         }
//     }
//     return false;
// }

//LINKED LIST FOR LOOP
//for(let i = head; i; i = i.next)
//for a linked list, while  i exists keeps setting i to i.next. 
//
// RECURSIVE METHOD WON't ACCOUNT FOR NEGATIVE NUMBERS
// function subsetSum(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === target) return true;
//         if (array[i] < target) {
//             const newArr = array.slice(i + 1);
//             const newTarget = target - array[i];
//             if (subsetSum(newArr, newTarget)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// Best Practice for subsetSum
// function subsetSum(array, target){
//     if(!target) return true; //meaning that you decremented to zero exactly
//     if(!array.length) return false; //empty arry means no sum was equal to the target
//     return subsetSum(array.slice(1), target - array[0]) 
//     || subsetSum(array.slice(1), target);
// }


console.log(subsetSum([3, 7, 4, 2], 5)) // --> True
console.log(subsetSum([-34, 2], -32)) // -->true 
console.log(subsetSum([8, 2, 4, 12], 13)) //false
console.log(subsetSum([8, -2, 1, -3], 6)) //true


module.exports = subsetSum;
