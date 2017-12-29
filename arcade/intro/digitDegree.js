function digitDegree(n, count = 0) {

  if (n < 10) {
    return count;
  }

  let sum = 0;
  let nStr = n.toString();
  for (let i = 0; i < nStr.length; i++) {
    sum += parseInt(nStr.charAt(i));
  }
  count++;
  return digitDegree(sum, count);
    
}

console.log(digitDegree(190));