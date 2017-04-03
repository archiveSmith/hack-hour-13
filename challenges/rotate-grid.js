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
 * 
 * [   [1, 2, 3], [4, 5, 6], [7, 8, 9]  ]
 * [   [7, 4, 1], [8, 5, 2], [9, 6, 3]  ]
 */

function rotateGrid(grid, n) {
  const allNums = [];
  for (let i = 0; i < grid.length; i += 1) {
    grid.forEach((arr) => {
      allNums.push(arr[i]);
    });
  }
  return allNums.join('').match(new RegExp(`.{1,${n}}`, 'g')).map((str) => {
    return str.split('').map(el => Number(el)).reverse();
  });
}

module.exports = rotateGrid;
