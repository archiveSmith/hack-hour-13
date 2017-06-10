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

//---------------cleaner solution------------------------

function pascalTriangle2(numRows){
  if (!numRows || numRows < 1) {return []}
  const triangle = [[1]];
  let row; 

  for (let i = 0; i < numRows - 1; i += 1) {
    row = [1];
    for (let j = 1; j < triangle[i].length; j += 1) {
      row[j] = triangle[i][j] + triangle[i][j - 1];
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
}

//-------------------recursive way ------------------------------

function pascalTriangle3(n, triangle = [[1]]) {
  if (!n || n < 1) return [];

  // base case : n is 1. Return whatever our triangle is at that point.
  if (n === 1) return triangle;

  // recursive case: start by creating new row - initial value is 1
  const row = [1];
  const prevRow = triangle[triangle.length - 1];

  for (let i = 1; i < prevRow.length; i += 1) {
    row.push(prevRow[i] + prevRow[i - 1]);
  }
  row.push(1);
  triangle.push(row);

  // at the end of the recursive case, make the recursive call with n-1
  // keep in mind, n is only used as a counter. we build from triangle, which
  // will start from [[1]]
  return pascalTriangle(n - 1, triangle);
}

//////////////////////////////////////////////////////
console.log(pascalTriangle2(5));


///////////////////////////////////////////////////
module.exports = pascalTriangle;
