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
<<<<<<< HEAD
	for (let i = n; i > 0; i -= 1) {
		let spc = i - 1;
		let ast = n - spc;
		console.log(' '.repeat(spc) + '*'.repeat(ast) + '\r');
	}
=======

>>>>>>> c095199114a334e809751a77ffe5a1a6b48ebf57
}


module.exports = drawStairs;
