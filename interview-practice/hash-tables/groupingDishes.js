function groupingDishes(dishes) {
  //dishes is an array of arrays, first element is dish name, rest of elements is ingredients
  //construct an object with all ingredients as indexes, dishes as properties

  let ingredientsObj = {};
  dishes.forEach((dish) => {

    for (let i = 1; i < dish.length; i++) {
      if (ingredientsObj[dish[i]]) {
        ingredientsObj[dish[i]].push(dish[[0]]);
      } else {
        ingredientsObj[dish[i]] = [dish[0]];
      }
    }

  })
  //construct final array to return 
  let finalArr = [];

  for (let i in ingredientsObj) {
    if (ingredientsObj[i].length >= 2) {
      ingredientsObj[i].sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      })
      ingredientsObj[i].unshift(i);
      finalArr.push(ingredientsObj[i]);
    }
  }
  
  finalArr.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  })

  return finalArr;
  //return an array of arrays, first element ingredients, rest of elements is that dish
}
  
let dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
["Quesadilla", "Chicken", "Cheese", "Sauce"],
["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]];

console.log(groupingDishes(dishes));