/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numsSet = new Set(nums);

  let longest = 0;

  for (const val of numsSet) {
    if (!numsSet.has(val - 1)) {
      let long = 1;
      while (numsSet.has(val + long)) long++;
      longest = Math.max(longest, long);
    }
  }

  return longest;
};
