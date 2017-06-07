/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows, a) {
  // edge cases
  if (!numRows || numRows < 1) return [];
  // hardcode the first row
  if (!a) a = [1];
  // base condition
  if (numRows < 2) {
    return a;
  }

  // instanciate variable
  var prevTier = a[a.length - 1];
  var currTier = [1];

  // populate the current row, starting from the first index
  for (let i = 1; i < a.length; i += 1) {
    currTier[i] = prevTier[i] + prevTier[i - 1];
  }
  // tier always has '1' at the end
  currTier.push(1);
  a.push(currTier);
  return pascalTriangle(numRows - 1, a);
}

console.log(pascalTriangle(4));

module.exports = pascalTriangle;
