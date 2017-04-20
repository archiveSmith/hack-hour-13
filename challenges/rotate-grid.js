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
  // same on multiple of 4 rotations
  // fastest way is to move elems straight to desired place based on n = 1-3

  // invalid input
  if (!Array.isArray(grid) ||
      // check if any grid elem not an array or if an array,
      // if it has same length as grid (so grid is NxN)
      grid.some((subArr) => !Array.isArray(subArr) || subArr.length !== grid.length) ||
      isNaN(n)
  ) {
    return null;
  } 

  // if n is multiple of 4 i.e. back in same orientation
  // or empty, return original grid
  const gridLen = grid.length;

  function invertIndex(len, idx) {
    return len - idx; 
  }

  if (!gridLen || n % 4 === 0) return grid;
  // i = main arr ctr
  // j = sub arr ctr
  // [i, j]
  else if (n % 4 === 1) {
    // [0, 0] => [0, N]
    // [0, 1] => [1, N-1]
    // [1, 0] => [0, N-1]
    // [N, N] => [N, 0]
    // [N, N-1] => [N-1, 0]

    // invert i then switch i and j

  } else if (n % 4 === 2) {
    // [0, 0] => [N, N]
    // [0, 1] => [N, N-1]
    // [1, 0] => [N-1, N]
    // [N, N] => [0,0]
    // [N,N-1] => [0,1]

    // invert i and j
    
  } else {
    // n % 4 === 3
    // [0, 0] => [N, 0]
    // [0, 1] => [N-1, 0]
    // [1, 0] => [N, N-1]
    // [N, N] => [0,N]
    // [N,N-1] => [1,N]

    // invert j then switch i and j
  }
}

module.exports = rotateGrid;
