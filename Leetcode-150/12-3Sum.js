const threeSum = (nums) => {
  let sortedArray = nums.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (i > 0 && sortedArray[i] === sortedArray[i - 1]) continue;

    let left = i,
      right = sortedArray.length - 1;

    while (left < right) {
      let sum = sortedArray[i] + sortedArray[left] + sortedArray[right];
      if (sum > 0) right--;
      else if (sum < 0) left++;
      else {
        result.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
        left++;
        while (sortedArray[left] === sortedArray[left - 1]) left++;
      }
    }
  }

  console.log(result);
  
};

threeSum([-1, 0, 1, 2, -1, -4]);
