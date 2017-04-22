/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  // check edge case, if not array return false
  if (array.constructor !== Array) return false;
  // initialize empty array to hold the answer
  let condensed = [];
  // check if the input array's length is even or odd and return boolean
  let isOdd = array.length % 2 === 1 ? true : false;

  // merge all the times into a single array
  let flattened = array.reduce((acc, curr) => {
    return acc.concat(curr);
  }, [])

  // sort the array from smallest to largest
  flattened.sort((a, b) => {
    return a - b;
  })

  // create a sub array to push into condensed
  let subTimes = [];
  let iterationCheck = 0;
  // make new merged times and push them into the condensed form
  for (let i = 0; i <= flattened.length; i += 1) {
    // check to see if subtimes is full, push if it is and reset it
    if (subTimes.length === 2) {
      condensed.push(subTimes);
      subTimes = [];
      iterationCheck = 0;
    }
    
    // iterate each time we loop through
    iterationCheck += 1;

    // if the input array was odd, don't touch the first two times
    if (isOdd && (i === 0 || i === 1)) {
      subTimes.push(flattened[i]);
    } else if (subTimes.length === 0) { // basially push if subtimes is empty, then we need to skip 2 iterations
      subTimes.push(flattened[i]);
    } else if (subTimes.length === 1 && iterationCheck === 4) {
      subTimes.push(flattened[i]);
    }
  }

  return condensed;
}


// var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

// mergeRanges(times);

module.exports = mergeRanges;
