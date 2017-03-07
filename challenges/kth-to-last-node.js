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

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

console.log(kthToLastNode(2,a));

function kthToLastNode(k, head) {
  counter = 0;
  currentNode = head;

//gets length aka counter, of the linked list
while (currentNode.next !== null){
  if (head.next === null){
    head = currentNode;
    counter++;
  } else {
    head.next = currentNode
    currentNode.next = currentNode;
    counter++;
  }
}

//initializes new Index, which is the counter minus k, to find the node
//where the variable will be.
  newIndex = counter - k;
  counter = 0;

//while the reseted counter isn't the index we are looking for, keep going
//through the list, then snap out of it when it reaches that index
  while (counter !== newIndex){
    head.next = currentNode;
    currentNode = currentNode.next;
    counter++;
  }

//return that currentNode's value.
  return currentNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
