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
  const output = [[1]];
  for (let i = 1; i < numRows; i += 1) {
    const prev = output[i - 1];
    const row = [1];
    let j = 1;
    while (prev[j]) {
      row.push(prev[j - 1] + prev[j]);
      j += 1;
    }
    row.push(1);
    output.push(row);
  }
  return output;
}

module.exports = pascalTriangle;
