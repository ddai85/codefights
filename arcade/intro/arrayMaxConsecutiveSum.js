function arrayMaxConsecutiveSum(inputArray, k) {

  let maxSum = 0;

  for (let x = 0; x < k; x++) {
    maxSum += inputArray[x];
  }

  let currentSum = maxSum;

  for (let i = 1; i < inputArray.length; i++) {
    currentSum = currentSum - inputArray[i - 1] + inputArray[i + k - 1];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;

}

console.log(arrayMaxConsecutiveSum([2, 4, 10, 1], 2));