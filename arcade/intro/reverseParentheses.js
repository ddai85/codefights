function reverseParentheses(s) {
    var openParens = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            openParens.push(i);
        } else if (s[i] === ')') {
            var substring = s.substring(openParens[openParens.length - 1] + 1, i);
            
            var reverseString = '';
            for (var j = substring.length - 1; j >= 0; j--) {
                reverseString += substring[j];
            }
            
            s = s.slice(0, openParens[openParens.length - 1] + 1) + reverseString + s.slice(i);

            openParens.pop();
        } 
    }
    var result = '';

    for (var k of s) {
        if (k === '(' || k === ')') {
            continue;
        } else {
            result += k;
        }
    }


    return result;
}