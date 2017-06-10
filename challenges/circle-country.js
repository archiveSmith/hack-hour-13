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

//pythagorean theorem a^2 + b^2 = c^2 to find longest edge of a right triangle
function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  var circlesToCross = 0;

  for (var i = 0; i < x.length; i++) {
    
    var distanceStart = Math.sqrt((x[i] - start_x)
      * (x[i] - start_x) + (y[i] - start_y) * (y[i] - start_y));

    var distanceEnd = Math.sqrt((x[i] - end_x)
      * (x[i] - end_x) + (y[i] - end_y) * (y[i] - end_y));

    var radius = r[i];
    //if he starts inside a circle, or he needs to go inside a circle to get to end point, then increment
    if (distanceStart < radius && distanceEnd > radius ||
      distanceStart > radius && distanceEnd < radius) {
      circlesToCross++;
    }
  }
  return circlesToCross;
}

//////////////////////////////////////////////
let x = [1, -2, 5];  //x[i] is center of each circle
let y = [2, -4, -3];  //y[i] is center of each circle
let r = [1, 3, 2];  //r[i] is radius
let start_x = -3;  //starting coordinates
let start_y = 2;
let end_x = 5;  //ending coordinates
let end_y = 2;
console.log(circleCountry(x, y, r, start_x, start_y, end_x, end_y))





module.exports = circleCountry;

