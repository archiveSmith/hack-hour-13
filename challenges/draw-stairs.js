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
    var spaceStr = '';
    var asterisk = '*';
    // have * print however many the value i has, and then print spaceStr n - i times

    for(var i = 0; i < n; i += 1){
        for(var j = n - i; j > 1; j -= 1){
            spaceStr += ' ';
        }
        console.log(spaceStr + asterisk);
        spaceStr = '';
        asterisk += '*';
    }
    /*for(var i = 1; i <= n; i += 1) {
        console.log(spaceStr + asterisk);
        spaceStr = spaceStr.slice(0, -1);
        asterisk += '*';
    }*/
}
drawStairs(50);


module.exports = drawStairs;
