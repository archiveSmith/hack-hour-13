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

function pascalTriangle(numRows) {
  let res = [];
  let n = numRows;

  // if (n === 1) return res;

  for (let i = 0; i < n; i += 1) {
      res.push([1]);
    for (let j = 1; j <= i; j += 1) {
      res[i][j] = (res[i - 1][j - 1] ? res[i - 1][j - 1] : 0) + (res[i - 1][j] ? res[i - 1][j] : 0);
    }
  }
  return res;
}

// console.log(pascalTriangle(6));

module.exports = pascalTriangle;
