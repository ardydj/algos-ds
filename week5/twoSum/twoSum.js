/*
twoSum.js
---
PROMPT
---
This is a classic problem, one you are likely to encounter during a tech
screen interview (although it will probably be disguised). If you already
solved this as part DS&A Level Up, focus on approaching this problem as you
should during an interview. Discuss the brute force approach, possible improved
approaches, and finally how a hash map can improve search speed.
Given an array of integers nums and an integer target, return indices of the two
numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not
use the same element twice.
You can return the answer in any order.
---
EXAMPLES
---
Example 1
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3
Input: nums = [3,3], target = 6
Output: [0,1]
---
CONSTRAINTS
---
  1) 2 <= nums.length <= 103
  2) -109 <= nums[i] <= 109
  3) -109 <= target <= 109
  4) Only one valid answer exists.

 */

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      let currentEl = nums[i];
      let remainder = target - nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] === remainder) {
          return [i, j]
        }
      }
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3,2,4], 6));