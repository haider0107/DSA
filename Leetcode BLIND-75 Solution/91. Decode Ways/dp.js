/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = new Array(s.length + 1).fill(0);
  dp[s.length] = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "0") {
      continue;
    }

    let res = dp[i + 1];
    if (
      i + 1 < s.length &&
      (s[i] === "1" || (s[i] === "2" && s[i + 1] <= "6"))
    ) {
      res += dp[i + 2];
    }

    dp[i] = res;
  }

  return dp[0];
};

console.log(numDecodings("06"));
