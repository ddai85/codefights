function isOneDifferent(str1, str2) {
  let diff = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) {
      diff++
    }
  }

  if (diff !== 1) {
    return false;
  }
  return true;
}

function stringsRearrangement(inputArray) {

  function findNextElement(head, array) {
    for (let i = 0; i < array.length; i++) {
      if (isOneDifferent(head, array[i])) {
        if (array.length === 1) {
          return true;
        }
        let newArr = array.slice(0);
        newArr.splice(i, 1);
        if (findNextElement(array[i], newArr)) {
          return true;
        }
      }
    }
    return false;
  }

  for (let i = 0; i < inputArray.length; i++){
    let newArr = inputArray.slice(0);
    newArr.splice(i, 1);
    if (findNextElement(inputArray[i], newArr)) {
      return true;
    }
  }
  return false;
}

let test = ["ab", "bb", "aa"];
console.log(stringsRearrangement(test));