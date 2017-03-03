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
  for (let i = 0; i < n; i += 1) {
    console.log(new Array(n - i).join(' ') + new Array(i+2).join('*'));
  }
}


module.exports = drawStairs;
