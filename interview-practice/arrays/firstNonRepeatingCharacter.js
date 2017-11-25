function firstNotRepeatingCharacter(s) {
    //constraint - loop over string once
    
    let arr = {};
    for (var i = 0; i < s.length; i++) {
        if (arr.hasOwnProperty(s[i])) {
            arr[s[i]] = false;
        } else {
            arr[s[i]] = true;
        }
    }

    for (var j in arr) {
        if (arr[j]) {
            return j;
        }
    }
    
    return '_';

}
