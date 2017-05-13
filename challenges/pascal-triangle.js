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
  const result = [[1]]; // result array to hold all sub arrays
  let prevArr = [1, 1]; // array to hold previous values
  result.push(prevArr);
  for (let i = 0; i < numRows; i += 1) { // continue till we reach number of rows
    const newArr = [prevArr[0]];
    for (let j = 0; j < prevArr.length - 1; j += 1) {
      newArr.push(prevArr[j] + prevArr[j + 1]);
    }
    newArr.push(prevArr[prevArr.length - 1]);
    prevArr = newArr;
    result.push(newArr);
  }
  return result;
}

module.exports = pascalTriangle;
