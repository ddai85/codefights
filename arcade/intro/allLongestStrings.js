function allLongestStrings(inputArray) {
    let resultArr = [];
    let longest = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === longest) {
            resultArr.push(inputArray[i]);
        } else if (inputArray[i].length > longest) {
            resultArr = [];
            resultArr.push(inputArray[i]);
            longest = inputArray[i].length;
        }
    }
    return resultArr;
}
