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
function uniqueNumber(array) {
  let myObj = {};
  array.forEach((el) =>{
    if(!myObj[el]) myObj[el] = 1; 
    else delete myObj[el]
  })
  return Object.keys(myObj)[0]
}

uniqueNumber([5,4,6,8,5,4,6])

module.exports = uniqueNumber;
