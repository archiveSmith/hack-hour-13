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
  //new grid, new holder
  let result = [];
  let vessel = [];
  
  //while loop to determin number of time required to rotate
  while (n !== 0) {
    //take the first indexes of the original and move it to make it rotate 90 degrees
    // pop will make sure that we always take off the first item, and first item changes every loop
    for (let i = grid.length - 1; i >= 0; i -= 1) {
      vessel.push( grid[i].shift() );
    }
    result.push(vessel)
    vessel = [];
    n -= 1;
  }
  return result;
}

module.exports = rotateGrid;
