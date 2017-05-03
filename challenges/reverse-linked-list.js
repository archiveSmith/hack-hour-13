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
    let prev = null; //will sever connection and point to previous node
    let curr = head; //node you will move this.next around in
    let after = null; // node that will become the new head every time.

    while (curr !== null) {
        after = curr.next; //hold onto the next node
        curr.next = prev; //sever existing connection
        prev = curr;
        curr = after;
    }
    //return the reversed
    return prev;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
