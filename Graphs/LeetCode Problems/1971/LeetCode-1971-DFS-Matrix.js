function validPath(n, edges, source, destination) {
  let graph = [];

  for (let i = 0; i < n; i++) {
    let row = new Array(n).fill(false);
    graph.push(row);
  }

  // Build the graph
  for (let edge of edges) {
    let [u, v] = edge;
    graph[u][v] = true;
    graph[v][u] = true;
  }

  let vis = new Array(n).fill(false);

  // DFS helper function
  function dfs(graph, source, destination, vis) {
    if (source === destination) return true;
    vis[source] = true;
    for (let neighbor = 0; neighbor < graph.length; neighbor++) {
      if (graph[source][neighbor] && !vis[neighbor]) {
        if (dfs(graph, neighbor, destination, vis)) {
          return true;
        }
      }
    }
    return false;
  }

  // Call DFS and return the result
  return dfs(graph, source, destination, vis);
}

// Example usage:
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
