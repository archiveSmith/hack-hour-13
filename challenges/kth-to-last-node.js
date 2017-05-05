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
  var countNode = head;
  var initialCount = 1;
  while (countNode.next) {
    initialCount++;
    countNode = countNode.next;
  }
  var currentNode = head;
  var findIndex = initialCount - (k - 1);
  findCount = 1;
  while (currentNode.next) {
    if (findCount === findIndex) return currentNode;
    findCount++;
    currentNode = currentNode.next;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));
// returns 'D' (the value on the second to last node)

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
