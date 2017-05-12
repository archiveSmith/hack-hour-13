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

function newIntersections(x, y){
  // check for every possibility of 4 in the array of x's and y's
  if (x.length < 4 || y.length < 4) return 0;
  let totalNewPoints = 0;
  // find the difference of 4 and the length of the arrays to detemermine permutations

  // slice off an element until length is arrays is 4 inside the loop
  // once 4, iterate through the array
  if (x.length > 4) {
    for (let i = 0; i < x.length; i += 1) {
      let newEx = x.slice(0, i).concat(x.slice(i + 1));
      let newWhy = y.slice(0, i).concat(y.slice(i + 1));
      totalNewPoints += newIntersections(newEx, newWhy);
    }
    return totalNewPoints;
  }
  // check if x occurs twice and y occurs twice within the arrays
  // determine this by the some method
  let xOfTwoCoords = null;
  let yOfTwoCoords = null;
  for (let i = 0; i < x.length; i += 1) {
    for (let j = i + 1; j < x.length; j += 1) {
      if (y[i] === y[j] && yOfTwoCoords) {
        yOfTwoCoords = 0;
      }
      if (x[i] === x[j] && xOfTwoCoords) {
        xOfTwoCoords = 0;
      }
      if (x[i] === x[j] && xOfTwoCoords !== 0) xOfTwoCoords = [[x[i], y[i]], [x[j], y[j]]];
      if (y[i] === y[j] && yOfTwoCoords !== 0) yOfTwoCoords = [[x[i], y[i]], [x[j], y[j]]];
    }
  }
  if (!xOfTwoCoords || !yOfTwoCoords ||
      xOfTwoCoords[0].join('') === yOfTwoCoords[0].join('') ||
      xOfTwoCoords[0].join('') === yOfTwoCoords[1].join('') ||
      xOfTwoCoords[1].join('') === yOfTwoCoords[0].join('') ||
      xOfTwoCoords[1].join('') === yOfTwoCoords[1].join('')) return 0;

  return 1;
}

newIntersections([0, 3, -1, 1, 1, 2, 2, 1], [2, 2, 0, 1, -1, 0, -2]);

module.exports = newIntersections;
