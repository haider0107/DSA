/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  // let isEdge = false

  let noOfIsland = 0;

  const vis = Array.from({ length: n }, () => Array(m).fill(false));

  function isSafe(i, j) {
    return i >= 0 && i < n && j >= 0 && j < m;
  }

  const dfs = (i, j) => {
    vis[i][j] = true;
    // console.log("Location", i, ",", j, "value", grid[i][j])

    const diff = [
      [0, -1],
      [0, 1],
      [1, 0],
      [-1, 0],
    ];

    for (let z = 0; z < diff.length; z++) {
      let [curri, currj] = diff[z];
      curri += i;
      currj += j;

      if (
        isSafe(curri, currj) &&
        grid[curri][currj] === 0 &&
        !vis[curri][currj]
      ) {
        dfs(curri, currj);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (
        grid[i][j] === 0 &&
        (i == 0 || i == n - 1 || j === 0 || j === m - 1)
      ) {
        dfs(i, j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0 && !vis[i][j]) {
        console.log("Location", i, ",", j, "value", grid[i][j]);
        dfs(i, j);
        noOfIsland++;
      }
    }
  }

  // console.log(noOfIsland)
  return noOfIsland;
};
