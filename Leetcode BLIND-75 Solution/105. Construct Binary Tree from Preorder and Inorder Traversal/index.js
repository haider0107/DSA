/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  let root = new TreeNode(preorder[0]);

  let mid = inorder.indexOf(preorder[0]);

  root.length = buildTree(preorder.slice(1, mid + 1), inorder(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};

let preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
