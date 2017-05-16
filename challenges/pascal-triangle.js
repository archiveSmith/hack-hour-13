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
  if(numRows < 0 || !Number.isInteger(numRows)) return false;
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



//RECURSIVE SOLUTION
function pascalTriangle(n, triange){
  if(!n || n < 1) return [];
  triangle = triangle ||[[1]];

  if(n < 2) return triangle;
  var row = [1];
  var prevRow = triangle(triangle.length -1);
  for(var i = 1; i < prevRow.length; i++){
    row.push(prevRow[i] + prevRow(i-1))
  }//DIDN't GET A CHANCE TO FINISH SOLUTION
}


 console.log(pascalTriangle('turtle'))
  // [
  //   [1],
  //   [1,1],
  //   [1,2,1],
  //   [1,3,3,1],
  //   [1,4,6,4,1],
  //   [1,5,10,10,5,1]
  // ]
module.exports = pascalTriangle;
