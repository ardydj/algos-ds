var hasCycle = function (head) {
  if (!head) {
    return false;
  }

  const nodeSet = new Set();
  nodeSet.add(head.val);
  let currentNode = head;

  while (!!currentNode.next) {
    if (nodeSet.has(currentNode.next.val)) {
      return true;
    }

    nodeSet.add(currentNode.next.val);
    currentNode = currentNode.next;
  }

  return false;
};
