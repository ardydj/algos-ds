/*
---
PROMPT
---
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

*/

var moveZeroes = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === 0) {
      nums.splice(left, 1);
      nums.push(0);
      right--;
    } else {
      left++;
    }
  }

  return nums;
};
