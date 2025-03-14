const constainDuplicate = (nums) => {
  const map = {};

  for (let num of nums) {
    if (map[num]) {
      return true;
    } else {
      map[num] = true;
    }
  }

  return false;
};

console.log(constainDuplicate([4, 5, 8, 9, 6]));
