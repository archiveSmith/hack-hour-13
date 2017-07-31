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

 // find number of NEW points that can be placed with OLD points above, below,
 // to the right, and to the left.
// const x = [1, 4, 2, 3, 5];
// const y = [5, 3, 6, 4, 1];

function newIntersections(x, y) {
  let length = x.length;
  let newPoints = [];

  for (let i = 0; i < length; i += 1) {
    newPoints.push([x[i], y[i]]);
  }

  let sortedPoints = newPoints.sort((a, b) => {
    return a[0] > b[0];
  });

  return sortedPoints;
}

// console.log(newIntersections(x, y));

module.exports = newIntersections;
