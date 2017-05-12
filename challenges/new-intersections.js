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

<<<<<<< HEAD
function newIntersections(x, y) {
  // check to see if arrays are valid 
  if (x.constructor !== Array || y.constructor !== Array || x.length !== y.length) {
    return false;
  }  
  
  // if there is less than 4 points in the array return 0 
  if (x.length < 4) return 0;

  // create a counter that keeps track of how many points found
  let totalNewPoints = 0;

  // create a new array with x and y co-ordinates for easier reading
  const coords = x.map((xIndex, index) => {
    return { 'x': xIndex, 'y': y[index] }
  })

  // find all of the x's that are the same value
  for (let i = 0; i < coords.length; i += 1) {
    const currCoord = coords[i];
    for (let j = i; j < coords.length; j += 1) {
      let doBothExist = 0;
      // find the next x that has the same value
      if (coords[j].x === currCoord.x) {
        // check to see if the larger y minus the smaller y is distance of 2 away from each other (abs val)
        if (Math.abs(coords[j].y - currCoord.y === 2)) {
          // check to see if compliments of x and y exist in array
          for (let k = 0; k < coords.length; k += 1) {
            if (coords[k].x === coords[j].y || coords[k].x === currCoord.y) {
              if (coords[k].y === coords[j].x || coords[k].y === currCoord.x) {
                doBothExist += 1;
              }
            }
          }
        }
      }
      if (doBothExist === 2) {
        totalNewPoints += 1;
      }
      doBothExist = 0;
    }
  }
  // check to see if the compliments of x and y exist
  // if they do, add one to the counter
  return totalNewPoints;
}

// newIntersections([1,2,2,3,4,3], [2,1,3,2,3,4]) ===> 2

module.exports = newIntersections;
=======
function newIntersections(x, y){

}

module.exports = newIntersections;
>>>>>>> af4457979a6e36e8dae56be83dd063a624266d5f
