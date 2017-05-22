// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

// parses string and returns point object
function parseStr(str) {
  const match = str.match(/\((\d)\s+(\d)\)/);
  return match && {
    x: +match[1],
    y: +match[2],
  }
}

function knightjumps(str) {
  const start = parseStr(str);
  // get points that are w/in board
  return [
    {x: 1, y: 2},
    {x: 1, y: -2},
    {x: -1, y: -2},
    {x: -1, y: 2},
    {x: 2, y: 1},
    {x: 2, y: -1},
    {x: -2, y: -1},
    {x: 2, y: -1},
  ].reduce((validPts, point) => {
    const new_x = start.x + point.x;
    const new_y = start.y + point.y;

    // check if inbounds
    return validPts + (new_x >= 1 && new_x <= 8 && new_y >= 1 && new_x <= 8);
  }, 0);
}

module.exports = knightjumps;
