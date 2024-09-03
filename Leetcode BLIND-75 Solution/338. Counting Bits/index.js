/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = [];

  let offset = 1;

  dp.push(0);

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) offset *= 2;
    let bits = 1 + dp[i - offset];
    dp.push(bits);
  }

  return dp;
};

console.log(countBits(8));
