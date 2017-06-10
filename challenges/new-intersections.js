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
/////////////////////////////////////////////////////////

  //make x counts object (number of times they appear)
  //make y counts object 
  //if there is only one occurance of a point, then there will be no vertical lines at that point; so only concerned with values that have counts of 2+
  //loop thru x counts, if it is in it, make vertical object showing where lines would be drawn; do the same for horizontal 
  //range helper func will delete points that are betwen the max and min points b/c we don't care about middle points in a line, only where it starts and stops 
  //if a x key is contained in the y [range] and the y key is inside the x [range], then it is an intersected point;  


function newIntersections(x, y) {
  // Get all vertical lines and their max/min
  const exes = x.reduce((accum, xCoord, index) => {
    if (!accum[xCoord]) accum[xCoord] = { max: y[index], min: y[index] }
    accum[xCoord].max = Math.max(accum[xCoord].max, y[index])
    accum[xCoord].min = Math.min(accum[xCoord].min, y[index])
    return accum
  }, {})

  // Get all horizontal lines and their max/min
  const whys = y.reduce((accum, yCoord, index) => {
    if (!accum[yCoord]) accum[yCoord] = { max: x[index], min: x[index] }
    accum[yCoord].max = Math.max(accum[yCoord].max, x[index])
    accum[yCoord].min = Math.min(accum[yCoord].min, x[index])
    return accum
  }, {})

  // Count # of intersections
  let intersections = 0
  for (let xCoord in exes) {
    for (let yCoord in whys) {
      if (exes[xCoord].max > yCoord && yCoord > exes[xCoord].min
        && whys[yCoord].max > xCoord && xCoord > whys[yCoord].min) intersections++
    }
  }
  return intersections
}


//----------REALLY LONG WAY-----------------------------------------------
function Range(arr) {
  this.contents = [Math.min.apply(this, arr), Math.max.apply(this, arr)];
}

// method to tell us if a number is between the range
Range.prototype.contains = function(num) {
  return this.contents[0] < num && num < this.contents[1];
}


function newIntersections(x, y){
  var yCounts, horizontals = {},
      xCounts, verticals = {};

  // Objects that will store the number of occurences of each value
  xCounts = count(x);
  yCounts = count(y);


  // Loop through counts, create an object that holds x-value as key and array of y-values at that x as value
  // find vertical lines and place into an object. The keys are the x-coordinates where the line is at and the values are arrays of y-coordinates along that line
  for (var coor in xCounts) {
    if (xCounts[coor] > 1) { // only check for a line if there are multiple points at this value
      for (var i in x) {
        if (x[i] == coor) {
          verticals[coor] = (verticals[coor] || []).concat(y[i]); // add it to list of coordinates
        }
      }
    }
  }

  // find horizontal lines and place into an object. The keys are the y-coordinates where the line is at and the values are arrays of x-coordinates along that line
  for (var coor in yCounts) {
    if (yCounts[coor] > 1) {
      for (var i in y) {
        if (y[i] == coor) {
          horizontals[coor] = (horizontals[coor] || []).concat(x[i]);
        }
      }
    }
  }
  // console.log('before vert', verticals);
  // console.log('before horiz', horizontals);

  // Find the max and min x and y values for the y and x coordinates with multiple points
  rangify(verticals);
  rangify(horizontals);

  // console.log('v', verticals);
  // console.log('h', horizontals);

  var newPoints = 0;

  for (var yCoor in horizontals) {
    var xRange = horizontals[yCoor];
    console.log('x-range', xRange);
    for (var xCoor in verticals) {
      var yRange = verticals[xCoor];
      console.log('xcoor', xCoor);
      if (xRange.contains(xCoor) && yRange.contains(yCoor)) {
        newPoints++;
      }
    }
  }
  return newPoints;
}

// count the number of elements in the array and return an object 
function count(arr) {
  return arr.reduce((counts, num) => {
    counts[num] = (counts[num] + 1) || 1;
    return counts;
  }, {});
}
/*
[3, 3, 1, 4, 4, 4, 4, 4] will return
{
  '3': 2,
  '1': 1,
  '4': 5
}
*/

// take the arrays of coordinates and turn them into ranges (find min and max values)
function rangify(lines) {
  for (var coor in lines) {
    var arr = lines[coor];
    lines[coor] = new Range(arr);
  }
}
//--------------------------------------------------------------------------------





///////////////////////////////////////////////////////
module.exports = newIntersections;
