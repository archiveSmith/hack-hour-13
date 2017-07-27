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
  
  if (n > 100) {
    return 'Forgive me, but I cannot climb that many stairs.';
  }

  let line = '';

  for (let i = 1; i <= n; i++) {
  	line += ' '.repeat(n - i) + '*'.repeat(n - (n - i)) + '\n';
  }
  console.log(line);
}


module.exports = drawStairs;
