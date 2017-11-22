function areSimilar(a, b) {
    var outOfPosition = 0;
    for (var j = 0; j < a.length; j++) {
        if (a[j] !== b[j]) {
            outOfPosition++;
        }
    }
    
    var swap = 0;
    var tempA;
    var tempB;
    
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            if (swap >= 2) {
                return false;
            } else if (swap === 0) {
                swap++;
                tempA = a[i];
                tempB = b[i];
            } else {
                swap++;
                if (tempA === b[i] && tempB === a[i]) {
                    continue;
                } else {
                    return false;
                }
            }
        }
    }
    return true;
    //return boolean
}

var a = [1, 2, 3];
var b = [2, 1, 3];

console.log(areSimilar(a, b));