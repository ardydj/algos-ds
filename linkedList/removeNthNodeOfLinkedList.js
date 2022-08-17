/*

---
PROMPT
---
Given the head of a linked list, remove the nth node from the end of the list and return its head.

---
EXAMPLES
---
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Input: head = [1], n = 1
Output: []

Input: head = [1,2], n = 1
Output: [1]

O: Linked list without removed node
I: Head and target node (n) from tail
C: {
    1 <= n <= linked list length
}
E:
*/

var removeNthFromEnd = function (head, n, previousHead) {
  //     edge case (empty list)
  if (!head.next && !previousHead && n === 1) {
    return [];
  }

  //     base case
  if (!head.next) {
    //         increment index
    return index + 1;
  }

  const nodeIndex = removeNthFromEnd(head.next, n, index);

  if (nodeIndex === n + 1) {
    const temp = head.next.next;
    head.next = temp;
  }
};
