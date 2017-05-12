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
  let arrayofX = []
  let arrayofY = []
  let myArrays = []
  let arrayofArrays =[];
  if(!Array.isArray(x) || !Array.isArray(y)) return false; 
  for(let i = 0 ; i < x.length; i++){
    for(let j = i +1; j < x.length; j++){
      if(x[i] === x[j]) arrayofX.push([x[i], y[i]], [x[j], y[j]])
      if(y[i] === y[j]) arrayofY.push([x[i], y[i]],[x[j] [y[j]])
    }



  }
  console.log(arrayofArrays)
}
newIntersections([1,1,6,3], [237,4,4,3])
module.exports = newIntersections;