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

// rotate in place
// start form outside and rotate inside
// O(n ^ 2) time, O(1) space
// function rotateGrid(grid, n) {
  
//   for (var i = 0; i < Math.floor(n / 2); i ++) {
//     var first = i;
//     var last = n - 1 - i;
    
//     for (var j = first; j < last; j ++) {
//       var adjust = j - first;
//       var top = grid[first][j];
      
//       // left -> top
//       grid[first][j] = grid[last-adjust][first];
      
//       // bottom -> left
//       grid[last-adjust][first] = grid[last][last-adjust];
      
//       // right -> bottom
//       grid[last][last-adjust] = grid[j][last];
      
//       // top -> right
//       grid[j][last] = top;
//     }
//   }
//   return grid;
// }



// first column becomes first row
// second column becomes second row
// third column becomes third row
function rotateGrid(grid, n) {
  // check to see if array
  if (!Array.isArray(grid)) return false;
  // check to see if the grid is actually (N x N) 
  if (grid.length !== n) return false; // checks the rows
  // checks the columns
  for (let i = 0; i < grid.length; i += 1) {
    if (grid[i].length !== n || !Array.isArray(grid[i])) return false;
  }
  
  let rotatedArr = [];
  let subRow = [];
  let row = 0;
  // first loop is 3 rows
  // second loop will be each column in the row

  // ***** ClockWise **********************
  while (grid[n - 1].length > 0) {
    subRow.unshift(grid[row].shift())

    // if we are on the last row, remove it and resent the row to 1
    if (row === n - 1) {
      rotatedArr.push(subRow);
      subRow = [];
      row = 0;
    } else {
      row += 1;
    }
  }
  // ***** ClockWise **********************

  // ***** CounterClockWise Lol **********************
  // while (grid[n - 1].length >= 0) {
  //   subRow.push(grid[row].pop())

  //   // if we are on the last row, remove it and resent the row to 1
  //   if (row === n - 1) {
  //     rotatedArr.push(subRow);
  //     subRow = [];
  //     row = 0;
  //   } else {
  //     row += 1;
  //   }
  // }
  // ***** CounterClockWise Lol **********************

  return rotatedArr;
}

module.exports = rotateGrid;
