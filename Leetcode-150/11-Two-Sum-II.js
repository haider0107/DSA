const towSum = (nums, target) => {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    // console.log(sum);

    if (sum > target) right--;
    else if (sum < target) left++;
    else return [left, right];
  }
};

console.log(towSum([2, 7, 11, 15], 9));

console.log(towSum([2, 3, 4], 6));

// console.log(towSum([-1, 0], -1));

// console.log(towSum([3, 3], 6));

// console.log(towSum([-1, 0, 1, 2, -1, -4], -1));

// console.log(towSum([0, 0, 3, 3], 6));
