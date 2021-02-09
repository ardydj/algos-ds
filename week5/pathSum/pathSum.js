/*
WEEK 5, DAY 2
pathSum.js

---
PROMPT
---
Given a binary tree and a sum, determine if the tree has a root-to-leaf
path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

---
EXAMPLE
---

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1

return true, as there exist a root-to-leaf path
5 -> 4 -> 11 -> 2 which sum is 22.

*/

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
 * @param {number} sum
 * @return {boolean}
 */

var traverseTree = function(node, sum) {
     debugger;
     if (!node) {
          return false;
     }

     if (node.val === sum && node.left === null && node.right === null) {
        return true;
     }

     return traverseTree(node.left, sum - node.val) || traverseTree(node.right, sum - node.val)
}

var pathSum = function(root, sum) {
     return traverseTree(root, sum);
};

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

let root = new TreeNode(10, 4, 6);
root.left = new TreeNode(4, 11, 8);
root.left.left  = new TreeNode(11, 2, 4);
root.right = new TreeNode(6, 3, 12);
root.right.right  = new TreeNode(12, 15, 16);

console.log(pathSum(root, 24));
