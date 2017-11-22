function sortByHeight(a) {
    //use bubble sort method
    //mutate input array
    for (var k = 0; k < a.length - 1; k++) {
        for (var i = 0; i < a.length - 1; i++) {
            var comparator = 1;
            if (a[i] === -1) {
                continue;
            }
            for (var j = i + 1; j < a.length; j++) {
                if (a[j] === -1) {
                    comparator += 1;
                } else {
                    break;
                }
            }
            if (a[i] > a[i + comparator]) {
                var temp = a[i];
                a[i] = a[i + comparator];
                a[i + comparator] = temp;
            }

        }
    }
    
    return a;
}
