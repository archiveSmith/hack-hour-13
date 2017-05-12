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
  // join the entire array and sort it
  let newArr = array.join().split(',').sort((a, b) => a - b);
  console.log(newArr);
  // with the reduce method, make the initial state a new array
  return newArr.reduce((acc, curr) => { console.log(acc);
  // in the reduce method if there is not a current array in the working element
  // start a new one
    if (!acc[0]) {
      acc.push([+curr]);
      return acc;
    }
    // if the next element is only one greater than the first element inside the new array
    // add it in the new array's 1st position
    if (acc[acc.length - 1][0] + 1 === +curr) {
      acc[acc.length - 1].push(+curr);
      return acc;
    }
    if (acc[acc.length - 1][1] === +curr) return acc;
    // each test after, when the length of the new array is 2, check if the current element
    // is only one greater than the number in position 1, if not, start a new array inside
    // the array
    if (acc[acc.length - 1].length === 2 && acc[acc.length - 1][1] + 1 === +curr) {
      acc[acc.length - 1][1] = +curr;
      return acc;
    } else if (acc[acc.length - 1].length === 2 && acc[acc.length - 1][1] + 1 === +curr) {
      acc.push([+curr]);
      return acc;
    }
    acc[acc.length - 1][1] = +curr;
    return acc;
  }, []);
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

mergeRanges(times);

module.exports = mergeRanges;
