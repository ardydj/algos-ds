/*

  ---
  PROMPT
  ---
    Given the head of a singly linked list, return the middle node of the linked list.

    If there are two middle nodes, return the second middle node.

  ---
  EXAMPLES
  ---
  Input: head = [1,2,3,4,5]
  Output: [3,4,5]
  Explanation: The middle node of the list is node 3.

  Input: head = [1,2,3,4,5,6]
  Output: [4,5,6]
  Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

  Input: head = [1]
  Output: [1]
  Explanation: there is no middle so return the head.

*/

var middleNode = function(head, index= 0) {
  // zero indexed means for list.length % 2 > 0 is even and should round up middle

  // edge case, edge case(s) should always be handled first
  if (!head.next && index === 0) {
      return head;
  }

  // base case
  if (!head.next || !head) {
  // at the tail node, we can now calculate the midpoint
    const middleIndex = index % 2 > 0 ? Math.ceil(index / 2) : index / 2;
    return middleIndex
  }

  // recurrence relation
  const middleIndex = middleNode(head.next, index + 1);

  if (index === middleIndex) {
  //         this will not be the last return call
  //         you are just changing the value of middleIndex for previous calls in the call stask
      return head
  }

  return middleIndex;
  };

// Will only work if linkedList contains sequential nums
var middleNode2 = function(head) {
  //     base case and edge case
      if (!head.next) {
  //         at the tail node, we can now calculate the midpoint
          const middleNodeVal =  head.val % 2 > 0 ? Math.ceil(head.val / 2) : (head.val / 2) + 1;
          return head.val === middleNodeVal ? head : middleNodeVal;
      }

  //     recurrence relation
      const middleNodeVal = middleNode(head.next);

      if (head.val === middleNodeVal) {
  //         this will not be the last return call
  //         you are just changing the value of middleIndex for previous calls in the call stask
          return head
      }

  //     pass middleNodeVal to next call or return node if last call in the call stack
      return middleNodeVal;
};

const head = {next: {next: {next: 2}}}

console.log(head[['next']['next']['next']])