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

 // First input is a 2D nested array, and second is the dimension of the array (NxN).
 // Output is the grid rotated 90 degrees clock wise.


 function rotateGrid(grid, n) {
   for (let i = 0; i < n/2; i += 1) {
     for (let j = 0; j < n/2; j += 1) {
     }
   }
   return grid;
 }

module.exports = rotateGrid;
