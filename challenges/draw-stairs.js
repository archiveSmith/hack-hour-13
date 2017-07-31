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
  let space = '';
  let star = '';

  for (let i = 1; i <= n; i += 1) {
    // MDN: The repeat() method constructs and returns a new string which contains the
    // specified number of copies of the string on which it was called, concatenated together.
    space = ' '.repeat(n - i);
    star = '*'.repeat(i);
    console.log(space + star);
  }
}


module.exports = drawStairs;
