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
  var w = 0;
  if (arguments.length === 1) {
    head = arguments[0];
    w = 2;
  } else {
    w = k;
  }

  var size = 1;
  var currNode = head;

  while (currNode.next != null) {
    currNode = currNode.next;
    size += 1;
  }

  var count = 0;
  var newCurrNode = head;
  while(count !== (size - w)) {
    newCurrNode = newCurrNode.next;
    count += 1;
  }
  return k > size ? undefined: newCurrNode;
  
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
