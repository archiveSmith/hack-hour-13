/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // recursive

  // with two for loops
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === n) {
        return true;
      }
    }
  }
  return false;


  // attempt with one for loop ~~~ doensnt fully work cuz deep clone not working
  // let copyArr = arr;

  // for (let i = 0; i < arr.length; i += 1) {
  //   if (copyArr[copyArr.length - 1] + arr[i] === n && i !== copyArr.length - 1) {
  //     return true;
  //   } else if (i === arr.length - 1) {
  //     if (copyArr.length > 0) {
  //       copyArr.pop();
  //       i = 0;
  //     }
  //   }
  // }

  // return false;
}

module.exports = twoSum;
