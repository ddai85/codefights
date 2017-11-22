function arrayChange(inputArray) {
    //loop through inputArray and make moves to ensure each next element is larger
    var moves = 0;

    for (var i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i + 1] > inputArray[i]) {
            continue;
        } else {
            while (inputArray[i + 1] <= inputArray[i]) {
                inputArra[i + 1]++;
                moves++;
            }
        }
    }

    return moves;
}
    