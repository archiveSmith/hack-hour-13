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
  if (numRows === 0) {return []}
  if (numRows === 1) {return [1]}
  let result = [[1], [1,1]];
  let temp = [1];
  while(numRows - 2 >= 0) {
    let lastArr = result[result.length - 1];
    
    for (let i = 0; i < lastArr.length - 1; i += 1) {
      temp.push(lastArr[i] + lastArr[i + 1]);
    }
    temp.push(1);
    numRows--;
    result.push(temp);
    temp = [1];
  }
  return result;
}
//////////////////////////////////////////////////////
console.log(pascalTriangle(5));


///////////////////////////////////////////////////
module.exports = pascalTriangle;
