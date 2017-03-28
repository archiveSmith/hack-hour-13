/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  let curr = head;
  let prev = null;
  let next = null;
  while(curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;

}

function reverseRecursion(head, prev = null) {
  if (!head) {return null};
  const forward = head.next;
  head.next = prev
}

var list = new Node(3);
list.next = new Node(4);
list.next.next = new Node(5);
//console.log(list); 

console.log( reverseLinkedList(list) )















module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
