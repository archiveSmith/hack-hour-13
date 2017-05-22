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
  // n = current row num

  // initialize an array to add rows to
  const triangle = [];
  // last row pointer to avoid redundant lookup for last row
  let lastRow;

  // start n from 1 till numRows
  for (let n = 1; n <= numRows; n++) {
    // init curr row with just 1
    const currRow = [1];
    // if n past 2,
    if (n > 1) {
      // iterate over last row except for last if n is greater than 3
      for (let i = 0; i < lastRow.length - 1; i++) {
        // add curr value and next value
        const newNum = lastRow[i] + lastRow[i + 1];
        // push to curr row
        currRow.push(newNum);
      }
      // push 1 to end curr row
      currRow.push(1);
    }

    // point last row to this row for next iteration
    lastRow = currRow;

    // push row to all rows
    triangle.push(currRow);
  }
  return triangle;
}

module.exports = pascalTriangle;
