/*
WEEK 3, DAY 4
linkedListHasCycle.js

---
PROMPT
---

Given head of a linked list, determine if the linked list has a cycle in it. There is
a cycle in a linked list if there is some node in the list that can be reached again
by continuously following the next pointer.

Internally, pos is used to denote the index of the node that tail's next pointer is
connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Can you solve it using O(1) (i.e. constant) memory?

--
HELP! THIS MAKES NO SENSE TO ME!
--

Gayle Laakmann McDowell explains
https://www.youtube.com/watch?v=MFOAbpfrJ8g

Watch from 0:00 to 1:41. Stop before she walks through the code and try to
at least pseudocode a solution on your own before continuing.

---
EXAMPLES
---

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.


---
CONSTRAINTS
---

  1) The number of the nodes in the list is in the range [0, 10^4].
  2) -10^5 <= Node.val <= 10^5
  3) pos is -1 or a valid index in the linked-list.

*/

var linkedListHasCycle = function(head) {
    // create node1 = head;
    let node1 = head;
    // node2 variables = head.next;
    let node2 = head.next;
    // hasCycle = false
    let hasCycle = false;
    // debugger;
    while (node1.val !== node2.val && node2.next) {
      node1 = node1.next;
      node2 = node2.next.next;
      if (node1.val === node2.val) {
        hasCycle = true;
      }

    }
    // while node1.val and node2.val are not equal and either node1/ node2 not equal to undefined
      // node1 = node1.next;
      // node2 = node2.next.next;
      // if node1 === node2
        // hasCycle = true;

    return hasCycle;

};

var linkedListNode = function (val, next) {
  this.val = val ? val : undefined;
  this.next = next ? next : null;
}

let A = new linkedListNode(1);
let B = new linkedListNode(2);
let C = new linkedListNode(3);
let D = new linkedListNode(4);
A.next = B;
B.next = C;
C.next = D;
D.next = B;

let E = new linkedListNode(1);
let F = new linkedListNode(2);
let G = new linkedListNode(3);
let H = new linkedListNode(4);
E.next = F;
F.next = G;
G.next = H;

console.log(linkedListHasCycle(A));
console.log(linkedListHasCycle(E));


