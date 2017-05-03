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
  let newGrid = []
  let gridLength = grid.length;
  let arrayofNums = grid
  for(let k = 0; k < gridLength; k++){
    newGrid.push([])
  }
  for (let i = 0; i < grid[0].length; i++) {
    for (let j = grid.length - 1; j >= 0; j--) {
      newGrid[i][j] = grid[j][i]
    }
    newGrid[i] = newGrid[i].reverse()
  }
 return newGrid
}


module.exports = rotateGrid;
let sampleGrid = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

console.log(sampleGrid.length)
rotateGrid(sampleGrid, 3)