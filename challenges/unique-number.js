/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

/*
 Input -> array of integers
    All duplicates except for one

 Output -> Integer that appears once

 ###### Solution 1 #######
 Create an object to store values in array as keys
  Check if key exists
  if not, set key with value
  else increase value
 Iterate over object to find key with value 1 and parse to integer

 ###### Solution 2 #######
 Sort input array so integers are in ascending order -> [1, 1, 2, 3, 3];
 Iterate over sorted array
   Each iteration check if value at array[i] is not equal to value at array[i + 1]
     if not return array[i]
     Each iteration increment i by 2
 If inner loop condition not met, loop will end
   return last element in the sorted array

 ###### Solution 3 #######
 Create a variable result to hold desired return value
 Iterate over input array
 Each iteration set result equal to result bitwise XOR operator ^ to add each value in array to result
 Return result

 Only works if one unique number and even number of each duplicate
*/

function uniqueNumber(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result = result ^ array[i];
  }
  return result;
}

uniqueNumber([1,2,1,3,3]);

module.exports = uniqueNumber;
