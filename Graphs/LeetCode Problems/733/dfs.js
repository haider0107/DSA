/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const n = image.length;
  const m = image[0].length;

  const prevColor = image[sr][sc];

  function isSafe(i, j) {
    return i >= 0 && i < n && j >= 0 && j < m;
  }

  const dfs = (i, j) => {
    image[i][j] = color;

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

      if (isSafe(curri, currj) && image[curri][currj] === prevColor) {
        dfs(curri, currj);
      }
    }
  };

  if (prevColor === color) return image;
  else dfs(sr, sc);

  return image;
};
