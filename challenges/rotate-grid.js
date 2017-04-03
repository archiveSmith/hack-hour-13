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

 // brute force
 function rotateGrid(grid, n) {
   // write a function that rotates your n x n grid by 90 degrees
   // create a new grid of n x n
   // [i][n-j-1] => [j][i]
   let result = [];
   for (let i = 0; i < n; i += 1) {
     result.push(new Array(n).fill(''));
     for (let j = 0; j < n; j += 1) {
       result[i][n-j-1] = grid[j][i];
     }
   }
   return result;
 }

module.exports = rotateGrid;
