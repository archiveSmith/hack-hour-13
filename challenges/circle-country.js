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
   // x and y are the center of a border district, while r is the radius
   // in order to determine what direction to go, take start_x - end_x and same for y
   // if start_x and end_x is negative, we will have to find the x coordinates closest
   // to that negative number, and y coordinates closest to that number while also being
   // within r
   let args = Array.from(arguments);
   console.log(args);
   if (start_x === end_x && start_y === end_y) return disBorders;

   // determine all possible directions of where to go by taking the radii that are within
   // stepping distance of start_x and start_y
   let possibleDir = [];
   let otherDirX = [];
   let otherDirY = [];
   let otherDirR = [];
   for (let i = 0; i < x.length - 1; i += 1) {
     // if x, y, and r are within reach of start_x and start_y, push it in an array
     // find this by if start_x - x and start_y - y are less than r
     let xDistFromR = Math.abs(start_x - x[i]);
     let yDistFromR = Math.abs(start_y - y[i]);
     if (xDistFromR < r[i] && yDistFromR < r[i]) possibleDir.push(x[i],y[i],r[i]);
     else {
       otherDirX.push(x[i]);
       otherDirY.push(y[i]);
       otherDirR.push(r[i]);
     }
   }
   if (!possibleDir.length) return null;
   // store the most optimal direction of x, y, and r towards end_x, and end_y in an array
   // to do this, use the pythagorean theorem to find the current distance away from
   // the end point, and store the direction closest to the end point
   let optimalDir = possibleDir.reduce((acc, curr) => {
     let currXDistSqrd = Math.pow(end_x - curr[0], 2);
     let currYDistSqrd = Math.pow(end_y - curr[1], 2);

     let currDistFromEnd = Math.sqrt(currXDistSqrd + currYDistSqrd);
     let pastOptX = Math.pow(end_x - acc[0], 2);
     let pastOptY = Math.pow(end_y - acc[1], 2);
     let pastDistFromEnd = Math.sqrt(pastOptX + pastOptY);
     return currDistFromEnd > pastDistFromEnd ? [curr[0], curr[1], curr[2]] : acc;
   });

   return circleCountry(otherDirX, otherDirY, otherDirR, optimalDir[0], optimalDir[1], end_x, end_y, disBorders + 1);
 }

module.exports = circleCountry;
