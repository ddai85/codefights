function shapeArea(n) {
    //1 = 1
    //2 = 5 - add 4
    //3 = 13 - add 8
    //4 = 25 - add 12
    //5      - add 16
    let area = 1
    for (let i = 1; i <= n; i++) {
      area += (i - 1) * 4;
    }
    
    return area;
  }