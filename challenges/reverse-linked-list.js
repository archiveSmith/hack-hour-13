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
  var current = head;
  var previous = null;

  while(current !== null) {
    var temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }

  return previous;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
