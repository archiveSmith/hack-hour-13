/* Write a function that console logs a staircase of any given height 
where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line 
 should only consist of asterisks,
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
	// multidimensional arrays
	var add = "";
	for (var i=0; i < n; i++) {
		for (var j=0; j < n; j++){
			if (i < n-j-1) {
			 	add +=  ' ';
			} else {
				add +=  '*';
			}
		}
		add += '\n';
	}
	console.log(add);
}


module.exports = drawStairs;
