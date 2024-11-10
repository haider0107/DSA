/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = [];

  let l = 0,
    r = matrix[0].length;
  let t = 0,
    b = matrix.length;

  // console.log(l,r,t,b);

  while (l < r && t < b) {
    for (let i = l; i < r; i++) res.push(matrix[t][i]);
    t += 1;

    for (let i = t; i < b; i++) res.push(matrix[i][r - 1]);
    r -= 1;

    if (!(l < r && t < b)) break;

    for (let i = r - 1; i >= l; i--) res.push(matrix[b - 1][i]);
    b -= 1;

    for (let i = b - 1; i >= t; i--) res.push(matrix[i][l]);
    l += 1;
  }

  return res;
};

let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder(matrix1));
