/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let l = 0,
    r = matrix.length - 1;

  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      let t = l,
        b = r;

      // top left in temp
      let topleft = matrix[t][l + i];

      //bottom left to top left
      matrix[t][l + i] = matrix[b - i][l];

      //bottom right to bottom left
      matrix[b - i][l] = matrix[b][r - i];

      //top right to bottme right
      matrix[b][r - i] = matrix[t + i][r];

      //temp to top right
      matrix[t + i][r] = topleft;
    }
    l += 1;
    r -= 1;
  }
};
