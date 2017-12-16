const findDifference = function(array, k) {
  if (array.length <= 1) {
    return false;
  }

  let smallestDiff = Math.abs(array[0] - array[1]);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j) {
        continue;
      }
      if (Math.abs(array[i] - array[j]) < smallestDiff) {
        smallestDiff = Math.abs(array[i] - array[j]);
      }
    }
  }

  if (smallestDiff <= k) {
    return true;
  }

  return false;
}

function containsCloseNums(nums, k) {
  const objStore = {};

  for (let i = 0; i < nums.length; i++) {
    if (objStore[nums[i]] === undefined) {
      objStore[nums[i]] = [i];
    } else {
      objStore[nums[i]].push(i);
    }
  }

  for (let j in objStore) {
    if (findDifference(objStore[j], k)) {
      return true;
    }
  }
  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
