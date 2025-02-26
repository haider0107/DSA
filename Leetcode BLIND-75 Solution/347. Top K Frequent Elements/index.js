/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const count = {};
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = count[nums[i]] ? count[nums[i]] + 1 : 1;
  }
  const freq = Array.from({ length: nums.length + 1 }, () => []);

  for(const key in count) {
    freq[Number(count[key])].push(key);
  }

  const res = [];
  for(let i = freq.length - 1; i >= 0; i--) {
    for(let j = 0; j < freq[i].length; j++) {
      res.push(freq[i][j]);
      if(res.length === k) return res;
    }
  }

  return res;
};
