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
  let sorted = array.sort((a, b) => a[0] - b[0]);

  let result = []
  let i = 0;
  let j = 1;

  function inner(curr, next) {
    if (!next && curr) result.push(curr)
    if (!next) return result
    if (curr[1] >= next[0]){
      result.push([curr[0], next[1]])
      return inner(array[i += 2], array[j += 2]);
    } else {
      result.push([curr[0], curr[1]])
      return inner(array[i += 1], array[j += 1]);
    }
  }
  return inner(array[i], array[j])
  
}
//////////////////TESTING//////////////////////////

var times = [ [0, 1], [3, 5], [4, 8], [9, 10], [10, 12], [13, 19]];
var times2 = [ [0, 4], [6, 8], [10, 12], [9, 10], [3, 5]];

console.log( mergeRanges(times2) )

/*
input: array containing arrays
output: array containing arrays
---------------------------
order the arrays inside? 
find overlap; if overlap then merge them by keeping lowest and highest num
--------------------------------

loop thru outside array(curr, next) 
  sort inside arrays by first index

  if curr[1] > next[0] 
    ---merge arrays---> [curr[0], next[1]]
    move curr and next over 2 positions
  else 
    return curr 
    move curr and next 1 position 
  
  continue til no more curr or next


*/







module.exports = mergeRanges;
