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
  // split the string for x and y and store each coordinate as a variable
  const coordinates = str.split(/\D/);
  const x = +coordinates[1];
  const y = +coordinates[2];
  // find all the possibilities of where the knight can go
  let directions = 0;
  // add 2 to y, and -1 to x, add 2 to y and +1 to x
  // add 1 to y, and 2 to x, add -1 to y and 2 to x
  // add -2 to y, and 1 to x, add -2 to y, and -1 to x
  // add 1 to y, and -2 to x, add -1 to y, and 2 to x
  if (y + 2 < 9 && y + 2 > 0 && x - 1 < 9 && x - 1 > 0) directions++;
  if (y + 2 < 9 && y + 2 > 0 && x + 1 < 9 && x + 1 > 0) directions++;
  if (y + 1 < 9 && y + 1 > 0 && x + 2 < 9 && x + 2 > 0) directions++;
  if (y - 1 < 9 && y - 1 > 0 && x + 2 < 9 && x + 2 > 0) directions++;
  if (y - 2 < 9 && y - 2 > 0 && x + 1 < 9 && x + 1 > 0) directions++;
  if (y - 2 < 9 && y - 2 > 0 && x - 1 < 9 && x - 1 > 0) directions++;
  if (y + 1 < 9 && y + 1 > 0 && x - 2 < 9 && x - 2 > 0) directions++;
  if (y - 1 < 9 && y - 1 > 0 && x - 2 < 9 && x - 2 > 0) directions++;
  return directions;
}

module.exports = knightjumps;
