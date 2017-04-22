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
  let vessel = array.sort((a,b) => a[0] - b[0]);

  for(let i = 0; i < vessel.length; i += 1) {
    //while(vessel[i][1] >= vessel[i+1][0]) {
      if(vessel[i+1] === undefined) {
        return vessel;
      } else if(vessel[i][1] >= vessel[i+1][0]) {
        //if there is overlap, then merge and push to vessel
        let newTime = [vessel[i][0],vessel[i+1][1]]
        vessel[i] = newTime;
        vessel.splice(i+1, 1)
      }
    //}
  }
  return vessel
}

module.exports = mergeRanges;
