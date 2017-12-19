function evenDigitsOnly(n) {
  let nStr = '' + n;
  for (let i = 0; i < nStr.length; i++) {
      if (nStr.charAt(i) % 2) {
          return false;
      }
  }
  return true;
}
