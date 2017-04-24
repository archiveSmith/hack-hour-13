/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {

  //sorts the ranges in order
  let mergedArr = [];
  let sorted = array.sort((a, b) => {
    return a[0] - b[1];
  })
  //iterate through sorted
  for(let i = 1; i < sorted.length; i++){
    let j =  i - 1; 
    if(sorted[i][0] > sorted[j][0] && sorted[i][0] < sorted[j][1]){
      mergedArr.push([sorted[j][0], sorted[i][1]])
    }
    else mergedArr.push([sorted[i]])
   // console.log(sorted[i][0])
  }
  console.log(mergedArr)
}

var times = [[10, 12], [0, 1], [3, 5], [4, 8], [9, 10]]
mergeRanges(times)
module.exports = mergeRanges;
