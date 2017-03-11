/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
<<<<<<< HEAD

 For example:
 drawStairs(6) ->
=======
 
 For example:     
 drawStairs(6) ->          
>>>>>>> c095199114a334e809751a77ffe5a1a6b48ebf57
     *
    **
   ***
  ****
 *****
******

*/

<<<<<<< HEAD

function drawStairs(n) {

  var stairs = Array(n).fill(" ");

  for (var i = 0; i < stairs.length-1; i++){
    stairs[n-i] = "*";
    console.log(stairs.join("").slice(1));
  }

  return stairs.length;
}

drawStairs(5);
=======
function drawStairs(n) {

}

>>>>>>> c095199114a334e809751a77ffe5a1a6b48ebf57

module.exports = drawStairs;
