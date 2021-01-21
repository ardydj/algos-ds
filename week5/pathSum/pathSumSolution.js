/*

Whiteboard and walkthrough: https://www.youtube.com/watch?v=UYiOUI19iHE
Test suite included below.

*/


// Definition for a binary tree node.
function TreeNode(val, left, right) {
     this.val = (val === undefined ? 0 : val)
     this.left = (left === undefined ? null : left)
     this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */


var pathSum = function (root, sum) {
     if (root === null) return false;
     if (sum === root.val && root.left === null && root.right === null) {
          return true;
     }
     return pathSum(root.left, sum - root.val) || pathSum(root.right, sum - root.val);
};


var _test = function () {
     var tree = null;
     console.log("1", pathSum(tree, 10));

     tree = new TreeNode(3);
     tree.left = new TreeNode(9);
     tree.right = new TreeNode(20);
     tree.left.left = new TreeNode(15);
     tree.left.right = new TreeNode(7);
     console.log("2", pathSum(tree, 27));
     console.log("2", pathSum(tree, 19));
     console.log("2", pathSum(tree, 20));
     console.log("2", pathSum(tree, 23));

     tree = new TreeNode(1);
     tree.left = new TreeNode(2);
     tree.right = new TreeNode(2);
     tree.left.left = new TreeNode(3);
     tree.left.right = new TreeNode(3);
     tree.left.left.left = new TreeNode(4);
     tree.left.left.right = new TreeNode(4);
     console.log("3", pathSum(tree, 10));
};

_test();