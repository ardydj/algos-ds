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
          })
      })

      return indices;
  };

  console.log(twoSum([2,7,11,15], 9))
  console.log(twoSum([3,2,4], 6))
  console.log(twoSum([3,3], 6))