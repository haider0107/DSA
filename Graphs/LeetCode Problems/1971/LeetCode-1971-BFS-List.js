function validPath(n, edges, source, destination) {
  const graph = Array.from({ length: n }, () => []);

  // Build the graph
  for (let edge of edges) {
    let [u, v] = edge;
    graph[u].push(v);
    graph[v].push(u);
  }

  const queue = [];
  queue.push(source);

  const vis = new Array(n).fill(false);
  vis[source] = true;

  while (queue.length > 0) {
    let curr = queue.shift();

    if (curr === destination) return true;

    for (const n of graph[curr]) {
      console.log(n);
      if (!vis[n]) {
        queue.push(n);
        vis[n] = true;
      }
    }
  }

  return false;
}

const n = 3;
const edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];

const source = 0;
const destination = 2;

console.log(validPath(n, edges, source, destination));
