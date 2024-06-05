/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;

  const vis = new Array(n).fill(false);

  let countProv = 0;

  for (let i = 0; i < n; i++) {
    if (!vis[i]) {
      countProv++;
      const queue = [];
      queue.push(i);
      vis[i] = true;
      while (queue.length) {
        const curr = queue.shift();
        for (let k = 0; k < n; k++) {
          if (isConnected[k][curr] && !vis[k]) {
            vis[k] = true;
            queue.push(k);
          }
        }
      }
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
