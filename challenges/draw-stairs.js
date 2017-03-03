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
  // did this on my own
  // for (let i = 0; i < n; i += 1) {
  //   let string = '';
  //   for (let j = 0; j <= n; j += 1) {
  //     string += j < n - i ? ' ' : '*';
  //   }
  //   console.log(string);
  //   string = '';
  // }

  // taught to me by matt
  for (let i = n; i > 0; i -= 1) {
    let spc = i - 1;
    let ast = n - spc;
    console.log(' '.repeat(spc) + '*'.repeat(ast) + '\r');
  }
}

module.exports = drawStairs;
