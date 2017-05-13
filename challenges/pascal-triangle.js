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
    [1,3,3,1],  0, 1 = 1 / 1, 2 = 2 / 2,3
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  if (numRows === 0) return [[]];
  const result = [[1]];
  for (let i = 1; i < numRows; i += 1) {
    result.push([]);
    for (let j = 0; j < i; j += 1) {
      result[i].push(
        Number(result[i-1][j - 1] === undefined ? 0 : result[i-1][j - 1])
        + Number(result[i-1][j] === undefined ? 0 : result[i-1][j])
      );
    }
    result[i].push(1);
  }
  return result;
}

module.exports = pascalTriangle;
