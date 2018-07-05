/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, 
 *  he always tries to cross the fewest number of district borders as possible.
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
// function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
//   return r.reduce((acc, rad, i)=>{
//     const startDistance = Math.hypot(x[i] - start_x, y[i] - start_y)
//     const endDistance = Math.hypot(x[i] - end_x, y[i] - end_y)
//     return (startDistance > rad && rad > endDistance || (startDistance < rad && rad < endDistance)) ? ++acc : acc
//   },0)
// }


//this passes, but don't think as accurate because not figuring distance from center using hypotenuse.
function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  let count = 0;

    for (let i = 0; i < x.length; i += 1) {
        let xCoordS = Math.abs(x[i] - start_x);
        let xCoordE = Math.abs(x[i] - end_x);
        let yCoordS = Math.abs(y[i] - start_y);
        let yCoordE = Math.abs(y[i] - end_y);

        let startIn = false;
        let endIn = false;

        if (xCoordS <= r[i] && xCoordE >= r[i]) startIn = true;
        if (yCoordS >= r[i] && yCoordE <= r[i]) endIn = true;

        if ((startIn && !endIn) || (!startIn && endIn)) count += 1;

    }
    return count;
}

module.exports = circleCountry;
