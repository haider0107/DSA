/**
 * @param {number} n
 * @param {number[][]} edges
 * @returns {boolean}
 */

const validTree = (n, edges) => {
  const adj = {};

  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }

  edges.forEach((ele) => {
    let [n1, n2] = ele;

    adj[n1].push(n2);
    adj[n2].push(n1);
  });

  const visit = new Set();

  const dfs = (prev, curr) => {
    if (visit.has(curr)) return false;

    visit.add(curr);

    for (let i = 0; i < adj[curr].length; i++) {
      if (prev === adj[curr][i]) continue;
      if (!dfs(curr, adj[curr][i])) return false;
    }

    return true;
  };

  if (!dfs(-1, 0)) return false;

  return visit.size === n;
};

console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ])
);
