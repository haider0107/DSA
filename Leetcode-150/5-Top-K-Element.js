const topKFrequent = (nums, k) => {
  const countEle = {};

  for (let num of nums) {
    countEle[num] = countEle[num] ? countEle[num] + 1 : 1;
  }

  const freq = Array.from({ length: nums.length + 1 }, () => []);
  // don't use fill as it pass same refrence to each element

  for (const key in countEle) {
    freq[Number(countEle[key])].push(Number(key));
  }

  const result = [];

  for (let i = freq.length - 1; i >= 0; i--) {
    for (let ele of freq[i]) {
      result.push(ele);

      if (result.length === k) return result;
    }
  }
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
