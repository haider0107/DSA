/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [],
    pre = [],
    post = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      pre[i] = 1;
      continue;
    }
    pre[i] = pre[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      post[i] = 1;
      continue;
    }

    post[i] = post[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = post[i] * pre[i];
  }

  return result;
};

// console.log(productExceptSelf([1, 2, 3, 4])); // [ 24, 12, 8, 6 ]

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
