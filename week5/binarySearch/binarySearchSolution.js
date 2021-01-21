/*

Excellent walkthrough of basic binary search algo:
https://leetcode.com/problems/binary-search/discuss/423162/Binary-Search-101

*/

var binarySearch = function (nums, target) {

  var sub = function (low, high) {
    if (high === low) {
      return -1;
    }

    let midpoint = Math.floor((high - low) / 2) + low;

    if (nums[midpoint] === target) {
      return midpoint;

    } else if (low === high - 1) {
      return -1;

    } else if (nums[midpoint] > target) {
      return sub(low, midpoint);
    } else {
      return sub(midpoint, high);
    }
  };

  return sub(0, nums.length);
};
