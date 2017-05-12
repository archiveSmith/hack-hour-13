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

function newIntersections(x, y) {
  let newPoints = 0;
  const sortedX = x.sort((a, b) => a - b);
  const sortedY = y.sort((a, b) => a - b);
  for (let i = 1; i < x.length; i += 1) {
    if (sortedY[i - 1] + 1 === sortedY[i + 1] === sortedY[i]) {

    }
  }
}

module.exports = newIntersections;
