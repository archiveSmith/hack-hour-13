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

// Basic Method
function reverseLinkedList(head) {
  if (typeof head === 'string' || typeof head === 'number' || head === null || head === undefined) return 'Input node for head';

  if (head.next === null) return head;

  let prev = head, curr = head.next, next;
  prev.next = null;

  while (curr.next !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  curr.next = prev;
  return curr;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
