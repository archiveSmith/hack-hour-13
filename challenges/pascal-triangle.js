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
  if(numRows < 0) return false;
  let triangle = [[1]];
  for(let i = 1; i < numRows; i++){
    let lastLine = triangle[triangle.length - 1]
    let innerLine = [];
    for(let j = 0; j < lastLine.length; j++){
      if(j === 0) innerLine.push(lastLine[j])
      if(j === lastLine.length - 1) innerLine.push(lastLine[j])
      else {
        innerLine.push(lastLine[j] + lastLine[j + 1]); 
      }
      
    }
    triangle.push(innerLine);
  }
  return triangle;
}


  console.log(pascalTriangle(3))
  // [
  //   [1],
  //   [1,1],
  //   [1,2,1],
  //   [1,3,3,1],
  //   [1,4,6,4,1],
  //   [1,5,10,10,5,1]
  // ]
module.exports = pascalTriangle;
