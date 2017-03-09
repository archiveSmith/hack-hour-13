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
  const resultArr = [];
  for (let i = 1; i <= n; i += 1) {
    let add = '';
    for (let j = 1; j <= n - i; j += 1) {
      add += ' ';
    }
    for (let j = 1; j <= i; j += 1) {
      add += '*';
    }
    resultArr.push(add);
  }
  console.log(resultArr.join('\n'));
}


module.exports = drawStairs;
