var numIslands = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  let noOfIsland = 0;

  const vis = Array.from({ length: n }, () => Array(m).fill(false));

  function isSafe(i, j) {
    return i >= 0 && i < n && j >= 0 && j < m;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1" && !vis[i][j]) {
        const queue = [];
        queue.push([i, j]);
        while (queue.length > 0) {
          let iandj = queue.shift();
          let [l, m] = iandj;
          vis[l][m] = true;

          const diff = [
            [0, -1],
            [0, 1],
            [1, 0],
            [-1, 0],
          ];

          for (let z = 0; z < diff.length; z++) {
            let [curri, currj] = diff[z];
            curri += l;
            currj += m;

            if (
              isSafe(curri, currj) &&
              grid[curri][currj] === "1" &&
              !vis[curri][currj]
            ) {
              queue.push([curri, currj]);
            }
          }
        }
        noOfIsland++;
      }
    }
  }

  console.log(noOfIsland);
};

const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

numIslands(grid);
