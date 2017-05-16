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
  // x and y range from 1 - 8
  // input of 4, 5 --> output of 8

  /**
   * x - 1, y (3, 5)
   * x + 1, y (5, 5)
   * x, y - 1 (4, 4) 
   * x, y + 1 (4, 6)
   * x - 1, y + 1 (3, 6)
   * x + 1, y + 1 (5, 6)
   * x - 1, y - 1 (3, 4)
   * x + 1, y - 1 (5, 4)
   */

  const arr = str.slice(1, -1).split(' ');
  let x = Number(arr[0]),
      y = Number(arr[1]);
  let moves = 0;

  if (moveChecker(x - 1, y)) moves++;
  if (moveChecker(x + 1, y)) moves++;
  if (moveChecker(x, y - 1)) moves++;
  if (moveChecker(x, y + 1)) moves++;
  if (moveChecker(x - 1, y + 1)) moves++;
  if (moveChecker(x + 1, y + 1)) moves++;
  if (moveChecker(x - 1, y - 1)) moves++;
  if (moveChecker(x + 1, y - 1)) moves++;

  return moves;
}

function moveChecker(x, y) {
  if (x < 1 || x > 8) return false;
  if (y < 1 || y > 8) return false;
  return true;
}

// console.log(knightjumps("(4 5)"));

module.exports = knightjumps;
