/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let length = 1;
  let counter = 1;
  let desiredNode = head;
  
  for (let currNode = head; currNode; currNode = currNode.next) {
    length++;
  } //loop through each node to find number of nodes in linked list
  let stopPoint = length - k - 1;//set point to stop on specific node
  if (k > length + 2 || !head) return undefined;//
  while (counter < stopPoint) {
    desiredNode = desiredNode.next;
  }
  return desiredNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
