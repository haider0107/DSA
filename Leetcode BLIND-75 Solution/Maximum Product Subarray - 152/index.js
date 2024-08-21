function findMaxValue(...numbers) {
  return Math.max(...numbers);
}

function findMinValue(...numbers) {
  return Math.min(...numbers);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let curMax = 1,
    curMin = 1;
  let res = findMaxValue(...nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      curMax = 1;
      curMin = 1;
      continue;
    }

    let temp = curMax * nums[i];

    curMax = findMaxValue(curMax * nums[i], curMin * nums[i], nums[i]);
    curMin = findMinValue(temp, curMin * nums[i], nums[i]);

    res = findMaxValue(res, curMax);
  }

  return res;
};

let data = [2, 3, -2, 4];

console.log(maxProduct(data));
