function addBorder(picture) {
    var result = [];
    var topbot = '';
    
    for (var j = 0; j < picture[0].length + 2; j++) {
        topbot += '*';
    }
    
    result.push(topbot);
    
    for (var i = 0; i < picture.length; i++) {
        var row = '';
        row += '*';
        for (var k = 0; k < picture[i].length; k++) {
            row += picture[i][k];
        }
        row += '*';
        result.push(row);
    }
    result.push(topbot);
    
    
    return result;
}
