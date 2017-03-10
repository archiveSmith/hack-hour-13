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
  //get length of linked list
  let listLength = 0;
  let currentNode = head;
  while (currentNode.next){
    listLength++;
    currentNode = currentNode.next;
  }
  listLength++;
  currentNode = head;
  //if k is great than the length of our list, return invalid input error;
  if (k > listLength) return 'Not a valid input. k > length of LinkedList';

  //loop through list for length - k
  for (let i = 0; i < listLength - k; i++){
    currentNode = currentNode.next;
  }
  return currentNode.value;
}
//
// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');
//
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
//
// console.log(kthToLastNode(6, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
