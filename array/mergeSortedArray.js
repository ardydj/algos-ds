// return new array
var merge = function (nums1, m, nums2, n) {
  const sortNums = nums2;
  const nums1Filtered = nums1.filter((n) => n !== 0);
  let nums1Index = 0;

  while (sortNums.length > 0) {
    if (
      sortNums[0] <= nums1Filtered[nums1Index] ||
      !nums1Filtered[nums1Index]
    ) {
      nums1Filtered.splice(nums1Index, 0, sortNums[0]);
      sortNums.shift();
      nums1Index = 0;
    } else {
      nums1Index++;
    }
  }

  return nums1Filtered;
};

// next iteration, modify nums1 in place
