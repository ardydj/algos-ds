/*
WEEK 3, DAY 1
sortList.js

---
PROMPT
---
Given the head of a linked list, return the list after sorting it in ascending order.
Try to sort the linked list in O(n logn) time and O(1) memory (i.e. constant space).

---
EXAMPLES
---
Input: head = [4,2,1,3]
Output: [1,2,3,4]

Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

Input: head = []
Output: []

---
CONSTRAINTS
---
The number of nodes in the list is in the range [0, 5 * 10^4].
-10^5 <= Node.val <= 10^5

Definition for singly-linked list:
*/

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val);
     this.next = (next===undefined ? null : next);
}

var sortList = function(head) {
  let output = [];

  if (head.val === undefined) {
      return [];
    }

  let sortLinkfunction = function(head) {
    let lastIndex = output.length - 1;
    if (!head) {
      return;
    };

    if (output.length === 0) {
      output.push(head.val);
      if (head.next) {
        sortLinkfunction(head.next);
      }
    } else if (head.val >= output[lastIndex]) {
      output.push(head.val);
      sortLinkfunction(head.next);
    } else {
      // debugger;
      for (let i = lastIndex; i >= 0; i--) {
        if (head.val >= output[i]) {
          output.splice(i+1, 0, head.val);
          break;
        } else if (i === 0) {
          output.splice(i, 0, head.val);
        }
      }
      sortLinkfunction(head.next);
    }
  };
  sortLinkfunction(head);
  return output;
};

let emptyList = {};

console.log(sortList(emptyList));

let A = new ListNode(4)
let B = new ListNode(2)
let C = new ListNode(1)
let D = new ListNode(3)
A.next = B;
B.next = C;
C.next = D;

let E = new ListNode(-1)
let F = new ListNode(5)
let G = new ListNode(3)
let H = new ListNode(4)
let I = new ListNode(0)
E.next = F;
F.next = G;
G.next = H;
H.next = I;
// debugger;
console.log(sortList(A));
console.log(sortList(E));