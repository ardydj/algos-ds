/*

---
PROMPT
---

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

---
Examples
---

Input: head = [1,2,3,4]
Output: [2,1,4,3]

Input: head = []
Output: []
*/

function swapPairs(head) {
  // base case
  // !head.next or !head
  if (!head || !head.next) {
    return head;
  }

  // swap head with head.next
  // head.next -> head
  // assign a temp variable to head.next.next for recursive call
  let temp = head.next.next;
  let newHead = head.next
  newHead.next = head;

  head.next = swapPairs(temp);

  return newHead;
}


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
swapPairs(head);
