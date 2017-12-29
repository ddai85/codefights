function longestDigitsPrefix(inputString) {

  let prefix = '';
  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(parseInt(inputString.charAt(i)))) {
      prefix += inputString.charAt(i);
    } else {
      break;
    }
  }

  return prefix;

}
