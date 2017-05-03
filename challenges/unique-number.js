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
  const counterObj = {};

  for(let i = 0; i < array.length; i += 1) {
    if( !counterObj.hasOwnProperty(array[i]) ) {
      counterObj[array[i]] = 1;
    } else if( counterObj.hasOwnProperty(array[i]) && counterObj[array[i]] === 1) {
      counterObj[array[i]] = 2;
    }
  }

  for(let x in counterObj) {
    if(counterObj[x] === 1) {
      return Number(x)
    }
  }
}

module.exports = uniqueNumber;
