/*
WEEK 5, DAY 1
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

var searchTarget = function(nums, target) {
  if (nums.length <= 2) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] = target) {
        targetIndex = i;
      }
    }

    !targetIndex ? targetIndex = -1 : targetIndex;
    return targetIndex;

  }

  if (nums.length > 2) {

  }

}

var binarySearch = function(nums, target) {
  if (nums.length === 0) {return -1}

  let midpoint = Math.floor(nums.length / 2);
  let begIndex = 0;
  let endIndex = nums.length;
  let targetIndex;

  return targetIndex;

};

