/*
binarySearch.js
---
PROMPT
---
Given a sorted (in ascending order) integer array nums of n elements and a target value,
write a function to search target in nums.
If target exists, then return its index, otherwise return -1.
---
EXAMPLES
---
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
---
CONSTRAINTS
---
 1) You may assume that all elements in nums are unique.
 2) n will be in the range [1, 10000].
 3) The value of each element in nums will be in the range [-9999, 9999].
  }
*/
var BinarySearchTree = function(val, index, leftChild, rightChild) {
  // debugger;
  val !== undefined ? this.val = val : this.val = undefined;
  index !== undefined ? this.index = index : this.index = undefined;
  leftChild ? this.leftChild = leftChild : this.leftChild = {};
  rightChild ? this.rightChild = rightChild : this.rightChild = {};

}

BinarySearchTree.prototype.search = function (target) {
  if (this.val === target) {
    return this.index;
  }

  if (!this.leftChild && !this.rightChild) {
    return -1;
  }
  debugger;
  if (this.val < target) {
    return this.rightChild.search(target);
  } else {
    return this.leftChild.search(target);
  }
}


var createBinaryTree = function(nums, target, originalNums) {
  // debugger;
  if (nums.length <= 1) {
    return new BinarySearchTree(nums[0]);
  }

  let midpoint = nums.length % 2 === 1 ? Math.floor(nums.length / 2) : nums.length / 2;
  let midpointIndex = originalNums.indexOf(midpoint);
  return new BinarySearchTree(nums[midpoint], midpointIndex,createBinaryTree(nums.slice(0, midpoint), target, originalNums), createBinaryTree(nums.slice(midpoint + 1), target, originalNums));
};

var binarySearch = function(nums, target) {
  let tree = createBinaryTree(nums, target, nums);

  return tree.search(target);
}

// console.log(JSON.stringify(createBinaryTree([-1,0,3,5,9,12], 9, [-1,0,3,5,9,12])));
console.log(binarySearch([-1,0,3,5,9,12], 9));