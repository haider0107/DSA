const numsSameConsecDiff = (n, k) => {
  const res = [];

  for (let i = 1; i <= 9; i++) {
    dfs(n - 1, k, i, res);
  }

  function dfs(n, k, digit, res) {
    if (n === 0) {
      res.push(digit);
      return;
    }

    let lastdigit = digit % 10;

    if (lastdigit + k <= 9) dfs(n-1, k, digit * 10 + lastdigit + k, res);
    if (k !== 0 && lastdigit - k >= 0)
      dfs(n-1, k, digit * 10 + lastdigit - k, res);
  }

  return res;
};

console.log(numsSameConsecDiff(3, 7));
