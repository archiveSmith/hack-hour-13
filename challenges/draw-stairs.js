<<<<<<< HEAD
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
  var result = '';
  for (i = 1; i < n; i++){
    result += ' '.repeat(n - i);
    result += '*'.repeat(i);
    result += '\r';
  }
  console.log(result); 
}

 //console.log(drawStairs(13))

// function drawStairs(n) {
//   var result = '';
//   var spaces = n - 1;
//   var stars = 1
//   while (spaces >= 0){
//     for (let i = 0; i < spaces; i++) {
//       result += ' ';
//     }
//     spaces--
//     for (let i = 0; i < stars; i++) {
//       result += '*';
//     }
//     stars++
//     result += '\r'
//   }
//   return result; 
// }

/*
n === number of rows && number of stars on last row 
loop number of times and add stars or spaces depending but always equal number 
use index to know how many spaces to use 
total = 6 if n = 6
i = 0 need 5 spaces and 1 star
i = 1 need 4 spaces and 2 star
i = 2 need 3 spaces and 3 stars
i = 3 need 2 spaces and 4 stars
i = 4 need 1 spaces and 5 stars
i = 5 need 0 spaces and 6 stars
LOOP (number of lines) 
  LOOP (add spaces and stars)

var result = '';
var spaces = n - 1;
var stars = 1
for (i = 0; i < n; i++) {
   
}
*/













module.exports = drawStairs;
||||||| merged common ancestors
=======
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

}


module.exports = drawStairs;
>>>>>>> 72e139ef4215b58c2f5e128148e46b9e0bf651f2
