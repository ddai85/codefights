function matrixElementsSum(matrix) {
    //iterate through matrix
    //if a column (j) is 0, the rest of the column should be skipped over
    let skipColumn = {};
    let totalPrice = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (skipColumn.hasOwnProperty(j)) {
                continue;
            }
            if (matrix[i][j] === 0) {
                skipColumn[j] = true;
                continue;
            }
            totalPrice += matrix[i][j];
        }
    }
    return totalPrice;
}