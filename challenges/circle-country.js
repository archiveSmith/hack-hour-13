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
  // helper function to determine whether point is inside given circle
  // determine in circle if (x-x_c)^2 + (y-y_c)^2 - r^2 < 0
  function isInsideCircle(x, y, x_c, y_c, r_c) {
    // x, y - point in question
    // x_c, y_c - circle's center
    // r_c - circle radius
    return Math.pow(x-x_c, 2) + Math.pow(y-y_c, 2) - Math.pow(r_c, 2) < 0;
  }

  // counts how many circle borders need to cross
  let borders = 0;

  // where x/y/r_c are the dimensions of the current circle during iteration
  for (let i = 0; i < x.length; i++) {
    const x_c = x[i],
          y_c = y[i],
          r_c = r[i];

    // find how many circles start and end are exclusively in
    if (
      isInsideCircle(start_x, start_y, x_c, y_c, r_c)
      ^
      isInsideCircle(end_x, end_y, x_c, y_c, r_c)
    ) {
      borders += 1;
    }
  }

  return borders;
}

module.exports = circleCountry;
