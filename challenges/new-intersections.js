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
  let top = [x[0], y[0]];
  let right = [x[0], y[0]];
  let bottom = [x[0], y[0]];
  let left = [x[0], y[0]];
  for (let i = 1; i < x.length; i += 1) {
    if (y[i] > top[1]) top = [x[i], y[i]];
    if (x[i] > right[0]) right = [x[i], y[i]];
    if (y[i] < bottom[1]) bottom = [x[i], y[i]];
    if (x[i] < left[0]) left = [x[i], y[i]];
  }
  let area = (top[0] * right[1] - right[0] * top[1]) + (right[0] * bottom[1] - bottom[0] * right[1]) + (bottom[0] * left[1] - left[0] * bottom[1]) + (left[0] * top[1] - top[0] * left[1]);
  area = Math.abs(area/2);
  return area;
}

module.exports = newIntersections;
