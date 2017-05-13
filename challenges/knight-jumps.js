// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  let x = +str[1];
  let y = +str.charAt(3);
  let xDiff;
  let yDiff;
  let numOfMoves;

  if (8 - x === 0 || 8 - x === 7) {xDiff = 0;}
  else if (8 - x === 1 || 8 - x === 6) {xDiff = 1;}
  else {xDiff = 2;}

  if (8 - y === 0 || 8 - y === 7) {yDiff = 0;}
  else if (8 - y === 1 || 8 - y === 6) {yDiff = 1;}
  else {yDiff = 2}

  if (xDiff === 0 && yDiff === 0) {numOfMoves = 2;}
  if (xDiff === 1 && yDiff === 0 || xDiff === 0 && yDiff === 1 ) {numOfMoves = 3;}
  if (xDiff === 1 && yDiff === 1) {numOfMoves = 4;}
  if (xDiff === 0 && yDiff > 1 || yDiff === 0 && xDiff > 1) {numOfMoves = 4;}
  if (xDiff === 1 && yDiff > 1 || yDiff === 1 && xDiff > 1) {numOfMoves = 4;}
  if (xDiff > 1 && yDiff > 1) {numOfMoves = 8;}
  
  return numOfMoves;
  // return yDiff;

}

////////////////////////////
 console.log( knightjumps("(4 1)") )






module.exports = knightjumps;
