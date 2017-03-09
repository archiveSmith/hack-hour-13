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
  if (!k || !head) {
    return 'bad input';
  }

  let totalNodes = 0;
  let positionCounter = 0
  let firstNode = head;

  while (head) {
    totalNodes += 1;
    head = head.next
  }

  head = firstNode;

  while (head) {
    if (positionCounter === totalNodes - k) return head.value;
    else head = head.next;
    positionCounter += 1;
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
