/**
 * @param {number[]} nums
 * @return {number}
 */

const robList = (nums) => {
  let rob1 = 0,
    rob2 = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp = Math.max(rob1 + nums[i], rob2);
    rob1 = rob2;
    rob2 = temp;
  }

  return rob2;
};

var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const array1 = nums.slice(0, nums.length - 1);
  const array2 = nums.slice(1, nums.length);

  const rob1 = robList(array1);
  const rob2 = robList(array2);

  return Math.max(rob1, rob2);
};

console.log(rob([1, 2, 3, 1]));
