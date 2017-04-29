/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
function maxSubarray(arr) {
  let currSum = arr[0]
  let maxSum = Number.NEGATIVE_INFINITY;
  for(let j = 1; j < arr.length; j += 1){
    currSum += arr[j]; 
    if(currSum > maxSum) {
      maxSum = currSum; 
    }
    if(arr[j] > maxSum){
      maxSum = arr[j]; 
      currSum = arr[j]
    }
  }
  return maxSum; 

  // //SOLUTION WITH O(N^2)
  // if (arr.length === 1) return arr[0]
  // let maxSum = Number.NEGATIVE_INFINITY;
  // //maxSoFar will only affect answer when array is all negative numbers
  // let maxSoFar;
  // for (let i = 0; i < arr.length; i++) {
  //   let currentSet = arr[i];
  //   for (let j = i + 1; j < arr.length; j++) {
  //     //maxSoFar value used to get a value for negative arrays
  //     maxSoFar = Math.max(arr[j], arr[i])
  //     currentSet += arr[j]
  //     if (currentSet > maxSum) {
  //       maxSum = (Math.max(currentSet, maxSoFar));
  //     }
  //   }
  // }
  // return maxSum;
}
maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])
module.exports = maxSubarray;
