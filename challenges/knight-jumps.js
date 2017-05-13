// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

// function knightjumps(str) {

// }

function knightjumps(x, y) {
  if (x < 1 || y < 1) return null;
  // check to see if 8 possible move for the knight are available, if so, add 1 to the counter
  var counter = 0;
  // case 1 - moving up and right
  if (x + 2 <= 8 || y + 1 <= 8) {
    counter += 1;
  }
  if (x + 1 <= 8 || y + 2 <= 8) {
    counter += 1;
  }
  // case 2 - moving up and left
  if (x - 1 >= 1 || y + 2 <= 8) {
    counter += 1;
  }
  if (x - 2 >= 1 || y + 1 <= 8) {
    counter += 1;
  }
  // case 3 - moving down and left
  if (x - 1 >= 1 || y - 2 >= 1) {
    counter += 1;
  }
  if (x - 2 >= 1 || y - 1 >= 1) {
    counter += 1;
  }
  // case 4 - moving down and right
  if (x + 1 <= 8 || y - 2 >= 1) {
    counter += 1;
  }
  if (x + 2 <= 8 || y - 1 >= 1) {
    counter += 1;
  }
  return counter;
}

module.exports = knightjumps;
