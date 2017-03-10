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
	let stairs = '';
	for (let i = 0; i < n; i++){
		stairs += '*'
		let spaces = '';

		for (let j = 0; j < n-stairs.length; j++){
			spaces+=" ";
		}
		//combine correct amount of spaces with current stair count
		spaces+=stairs;

		//draw stairs
		console.log(spaces);
	}
}

drawStairs(100);

module.exports = drawStairs;
