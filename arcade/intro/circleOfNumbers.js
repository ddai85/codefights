function circleOfNumbers(n, firstNumber) {
  let distance = n / 2;

  let opposite = firstNumber + distance;

  if (opposite >= n) {
    opposite -= n;
  }

  return opposite;
}
