/**
 * @param {number} n
 * @param {number[][]} edges
 * @returns {number}
 */
const countComponents = (n, edges) => {
  const adj = Array.from({ length: n }, () => []);
  const visited = new Array(n).fill(false);
  let count = 0;
  for (let i = 0; i < edges.length; i++) {
    adj[edges[i][0]].push(edges[i][1]);
    adj[edges[i][1]].push(edges[i][0]);
  }

  const dfs = (edge) => {
    if (visited[edge]) return;

    visited[edge] = true;

    adj[edge].forEach((ele) => {
      dfs(ele);
    });
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      dfs(i);
    }
  }

  return count;
};

console.log(
  countComponents(6, [
    [0, 1],
    [1, 2],
    [2, 3],
    [4, 5],
  ])
);
