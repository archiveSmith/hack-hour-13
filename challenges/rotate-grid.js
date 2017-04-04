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
   // start a new Grid and initialize it to an empty Array
   // create n amount of arrays at n length
   // everything at the top of the grid (the array in the first element) will be stored
   // as the last element at the end of n arrays
   // the second row of the grid will be the second to last element of n arrays and so forth
   // console.log(n);
   // let newGrid = [];

   // create a loop that will create a new array for n, and will store each
   // element of the first array in the first element of the grid as the last element
   // of each new created array

   // for (let i = 0; i < n; i += 1) {
   //   newGrid[i] = Array(n);
   // }

   // create a new column based on everything in the first row in the grid
   // with that column, change everything that is in the last column in the grid to the newly created column

   let col = []
    for (let k = 0; k < n; k += 1) {
      col.push(grid[k][n-1]);
    }

   for (let i = 0; i < n; i += 1)  {
     const tempRow = Array.from(grid[i]);
     // create a variable that holds the column that is about to be iterated through
    //  const nextRow = Array.from(grid[i + 1]);
     for (let j = 0; j < n; j += 1) {
       if (j === n - 1) grid[j][n-i-1] = col[i];
       else grid[j][n-i-1] = tempRow[j];
     }
   }
   console.log(grid);
   return grid;
 }

 rotateGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3);

module.exports = rotateGrid;
