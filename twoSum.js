function twoSum(nums, target) {
  //     brute force
  //     iterate over nums; for currentEl, slice rest of array
  //     iterate over sliced array check if currentEl + slicedArr[i] === target
  const indices = [];
  nums.forEach((num, index) => {
    const remainingNums = nums.slice(index + 1);
    remainingNums.forEach((rn, rnIndex) => {
      if (num + rn === target) {
        indices.push(index, index + rnIndex + 1);
      }
    });
  });

  return indices;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

/*
2nd Attempt

O: Array with indices adding to target (increment indices by 1)
I: array of ints in ascending order
C: {
    min length: 2; max: 30,000
}
E: Always 1 solution in input exists

*/
var twoSum2 = function (numbers, target, firstIndex = 0) {
  let secondIndex = firstIndex + 1;
  while (
    secondIndex < numbers.length &&
    numbers[firstIndex] + numbers[secondIndex] <= target
  ) {
    // base case
    if (numbers[firstIndex] + numbers[secondIndex] === target) {
      return [firstIndex + 1, secondIndex + 1];
    }

    secondIndex++;
  }

  return twoSum2(numbers, target, firstIndex + 1);
};
