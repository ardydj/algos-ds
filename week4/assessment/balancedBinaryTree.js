/**
 * Definition for a binary tree node.
 */
/**
 ** @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var checkChildNode = function (node, side) {

  if (!node) {
    return side;
  }

  if (!node.left && !node.right) {
    return side;
  }

  if (node.left) {
    side++;
    return checkChildNode(node.left, side);
  } else if (node.right) {
    return checkChildNode(node.right, side);
  }

}

var isBalanced = function(root) {

  let left = 0;
  let right = 0;
  if (!root) {
      return true;
  }

  if (root.left || root.right) {
    root.left ? left++ : left;
    root.right ? right++ : right;
    left = checkChildNode(root.left, left);
    right = checkChildNode(root.right, right);
  }

  if (Math.abs(left - right) > 1) {
    return false
  } else {
    return true;
  }

};



let root1 = new TreeNode(1, 2, 2);
root1.left = new TreeNode(2, 3, 3);
root1.left.left = new TreeNode(3, 4, 4);

let root2= new TreeNode(3, 9, 20);
root2.right = new TreeNode(20, 15, 7);

console.log(isBalanced(root2))
console.log(isBalanced(root1));