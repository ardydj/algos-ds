/**
 * @param {number[]} nums
 * @return {number}
 */

// O: number that appears more than input arr length / 2
// I: array of nums
// C:
// E: {
// n === 1; return element
// n === 2: if there is always an majority element, then this case should have repeating nums [1, 1]
// }
var majorityElement = function (nums) {
  //     edge cases
  if (nums.length === 1 || nums.length === 2) {
    return nums[0];
  }

  const halfLength = Math.floor(nums.length / 2);
  const numsObj = {};

  nums.forEach((n) => {
    if (!numsObj[n]) {
      numsObj[n] = 1;
    } else {
      numsObj[n] = numsObj[n] + 1;
    }
  });

  for (let key in numsObj) {
    if (numsObj[key] > halfLength) {
      return key;
    }
  }
};

var majorityElement = function (nums) {
  let majorityElement = nums[0];

  //     edge cases
  if (nums.length === 1 || nums.length === 2) {
    return majorityElement;
  }

  // add up occurences of currentNum being iterated over
  let currentNumPair = [majorityElement, 1];

  // This is still not constant space complexity O(1) because sortedNums grows linearly with the size of the input (nums)
  // ideally should be sorted in space?
  const sortedNums = nums.sort((a, b) => a - b);

  sortedNums.forEach((num, index) => {
    if (currentNumPair[0] === num) {
      currentNumPair[1] = currentNumPair[1] + 1;

      majorityElement =
        currentNumPair[1] > Math.floor(nums.length / 2)
          ? currentNumPair[0]
          : majorityElement;
    } else {
      currentNumPair = [num, 1];
    }
  });

  return majorityElement;
};
