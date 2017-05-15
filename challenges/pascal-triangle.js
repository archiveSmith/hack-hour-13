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
  let pascal = [];
  pascal[0] = [1];
  pascal[1]= [1,1];
  
  for (let j = pascal.length - 1; j <= numRows; j += 1) {
    let newRow = [];
    for (let i = 1; i <= pascal[j].length; i += 1) {
      
      if (i = 0) {
        newRow[0] = 1;
      }
      else if (i = pascal[j].length) {
        newRow[i] = 1;
      }
      else {
        newRow[i] = pascal[j][i - 1] + pascal[j][i];
      }
    }
    pascal.push(newRow);
  }
}

module.exports = pascalTriangle;
