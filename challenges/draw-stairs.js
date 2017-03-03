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
    let str = '';
    for (let i = 0; i < n; i++) {
        str += ' ';
        console.log(str);
    }
    for (let i = n - 1; i >= 0; i--) {
        let arr = str.split('');
        arr[i] = '*';
        str = arr.join('');
        console.log(str);
    }
}


module.exports = drawStairs;


