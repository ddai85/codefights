function isIPv4Address(inputString) {

    var inputArr = inputString.split('.');

    if (inputArr.length !== 4) {
        return false;
    }

    for (var i in inputArr) {
        if (inputArr[i] < 0 || inputArr[i] > 255 || isNaN(inputArr[i]) || inputArr[i] === '') {
            return false;
        }
    }
    
    return true;
}

console.log(isIPv4Address(".254.255.0"));