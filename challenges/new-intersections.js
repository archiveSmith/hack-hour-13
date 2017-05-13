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
  var yCounts, horizontals = {}, 
      xCounts, verticals = {};

//Objects that will sotre the number of occurances of each value
    xCounts = count(x);
    yCounts = count(y);

//loop through counts, create an object hat holds x-value and array of y-value at that val
//find vertical lines and place into an object. The keys are the x-coordiantes where the line is at 
    for(var corr in xCounts) {
      if(xCounts[corr] > 1){
        for(var i in x) {
          if(x[i] == corr){ //only check for a line if there are multiple points at this value
            verticals[corr] = (verticals[corr] || []).concat(y[i]); //add it to list of coordinates
          }
        }
      }
    }

    //find horizontal lines and place into an object, just like the previous xvalues
    for(var corr in yCounts){
      if(yCounts[coor] > 1){

      }

    }
}
let x = [2, 2, 2, 5, 8]
module.exports = newIntersections;
