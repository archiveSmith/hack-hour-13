/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  let numBorders = 0;

  // combine coordinates and radius into single array of objects, just so it is easier to reason
  const circleCountry = x.map((x, i) => {
    return {'x': x, 'y': y[i], 'r': r[i]}
  })

  for(let i = 0; i < circleCountry.length; i += 1) {
    // compute start and end points from the center of the circle
    const distFromEnd = Math.sqrt(Math.pow(circleCountry[i].x - end_x, 2) + Math.pow(circleCountry[i].y - end_y, 2));
    const distFromStart = Math.sqrt(Math.pow(circleCountry[i].x - start_x, 2) + Math.pow(circleCountry[i].y - start_y, 2));

    // if both end and start are inside of the circle, skip
    if (distFromEnd < circleCountry[i].r && distFromStart < circleCountry[i].r) {
      continue;
    }
    
    // add a border if
      // the distance from the end is inside the radius 
      // the distance from the start is inside the radius
    if (distFromEnd < circleCountry[i].r || distFromStart < circleCountry[i].r) {
      numBorders += 1;
    }
  }

  return numBorders;
}

// let x = [0];
// let y = [0];
// let r = [2];
// let start_x = 0;
// let start_y = 1;
// let end_x = 3;
// let end_y = 3;


// circleCountry(x, y, r, start_x, start_y, end_x, end_y)

module.exports = circleCountry;