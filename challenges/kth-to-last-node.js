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
  let counter = 1;
  let currentNode = head;

  //while next is not null, increase counter
  while (currentNode.next !== null) {
    counter++;
    currentNode = currentNode.next;
  }
  //number of times to loop to find value
  let numbLoop = counter - k;

  //loop numbLoop to find value
  let result = head;
  while (numbLoop > 0) {
    numbLoop--;
    result = result.next;
  }
  //return the value from the node we pinpointed
  return result.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
