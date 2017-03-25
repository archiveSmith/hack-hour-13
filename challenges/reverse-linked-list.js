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
    if (!head) return null;
    let current = head;
    let trailer = head;
    let NodeCount = 1;

    while (current.next) {
        if (nodeCount > 1) trailer = trailer.next;
        current = current.next;
        nodeCount += 1;
    }

    if (nodeCount === 1) return head;
    tailer.next = null;
    current.next = reverseLinkedList(trailer);
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
