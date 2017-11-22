function commonCharacterCount(s1, s2) {
    let s2Arr = s2.split('');
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2Arr.length; j++) {
            if (s1[i] === s2Arr[j]) {
                s2Arr.splice(j, 1);
                count++
                break;
            }
        }
    }
    return count;
}