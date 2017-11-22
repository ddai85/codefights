function alternatingSums(a) {
    var result = [0, 0];
    var team1 = true;
    for (var i of a) {
        if (team1 === true) {
            result[0] += i;
            team1 = false;
        } else {
            result[1] += i;
            team1 = true;
        }
    }
    return result;
}
