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
    let previous = null;
    let storage;

    // this.head = head;

    // while (this.head) {
    //     temp = this.head.next;
    //     this.head.next = previous;
    //     previous
    // }

    while (head) {
        storage = head.next;
        head.next = previous;
        previous = head;
    }
    return previous;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
