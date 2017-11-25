function firstDuplicate(a) {
    //input is array of integers
    //O(n) time complexity, O(1) space complexity

    //since all numbers will be constrained between 1 and a.length (index-1), loop through array and mark its position number as negative
    //if position number already negative, return that number

    for (var i of a) {
        //get 0-index position
        let position = Math.abs(i) - 1;
        //if that position has already been 'marked', return that position value
        if (a[position] < 0) {
            return position + 1;
        }
        a[position] = a[position] * -1;

    }

    return -1;
    //output is a single number which is the duplicate with smallest index
}