/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  const q = [root];
  let level = 0;

  while (q.length > 0) {
    let size = q.length;
    let node = q.shift();

    for (let i = 0; i < size; i++) {
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    level++;
  }

  return level;
};
