/*
    Ask if the graph is connected
    Be sure for edges cases like node value is empty
    Is it directed or undirected
*/

// Definition for a Node.
class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

// List of edges
const edges = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3],
];

// Dictionary to store nodes by their values
const node_map = [];

for (let i = 1; i <= edges.length; i++) {
  const newNode = new Node(i);
  node_map.push(newNode);
}

for (let i = 1; i <= edges.length; i++) {
  const [val1, val2] = edges[i - 1];
  const node = node_map[i - 1];
  const node1 = node_map[val1 - 1];
  const node2 = node_map[val2 - 1];
  if (!node.neighbors.includes(node1)) {
    node.neighbors.push(node1);
  }
  if (!node.neighbors.includes(node2)) {
    node.neighbors.push(node2);
  }
}

// console.log(node_map);
node_map.forEach((node) => {
  console.log(
    `Node ${node.val} neighbors: ${node.neighbors.map((n) => n.val).join(", ")}`
  );
});

const clone = (node, mp) => {
  const newNode = new Node(node.val);
  mp.set(node, newNode);

  //   console.log(mp);
  for (const n of node.neighbors) {
    // console.log(n);
    if (mp.has(n)) {
      newNode.neighbors.push(mp.get(n));
    } else {
      newNode.neighbors.push(clone(n, mp));
    }
  }

  return newNode;
};

const mp = new Map();

console.log(clone(node_map[0], mp));
