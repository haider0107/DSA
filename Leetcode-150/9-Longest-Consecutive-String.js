const long = (nums) => {
  const numSet = new Set(nums);

  let longest = 0;

  for (let val of numSet) {
    if (!numSet.has(val - 1)) {
      let long = 1;
      while (numSet.has(val + long)) long++;

      longest = Math.max(long, longest);
    }
  }

  return longest;
};

console.log(long([100, 4, 200, 1, 3, 2]));
console.log(long([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
