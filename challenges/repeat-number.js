/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {

  //SOLUTION WITH O(n) time
  let myObj = {}
  for (let i = 0; i < array.length; i++) {
    if (!myObj.hasOwnProperty([array[i]])) {
      myObj[array[i]] = array[i]
    }
    else return array[i]
  }

  //O(n) time and O(n) space
  // function repeat(arr){
  //   const cache = {};
  //   for(let i = 0; i < arr.length; i++){
  //     if(cache[arr][i]) return array[i];
  //     cache[arr[i]] = true; 
  //   }
  // }


//MATH SOLUTION DON'T FEEL BAD ABOUT NOT GETTING THIS ONE
  function repeatNums(arr) {
    const expected = (arr.length(arr.length - 1)) / 2
    let actual = 0; 
    for(let i = 0; i < array.length; i++){
      actual += array[i];
    }
    return actual - expected; 
  }
  // let sorted = array.sort((a,b) =>{return a - b})
  // for(let i = 0; i < sorted.length; i++){
  //   if(sorted[i] === sorted[i +1]) return sorted[i];
  // }
  // return false;
}
repeatNumbers([87, 23, 121, 4, 2, 6, 9, 324, 879, 2344579, 234, 78, 879])
module.exports = repeatNumbers;
