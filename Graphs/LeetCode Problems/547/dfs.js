/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;

  const vis = new Array(n).fill(false);

  let countProv = 0;

  const dfs = (curr) => {
    for (let i = 0; i < n; i++) {
      if (isConnected[curr][i] && !vis[i]) {
        vis[i] = true;
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!vis[i]) {
      countProv++;
      dfs(i);
    }
  }

  return countProv;
};

console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
