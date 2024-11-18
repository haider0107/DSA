/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const Rows = board.length;
  const columns = board[0].length;

  const path = new Set();

  const dfs = (r, c, i) => {
    if (i === word.length) return true;

    console.log(path);

    if (
      r >= Rows ||
      c >= columns ||
      r < 0 ||
      c < 0 ||
      word[i] !== board[r][c] ||
      path.has(`${r},${c}`)
    )
      return false;

    path.add(`${r},${c}`);

    let res =
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1) ||
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1);

    path.delete(`${r},${c}`);

    return res;
  };

  for (let i = 0; i < Rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
};

// const board = [
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"],
//   ],
//   word = "ABCCED";

// const board = [
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"],
//   ],
//   word = "SEE";

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCB";

console.log(exist(board, word));
