function alphabeticShift(inputString) {
  let newString = '';
  for (let i = 0; i < inputString.length; i++) {
    let charCode = inputString.charCodeAt(i) + 1;
    charCode = charCode > 122 ? 97 : charCode;
    newString += String.fromCharCode(charCode);
  }
  return newString;
}