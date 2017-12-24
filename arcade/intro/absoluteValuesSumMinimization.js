function calculateSum(arr, num) {
  let sum = 0;
  arr.forEach((value) => {
    sum += Math.abs(value - num);
  })
  return sum;
}

function absoluteValuesSumMinimization(a) {
  let minDiff = calculateSum(a, a[0]);
  let index = a[0];
  for (let i = a[1]; i < a[a.length - 1]; i++) {
    let diff = calculateSum(a, i);
    if (diff < minDiff) {
      minDiff = diff;
      index = i;
    }
  }
  return index;
}
