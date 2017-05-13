// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

/*

Could use this for lots of else if cases; not DRY
Must be a better way 
X   Y 
-2  1
-2 -1
-1  2
-1  -2
1  2
1  -2
2  1
2  -1
*/

//BRUTE FORCE METHOD 
function knightjumps(str) {
  let position = 0;
  const numArr = str.split(" ");
  const x = numArr[0] * 1;
  const y = numArr[1] * 1;
  if(0 < x - 2 <= 8 && 0 < y + 1 <= 8) position +=1;
  if(0 < x - 2 <= 8 && 0 < y - 1 <= 8) position +=1;
  if(0 < x - 1 <= 8 && 0 < y + 2 <= 8) position +=1; 
  if(0 < x - 1 <= 8 && 0 < y - 2 <= 8) position +=1;
  if(0 < x + 1 <= 8 && 0 < y + 2 <= 8) position +=1;
  if(0 < x + 1 <= 8 && 0 < y - 2 <= 8) position +=1;
  if(0 < x + 2 <= 8 && 0 < y + 1 <= 8) position +=1;
  if(0 < x + 2 <= 8 && 0 < y - 1 <= 8) position +=1;

return position
}

function knightjumps(str){



}




console.log(knightjumps('4 5'))
module.exports = knightjumps;
