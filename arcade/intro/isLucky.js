function isLucky(n) {
    let nArr = n.toString().split('');
    let nLen = nArr.length;
    
    let firstHalf = nArr.slice(0, nLen / 2);
    let secondHalf = nArr.slice(nLen / 2, nLen);
    
    let firstHalfSum = 0;
    let secondHalfSum = 0;
    
    for (let i = 0; i < firstHalf.length; i++) {
        firstHalfSum += parseInt(firstHalf[i]);
        secondHalfSum += parseInt(secondHalf[i]);
    }
    
    if (firstHalfSum === secondHalfSum) {
        return true;
    } else {
        return false;
    }
    
}
