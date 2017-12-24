function depositProfit(deposit, rate, threshold) {

  let balance = deposit;
  let year = 0;

  while (balance < threshold) {
    year++;
    balance = balance + (balance * rate / 100);
  }

  return year;
}
