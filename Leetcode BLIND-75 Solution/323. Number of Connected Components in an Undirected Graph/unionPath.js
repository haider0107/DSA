/**
 * @param {number} n
 * @param {number[][]} edges
 * @returns {number}
 */
const countComponents = (n, edges) => {
  const parent = new Array(n).fill(0).map((_, i) => i);
  const rank = new Array(n).fill(1);

  const findParent = (node) => {
    let result = node;

    while (parent[result] !== result) {
      parent[result] = parent[parent[result]];
      result = parent[result];
    }

    return result;
  };

  const unionNodes = (node1, node2) => {
    const p1 = findParent(node1);
    const p2 = findParent(node2);

    if (p1 === p2) return 0;

    if (rank[p2] > rank[p1]) {
      parent[p1] = p2;
      rank[p2] += 1;
    } else {
      parent[p2] = p1;
      rank[p1] += 1;
    }

    return 1;
  };

  let result = n;

  for (let i = 0; i < edges.length; i++) {
    if (unionNodes(edges[i][0], edges[i][1])) result--;
  }

  return result;
};

console.log(
  countComponents(6, [
    [0, 1],
    [1, 2],
    [2, 3],
    [4, 5],
  ])
);

console.log(
  countComponents(3, [
    [0, 1],
    [0, 2],
  ])
);
