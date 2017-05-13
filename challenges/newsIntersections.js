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
function Range(arr) {
  this.contents = [Math.min.apply(this, arr), Math.max.apply(this, arr)];
}

function count(arr) {
  return arr.reduce((counts, num) => {
    
  })
}
function newIntersections(x, y) {
  let yCounts, horizontals = {},
    xCounts, verticals = {};

  xCounts = count(x);
  yCounts = count(y);

  for (var coor in xCounts) {
    if (xCounts[coor] > 1) {
      for (var i in x) {
        if (x[i] === coor) {
          verticals[coor] = (verticals[coor] || []).concat(y[i]);
        }
      }
    }
  }

  for (var coor in yCounts) {
    if (ycounts[coor] > 1) {
      for (var i in y) {
        if (y[i] === coor) {
          horizontals[coor] = (horizontals[coor] || []).concat(x[i]);
        }
      }
    }
  }

  rangify(certicals);
  rangify(horizontals);

  let newPoints = 0;

  for (let yCoor in horizontals) {
    let xRange = horizontals[yCoor];
    for (let xCoor in verticals) {
      let yRane = veticals[xCoors];
      if (xRange.contains(xCoors) && yRange.contains(yCoor)) {
        newPoints += 1;
      }
    }
  }
  return newPoints;

}

module.exports = newIntersections;