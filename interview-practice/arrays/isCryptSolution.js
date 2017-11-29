function isCryptSolution(crypt, solution) {

  const objKey = {};

  for (let i = 0; i < solution.length; i++) {
    objKey[solution[i][0]] = solution[i][1];
  }
  
  let numbers = ['', '', ''];
  for (let k = 0; k < crypt.length; k++) {
    for (let j of crypt[k]) {
      //check to make sure each letter in word 1 is in solution
      if (!objKey.hasOwnProperty(j)) {
        return false;
      }
      numbers[k] += objKey[j];
    }
  }

  for (let l = 0; l < 3; l++) {
    if (numbers[l][0] === '0' && numbers[l].length > 1) {
      return false;
    }
  }

  numbers = numbers.map((word) => {
    return parseInt(word);
  })

  if (numbers[0] + numbers[1] === numbers[2]) {
    return true;
  } else {
    return false;
  }

}