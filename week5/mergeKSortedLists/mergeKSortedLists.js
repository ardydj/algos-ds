/*
WEEK 5, DAY 5
mergeKSortedLists.js

---
PROMPT
---

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

There are several approaches to this problem ~ if you don't know where to start, read the
Solution tab for this prompt on Leetcode:
https://leetcode.com/problems/merge-k-sorted-lists/solution/

Try to implement at least two solutions using DS&A from the past few weeks.

---
EXAMPLES
---

Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6


Example 2:
Input: lists = []
Output: []

Example 3:
Input: lists = [[]]
Output: []

---
CONSTRAINTS
---
  1) k == lists.length
  2) 0 <= k <= 10^4
  3) 0 <= lists[i].length <= 500
  4) -10^4 <= lists[i][i] <= 10^4
  5) lists[i] is sorted in ascending order.
  6) The sum of lists[i].length won't exceed 10^4.

*/

// k is the length of words array; e.g. 6
// words is the array of arrays (list of lists) with words[i] being an indvidual list and words[i][i] being an individual node in the specific linked list
let LinkedList = function (val, next) {
  val ? this.val = val : this.val = undefined;
  next ? this.next = next : this.next = undefined;
}

var createList = function (nodes) {
  if (nodes.length === 1) {
    return new LinkedList(nodes[0]);
  }

  if (nodes.length > 1) {
    return new LinkedList(nodes[0], createList(nodes.slice(1)));
  }
}

var mergeKSortedLists1 = function(words, k) {
  // collected nodes array
  let allNodes = [];

  //collect all nodes
  for (let i = 0; i < k; i++) {
    let currentList = words[i];
    currentList.forEach((node) => {
      allNodes.push(node);
    });
  }
  // debugger;
  // sort all nodes collected
  allNodes = quickSortLists(allNodes);
  // instantiate new linkedList with sorted nodes in array
  let mergedList = createList(allNodes);

  return mergedList;
}

var quickSortLists = function(list) {
  let idealPivotIndex = Math.floor(list.length / 2) - 1;
  let pivotElement = list[idealPivotIndex];
  let left = [];
  let right = [];

  if (list.length <= 1) {
    return list;
  }

  for (let i = 0; i < list.length; i++) {
    if (i === idealPivotIndex) {
      i++
    }

    if (list[i] < pivotElement) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }

  return quickSortLists(left).concat(pivotElement, quickSortLists(right));
}

let testListMergeSort = [[1,4,5],[1,3,4],[2,6]];
let result = mergeKSortedLists1(testListMergeSort, 3);
console.log(JSON.stringify(result))