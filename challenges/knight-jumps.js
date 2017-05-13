// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

// function knightjumps(str, cache = {str: 1}, count = 0) {
//   let x = +str[1];
//   let y = +str[3];
//   let topR = `(${x += 1} ${y += 2})`;
//   let topL = `(${x -= 1} ${y += 2})`;
//   let bottomR = `(${x += 1} ${y -= 2})`;
//   let bottomL = `(${x -= 1} ${y -= 2})`;

//   if (x + 1 <= 8 && y + 2 <= 8 && !cache[topR]) {
//     cache[topR] = 1;
//     count += 1;
//     x += 1;
//     y += 2;
//   }
//   else if (x - 1 >= 0 && y + 2 <= 8 && !cache[topL]) {
//     cache[topL] = 1;
//     count += 1;
//     x -= 1;
//     y += 2;
//   }
//   else if (x + 1 <= 8 && y - 2 >= 0 && !cache[bottomR]) {
//     cache[bottomR] = 1;
//     count += 1;
//     x += 1;
//     y -= 2;
//   }
//   else if (x - 1 >= 0 && y - 2 >= 0 && !cache[bottomL]) {
//     cache[bottomL] = 1;
//     count += 1;
//     x -= 1;
//     y -= 2;
//   }
//   else return count;

//   console.log(`(${x} ${y})`);
//   return knightjumps(`(${x} ${y})`, cache, count);
// }

function knightjumps(str) {
  let count = 0;
  let x = +str[1];
  let y = +str[3];

  if (x + 1 <= 8 && y + 2 <= 8) {
    count += 1;
  }
  else if (x - 1 >= 0 && y + 2 <= 8) {
    count += 1;
  }
  else if (x + 1 <= 8 && y - 2 >= 0) {
    count += 1;
  }
  else if (x - 1 >= 0 && y - 2 >= 0) {
    count += 1;
  }
  else if (y + 1 <= 8 && x + 2 <= 8) {
    count += 1;
  }
  else if (y - 1 >= 0 && x + 2 <= 8) {
    count += 1;
  }
  else if (y + 1 <= 8 && x - 2 >= 0) {
    count += 1;
  }
  else if (y - 1 >= 0 && x - 2 >= 0) {
    count += 1;
  }
  else return count;
}

module.exports = knightjumps;
