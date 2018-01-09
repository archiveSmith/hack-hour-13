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
  if(!array || !target) return false;
  // power set
  let sets = [[]];

  // generate the power set and for each new set
  // check if the temporary sum equals our sum above
  for (let i = 0; i < array.length; i++) {
    for (let j = 0, len = sets.length; j < len; j++) { 
      //we set len = sets.length, because we don't want it to update 
      //until the loop is done (which it would if we used sets.length because we are pushing into it)
      let temp = sets[j].concat(array[i]);
      sets.push(temp);
      let sum = temp.reduce((p, c) => p + c);
      if (sum === target) return true;
    }
  }
  return false;
         
}

//edge case
//   if(array === 'undefined' || array.length === 0) return false;
  
//   array.sort(function(a,b) {
//     return a - b;
//   });
  
// target = target - array[0];

//  if (target === 0) {
//    return true;
//  }
 
//   array.shift();
  
//  return subsetSum(array, target);

// }

module.exports = subsetSum;
