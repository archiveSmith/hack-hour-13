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
	var lines = [], numSpaces;
	for (var numStars = 1; numStars <= n; numStars += 1) {
		numSpaces = n - numStars;
		lines.push(' '.repeat(numSpaces) + '*'.repeat(numStars));
	}
	return lines.join('\n');
}


module.exports = drawStairs;

// const my = require('./myLibrary');
// my.testCase(drawStairs(3),
// 	  '  *\n'
// 	+ ' **\n'
// 	+ '***');
// my.testCase(drawStairs(6),
//   	  '     *\n'
//   	+ '    **\n'
//   	+ '   ***\n'
//   	+ '  ****\n'
//   	+ ' *****\n'
//   	+ '******');