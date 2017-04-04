
function cloneGrid(grid) {
  const newGrid = [];
  grid.forEach(row => {
    newGrid.push(row.slice());
  });
  return newGrid;
}

// function rotateGrid(grid, n) {
//   function getColumn(i) {
//     const col = [];
//     grid.forEach((row) => {col.push(row[i])});
//     return col;
//   }
//   const newGrid = [];
//   grid[0].forEach((el, col) => {newGrid.push(getColumn(col).reverse())});
//   return newGrid;
// }

// function rotateGrid(grid, n) {
//   let copy = cloneGrid(grid);
//   for (let i = 0; i < n; i += 1) {
//     for (let j = 0; j < n; j += 1) {
//       grid[i][j] = copy[n - j - 1][i];
//     }
//   }
//   return grid;
// }

function rotateGrid(grid, n) {
  for (let i = 0; i < (n - 1) / 2; i += 1) {
    for (let j = i; j < n - i*2 - 1; j += 1) {
      [grid[i][j], grid[j][n - i - 1], grid[n - i - 1][n - j - 1], grid[n - j - 1][i]]
      = [grid[n - j - 1][i], grid[i][j], grid[j][n - i - 1], grid[n - i - 1][n - j - 1]];
    }
  }
  return grid;
}

 // You are given a NxN grid of elements represented by a 2D array. The ith nested array represents
 // * the ith row in the grid.
 // *
 // * Write a function to rotate the grid 90 degrees clockwise.
 // *
const sampleGrid = [   [1, 2, 3], [4, 5, 6],[7, 8, 9]  ];
rotateGrid(sampleGrid, 3)
console.log(sampleGrid);
 // *
 // *                  sampleGrid after:   [   [7, 4, 1],
 // *                                          [8, 5, 2],
 // *                                          [9, 6, 3]  ]
 // *
 // * BONUS: Do this in place

module.exports = rotateGrid;
