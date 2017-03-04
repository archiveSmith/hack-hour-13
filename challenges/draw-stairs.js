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
  let answer = '';
  const symbol = '*';
  let space = ' ';
  const newLine = '\n';
  let whiteSpaces;
  for (let i = 1; i <= n; i += 1) {
    whiteSpaces = n - i;
    answer += space.repeat(whiteSpaces) + symbol.repeat(i) + newLine;
  }
  console.log(answer)
 }
drawStairs(8)

module.exports = drawStairs;
