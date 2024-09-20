/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = { [s.length]: 1 };

  const dfs = (i) => {
    if (dp[i]) {
      return dp[i];
    }

    if (s[i] === "0") {
      return 0;
    }

    let res = dfs(i + 1);
    if (
      i + 1 < s.length &&
      (s[i] === "1" || (s[i] === "2" && s[i + 1] <= "6"))
    ) {
      res += dfs(i + 2);
    }

    dp[i] = res;

    return res;
  };

  let value = dfs(0);

  console.log(dp);

  return value;
};

console.log(numDecodings("121"));
