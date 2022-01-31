/*
WEEK 3, DAY 3
productExceptSelf.js

---
PROMPT
---

Given an array nums of n integers where n > 1, return an array output such
that output[i] is equal to the product of all the elements of nums except nums[i].
Try to solve it with constant space complexity. (Output array does not count as
extra space in complexity analysis.)

---
EXAMPLES
---

Input:  [1,2,3,4]
Output: [24,12,8,6]

Input: [2,0,13]
Output: [0,26,0]

---
CONSTRAINTS
---

Please solve it without division and in O(n). All products fit into a 32-bit integer.

*/

var productExceptSelf = function(head) {
  let output = [];
  for (let i = 0; i < head.length; i++) {
    let omission = head.splice(i, 1);
    output[i] = head.reduce((accum, currentVal) => accum * currentVal);
    head.splice(i, 0, omission);
  }
  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([2, 0, 13]));

var productExceptSelf2 = function(nums) {
  const output = [];

  nums.forEach((num, index) => {
    const left = index > 0 ? nums.slice(0, index).reduce((acc, currentVal) => acc * currentVal) : 1;

    const right = index < nums.length - 1 ? nums.slice(index + 1).reduce((acc, currentVal) => acc * currentVal) : 1;

    output[index] = left * right;
  })

  return output;
};

console.log('second test: ', productExceptSelf2([1, 2, 3, 4]));
console.log('second test: ', productExceptSelf2([2, 0, 13]));