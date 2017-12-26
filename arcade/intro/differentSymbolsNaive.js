function differentSymbolsNaive(s) {

  let objStore = {};
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (objStore[s.charAt(i)] === undefined) {
      objStore[s.charAt(i)] = true;
      count++;
    }
  }

  return count;
}
