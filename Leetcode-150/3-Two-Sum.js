const twoSum = (nums, target) => {
  const position = new Map();

  for (let i = 0; i < nums.length; i++) {
    let subValue = target - nums[i];

    if (position.get(subValue) !== undefined) {
      console.log(position.get(subValue));
      return [position.get(subValue), i];
    }

    position.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 5], 9));
