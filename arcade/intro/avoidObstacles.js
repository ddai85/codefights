function avoidObstacles(inputArray) {

  let track = [];
  //convert input array into 1/0 array
  for (let j = 0; j < inputArray.length; j++) {
    track[inputArray[j]] = true;
  }

  let length = 1;
  while (length < 40) {
    let lengthFound = true;
    let step = 0;
    while (step < track.length) {
      if (track[step]) {
        lengthFound = false;
        length++;
        break;
      } else {
        step += length;
      }
    }

    if (lengthFound) {
      return length;
    }
  }
}