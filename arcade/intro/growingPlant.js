function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let day = 1;
  let height = 0;

  while (height < desiredHeight) {
    height += upSpeed;
    if (height >= desiredHeight) {
      return day;
    }
    day++;
    height -= downSpeed;
  }
  
  return day;
}
