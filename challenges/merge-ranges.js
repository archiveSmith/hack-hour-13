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
//--------------------------------

 function mergeRanges2(array) {
   array.sort((a, b) => a[0] - b[0]);
   let i = 0;
   while (i < array.length - 1) {
     if (array[i][1] >= array[i + 1][0]) {
       if (array[i][1] < array[i + 1][1]) {
         array[i][1] = array[i + 1][1];
       }
       array.splice(i + 1, 1);
     } else {
       i++;
     }
   }
   return array;
 }

 //----------------------------

  function mergeRanges3(array) {
   array = array.sort((a, b) => a[0] - b[0]);
   const result = [];
   for (let i = 0; i < array.length; i++) {
     const curr = array[i];
     const last = result[result.length - 1];
     if (result.length > 0) {
       if (curr[0] <= last[1]) {
         if (curr[1] > last[1]) {
           last[1] = curr[1];
         }
         continue;
       }
     }
     result.push(curr);
   }
   return result;
 }
//---------------------------------
const mergeRanges4 = (array) => array.sort((a, b) => a[0] - b[0])
  .reduce((a, b) => {
    if (a.length >= 1) {
      if (a[a.length - 1][1] >= b[0]) {
        if (a[a.length - 1][1] <= b[1]) {
          a.push([a.pop()[0], b[1]]);
          return a;
        }
        return a;
      }
    }
    a.push(b);
    return a;
  }, []);

  //---------------------------
  function mergeRanges5(array) {
  let sorted = array.sort((a,b) => a[0] - b[0])
  let merged = [];
  for (let i = 0; i < sorted.length; i += 1) {
    if (sorted[i + 1] && sorted[i][1] >= sorted[i + 1][0]) {
      merged.push([sorted[i][0], sorted[i + 1][1]])
      sorted.splice(i + 1, 1);
    } else {
      merged.push(sorted[i])
    }
  }
  return merged;
}

//////////////////TESTING//////////////////////////

var times = [ [0, 1], [3, 5], [4, 8], [9, 10], [10, 12], [13, 19]];
var times2 = [ [0, 4], [6, 8], [10, 12], [9, 10], [3, 5]];

console.log( mergeRanges5(times) )

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
