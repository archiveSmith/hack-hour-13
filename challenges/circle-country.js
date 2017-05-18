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

 function circleCountry(x, y, r, start_x, start_y, end_x, end_y, disBorders = 0) {

  if (!x.length || !y.length || !r.length) return disBorders;
  if (start_x >= end_x && start_y >= end_y) return disBorders;

  let optDir = [[x[0], 0], [y[0], 0], [r[0], 0]];

  for (let i = 1; i < x.length; i += 1) {
    let currXDistSqrd = Math.pow(end_x - x[i], 2);
    let currYDistSqrd = Math.pow(end_y - y[i], 2);

    let optX = Math.pow(end_x - optDir[0], 2);
    let optY = Math.pow(end_y - optDir[1], 2);
    if (Math.sqrt(currXDistSqrd + currYDistSqrd) > Math.sqrt(optX + optY)) {
      console.log('went through if statement');

      optDir = [[x[i], i], [y[i], i], [r[i], i]];
    }
  }

  x.splice(optDir[0][1], 1);
  y.splice(optDir[1][1], 1);
  r.splice(optDir[2][1], 1);

  if (start_x < end_x) start_x += optDir[2][0];
  else start_x -= optDir[2][0];

  if (start_y < end_y) start_y += optDir[2][0];
  else start_y -= optDir[2][0];

  return circleCountry(x, y, r, start_x, start_y, end_x, end_y, disBorders + 1);
}

module.exports = circleCountry;
