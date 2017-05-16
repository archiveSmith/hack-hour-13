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
  if (numRows === 2) return [[1], [1, 1]];

  // add the row above by one less than the current element and at the same position
  // as the current element
  let rows = numRows - 2;
  const pascTri = [[1], [1, 1]];
  while (rows > 0) {
    // iterate through the most recent row
    const rowAbove = pascTri[pascTri.length - 1];
    const newRow = [1];
    for (let i = 1; i < rowAbove.length; i += 1) {
      newRow.push(rowAbove[i - 1] + rowAbove[i]);
    }
    newRow.push(1);
    pascTri.push(newRow);
    rows -= 1;
  }
  return pascTri;
}

module.exports = pascalTriangle;
