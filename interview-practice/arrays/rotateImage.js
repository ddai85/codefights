function rotateImage(a) {
    //input is a 2x2 array
    let store;
    let k = 0;
    for (var i = a.length; i > 0; i = i - 2) {
        for (var j = 0; j < i - 1; j++) {
            store = a[k][k + j];
            a[k][k + j] = a[a.length - k - 1 - j][k];
            a[a.length - k - 1 - j][k] = a[a.length - k - 1][a.length - k - 1 - j];
            a[a.length - k - 1][a.length - k - 1 - j] = a[k + j][a.length - k - 1];
            a[k + j][a.length - k - 1] = store;
        }
        k++;
    }

    return a;
    //output is 2x2 array that is rotated
}


console.log(rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));