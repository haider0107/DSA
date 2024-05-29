function validPath(n, edges, source, destination) {
  const graph = Array.from({ length: n }, () => []);

  // Build the graph
  for (let edge of edges) {
    let [u, v] = edge;
    graph[u].push(v);
    graph[v].push(u);
  }

  let vis = new Array(n).fill(false);

  // DFS helper function
  function dfs(graph, source, destination, vis) {
    if (source === destination) return true;

    vis[source] = true;

    for (const n of graph[source]) {
      if (!vis[n]) {
        if (dfs(graph, n, destination, vis)) {
          return true;
        }
      }
    }

    return false;
  }

  return dfs(graph, source, destination, vis);
}

const n = 6;
const edges = [
  [0, 1],
  [0, 2],
  [3, 5],
  [5, 4],
  [4, 3],
];
const source = 1;
const destination = 5;

console.log(validPath(n, edges, source, destination));
