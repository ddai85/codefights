function checkPalindrome(inputString) {
    //check from beginning and end to see if the same
    //only continue while beginning is <= end
    let start = 0;
    let end = inputString.length - 1;
    
    while (start <= end) {
        if (inputString[start] !== inputString[end]) {
            return false;
        } else {
            start++;
            end--;
        }
    }
    return true;   
}
