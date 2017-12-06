function areFollowingPatterns(strings, patterns) {
  
  const convertToNum = function(array) {
    let index = 0;
    let objStore = {};
    let arrayNum = [];

    for (let i = 0; i < array.length; i++) {
      if (objStore[array[i]] !== undefined) {
        arrayNum.push(objStore[array[i]]);
      } else {
        objStore[array[i]] = index;
        arrayNum.push(objStore[array[i]]);
        index++;
      }
    }
    return arrayNum.join();
  }
  console.log(convertToNum(strings));
  console.log(convertToNum(patterns));
  if (convertToNum(strings) === convertToNum(patterns)) {
    return true;
  } else {
    return false;
  }
}

  