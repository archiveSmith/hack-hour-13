/* 
A zero-indexed array A consisting of N different integers is given. 
The array contains integers in the range [1..(N + 1)], which means 
that exactly one element is missing.Your goal is to find that missing element.
Write a function that, given an array A, returns the value of the missing element.
For example, given array A such that:
  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.
Assume that:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 Complexity:
expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Challange: 
  ** cannot use additional storage, variables are okay not any TYPE of object
  ** keep in mind time complexity
*/
//------------------O(n) space but O(n log n) b/c sorting--------------------------
function missingNum(array) {
  return array.sort((a,b) => a - b)
    .filter((n, i, arr) => (arr.indexOf(n) + arr[0]) !== n).join('') - 1;
}

//------------------O(n) space and time----------------------------
function missingNum2(array) {
  //store in object putting n as key; value as true 
  //loop thru object checking if key = previous key + 1
  let dict = array.reduce((obj, curr) => {
    obj[curr] = curr;
    return obj;
  }, {});
  // return Object.keys(dict);
  return Object.keys(dict).filter((key, i, arr) =>
    (arr.indexOf(key) + +arr[0]) !== +key
  ).join('') - 1;
}

//---------------------------O(n^2)---space complexity: 1------------
function missingNum3(array) {
  //iterate thru array where i<= array.length
  //look for index + 1 in array
  for(let i = 1; i < array.length + 1; i += 1) {
    if (array.indexOf(i) === -1) return i;
  }
  //if not found, you found the missing number;
}

//------------O(n) time -----space: 3-------------
function missingNum4(array) {
  var actualCount = 0;
  var expectedTotal = 1;

  for (var i = 0; i < array.length; i++) {
    actualCount += array[i];
    expectedTotal += i + 2;
  }

  return expectedTotal - actualCount;
}

//  n(n+1) / 2 --------O(n)----space: 1-----------------
function missingNum5(array) {
  //get sum of all integers from 1 to (N+1) including missing element
  //using sum of linear series of number: n*(n+1)/2, n = Array.length + 1
  const sum = (array.length + 1) * (array.length + 2) / 2;
  //subtract all present integers from sum to find missing element 
  return array.reduce((acc, num) => acc - num, sum); 
}


///////////////////////////////////////////////////
console.log(missingNum2([3,4,1,2,6]))




//////////////////////////////////////////////////
module.exports = missingNum;