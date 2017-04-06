/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let result = [];
  for (let i = 1; i <= arr.length; i += 1) {
    let others = arr.slice(i).concat( arr.slice(0, (i -1)) ) 
    for (let j = 0; j < others.length; j += 1) {
      if (arr[i] + others[j] === n) return true;
    }
  }
  return false;
}

//--------------------------------------
function twoSum2(arr, n) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === n) return true;
    }
  }
  return false; 
}

//build hash of subtractions from n, if find it in hash then you know two values equal n; 
function twoSum3(arr, n) {
  const hash = {};
  for (let i = 0; i < arr.length; i += 1) {
    if (hash[n - arr[i]]) return true;
    hash[arr[i]] = 1;
  }
  return false;
}

/*
loop to check each number in array 
slice out number checking and add that number to each other to see if equal n 
repeat that process til get true; if don't return false at bottom
*/



/////////////////////TESTING/////////////////////////////////////

console.log('TRUE__', twoSum([3,1,2,6], 9) )
console.log('FALSE__', twoSum([3,1,2,3], 9) )
console.log('TRUE__', twoSum([1,3,3,10], 6) )


module.exports = twoSum;
