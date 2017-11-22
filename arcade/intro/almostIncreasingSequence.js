function almostIncreasingSequence(sequence) {
    //naive implementation is to iterate through entire sequence and pull one char out at a time.... then check to see if array is sorted each time
    //time complexity would be n^2... 
    //can probably be solved linear time-- iterate through and find where sequence decreases... pull out offending number and see if sequence continues
    let firstRun = isIncreasing(sequence);
    if (firstRun === true) {
        return true;
    } else {
        let subsequence = sequence.slice(0, firstRun).concat(sequence.slice(firstRun + 1, sequence.length));
        if (isIncreasing(subsequence) === true) {
            return true;
        }
        subsequence = sequence.slice(0, firstRun + 1).concat(sequence.slice(firstRun + 2, sequence.length));
        if (isIncreasing(subsequence) === true) {
            return true;
        }
    }
    return false;
    //return boolean
}



function isIncreasing(sequence) {
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] < sequence[i + 1]) {
            continue;
        } else {
            return i;
        }
    } 
    return true;
}