/*
WEEK 3, DAY 2
reverseList.js

---
PROMPT
---

Reverse a singly linked list.

A linked list can be reversed either iteratively or recursively. Try to implement both.

---
EXAMPLE
---

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL



 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reverseList = function(head, first = true) {
  let isHead = first;
  let reversedListNode = new ListNode();

  if (!head.next) {
    reversedListNode.val = head.val;
    return reversedListNode.val;
  }

  if (head.next) {
    reversedListNode.val = reverseList(head.next, false);
    reversedListNode.next = head;
    if (isHead) {
      let originalHead = new ListNode(head.val, null);
      return originalHead;
    }
    return reversedListNode.next.val;
  }
};

let A = new ListNode(1)
let B = new ListNode(2)
let C = new ListNode(3)
let D = new ListNode(4)
let E = new ListNode(5)
A.next = B;
B.next = C;
C.next = D;
D.next = E;

console.log(reverseList(A));