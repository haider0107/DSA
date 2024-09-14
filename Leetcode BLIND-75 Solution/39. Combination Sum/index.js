/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];

  const dfs = (i, curr, total) => {
    if (total === target) {
      res.push([...curr]); // store copy not reference, that's why use split operator
      return;
    }

    if (i >= candidates.length || total > target) return;

    curr.push(candidates[i]);

    dfs(i, curr, total + candidates[i]);

    curr.pop();

    dfs(i + 1, curr, total);
  };

  dfs(0, [], 0);

  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
