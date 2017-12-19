function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  //iterate through inputArray and check to see if each element is equal to elemToReplace
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      //if element is equal, replace with substitutionElem
      inputArray[i] = substitutionElem;
    }
  }
  //return array
  return inputArray;
}
