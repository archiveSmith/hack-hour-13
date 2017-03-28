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
<<<<<<< HEAD
    let previous = null;
    let storage = null;

    while (head) {
        storage = head.next;
        head.next = previous;
        previous = head;
        head = storage;
    }
    return previous;
=======

>>>>>>> 9218a2b64a874a61b90e5f55f39a8833b555eac1
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
