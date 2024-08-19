/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let postfix = 1,
    prefix = 1;
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    if (i !== 0) {
      prefix *= nums[i - 1];
    }

    output[i] = prefix;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i !== nums.length - 1) {
      postfix *= nums[i + 1];
    }

    output[i] *= postfix;
  }

  return output;
};

console.log(productExceptSelf([-1,1,0,-3,3]));
