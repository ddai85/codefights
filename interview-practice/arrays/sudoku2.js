function sudoku2(grid) {
  
  //helper function takes an array of numbers and checks to see if there are any duplicates
  const checkDuplicate = function(array) {
    const objStore = {};
    for (let i of array) {
      if (objStore[i]) {
        return false;
      } else {
        objStore[i] = true;
      }
    }
    return true;
  }

  //generate arrays of numbers for each column, row and 3x3 grid, then pass into helper function
  //get all rows and columns
  for (let j = 0; j < grid.length; j++) {
    const tempArrRow = [];
    const tempArrCol = [];
    for (let k = 0; k < grid.length; k++) {
      if (grid[j][k] !== '.') {
        tempArrRow.push(grid[j][k]);
      }
      if (grid[k][j] !== '.') {
        tempArrCol.push(grid[k][j]);
      }
    }
    if (!checkDuplicate(tempArrRow) || !checkDuplicate(tempArrCol)) {
      return false;
    }
  }  

  //get all 3x3 grids
  for (let z = 0; z < 3; z++) {
    for (let y = 0; y < 3; y++) {
      const threebythree = [];
      for (let l = 0 + (z * 3); l < 3 + (z * 3); l++) {
        for (let m = 0 + (y * 3); m < 3 + (y * 3); m++) {
          if (grid[l][m] !== '.') {
            threebythree.push(grid[l][m]);
          }
        }
      }
      if (!checkDuplicate(threebythree)) {
        return false;
      }
    }
  }


  //return true if no row, column or 3x3 grid has duplicate
  return true;
}
  

const testgrid = grid = 
[['3', '.', '.', '1', '4', '.', '.', '2', '.'],
['.', '2', '6', '.', '.', '.', '.', '.', '.'],
['.', '.', '4', '.', '.', '.', '.', '.', '.'],
['.', '6', '1', '.', '.', '.', '.', '.', '.'],
['.', '5', '7', '.', '.', '.', '.', '.', '9'],
['.', '.', '.', '.', '.', '.', '8', '1', '.'],
['.', '3', '.', '.', '.', '.', '7', '.', '6'],
['.', '.', '.', '.', '.', '7', '.', '.', '.'],
['2', '.', '.', '5', '.', '.', '.', '7', '.']];

console.log(sudoku2(testgrid));