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
    // if only 1 node
    if (!head.next) return head;

    var curr = head,
        after = head.next;

    while (curr !== null) {
        curr.next = (curr === head) ? null : head;
        head = curr;
        curr = after;
        if (after) after = after.next;
    }

    return head;    
}

var list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(5);
list1.next.next.next = new Node(7);
list1.next.next.next.next = new Node(8);

function printList(node) {
  var curr = node;
  while (curr) {
    console.log(curr.value);
    curr = curr.next;
  }
}

printList(reverseLinkedList(list1));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
