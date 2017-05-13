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
  if (!numRows || numRows === 0) return [];
  if (numRows === 1) return [[1]];
  
  let result = [[1], [1,1]];

  if (numRows === 2) return result;
  if (numRows > 2) {
    for (let i = 2; i < numRows; i += 1) {
      let row = [1];
      for (let j = 0; j < result[i - 1].length - 1; j += 1) {
        row.push(result[i - 1][j] + result[i - 1][j + 1]);
      }
      row.push(1);
      result.push(row);
    }
    return result;
  }
}

module.exports = pascalTriangle;
