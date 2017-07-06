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

// Input: is the number of rows
// Output: an array

// Edge Case: if input doesn't exist or is less than 1 return and empty array.

// Edges of the triangle should be 1
// Each number is the numbers directly above it added together

// Iterative approach - pseudocode
  // Start the triangle with hard coded nested arrays
  // Iterate until at point where previous row ends
  // On each iteration add the two values from the previous row
  // Push the trailing 1 to complete the row


function pascalTriangle(numRows) {
  if (!numRows || numRows < 1) return [];

  // There is at least one row - go ahead and add it
  const triangle = [[1]];
  let row;
  // j will be the index of the previous row in the triangle
  for (let j = 0; j < numRows - 1; j += 1) {
    // row will be the current row, and all rows begin with a 1
    row = [1];
    // k will be the index of each element in a given row
    // start from k = 1 because the index 0 has already been added
    // we iterate until the previous row ends
    // on each iteration add two values from the previous row
    for (let k = 1; k < triangle[j].length; k += 1) {
      row[k] = triangle[j][k] + triangle[j][k - 1];
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
}

// console.log(pascalTriangle(6));

module.exports = pascalTriangle;
