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
  let totalMoves = 0;
  // max num of moves is 8
  const x = Number(str[1]), y = Number(str[3]);
  
  // checks left side of the knight
  if (x - 2 >= 1) {
    if (y - 1 >= 1) totalMoves++;
    if (y + 1 <= 8) totalMoves++; 
  }
  
  // checks right side of the knight
  if (x + 2 <= 8) {
    if (y - 1 >= 1) totalMoves++;
    if (y + 1 <= 8) totalMoves++; 
  }

  // checks top of the knight
  if (y + 2 <= 8) {
    if (x - 1 >= 1) totalMoves++;
    if (x + 1 <= 8) totalMoves++; 
  }

  // checks bottom of the knight
  if (y - 2 >= 1) {
    if (x - 1 >= 1) totalMoves++;
    if (x + 1 <= 8) totalMoves++; 
  }

  return totalMoves;
}

module.exports = knightjumps;
