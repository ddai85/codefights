function boxBlur(image) {
  //image parameter is a n x n matrix
  const blurredImage = [];

  //traverse over inner image (without borders)
  for (let x = 1; x < image.length - 1; x++) {
    blurredImage.push([]);
    for (let y = 1; y < image[0].length - 1; y++) {
      blurredImage[x - 1].push(find3x3Avg(x, y));
    }
  }

  function find3x3Avg(x, y) {
    let sum = 0;

    for (let i = x - 1; i < x + 2; i++) {
      for (let j = y - 1; j < y + 2; j++) {
        sum += image[i][j];
      }
    }

    return Math.floor(sum / 9);
  }

  //return a matrix of n - 2 x n - 2 (border is removed)
  return blurredImage;
}
  

console.log(boxBlur([[7, 4, 0, 1], 
  [5, 6, 2, 2], 
  [6, 10, 7, 8], 
  [1, 4, 2, 0]]));