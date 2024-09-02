/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortArray = nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < sortArray.length - 1; i++) {
    if (i > 0 && sortArray[i] === sortArray[i - 1]) continue;

    let l = i + 1,
      r = sortArray.length - 1;

    while (l < r) {
      let sum = sortArray[i] + sortArray[r] + sortArray[l];
      if (sum > 0) r -= 1;
      else if (sum < 0) l += 1;
      else {
        res.push([sortArray[i], sortArray[l], sortArray[r]]);
        l += 1;
        while (sortArray[l] === sortArray[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  }

  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
