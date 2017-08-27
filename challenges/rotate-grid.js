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

}

function transpose(matrix) {
  return matrix[0].map((number, col) => { 
  	return matrix.map( (row) => { 
  		return row[col];
  	}).reverse();
  });
}

// better explained
function rotate(matrix) {
  var result = [],
      rowLength = matrix.length, // row length
      columnLength = matrix[0].length, // column lenght aka n by m
      i, j, row;
  
  for (i = 0; i < columnLength; ++i) {
    row = [];
    for (j = 0; j < rowLength; ++j) {
      row.push(matrix[rowLength - j - 1][i]); // start by pushing (into row []) the first element in the last row, then the first element in the second row, and the first element in the first row
    }
    result.push(row);
  }  
  return result;
}

module.exports = rotateGrid;
