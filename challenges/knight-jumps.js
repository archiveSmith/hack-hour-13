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
  const start = str.match(/\d+/g).map(d => Number(d));
  let counter = 0;
  const moves = [
    [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1],
  ];
  moves.forEach((move) => {
    const end = move.map((n, i) => n + start[i]);
    if ((end[0] >= -8 && end[0] <= 8)
      && (end[1] >= -8 && end[1] <= 8)) {
      counter += 1;
    }
  });
  return counter;
}

module.exports = knightjumps;
