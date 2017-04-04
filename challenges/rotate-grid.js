/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  let temp = new Array(n)
  for (let i = 0; i < temp.length; i += 1) {
    temp[i] = new Array(n); 
    for (let j = 0; j < n; j += 1) {
      temp[i][j] = grid[i][n - j - 1];
    }
  }
  grid = temp;
  return grid;
}

const grid =  [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

console.log( rotateGrid2(grid, 3) )

///////////////////////////////////////////////////////////////////////////////

function rotateGrid2(grid, n) {
  var newGrid = [];
  for(var i = 0; i < n; i++) {
    var newRow = [];
    //get all rows from column starting with bottom row 
    for (var j = n - 1; j >= 0; j--) {
      newRow.push(grid[j][i])
    }
    newGrid.push(newRow)
  }
  return newGrid;
}



module.exports = rotateGrid;
