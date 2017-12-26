function extractEachKth(inputArray, k) {

  let newArr = [];
  //iterate through inputArray... push into new array
  //every kth element skip over
  for (let i = 0; i < inputArray.length; i++) {
    if ((i + 1) % k !== 0) {
      newArr.push(inputArray[i]);
    }
  }
  return newArr;
}