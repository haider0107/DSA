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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let stack = [];
  let count = 0;

  while (root || stack.length) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    let curr = stack.pop();
    count++;
    if (count === k) return curr.val;

    root = curr.right;
  }
};
