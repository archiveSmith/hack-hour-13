var _ = require("lodash");

// Done - Angela

// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input
// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];
// your output would be [ 12, 'ferret']
// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements() {}

function commonElements(array1, array2, array3, array4) {
  // create a cache object to hold all values
  var cache = {};
  var returnArr = [];
  // find unique values only in each array
  // could also use reduce
  uniqueArray1 = array1.filter(function(item, pos) {
    return array1.indexOf(item) == pos;
  });
  uniqueArray2 = array2.filter(function(item, pos) {
    return array2.indexOf(item) == pos;
  });
  uniqueArray3 = array3.filter(function(item, pos) {
    return array3.indexOf(item) == pos;
  });
  uniqueArray4 = array4.filter(function(item, pos) {
    return array4.indexOf(item) == pos;
  });
  // loop through each array
  // if the element already exists, add a tick
  // add each element to the object
  for (let a = 0; a < uniqueArray1.length; a += 1) {
    if (cache[uniqueArray1[a]]) cache[uniqueArray1[a]] += 1;
    else if (!cache[uniqueArray1[a]]) cache[uniqueArray1[a]] = 1;
  }
  for (let b = 0; b < uniqueArray2.length; b += 1) {
    if (cache[uniqueArray2[b]]) cache[uniqueArray2[b]] += 1;
    else if (!cache[uniqueArray2[b]]) cache[uniqueArray2[b]] = 1;
  }
  for (let c = 0; c < uniqueArray3.length; c += 1) {
    if (cache[uniqueArray3[c]]) cache[uniqueArray3[c]] += 1;
    else if (!cache[uniqueArray3[c]]) cache[uniqueArray3[c]] = 1;
  }
  for (let d = 0; d < uniqueArray4.length; d += 1) {
    if (cache[uniqueArray4[d]]) cache[uniqueArray4[d]] += 1;
    else if (!cache[uniqueArray4[d]]) cache[uniqueArray4[d]] = 1;
  }
  // when the cache is populated, grab all elements where the tick value is 4
  filtered = _.pickBy(cache, function(value, key) {
    return value === 4;
  });
  // use isNaN to check if the string is a number
  var returnArr = Object.keys(filtered).map((key, index) => {
    if (isNaN(key) === false) {
      return parseInt(key);
    } else {
      return key;
    }
  });
  if (returnArr.length === 0) return "Nothing in Common!";
  else return returnArr;
}

var array1 = [1, 4, 6, 7, "ferret", 12, 12, 99, 2000, "dog", "dog", 99, 1000];
var array2 = [15, 9, 9, "ferret", 9, 26, 12, 12, "dog"];
var array3 = [23, 12, 12, 77, "ferret", 9, 88, 100, "dog"];
var array4 = ["ferret", 12, 12, 45, 9, 66, 77, 78, 2000];
console.log(commonElements(array1, array2, array3, array4));

module.exports = commonElements;
