/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  //   [3,1,2]
  let res = nums[0]; //3

  while (l <= r) {
    if (nums[l] <= nums[r]) {
      if (res < nums[l]) return res;
      else return nums[l];
    }

    let m = Math.floor((l + r) / 2);
    res = nums[m];

    if (nums[m] >= nums[l]) l = m + 1;
    else r = m - 1;
  }
};

console.log(findMin([3, 1, 2]));
