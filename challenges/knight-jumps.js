// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"
// x - 1 y - 3
// x - 1 y + 3
// x + 1 y + 3
// x + 1 y - 3
// x - 3 x - 1
// x - 3 x + 1
// x + 3 y - 1
// x + 3 y + 1

const canMove = (x, y) => {
  if (x <= 8 && x >= 1 && y <= 8 && y >= 1) return true
  else return false
}

function knightjumps(str) {
  let possibilities = 0;
  const arr = str.slice(1, str.length - 1).split(' ');
  const x = Number(arr[0]);
  const y = Number(arr[1]);
  console.log(arr);
  if (canMove(x - 1, y - 2)) possibilities += 1;
  if (canMove(x - 1, y + 2)) possibilities += 1;
  if (canMove(x + 1, y + 2)) possibilities += 1;
  if (canMove(x + 1, y - 2)) possibilities += 1;
  if (canMove(x - 2, x - 1)) possibilities += 1;
  if (canMove(x - 2, x + 1)) possibilities += 1;
  if (canMove(x + 2, y - 1)) possibilities += 1;
  if (canMove(x + 2, y + 1)) possibilities += 1;
  return possibilities;
};
// var str = "(6 6)"
// console.log(knightjumps(str));

module.exports = knightjumps;
