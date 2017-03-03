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
	if(n<1 || n>100){
		return 'number has to be beween 1 and 100 inclusive'
	}
	var output;
	for(var i=1, space = n-1; i<=n; i++){
		output = " ".repeat(space) +'*'.repeat(i);
		console.log(output);
		space--;
	}
}


module.exports = drawStairs;
