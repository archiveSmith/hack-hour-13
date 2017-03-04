/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/


function drawStairs(n) {

  var stairs = Array(n).fill(" ");

  for (var i = 0; i < stairs.length-1; i++){
    stairs[n-i] = "*";
    console.log(stairs.join("").slice(1));
  }

  return stairs.length;
}

drawStairs(5);

module.exports = drawStairs;
