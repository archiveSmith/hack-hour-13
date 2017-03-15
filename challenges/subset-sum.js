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
  // Check all 2 digit combos then all 3 digit combos up to max then move to next number
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum = array[i];
   //console.log('next round');
    if (sum === target) return true;
    counter = 1;
    for (let j = i + counter; j < array.length; j += 1) {
      //console.log('counter', j);
      if (sum + array[j] === target) return true
      if (j === array.length - 1) {
        sum += array[counter];
        //console.log(sum);
        j = counter;
        counter += 1;
        //console.log('counter', j);
      }
    }
  }
  return false;
}

module.exports = subsetSum;
