/*
  ---
  DESCRIPTION
  ---
  Given the head of a singly linked list, reverse the list, and return the reversed list.

  ---
  EXAMPLES
  ---
  Input: head = [1,2,3,4,5]
  Output: [5,4,3,2,1]

  Input: head = [1,2]
  Output: [2,1]

*/

var linkedListNode = function (val, next) {
  this.val = val ? val : undefined;
  this.next = next ? next : null;
}

const A = new linkedListNode(1);
const B = new linkedListNode(2);
const C = new linkedListNode(3);
const D = new linkedListNode(4);
const E = new linkedListNode(4);
A.next = B;
B.next = C;
C.next = D;
D.next = E;

var reverseList = function(head) {
  //     base case
  //     when !this.next; return this.val
      if (!head || !head.next) {
          return head;
      }

      const node = reverseList(head.next);
  //     will begin with last node once the base case is triggered

      head.next.next = head;
  //     will start with 4th node ([1, 2, 3, 4, 5]) once callstack begins to collapse
  //     head.next.next = 5.next -> 5.next = 4
  //     this step will repeatedly happen as each callstack collapses (4.next = 3)

      head.next = null;
  // this step ensures we don't get a doubly linked list
  //     e.g. 5.next = 4 && 4.next = 5; 5 -> 4 -> null
  //     at next recursive call, we assign 4 -> 3 and 3 -> and repeat until we reach the old head of the list
      return node;
  };


console.log(JSON.stringify(reverseList(A)))