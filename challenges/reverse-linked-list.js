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
  //Check input type for Error handling
  if (typeof head !== 'object') throw new Error('Invalid input');
  if (!head.hasOwnProperty('value') || !head.hasOwnProperty('next')) throw new Error('Invalid input');

  let trailing = head;
  let middle = trailing.next;
  let lead = middle.next;

  //Case: linked list length 1 or 2
  if (!middle) return trailing;
  else if (!lead) {
    middle.next = trailing;
    trailing.next = null;
    return middle;
  }

  trailing.next = null;
  while (lead) {
    middle.next = trailing;
    trailing = middle;
    middle = lead;
    lead = lead.next;
  }
  middle.next = trailing;
  return middle;
}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
