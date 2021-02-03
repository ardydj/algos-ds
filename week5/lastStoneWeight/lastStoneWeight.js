/*
WEEK 5, DAY 3
lastStoneWeight.js

---
PROMPT
---

We have a collection of stones, each of which has a positive integer weight.
In each round, choose the two heaviest stones and smash them together.

Suppose the stones have weights x and y with x <= y.

The result of this smash is:

  * If x == y, both stones are totally destroyed;
  * If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.

At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

(Good opportunity to utilize a heap.)

---
EXAMPLE
---

Input: [2,7,4,1,8,1]
Output: 1

Explanation:
  1) Combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1].
  2) Combine 2 and 4 to get 2 so the array converts to [2,1,1,1].
  3) Combine 2 and 1 to get 1 so the array converts to [1,1,1].
  4) Combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

---
CONSTRAINTS
---

  1) 1 <= stones.length <= 30
  2) 1 <= stones[i] <= 1000

*/
var MaxHeap = function(val, child1, child2) {
  this.val = val === undefined ? 0 : val;
  this.children = [child1, child2];
};

var createMaxHeap = function(stones) {
  if (stones.length <= 1) {
    return stones[0];
  }
  let leftChildArray = stones.slice(1);
  leftChildArray.splice(1, 1);
  console.log(leftChildArray)
  let rightChildArray = stones.slice(2);
  console.log('this is the right: ', rightChildArray)
  return new MaxHeap(stones[0], createMaxHeap(leftChildArray), createMaxHeap(rightChildArray));
}

console.log(JSON.stringify(createMaxHeap([8, 7, 4, 2, 1, 1])))


var lastStoneWeight = function(stones) {
  // sort stones in descending order with quick sort
  // create largest variable
  // iterate over stones and find largest stone

  // create node with largest stone and first child and second child with recursive call

};

var quickSortWeights = function(stones) {
  let idealPivotIndex = Math.floor(stones.length / 2) - 1;
  let pivotElement = stones[idealPivotIndex];
  let left = [];
  let right = [];

  if (stones.length <= 1) {
    // need to return empty array so that concat still works. Otherwise, concat will not work on undefined
    return stones;
  }

  for (let i = 0; i < stones.length; i++) {
    if (i === idealPivotIndex) {
      i++;
    }

    if (stones[i] > pivotElement) {
      left.push(stones[i]);
    } else {
      right.push(stones[i]);
    }
  }

  return quickSortWeights(left).concat(pivotElement, quickSortWeights(right));
}

// console.log(quickSortWeights([2,7,4,1,8,1]));
