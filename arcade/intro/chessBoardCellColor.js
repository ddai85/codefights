function getCellColor(cell) {
  let arr = cell.split('');
  if (arr[0].match(/^(A|C|E|G)/) && parseInt(arr[1]) % 2 === 1) {
    return 1;
  }
  if (arr[0].match(/^(B|D|F|H)/) && parseInt(arr[1]) % 2 === 0) {
    return 1;
  }
  return 0;
}

function chessBoardCellColor(cell1, cell2) {
  return (getCellColor(cell1) === getCellColor(cell2));
}

console.log(chessBoardCellColor('A1', 'H3'));
