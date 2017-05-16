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

  /* 
    Facts: 
    two arrays as input - x & y
    x & y are same length
    x = array of x-coordinates
    y = array of y-coordinates
    x[i], y[i] corresponds to coordinates of i'th OLD point

    Pseudocode:
    goal: find total number of new points that can be placed that have OLD points on left, below, up, and right of it.
    Loop through both x & y to find positions not currently taken?

  */

  let newPoints = 0;
  //coordinates array for concat
  const coordinates = [];
  //cache needed?
  const cache = {};
  
  // combine two arrays together to have x&y coordinates in a nested array
  for (let i = 0; i < x.length; i += 1) {
    let concatXY = [];
    concatXY.push(x[i], y[i]);
    coordinates.push(concatXY);
  }

  for (let j = 0; j < coordinates.length; j += 1) {
    
  }

}


   4         
   3       *
   2     *   *
   1       *
 Y 0  
   X 0 1 2 3 4

//POSITIONS WITH OLD ALL AROUND THEM:

//[3, 2]
const oldX = [3, 2, 4, 3];
const oldY = [1, 2, 2, 3];

console.log(newIntersections(oldX, oldY));

module.exports = newIntersections;
