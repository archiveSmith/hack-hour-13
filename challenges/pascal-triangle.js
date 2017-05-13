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
  if (numRows === 1) return [[1]];

  let row = [1]
  let allRows = pascalTriangle(numRows - 1);
  let prevRow = allRows[numRows-2];

  for (let i = 1; i < numRows - 1; i += 1) {
    row.push(prevRow[i - 1] + prevRow[i]);
  }

  row.push(1);
  allRows.push(row);
  return allRows;
}

console.log(pascalTriangle(6));

module.exports = pascalTriangle;
