function bishopAndPawn(bishop, pawn) {
  //iterate through all possible bishop moves and compare against pawn location
  //if pawn === possible bishop, then return true; else return false

  //bishop can move in 4 possible directions
  //convert bishop and pawn strings into coordinates (array of 2 values)
  let coorMap = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  };

  let bishArr = [];
  let pawnArr = [];
  bishop = bishop.split('');
  pawn = pawn.split('');
  bishArr.push(coorMap[bishop[0]]);
  bishArr.push(parseInt(bishop[1]));
  pawnArr.push(coorMap[pawn[0]]);
  pawnArr.push(parseInt(pawn[1]));

  //check upper left
  let upperLeft = bishArr.slice();
  while (upperLeft[0] > 0 && upperLeft[1] < 9) {
    if (upperLeft[0] === pawnArr[0] && upperLeft[1] === pawnArr[1]) {
      return true;
    } else {
      upperLeft[0]--;
      upperLeft[1]++;
    }
  }

  //check upper right
  let upperRight = bishArr.slice();
  while (upperRight[0] < 9 && upperRight[1] < 9) {
    if (upperRight[0] === pawnArr[0] && upperRight[1] === pawnArr[1]) {
      return true;
    } else {
      upperRight[0]++;
      upperRight[1]++;
    }
  }

  //check lower left
  let lowerLeft = bishArr.slice();
  while (lowerLeft[0] > 0 && lowerLeft[1] > 0) {
    if (lowerLeft[0] === pawnArr[0] && lowerLeft[1] === pawnArr[1]) {
      return true;
    } else {
      lowerLeft[0]--;
      lowerLeft[1]--;
    }
  }
  
  //check lower right
  let lowerRight = bishArr.slice();
  while (lowerRight[0] < 9 && lowerRight[1] > 0) {
    if (lowerRight[0] === pawnArr[0] && lowerRight[1] === pawnArr[1]) {
      return true;
    } else {
      lowerRight[0]++;
      lowerRight[1]--;
    }
  }

  return false;
}

console.log(bishopAndPawn('a1', 'c3'));
