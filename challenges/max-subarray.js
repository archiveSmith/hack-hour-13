/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let max = 0;
  if (arr.length === 0) {return max}

  function inner(arr) {
    if (arr.length === 0) {return}

    let curr = arr.reduce((a,b) => a + b, 0)
    if (curr > max) {
      max = curr;
    }
    arr.pop();
    inner(arr)
  }
  //make new arrays with beginning shifted off and use them in inner function 
  for (let i = 0; i < arr.length; i += 1) {
    let newArr = arr.slice(i);
    inner(newArr)
  }
 
  return max; 
}

console.log( maxSubarray([3,3,0,-10,13]))
/*
input: array of pos and neg numbers;
output: max sum of all subarrays(selection of consecutive elements)

loop, add i + 1,2,3,etc. values after it, each time, store max number summed.  
need to explicitly set how many values to check after the initial number( not loop thru entire array )

//use reduce to add values; recursively shift off first value in array, hold max
*/

module.exports = maxSubarray;
