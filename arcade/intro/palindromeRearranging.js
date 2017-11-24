function palindromeRearranging(inputString) {
    //put all char in inputString into an object
    //loop through object to check if number of all chars is even... one odd allowed
    var charObj = {};
    for (var i of inputString) {
        if (charObj.hasOwnProperty(i)) {
            charObj[i]++;
        } else {
            charObj[i] = 1;
        }
    }
    var odd = 0;
    for (var j in charObj) {
        if (charObj[j] % 2) {
            odd++;
        }
    }

    return odd > 1 ? false: true;
    console.log(charObj);

}
