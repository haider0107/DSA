/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  let rowZero = false;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        if (j !== 0) {
          matrix[0][j] = 0;
        } else {
          rowZero = true;
        }
      }
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let j = 0; j < columns; j++) {
      matrix[0][j] = 0;
    }
  }

  if (rowZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
};
