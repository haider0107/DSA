/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = [];

  const dfs = (node) => {
    if (node === null) {
      res.push("N");
      return;
    }

    res.push(node.val);

    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);

  return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let res = data.split(",");

  let i = 0;

  const dfs = (val) => {
    if (val === "N") {
      i++;
      return null;
    }

    let node = new TreeNode(res[i]);
    i++;

    node.left = dfs(res[i]);
    node.right = dfs(res[i]);

    return node;
  };

  const root = dfs(res[i]);

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
