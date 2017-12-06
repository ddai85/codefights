
function minesweeper(matrix) {
  const legitCoordinates = function (x, y) {
    if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length) {
      return true;
    } else {
      return false;
    }
  }
  //iterate through each box in matrix, and then check its neighbors
  //for mines
  let numMatrix = [];  

  //this iterates through matrix
  for (let i = 0; i < matrix.length; i++) {
    numMatrix.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      let sum = 0;

      for (x = i - 1; x <= i + 1; x++) {
        for (y = j - 1; y <= j + 1; y++) {
          if (legitCoordinates(x, y)) {
            if (matrix[x][y]) {
              if (x !== i || y !== j) {
                sum++;
              }
            }
          }
        }
      }
      numMatrix[i][j] = sum;
    }
  }
  return numMatrix;
}
  
let test = [[true, false, false],
[false, true, false],
[false, false, false]];

console.log(minesweeper(test));