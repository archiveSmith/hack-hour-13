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
  const uniqNum = {};
  let num;

  for (let i = 0; i < array.length; i += 1) {
    if (!uniqNum[array[i]]) {
      uniqNum[array[i]] = 1;
    } else {
      uniqNum[array[i]] += 1;
    }
  }

  let keyArr = Object.keys(uniqNum);

  for (let j = 0; j < keyArr.length; j += 1) {
    if (uniqNum[keyArr[j]] === 1) num = keyArr[j];
  }
  return num;
}

module.exports = uniqueNumber;
