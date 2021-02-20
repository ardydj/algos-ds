/*
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

var MaxHeap = function(val, leftChild, rightChild) {
  val ? this.val = val: this.val = undefined;
  leftChild ? this.leftChild = leftChild : this.leftChild = {};
  rightChild ? this.rightChild = rightChild : this.rightChild = {};
}

var lastStoneWeight = function(stones) {
  // sort in descending order
  let sortedStones = stones.slice();
  sortedStones.sort((a, b) => {
    return b - a;
  })
  debugger;
  let maxHeap = sortedStones.forEach((stone, index) => {
    return new MaxHeap(stone, new MaxHeap(sortedStones[index + 1]), new MaxHeap(sortedStones[index + 2]));
  });
  debugger;
  // create new max heap
  //

};

var lastStoneWeightNonHeap = function(stones) {
  let sortedStones = stones.slice();
  sortedStones.sort((a, b) => {
    return b - a;
  });

  return sortedStones.reduce(() => {});
}

lastStoneWeight([2,7,4,1,8,1])