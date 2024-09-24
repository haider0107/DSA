/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;

  const pac = new Set();
  const atl = new Set();

  const dfs = (r, c, prev, visited) => {
    const coord = r * cols + c;

    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      heights[r][c] < prev ||
      visited.has(coord)
    )
      return;

    visited.add(coord);
    dfs(r + 1, c, heights[r][c], visited);
    dfs(r - 1, c, heights[r][c], visited);
    dfs(r, c + 1, heights[r][c], visited);
    dfs(r, c - 1, heights[r][c], visited);
  };

  for (let c = 0; c < cols; c++) {
    dfs(0, c, heights[0][c], pac);
    dfs(rows - 1, c, heights[rows - 1][c], atl);
  }

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, heights[r][0], pac);
    dfs(r, cols - 1, heights[r][cols - 1], atl);
  }

  const res = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const coord = r * cols + c;
      if (pac.has(coord) && atl.has(coord)) res.push([r, c]);
    }
  }

  return res;
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
