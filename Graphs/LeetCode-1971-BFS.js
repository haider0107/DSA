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

  const queue = [];

  queue.push(source);

  const vis = new Array(n).fill(false);
  vis[source] = true;

  while (queue.length > 0) {
    let curr = queue.shift();

    if (curr === destination) return true;

    for (let i = 0; i < n; i++) {
      if (graph[curr][i] && !vis[i]) {
        queue.push(i);
        vis[i] = true;
      }
    }
  }

  return false;
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
