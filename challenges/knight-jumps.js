// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function canMove(arr1, arr2) {
  return arr1[0] + arr2[0] >= 1 && arr1[0] + arr2[0] <= 8 && arr1[1] + arr2[1] >= 1 && arr1[1] + arr2[1] <= 8
}

function knightjumps(str) {
  const noParens = str.substring(1, str.length - 1);
  const coords = noParens.split(' ').map(str => parseInt(str));
  const possibleMoves = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];
  return possibleMoves.reduce((accum, curr) => {
    return canMove(curr, coords) ? accum + 1 : accum;
  }, 0)
}

module.exports = knightjumps;