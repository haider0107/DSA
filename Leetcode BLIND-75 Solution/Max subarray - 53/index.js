/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSub = nums[0];

  let curSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (curSum < 0) {
      curSum = 0;
    }

    curSum += nums[i];

    if (maxSub < curSum) {
      maxSub = curSum;
    }
  }

  return maxSub;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));
