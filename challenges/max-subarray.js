/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
//http://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
function maxSubarray(arr) {
  var maxSoFar = 0;
  var maxEndingHere = 0;

  for(var i = 0; i < arr.length; i++){
    maxEndingHere = maxEndingHere + arr[i];
    if(maxEndingHere > maxSoFar){

    }
  }

}

module.exports = maxSubarray;
