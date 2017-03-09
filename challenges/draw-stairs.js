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

function drawStairs(num) {
    let count = 1
    for(let i=num; i>=1; i--){
        console.log(' '.repeat(i) + '*'.repeat(count++));
    }
}

drawStairs(6);
module.exports = drawStairs;
