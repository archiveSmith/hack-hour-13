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
  // initialize new grid
  var newGrid = [];

  // how a 3x3 array will fit
  newGrid[0][n] = grid[0][0]; //1
  newGrid[n - 1][n] = grid[0][n - 1]; //2
  newGrid[n][n] = grid[0][n] //3
  newGrid[0][n - 1] = grid[n - 1][0]; //4
  newGrid[n - 1][n - 1] = grid[n - 1][n - 1]; //5
  newGrid[n][n - 1] = grid[n - 1][n]; //6
  newGrid[0][0] = grid[n][0]; //7
  newGrid[n - 1][0] = grid[n][n - 1]; //8
  newGrid[n][0] = grid[n][n]; //9
}

for (var i = 0; i < n; i += 1) {
  for (var j = 0; j < n; j += 1) { 
    newGrid[i][n-j] = grid[i][j];
  }
}

module.exports = rotateGrid;

// http://www.geeksforgeeks.org/inplace-rotate-square-matrix-by-90-degrees/
