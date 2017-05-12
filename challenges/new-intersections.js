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

// Looks for range of one dimension when there are intersections in the other dimension
function findIntersectionRanges(arr1, arr2) {
  // reduce arr1 to the ranges at which there are multiple instances of a value in arr2
  // ranges have to have a min and max value but are initialized w/ a min
  const unfilteredRanges = arr1.reduce((ranges, val1, idx) => {
    // if encounter duplicate, add the max property or update it
    
    // corresponding value from other dimension
    const val2 = arr2[idx];

    // current range
    const range = ranges[val1];

    if (range) {
      // update min and max of range
      // for max, will check if first value (min) is greater and will update accordingly
      range.min = Math.min(val2, range.min);
      range.max = (range.max === undefined)
        ? Math.max(val2, range.min)
        : Math.max(val2, range.max);
    }
    // if encountered first, initialize range object
    else {
      ranges[val1] = { min: val2 };
    }
    return ranges;
  },{});

  // return valid ranges
  return Object.keys(unfilteredRanges).reduce((validRanges, key) => {
    // valid range
    const currRange = unfilteredRanges[key];
    if (currRange.max !== undefined) {
      validRanges[key] = currRange;
    }
    return validRanges;
  }, {});
}

// see if given 
function checkIfInRange() {}

function newIntersections(x, y) {
  // EDGE CASE(S): 
  // duplicate points (in regards to x-, y-coords, or both)
  
  // objects of ranges in which the other dimension/coordinate intersects
  const x_intersectRanges = findIntersectionRanges(x,y);
  const y_intersectRanges = findIntersectionRanges(y,x);

  // find total times at which those ranges intersect
  return Object.keys(x_intersectRanges).reduce((totalIntersects, x_val) => {
    // see how many y_vals fit in current x-intersect range
    Object.keys(y_intersectRanges).forEach((y_val) => {
      
    });
  }, 0);
}

module.exports = newIntersections;