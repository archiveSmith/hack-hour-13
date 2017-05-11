/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

// [2, 1, 4, 2]
// [1, 2, 2, 3]
//   *   x
//   * x x   x
//   *   x
//   * * * * * 


function newIntersections(x, y) {
  // find all same y's put them in a set of arrays
  // find all same x's put them in a set of arrays
  // for the Y-same coords, if there's an x-same with a y inbetween, then increment
  let result = 0;
  let cache = {}
  yLines = [] // index
  xLines = [] // index
  for (let i = 0; i < y.length; i += 1) {
    if (cache[y[i]] !== undefined) yLines.push([i, cache[y[i]]]);
    else cache[y[i]] = i
  }
  cache = {};
  // console.log(yLines);
  for (let i = 0; i < x.length; i += 1) {
    if (cache[x[i]] !== undefined) xLines.push([i, cache[x[i]]])
    else cache[x[i]] = i
  }
  // console.log(xLines);


  // yLines.sort((a, b) => (xlines[b] - xLines[a]));
  // xLines.sort((b, a) => (ylines[b] - yLines[a]));
  for (let i = 0; i < yLines.length; i += 1) {
    yLines[i].sort((a, b) => (x[a] - x[b]))
    horBegInd = yLines[i][0];
    horEndInd = yLines[i][1];
    console.log('hor line: ', x[horBegInd], y[horBegInd], x[horEndInd], y[horEndInd]);
    for (let j = 0; j < xLines.length; j += 1) {
      xLines[j].sort((a, b) => (y[a] - y[b]))
      vertBegInd = xLines[j][0];
      vertEndInd = xLines[j][1];
      console.log('vert line: ', x[vertBegInd], y[vertBegInd], x[vertEndInd], y[vertEndInd]);
      if (x[horBegInd] < x[vertBegInd] && x[horEndInd] > x[vertBegInd] && y[vertBegInd] < y[horBegInd] && y[vertEndInd] > y[horBegInd]) result += 1;
    };
  }
  return result;
}

const x = [2, 1, 4, 2];
const y = [1, 2, 2, 3];
// ver 0,  3, hor 1, 2
console.log(newIntersections(x, y))

module.exports = newIntersections;