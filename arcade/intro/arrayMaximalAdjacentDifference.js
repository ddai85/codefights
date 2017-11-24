function arrayMaximalAdjacentDifference(inputArray) {
    var maxDiff = 0;
    for (var i = 0; i < inputArray.length - 1; i++) {
        var diff = Math.abs(inputArray[i] - inputArray[i + 1]);
        if ( diff > maxDiff) {
            maxDiff = diff;
        }
    }
    
    return maxDiff;
}
    