const twoSum = (nums, target) => {
  const mapData = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (mapData.get(diff) !== undefined) {
      return [mapData.get(diff), i];
    }

    mapData.set(nums[i], i);
  }
};

console.log(twoSum([3, 3], 6));
